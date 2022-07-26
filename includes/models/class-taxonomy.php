<?php
/**
 ** TheSnug\Models\Taxonomy
 ** Version 1.0.0
 **/

namespace TheSnug\Models;
use \TheSnug\Models\Term as Term;

class Taxonomy {

  /**
   * Taxonomy
   *
   * @var array|null
   */
  public $taxonomy = null;

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
   * Register
   *
   * @since 1.0.0
   */
  function register( $taxonomy ) {
    register_taxonomy( $taxonomy['slug'], null, array(
      'labels'            => array(
        'name'              => __( $taxonomy['name'] ),
        'singular_name'     => __( $taxonomy['singular'] ),
        'search_items'      => __( 'Search ' . $taxonomy['name'] ),
        'all_items'         => __( 'All ' . $taxonomy['name'] ),
        'parent_item'       => __( 'Parent ' . $taxonomy['singular'] ),
        'parent_item_colon' => __( 'Parent ' . $taxonomy['singular'] . ':' ),
        'edit_item'         => __( 'Edit ' . $taxonomy['singular'] ),
        'update_item'       => __( 'Update ' . $taxonomy['singular'] ),
        'add_new_item'      => __( 'Add New ' . $taxonomy['singular'] ),
        'new_item_name'     => __( 'New ' . $taxonomy['singular'] . ' Name' ),
        'menu_name'         => __( $taxonomy['name'] ),
        'view_item'         => __( 'View ' . $taxonomy['singular'] ),
      ),
      'hierarchical'      => true,
      'show_ui'           => true,
      'show_admin_column' => true,
      'query_var'         => true,
      'rewrite'           => true,
    ) );
  }

  /**
   * Get Terms
   *
   * @since 1.0.0
   */
  function get_terms( $taxonomy ) {
    $data = null;

    $terms = get_terms( array(
      'taxonomy'   => $taxonomy,
      'hide_empty' => true,
    ) );

    if ( !empty( $terms ) ) {
      $data = array();

      foreach ( $terms as $term ) {
        $object = new Term( $term );
        $data[] = $object->get();
      }
    }

    return $data;
  }

}
