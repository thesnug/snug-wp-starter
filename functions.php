<?php
/**
 ** TheSnug
 ** Version 1.0.0
 **/

$composer_autoloader = get_template_directory() . '/vendor/autoload.php';
if ( file_exists( $composer_autoloader ) ) {
  require_once $composer_autoloader;
}

use \TheSnug\ACF as ACF;
use \TheSnug\Hooks as Hooks;
use \TheSnug\Logger as Logger;
use \TheSnug\Models\Theme as Theme;
use \TheSnug\Endpoints as Endpoints;
use \TheSnug\Models\Settings as Settings;
use \TheSnug\Models\Taxonomy as Taxonomy;

class TheSnug {

  /**
   * @var mixed
   */
  private static $instance = false;

  /**
   * Environment
   *
   * @var string|null
   */
  private $environment = 'local';

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
   * Constructor
   *
   * @since 1.0.0
   */
  private function __construct() {
    $this->load();

    $this->logger = new Logger();
    $this->theme  = new Theme();

    $this->initialize();
    $this->register_hooks();
  }

  /**
   * Load
   *
   * @since 1.0.0
   */
  private function load() {
    spl_autoload_register( function ( $class_name ) {
      if ( false !== strpos( $class_name, 'TheSnug' ) ) {
        $explode = explode( '\\', $class_name );

        if ( $explode && count( $explode ) === 2 ) {
          $class = $explode[1];

          require_once get_template_directory() . '/includes/' . strtolower( $class ) . '/class-' . strtolower( $class ) . '.php';
        }

        if ( $explode && count( $explode ) === 3 ) {
          $directory = $explode[1];
          $class     = $explode[2];

          require_once get_template_directory() . '/includes/' . strtolower( $directory ) . '/class-' . strtolower( $class ) . '.php';
        }
      }
    } );
  }

  /**
   * Initialize
   *
   * @since 1.0.0
   */
  private function initialize() {
    $dotenv = \Dotenv\Dotenv::createImmutable( __DIR__ );
    $dotenv->load();

    $this->acf          = new ACF();
    $this->integrations = $this->acf->get_field( 'integrations', 'options' );

    add_theme_support( 'post-thumbnails' );

    register_nav_menus( array(
      'main'   => esc_html__( 'Main Menu', $this->theme->domain ),
      'footer' => esc_html__( 'Footer Menu', $this->theme->domain ),
      'legal'  => esc_html__( 'Legal Menu', $this->theme->domain ),
    ) );

    if ( $this->theme->acf ) {
      acf_add_options_page( array(
        'page_title' => 'Site General Settings',
        'menu_title' => 'Site Settings',
        'menu_slug'  => 'site-general-settings',
        'capability' => 'edit_posts',
        'redirect'   => false,
      ) );
    }

    if ( isset( $this->integrations['sentry'] ) ) {
      \Sentry\init( array(
        'dsn'         => $this->integrations['sentry'],
        'environment' => $_ENV['ENV'] ?? 'unknown',
        'release'     => $_ENV['RELEASE'] ?? exec( 'git rev-parse HEAD' ),
      ) );
    }

    new Logger();
    new Endpoints();
    new Settings();
    new Hooks();
  }

  /**
   * Register Hooks
   *
   * @return void
   */
  function register_hooks() {
    add_action( 'init', array( $this, 'register_taxonomies' ) );
    add_action( 'init', array( $this, 'register_content_types' ) );
    add_action( 'wp_enqueue_scripts', array( $this, 'register_scripts' ) );
    add_action( 'admin_menu', array( $this, 'manage_admin_menu' ), 999 );
  }

  /**
   * Register Taxonomies
   *
   * @since 1.0.0
   */
  function register_taxonomies() {
    $taxonomy = new Taxonomy();
    /* Example: $taxonomy->register( array( 'slug' => 'type', 'name' => 'Types', 'singular' => 'Type' ) ); */
  }

  /**
   * Register Content Types
   *
   * @since 1.0.0
   */
  function register_content_types() {}

  /**
   * Managing the Admin Menu Items
   *
   * @since 1.0.0
   */
  function manage_admin_menu() {
    /* Posts */
    remove_menu_page( 'edit.php' );

    /* Comments */
    remove_menu_page( 'edit-comments.php' );
  }

  /**
   * Including Front-End Scripts and Styles
   *
   * @since 1.0.0
   */
  function register_scripts() {
    $script_version = $_ENV['ENV'] === 'production' ? $this->theme->version : time();

    wp_register_style( 'stylesheet', get_stylesheet_uri(), array(), $script_version );
    wp_enqueue_style( 'stylesheet' );

    wp_register_style( $this->theme->domain . '-css', get_template_directory_uri() . '/dist/application.css', array(), $script_version );
    wp_enqueue_style( $this->theme->domain . '-css' );

    wp_register_script( 'polyfill', '//cdn.polyfill.io/v2/polyfill.min.js', array(), $script_version, true );
    wp_enqueue_script( 'polyfill' );

    wp_register_script( $this->theme->domain . '-js', get_template_directory_uri() . '/dist/application.js', array( 'jquery' ), $script_version, true );
    wp_enqueue_script( $this->theme->domain . '-js' );
  }
}

/* Initialize the Class */
TheSnug::instance();
