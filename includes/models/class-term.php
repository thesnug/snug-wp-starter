<?php
/**
 ** TheSnug\Models\Term
 ** Version 1.0.0
 **/

namespace TheSnug\Models;

class Term {

  /**
   * Taxonomy
   *
   * @var string
   */
  public $taxonomy;

  /**
   * Term
   *
   * @var object
   */
  public $term;

  /**
   * ID
   *
   * @var int|null
   */
  public $id = null;

  /**
   * Slug
   *
   * @var string|null
   */
  public $slug = null;

  /**
   * Name
   *
   * @var string|null
   */
  public $name = null;

  /**
   * Constructor
   *
   * @since 1.0.0
   */
  function __construct( $term, $taxonomy = null ) {
    $result = $this->initialize( $term, $taxonomy );

    $this->term     = $result ? $result['term'] : null;
    $this->taxonomy = $result ? $result['taxonomy'] : null;
  }

  /**
   * Initialize
   *
   * @since 1.0.0
   */
  function initialize( $term, $taxonomy = null ) {
    try {
      if ( !$term ) {
        throw new \Exception( 'You must provide a term value.' );
      }

      $type = gettype( $term );

      if ( $type !== 'integer' && $type !== 'string' && $type !== 'object' ) {
        throw new \Exception( 'You must provide a term value as an integer, string or object.' );
      }

      if ( !$taxonomy && $type !== 'object' ) {
        throw new \Exception( 'You must provide a taxonomy value.' );
      }

      $object = null;

      if ( $type === 'integer' ) {
        $object = get_term_by( 'id', $term, $taxonomy );
      } else if ( $type === 'string' ) {
        $object = get_term_by( 'slug', $term, $taxonomy );
      } else if ( $type === 'object' ) {
        $object = $term;
      }

      if ( !$object ) {
        throw new \Exception( 'This term does not exist.' );
      }

      return array( 'term' => $object, 'taxonomy' => $taxonomy );

    } catch ( \Exception$e ) {
      error_log( print_r( $e->getMessage(), true ) );
    }
  }

  /**
   * Render
   *
   * @since 1.0.0
   */
  function render( $term ) {
    return array(
      'id'   => $term->term_id,
      'slug' => $term->slug,
      'name' => html_entity_decode( $term->name ),
    );
  }

  /**
   * Get
   *
   * @since 1.0.0
   */
  function get() {
    if ( !$this->term ) {
      return null;
    }

    $object = $this->render( $this->term );

    if ( !$object ) {
      return null;
    }

    if ( $this->term->parent ) {
      $parent           = $this->initialize( $this->term->parent, $this->term->taxonomy );
      $object['parent'] = $this->render( $parent['term'] );
    }

    return $object;
  }

}
