<?php
/**
 ** TheSnug\Endpoints
 ** Version 1.0.0
 **/

namespace TheSnug;
use \TheSnug\ACF as ACF;
use \TheSnug\Models\Settings as Settings;

class Endpoints {

  /**
   * @var string
   */
  private $namespace = 'api';

  /**
   * @var string
   */
  private $version = '1.0';

  /**
   * Constructor
   *
   * @since 1.0.0
   */
  function __construct() {
    $this->load();
    $this->acf = class_exists( 'ACF' ) ? new ACF() : null;

    $this->api_key = $this->acf ? $this->acf->get_field( 'api_key', 'options' ) : '';

    add_action( 'rest_api_init', array( $this, 'register' ) );
  }

  /**
   * Load
   *
   * @since 1.0.0
   */
  function load() {}

  /**
   * Register
   *
   * @since 1.0.0
   */
  function register() {
    register_rest_route( $this->namespace . '/v' . $this->version, '/', array(
      'methods'  => \WP_REST_Server::READABLE,
      'callback' => function ( $request ) {
        return wp_send_json_success( 'API Root', 200 );
      },
    ) );

    /* Settings Endpoints */
    register_rest_route( $this->namespace . '/v' . $this->version, '/settings', array(
      'methods'             => \WP_REST_Server::READABLE,
      'callback'            => function ( $request ) {
        $settings = new Settings();
        return wp_send_json_success( $settings->get(), 200 );
      },
      'permission_callback' => array( $this, 'permitted' ),
    ) );
  }

  /**
   * Permission Callback
   *
   * @since 1.0.0
   */
  function permitted( $request ) {
    if ( !$this->api_key ) {
      return false;
    }

    $auth_header = $request->get_header( 'Authorization' );
    if ( !$auth_header ) {
      return false;
    }

    if ( 'Bearer ' . $this->api_key !== $auth_header ) {
      return false;
    }

    return true;
  }
}
