<?php
/**
 ** Snug Loader
 ** Version 1.0.0
 **/
class Snug_Loader {

  /* Version */
  const VERSION                     = '1.0.0';
  const VERSION_OPTION              = 'snug_loader_version';
  const REVISION                    = '20161023';
  const TEXT_DOMAIN                 = 'snug';

  protected static $current_version = false;
  private static $instance          = false;

  public $admin_notices             = array();
  public $plugin_dependencies       = array();

  /**
   * Implement singleton
   *
   * @uses self::setup
   * @return self
   */
  public static function instance() {
    if ( ! is_a( self::$instance, __CLASS__ ) ) {
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
    global $wp_version;

    /* Version Check */
    if( $version = get_option( self::VERSION_OPTION, false ) ) {
      self::$current_version = $version;
    } else {
      self::$current_version = self::VERSION;
      add_option( self::VERSION_OPTION, self::$current_version );
    }

    /* Load Features */
    self::load_features();

    /* Theme Activation */
    add_action( 'after_switch_theme', array( $this, 'activate' ) );

    /* Perform updates if necessary */
    add_action( 'init', array( $this, 'action_init_check_version' ) );
  }

  /**
   * Clone
   *
   * @since 1.0.0
   */
  private function __clone() { }

  /**
   * [load_features description]
   * @return [type] [description]
   */
  private function load_features() {

    /* Utilities/Helpers */
    require get_template_directory() . '/features/utilities/class-utilities.php';

    /* Theme Setup */
    require get_template_directory() . '/features/setup/class-setup.php';

    /* Taxonomies (uncomment if using/creating custom taxonomies) */
    // require get_template_directory() . '/features/taxonomies/class-taxonomies.php';

  }

  /**
   * On plugin/theme activation
   *
   * @uses flush_rewrite_rules()
   * @since 1.0.0
   * @return null
   */
  public function activate() {
    flush_rewrite_rules();
  }

  /**
   * On plugin deactivation
   *
   * @uses flush_rewrite_rules()
   * @since 1.0.0
   * @return null
   */
  public function deactivate() {
    flush_rewrite_rules();
  }

  /**
   * Version Check
   *
   *
   *
   * @since 1.0.0
   */
  public function action_init_check_version() {
    // Check if the version has changed and if so perform the necessary actions
    if ( ! isset( self::$version ) || self::$version < self::VERSION ) {

      // Perform updates if necessary
      // e.g. if( '2.0.0' > $this->version ) {
      //  do_the_things();
      // }

      // Update the version information in the database
      update_option( self::VERSION_OPTION, self::VERSION );
    }
  }

  /**
   * Display the admin notices for missing dependencies
   *
   * [action_admin_notices description]
   * @return [type] [description]
   */
  public function action_admin_notices() {
    if( 0 < count( $this->admin_notices ) ) {
      echo '<div class="error">';
      foreach( $this->admin_notices as $notice ) {
        echo "<p>$notice</p>";
      }
      echo '</div>';
    }
  }


} // Class
Snug_Loader::instance();

/* On Theme Activation */
register_activation_hook( __FILE__, array( 'Snug_Loader', 'activate' ) );

/* On Theme DeActivation */
register_deactivation_hook( __FILE__, array( 'Snug_Loader', 'deactivate' ) );
