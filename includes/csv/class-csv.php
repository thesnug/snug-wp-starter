<?php
/**
 ** TheSnug\CSV
 ** Version 1.0.0
 **/

namespace TheSnug;

class CSV {

  /**
   * Constructor
   *
   * @since 1.0.0
   */
  function __construct() {}

  /**
   * Import: CSV
   *
   * @since 1.0.0
   */
  function import_csv( $handle ) {
    if ( !$handle ) {
      return array( 'success' => false, 'message' => 'No CSV provided.' );
    }

    $csv = array();

    while (  ( $data = fgetcsv( $handle ) ) !== FALSE ) {
      $csv[] = $data;
    }

    fclose( $handle );

    if ( empty( $csv ) ) {
      return array( 'success' => false, 'message' => 'No CSV data to import.' );
    }

    return array( 'success' => true, 'data' => $csv );
  }

  /**
   * Import: CSV URL
   *
   * @since 1.0.0
   */
  function import_url( $url ) {
    $response = wp_remote_get( $url );

    if ( !is_array( $response ) || is_wp_error( $response ) || !isset( $response['body'] ) ) {
      return array( 'success' => false, 'message' => 'CSV could not be fetched.' );
    }

    $handle = fopen( 'php://temp', 'r+' );
    fputs( $handle, $response['body'] );
    rewind( $handle );

    return $this->import_csv( $handle );
  }

  /**
   * Import: CSV File
   *
   * @since 1.0.0
   */
  function import_file( $file ) {
    if ( !$file ) {
      return array( 'success' => false, 'message' => 'CSV was not provided.' );
    }

    $handle = fopen( $file, 'r+' );

    return $this->import_csv( $handle );
  }
}
