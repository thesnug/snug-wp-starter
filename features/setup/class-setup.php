<?php
/**
 ** Snug Setup
 ** Version 1.0.0
 **/
class Snug_Setup {
  /* Version */
  const VERSION        = '1.0.0';
  const VERSION_OPTION = 'snug_setup_version';
  const REVISION       = '0001';

  /* References */
  const TEXT_DOMAIN    = 'snug';
  const PRODUCTION_URL = '';
  const HEADLESS       = false;

  /* Variables */
  /**
   * @var mixed
   */
  private $version = false;

  /**
   * @var mixed
   */
  private static $instance = false;

  /* Menus */
  const NAV_MENUS = array(
    array( 'slug' => 'primary', 'label' => 'Primary Menu' ),
    array( 'slug' => 'footer', 'label' => 'Footer Menu' ),
  );

  /* Sidebars */
  const SIDEBARS = array(
    array( 'slug' => 'sidebar-1', 'label' => 'Sidebar', 'description' => '' ),
  );

  /* Menu Pages */
  const ADMIN_MENU_PAGES = array(
    'sample' => array(
      'slug'        => self::TEXT_DOMAIN . '-sample',
      'label'       => 'Sample Page',
      'icon'        => 'dashicons-warning',
      'caps'        => 'manage_options',
      'description' => 'This is a sample admin page. You should remove it or replace this content.',
      'callback'    => array( 'Snug_Setup', 'output_admin_page' ),
      'order'       => 25,
    ),
  );

  /**
   * Implement singleton
   *
   * @uses self::setup
   * @return self
   */
  public static function instance() {
    if ( !is_a( self::$instance, __CLASS__ ) ) {
      self::$instance = new self;
    }
    return self::$instance;
  }

  /**
   * Clone
   *
   * @since 1.0.0
   */
  private function __clone() {}

  /**
   * Constructor
   *
   * @since 1.0.0
   */
  private function __construct() {
    global $wp_version;

    /* Version Check */
    if ( $version = get_option( self::VERSION_OPTION, false ) ) {
      $this->version = $version;
    } else {
      $this->version = self::VERSION;
      add_option( self::VERSION_OPTION, $this->version );
    }

    /* Theme Variables */
    $this->theme         = wp_get_theme();
    $this->theme_version = $this->theme->get( 'Version' );

    /* Set Environment */
    if ( self::PRODUCTION_URL ) {
      $this->production = true;
    } else {
      $this->production = false;
    }

    /* Actions */
    add_action( 'init', array( $this, 'action_init_check_version' ) );
    add_action( 'after_setup_theme', array( $this, 'action_after_setup_theme' ) );
    add_action( 'widgets_init', array( $this, 'action_widgets_init' ) );
    add_action( 'admin_menu', array( $this, 'action_manage_admin_menu' ), 999 );
    add_action( 'admin_menu', array( $this, 'action_register_menu_pages' ) );
    add_action( 'wp_enqueue_scripts', array( $this, 'action_enqueue_frontend_scripts' ) );
    add_action( 'admin_enqueue_scripts', array( $this, 'action_enqueue_admin_scripts' ) );

    /* SVG Upload Support */
    add_filter( 'wp_check_filetype_and_ext', array( $this, 'filter_check_filetype' ), 10, 4 );
    add_filter( 'upload_mimes', array( $this, 'filter_upload_mimes' ) );
    add_action( 'admin_head', array( $this, 'action_admin_fix_svg' ) );

    /* Hiding Update Notifications */
    add_filter( 'pre_site_transient_update_core', array( $this, 'filter_disable_updates' ) );
    add_filter( 'pre_site_transient_update_plugins', array( $this, 'filter_disable_updates' ) );
    add_filter( 'pre_site_transient_update_themes', array( $this, 'filter_disable_updates' ) );

    /* Removing Dashboard Widgets, Updating Title and Footer */
    add_action( 'wp_dashboard_setup', array( $this, 'action_remove_dashboard_widgets' ), 999 );
    add_action( 'admin_head', array( $this, 'action_hide_dashboard_widget_boxes' ) );
    add_action( 'admin_head', array( $this, 'action_update_dashboard_title' ) );
    add_filter( 'admin_footer_text', array( $this, 'filter_update_dashboard_footer' ) );

    /* Redirecting to dashboard from front-end (useful when headless/API only) */
    if ( self::HEADLESS ) {
      add_action( 'template_redirect', array( $this, 'action_frontend_redirect' ) );
    }

  }

  /**
   * Version Check
   *
   * @since 1.0.0
   */
  function action_init_check_version() {
    /* Check if the version has changed and if so perform the necessary actions */
    if ( !isset( $this->version ) || $this->version < self::VERSION ) {
      /* Do version upgrade tasks here */
      update_option( self::VERSION_OPTION, self::VERSION );
    }
  }

