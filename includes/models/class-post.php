<?php
/**
 ** TheSnug\Models\Post
 ** Version 1.0.0
 **/

namespace TheSnug\Models;
use \TheSnug\ACF as ACF;
use \TheSnug\Models\Term as Term;
use \TheSnug\Models\Theme as Theme;

class Post {

  /**
   * ID
   *
   * @var integer|null
   */
  public $id;

  /**
   * Content Type
   *
   * @var array|null
   */
  public $content_type = null;

  /**
   * Supports
   *
   * @var array
   */
  public $supports = array( 'title', 'revisions', 'editor', 'author', 'excerpt' );

  /**
   * Hide Meta
   *
   * @var array|null
   */
  public $hide_meta = null;

  /**
   * Constructor
   *
   * @since 1.0.0
   */
  function __construct() {
    $this->theme = new Theme();
    $this->acf   = new ACF();
  }

  /**
   * Load
   *
   * @since 1.0.0
   */
  function load() {
    $this->add_hooks();
    $this->register();
  }

  /**
   * Add Hooks
   *
   * @since 1.0.0
   */
  function add_hooks() {
    add_action( 'admin_menu', array( $this, 'action_hide_meta_box' ) );

    $this->custom_hooks();
  }

  /**
   * Add Hooks for Custom Post Types
   *
   * @since 1.0.0
   */
  function custom_hooks() {}

  /**
   * Register
   *
   * @since 1.0.0
   */
  function register() {
    if ( $this->content_type && !empty( $this->content_type ) ) {
      register_post_type( $this->content_type['slug'], array(
        'labels'          => array(
          'name'          => __( $this->content_type['plural'] ),
          'singular_name' => __( $this->content_type['singular'] ),
          'add_new_item'  => __( 'Add New ' . $this->content_type['singular'] ),
          'edit_item'     => __( 'Edit ' . $this->content_type['singular'] ),
          'new_item'      => __( 'New ' . $this->content_type['singular'] ),
          'view_item'     => __( 'View ' . $this->content_type['singular'] ),
          'search_items'  => __( 'Search' . $this->content_type['plural'] ),
        ),
        'menu_icon'       => 'dashicons-' . $this->content_type['icon'],
        'public'          => true,
        'capability_type' => 'post',
        'has_archive'     => false,
        'show_ui'         => true,
        'show_in_menu'    => true,
        'hierarchical'    => false,
        'supports'        => isset( $this->content_type['supports'] ) ? $this->content_type['supports'] : $this->supports,
        'taxonomies'      => $this->content_type['taxonomies'],
        'menu_position'   => $this->content_type['order'],
        'rewrite'         => array( 'with_front' => false ),
      ) );
    }
  }

  /**
   * Hide Meta Boxes
   * @return void
   */
  function action_hide_meta_box() {
    if ( $this->hide_meta && !empty( $this->hide_meta ) ) {
      foreach ( $this->hide_meta as $box ) {
        remove_meta_box( $box['id'], $box['post'], $box['position'] );
      }
    }
  }

  /**
   * Get Post
   *
   * @since 1.0.0
   */
  function get_post( $slug ) {
    if ( !$this->content_type || empty( $this->content_type ) ) {
      return null;
    }

    $post_args = array( 'post_type' => $this->content_type, 'name' => $slug, 'post_status' => 'publish', 'posts_per_page' => 1 );
    $posts     = get_posts( $post_args );

    if ( empty( $posts ) ) {
      return null;
    }

    return $posts[0];
  }

  /**
   * Get the Post: Thumbnail
   *
   * @param string $size
   * @return string|null
   */
  function get_thumbnail( $size = 'large' ) {
    $image_url = null;

    $image_id = get_post_thumbnail_id( $this->id );

    if ( !$image_id ) {
      return $image_url;
    }

    $image_url_array = wp_get_attachment_image_src( $image_id, $size, true );

    if ( has_post_thumbnail( $this->id ) && $image_url_array ) {
      $image_url = $image_url_array[0];
    } else {
      /* @NOTE placeholder support: $image_url = 'path/to/placeholder.png'; */
    }

    return $image_url;
  }

  /**
   * Get the Post: Terms
   *
   * @param string $taxonomy
   * @return array|null
   */
  function get_terms( $wp_post, $taxonomy ) {
    $terms  = get_the_terms( $wp_post, $taxonomy );
    $result = null;

    if ( !$terms || is_wp_error( $terms ) ) {
      return $result;
    }

    $result = array();
    foreach ( $terms as $term ) {
      $model    = new Term( $term );
      $result[] = $model->get();
    }

    return $result;
  }

  /**
   * Get Term
   *
   * @since 1.0.0
   */
  function get_term( $term, $taxonomy ) {
    $object = new Term( $term, $taxonomy );
    return $object->get();
  }

  /**
   * Get Fields
   *
   * @since 1.0.0
   */
  function get_fields( $wp_post ) {
    return $this->acf->get_post_fields( $wp_post->ID );
  }

  /**
   * Get Author
   *
   * @since 1.0.0
   */
  function get_author( $wp_post ) {
    $user = get_user_by( 'id', $wp_post->post_author );

    if ( !$user ) {
      return null;
    }

    return array(
      'name'  => $user->display_name,
      'email' => $user->user_email,
    );
  }

  /**
   * Get Edit Link
   *
   * @since 1.0.0
   */
  function get_edit_link( $id ) {
    $post = get_post( $id );

    if ( !$post ) {
      return;
    }

    if ( 'revision' === $post->post_type ) {
      $action = '';
    } else {
      $action = '&action=edit';
    }

    $post_type_object = get_post_type_object( $post->post_type );
    if ( !$post_type_object ) {
      return;
    }

    if ( $post_type_object->_edit_link ) {
      $link = admin_url( sprintf( $post_type_object->_edit_link . $action, $post->ID ) );
    } else {
      $link = '';
    }

    return $link;
  }

  /**
   * Format Date
   *
   * @since 1.0.0
   */
  function format_date( $date ) {
    return date( 'Y-m-d g:i:s', strtotime( $date ) );
  }

  /**
   * Get
   *
   * @since 1.0.0
   */
  function get( $id ) {
    if ( !$id ) {
      return null;
    }

    $this->id   = $id;
    $this->post = get_post( $this->id );

    $fields = null;
    if ( $this->theme->acf ) {
      $fields = get_fields( $this->id );
    }

    return array(
      'id'      => $this->id,
      'slug'    => $this->post->post_name,
      'title'   => $this->post->post_title,
      'content' => $this->post->post_content ? apply_filters( 'the_content', $this->post->post_content ) : null,
      'excerpt' => $this->post->post_excerpt ? $this->post->post_excerpt : ( $this->post->post_content ? wp_trim_words( $this->post->post_content, 22 ) : null ),
      'feature' => $this->get_thumbnail( 'large' ),
      'fields'  => $fields ? $fields : null,
      'url'     => get_the_permalink( $this->id ),
      'edit'    => $this->get_edit_link( $this->id ),
    );
  }

  /**
   * Render
   *
   * @return void
   */
  function render() {
    echo 'No Output';
  }
}
