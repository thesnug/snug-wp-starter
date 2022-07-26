<?php
/**
 ** TheSnug\Logger
 ** Version 1.0.0
 **/

namespace TheSnug;

class Logger {

  /**
   * Constructor
   *
   * @since 1.0.0
   */
  function __construct() {
    $this->load();
  }

  /**
   * Load
   *
   * @since 1.0.0
   */
  function load() {}

  /**
   * Sentry
   *
   * @since 1.0.0
   */
  function sentry( $level, $message, $contexts = null, $tags = null, $user = null ) {
    \Sentry\configureScope( function ( \Sentry\State\Scope$scope ) use ( $level, $message, $contexts, $tags, $user ): void {
      $scope->setLevel( $level );

      if ( $contexts && !empty( $contexts ) ) {
        foreach ( $contexts as $label => $value ) {
          $scope->setContext( $label, $value );
        }
      }

      if ( $tags && !empty( $tags ) ) {
        foreach ( $tags as $label => $value ) {
          $scope->setTag( $label, $value );
        }
      }

      if ( !$user ) {
        $wp_user = wp_get_current_user();
        $user    = $wp_user && $wp_user->ID !== 0 ? array( 'id' => $wp_user->ID, 'email' => $wp_user->user_email ) : null;
      }

      if ( $user ) {
        $scope->setUser( $user );
      }
    } );
  }

  /**
   * Sentry: Capture Fatal
   *
   * @since 1.0.0
   */
  function fatal( $message, $contexts = null, $tags = null, $user = null ) {
    $this->sentry( \Sentry\Severity::fatal(), $message, $contexts, $tags, $user );
    $exception = new \Exception( $message );
    \Sentry\captureException( $exception );
  }

  /**
   * Sentry: Capture Error
   *
   * @since 1.0.0
   */
  function error( $message, $contexts = null, $tags = null, $user = null ) {
    $this->sentry( \Sentry\Severity::error(), $message, $contexts, $tags, $user );
    $exception = new \Exception( $message );
    \Sentry\captureException( $exception );
  }

  /**
   * Sentry: Capture Warning
   *
   * @since 1.0.0
   */
  function warning( $message, $contexts = null, $tags = null, $user = null ) {
    $this->sentry( \Sentry\Severity::warning(), $message, $contexts, $tags, $user );
    $exception = new \Exception( $message );
    \Sentry\captureException( $exception );
  }

  /**
   * Sentry: Capture Info
   *
   * @since 1.0.0
   */
  function info( $message, $contexts = null, $tags = null, $user = null ) {
    $this->sentry( \Sentry\Severity::info(), $message, $contexts, $tags, $user );
    \Sentry\captureMessage( $message );
  }

  /**
   * Sentry: Capture Debug
   *
   * @since 1.0.0
   */
  function debug( $message, $contexts = null, $tags = null, $user = null ) {
    $this->sentry( \Sentry\Severity::debug(), $message, $contexts, $tags, $user );
    \Sentry\captureMessage( $message );
  }
}