  /**
   * After Theme Setup
   *
   * @since 1.0.0
   */
  function action_after_setup_theme() {
    self::add_translation_support();
    self::add_theme_support();
    self::register_nav_menus();
    self::add_options_page();
  }

  /**
   * Setup Sidebars
   *
   * @since 1.0.0
   */
  function action_widgets_init() {
    if ( !empty( self::SIDEBARS ) ) {
      foreach ( self::SIDEBARS as $sidebar ) {
        register_sidebar( array(
          'name'          => esc_html__( $sidebar['label'], self::TEXT_DOMAIN ),
          'id'            => $sidebar['slug'],
          'description'   => $sidebar['description'],
          'before_widget' => '<aside id="%1$s" class="widget %2$s">',
          'after_widget'  => '</aside>',
          'before_title'  => '<h2 class="widget-title">',
          'after_title'   => '</h2>',
        ) );
      }
    }
  }

  /**
   * Managing the Admin Menu Items
   *
   * @since 1.0.0
   */
  function action_manage_admin_menu() {
    global $submenu;

    /* Posts */
    remove_menu_page( 'edit.php' );

    /* Comments */
    remove_menu_page( 'edit-comments.php' );

    /* Appearance */
    remove_submenu_page( 'themes.php', 'themes.php' );
    remove_submenu_page( 'themes.php', 'theme-editor.php' );
    remove_submenu_page( 'themes.php', 'widgets.php' );
    remove_submenu_page( 'themes.php', 'customize.php' );

    /* Plugins */
    remove_submenu_page( 'plugins.php', 'plugin-editor.php' );

    /* Tools */
    remove_submenu_page( 'tools.php', 'tools.php' );
    remove_submenu_page( 'tools.php', 'import.php' );
    remove_submenu_page( 'tools.php', 'export.php' );
    remove_submenu_page( 'tools.php', 'site-health.php' );
    remove_submenu_page( 'tools.php', 'export-personal-data.php' );
    remove_submenu_page( 'tools.php', 'erase-personal-data.php' );

    /* Settings */
    remove_submenu_page( 'options-general.php', 'options-discussion.php' );
    remove_submenu_page( 'options-general.php', 'options-media.php' );
    remove_submenu_page( 'options-general.php', 'options-privacy.php' );

    /* Customizer */
    if ( isset( $submenu['themes.php'] ) ) {
      foreach ( $submenu['themes.php'] as $index => $item ) {
        if ( !empty( $item ) ) {
          if ( in_array( 'customize', $item ) ) {
            unset( $submenu['themes.php'][$index] );
          }
        }
      }
    }
  }

  /**
   * Register Additional Menu Pages
   *
   * @since 1.0.0
   */
  function action_register_menu_pages() {
    if ( !empty( self::ADMIN_MENU_PAGES ) ) {
      self::add_menu_separator( self::ADMIN_MENU_PAGES[array_key_first( self::ADMIN_MENU_PAGES )]['order'] - 1 );

      foreach ( self::ADMIN_MENU_PAGES as $page ) {
        add_menu_page( $page['label'], $page['label'], $page['caps'], $page['slug'], $page['callback'], $page['icon'], $page['order'] );
      }
    }
  }

  /**
   * Including Front-End Scripts and Styles
   *
   * @since 1.0.0
   */
  function action_enqueue_frontend_scripts() {
    $script_version = $this->production ? $this->theme_version : time();

    wp_register_style( 'stylesheet', get_stylesheet_uri(), array(), $script_version );
    wp_enqueue_style( 'stylesheet' );

    wp_register_style( self::TEXT_DOMAIN . '-css', get_template_directory_uri() . '/dist/application.css', array(), $script_version );
    wp_enqueue_style( self::TEXT_DOMAIN . '-css' );

    wp_register_script( 'polyfill', '//cdn.polyfill.io/v2/polyfill.min.js', array(), $script_version, true );
    wp_enqueue_script( 'polyfill' );

    wp_register_script( self::TEXT_DOMAIN . '-js', get_template_directory_uri() . '/dist/application.js', array( 'jquery' ), $script_version, true );
    wp_enqueue_script( self::TEXT_DOMAIN . '-js' );
  }

  /**
   * Including Admin Scripts and Styles
   *
   * @since 1.0.0
   */
  function action_enqueue_admin_scripts() {
    wp_register_style( 'admin-styles', get_template_directory_uri() . '/admin.css', array(), $this->theme_version );
    wp_enqueue_style( 'admin-style' );
  }

  /**
   * Checking Uploaded File Types
   *
   * @since 1.0.0
   */
  function filter_check_filetype( $data, $file, $filename, $mimes ) {
    global $wp_version;

    if ( $wp_version == '4.7' || ( (float) $wp_version < 4.7 ) ) {
      return $data;
    }

    $filetype = wp_check_filetype( $filename, $mimes );

    return array( 'ext' => $filetype['ext'], 'type' => $filetype['type'], 'proper_filename' => $data['proper_filename'] );
  }

