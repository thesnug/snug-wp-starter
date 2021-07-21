<?php
/**
 ** Snug Taxonomies
 ** Version 1.0.0
 **/
class Snug_Taxonomies {

  // Version
  const VERSION            = '1.0.0';
  const VERSION_OPTION     = 'snug_taxonomies_version';
  const REVISION           = '0001';

  /* Taxonomies */
  const TAXONOMIES = array(
    'sample' => array( 'name' => 'Samples', 'singular' => 'Sample' )
  );

  private $version = false;

  private static $instance = false;

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
   * Clone
   *
   * @since 1.0.0
   */
  private function __clone() { }

  /**
   * Constructor
   *
   * @since 1.0.0
   */
  private function __construct() {
    global $wp_version;

    /* Version Check */
    if( $version = get_option( self::VERSION_OPTION, false ) ) {
      $this->version = $version;
    } else {
      $this->version = self::VERSION;
      add_option( self::VERSION_OPTION, $this->version );
    }

    /* Initilization */
    add_action( 'init', array( $this, 'action_init_check_version' ) );
    add_action( 'init', array( $this, 'action_init_register_taxonomies' ) );
  }

  /**
   * Version Check
   *
   * @since 1.0.0
   */
  function action_init_check_version() {
    /* Check if the version has changed and if so perform the necessary actions */
    if ( ! isset( $this->version ) || $this->version <  self::VERSION ) {
      /* Do version upgrade tasks here */
      update_option( self::VERSION_OPTION, self::VERSION );
    }
  }

  /**
   * Register the Taxonomies
   *
   * @uses add_action()
   * @return null
   */
  public static function action_init_register_taxonomies() {
    if( !empty( self::TAXONOMIES ) ) {
      foreach( self::TAXONOMIES as $slug => $taxonomy ) {
        register_taxonomy( $slug, null, array(
          'labels' => array(
            'name'              => __( $taxonomy['name'] ),
            'singular_name'     => __( $taxonomy['singular'] ),
            'search_items'      => __( 'Search ' . $taxonomy['name'] ),
            'all_items'         => __( 'All ' . $taxonomy['name'] ),
            'parent_item'       => __( 'Parent ' . $taxonomy['singular'] ),
            'parent_item_colon' => __( 'Parent ' . $taxonomy['singular'] . ':' ),
            'edit_item'         => __( 'Edit ' . $taxonomy['singular'] ),
            'update_item'       => __( 'Update ' . $taxonomy['singular'] ),
            'add_new_item'      => __( 'Add New ' . $taxonomy['singular'] ),
            'new_item_name'     => __( 'New ' . $taxonomy['singular']. ' Name' ),
            'menu_name'         => __( $taxonomy['name'] ),
            'view_item'         => __( 'View ' . $taxonomy['singular'] )
          ),
          'hierarchical'      => true,
          'show_ui'           => true,
          'show_admin_column' => true,
          'query_var'         => true,
          'rewrite'           => true
        ));
      }
    }
  }

} // Class
Snug_Taxonomies::instance();
