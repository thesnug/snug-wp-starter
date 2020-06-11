<?php
/**
 * Snug functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Snug
 */

if ( ! function_exists( 'snug_setup' ) ) {
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function snug_setup() {
	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on Snug, use a find and replace
	 * to change 'snug' to the name of your theme in all the template files.
	 */
	load_theme_textdomain( 'snug', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'primary' => esc_html__( 'Primary Menu', 'snug' ),
	) );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );

	/*
	 * Enable support for Post Formats.
	 * See https://developer.wordpress.org/themes/functionality/post-formats/
	 */
	add_theme_support( 'post-formats', array(
		'aside',
		'image',
		'video',
		'quote',
		'link',
	) );

	// Set up the WordPress core custom background feature.
	add_theme_support( 'custom-background', apply_filters( 'snug_custom_background_args', array(
		'default-color' => 'ffffff',
		'default-image' => '',
	) ) );

	/*
	 * Set up ACF options pages
	 */
	if( function_exists('acf_add_options_page') ) {
		acf_add_options_page(array(
			'page_title' 	=> 'Snug General Settings',
			'menu_title'	=> 'Snug Settings',
			'menu_slug' 	=> 'theme-general-settings',
			'capability'	=> 'edit_posts',
			'redirect'		=> false
		));
	}


} // snug_setup

} // if snug_setup exists
add_action( 'after_setup_theme', 'snug_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function snug_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'snug_content_width', 640 );
}
add_action( 'after_setup_theme', 'snug_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function snug_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'snug' ),
		'id'            => 'sidebar-1',
		'description'   => '',
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'snug_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function snug_scripts() {
	$version = time(); // cache buster for development

	wp_enqueue_style( 'snug-style', get_stylesheet_uri() );

	wp_register_style( 'font-lato', '//fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic' );
	wp_enqueue_style( 'font-lato' );

	wp_register_script( 'polyfill', '//cdn.polyfill.io/v2/polyfill.min.js', array(), $version, true );
	wp_enqueue_script( 'polyfill' );

	wp_register_style( 'bundle-css', get_template_directory_uri() . '/dist/bundle.css', array(), $version );
	wp_enqueue_style( 'bundle-css' );

	wp_register_script( 'bundle-js', get_template_directory_uri() . '/dist/bundle.js', array( 'jquery' ), $version, true );
	wp_enqueue_script( 'bundle-js' );

	/* including a typekit */
	//wp_enqueue_script( 'snug_typekit', '//use.typekit.net/[typekit-id].js');

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}

}
add_action( 'wp_enqueue_scripts', 'snug_scripts' );


/**
 * Enqueue TypeKit JS.
 */
//add_action( 'wp_head', 'snug_typekit_inline' );
function snug_typekit_inline() {
	if ( wp_script_is( 'snug_typekit', 'done' ) ) { ?>
		<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
	<?php }
}



/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom Features for this theme.
 */
require get_template_directory() . '/features/loader.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/inc/jetpack.php';