  /**
   * Filter Uploaded File Types
   *
   * @since 1.0.0
   */
  function filter_upload_mimes( $mimes ) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
  }

  /**
   * Fixing SVG Output in Dashboard
   *
   * @since 1.0.0
   */
  function action_admin_fix_svg() {
    echo '<style> .attachment-266×266, .thumbnail img { width: 100% !important; height: auto !important; } </style>';
  }

  /**
   * Disabling WordPress Update Notifications
   *
   * @since 1.0.0
   */
  function filter_disable_updates() {
    global $wp_version;
    return (object) array( 'last_checked' => time(), 'version_checked' => $wp_version );
  }

  /**
   * Removing Dashboard Widgets
   *
   * @since 1.0.0
   */
  function action_remove_dashboard_widgets() {
    global $wp_meta_boxes;
    $wp_meta_boxes['dashboard'] = array();
  }

  /**
   * Hiding Dashboard Widget Boxes
   *
   * @since 1.0.0
   */
  function action_hide_dashboard_widget_boxes() {
    echo '<style>#dashboard-widgets-wrap {display:none}</style>';
  }

  /**
   * Update Dashboard Title
   *
   * @since 1.0.0
   */
  function action_update_dashboard_title() {
    if ( $GLOBALS['title'] !== 'Dashboard' ) {
      return;
    }

    $GLOBALS['title'] = $this->theme->get( 'Name' );
  }

  /**
   * Update Dashboard Footer
   *
   * @since 1.0.0
   */
  function filter_update_dashboard_footer() {
    echo '<em>' . $this->theme->get( 'Name' ) . ' was built by <a href="' . $this->theme->get( 'AuthorURI' ) . '" target="_blank">' . $this->theme->get( 'Author' ) . '</a></em>';
  }

  /**
   * Redirect to dashboard from front-end
   *
   * @since 1.0.0
   */
  function action_frontend_redirect() {
    wp_redirect( admin_url() );
    exit;
  }

  /**
   * Adding Translation Support
   *
   * @since 1.0.0
   */
  static function add_translation_support() {
    /* Make theme available for translation. */
    load_theme_textdomain( self::TEXT_DOMAIN, get_template_directory() . '/languages' );
  }

  /**
   * Adding Theme Support
   *
   * @since 1.0.0
   */
  static function add_theme_support() {
    /* Add default posts and comments RSS feed links to head. */
    add_theme_support( 'automatic-feed-links' );

    /* Let WordPress manage the document title. */
    add_theme_support( 'title-tag' );

    /* Enable support for Post Thumbnails on posts and pages. */
    add_theme_support( 'post-thumbnails' );

    /* Use HTML5 markup. */
    add_theme_support( 'html5', array(
      'search-form',
      'comment-form',
      'comment-list',
      'gallery',
      'caption',
    ) );

    /* Enable support for Post Formats. */
    add_theme_support( 'post-formats', array(
      'aside',
      'image',
      'video',
      'quote',
      'link',
    ) );
  }

  /**
   * Setup Menus
   *
   * @since 1.0.0
   */
  static function register_nav_menus() {
    if ( !empty( self::NAV_MENUS ) ) {
      $menus = array();

      foreach ( self::NAV_MENUS as $menu ) {
        $menus[$menu['slug']] = esc_html__( $menu['label'], self::TEXT_DOMAIN );
      }

      register_nav_menus( $menus );
    }
  }

  /**
   * Adding ACF Options Page
   *
   * @since 1.0.0
   */
  static function add_options_page() {
    if ( function_exists( 'acf_add_options_page' ) ) {
      acf_add_options_page( array(
        'page_title' => 'Site General Settings',
        'menu_title' => 'Site Settings',
        'menu_slug'  => 'site-general-settings',
        'capability' => 'edit_posts',
        'redirect'   => false,
      ) );
    }
  }

  /**
   * Add Menu Separator
   *
   * @since 1.0.0
   */
  static function add_menu_separator( $position ) {
    global $menu;
    return $menu[$position] = array( '', 'read', "separator-$position", '', 'wp-menu-separator' );
  }

  /**
   * Output Admin Page
   *
   * @since 1.0.0
   */
  static function output_admin_page() {
    ?>
      <div id="<?php echo self::TEXT_DOMAIN; ?>" class="wrap">
        <h1 class="wp-heading-inline"><?php echo self::ADMIN_MENU_PAGES['sample']['label']; ?></h1>
        <hr class="wp-header-end">
        <p><?php echo self::ADMIN_MENU_PAGES['sample']['description']; ?></p>
      </div>
    <?php
}

} // Class
Snug_Setup::instance();
