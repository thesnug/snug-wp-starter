<?php
/**
 ** TheSnug\ACF
 ** Version 1.0.0
 **/

namespace TheSnug;
use \TheSnug\Models\Theme as Theme;

class ACF {

  /**
   * Constructor
   *
   * @since 1.0.0
   */
  function __construct() {
    global $wpdb;
    $this->wpdb  = $wpdb;
    $this->theme = new Theme();

    $this->posts_table = $this->wpdb->prefix . 'posts';

    $this->load();
  }

  /**
   * Load
   *
   * @since 1.0.0
   */
  function load() {}

  /**
   * Get Fields
   *
   * @since 1.0.0
   */
  function get_fields( $location ) {
    $groups        = null;
    $group_query   = 'SELECT * FROM ' . $this->posts_table . " WHERE post_type = 'acf-field-group' AND post_content LIKE '%$location%'";
    $group_results = $this->wpdb->get_results( $group_query, ARRAY_A );

    if ( !empty( $group_results ) ) {
      $groups = array();

      foreach ( $group_results as $group ) {
        $groups[$group['post_excerpt']] = array();

        $field_query   = 'SELECT * FROM ' . $this->posts_table . " WHERE post_type = 'acf-field' AND post_parent = '" . $group['ID'] . "'";
        $field_results = $this->wpdb->get_results( $field_query, ARRAY_A );

        if ( !empty( $field_results ) ) {
          foreach ( $field_results as $field ) {
            $groups[$group['post_excerpt']][$field['post_excerpt']] = $field['post_name'];
          }
        }
      }
    }

    return $groups;
  }

  /**
   * Get Post Field
   *
   * @since 1.0.0
   */
  function get_post_fields( $id ) {
    if ( $this->theme->acf ) {
      return get_fields( $id );
    }

    return null;
  }

  /**
   * Get Field
   *
   * @since 1.0.0
   */
  function get_field( $key, $id ) {
    if ( $this->theme->acf ) {
      return get_field( $key, $id );
    }

    return null;
  }

  /**
   * Update Field
   *
   * @since 1.0.0
   */
  function update_field( $key, $value, $id ) {
    if ( $this->theme->acf ) {
      return update_field( $key, $value, $id );
    }

    return null;
  }

  /**
   * Get Key
   *
   * @since 1.0.0
   */
  function get_key( $name, $location ) {
    $groups = $this->get_fields( $location );

    if ( !$groups || empty( $groups ) ) {
      return null;
    }

    foreach ( $groups as $group ) {
      if ( array_key_exists( $name, $group ) ) {
        return $group[$name];
      }
    }

    return null;
  }

}
