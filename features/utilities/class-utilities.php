<?php
/**
 ** Snug Utilities
 ** Version 1.0.0
 **/
class Snug_Utilities {

  // Version
  const VERSION            = '1.0.0';
  const VERSION_OPTION     = 'snug_utilities_version';
  const REVISION           = '0001';

  private $version         = false;

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
    // Version Check
    if( $version = get_option( self::VERSION_OPTION, false ) ) {
      $this->version = $version;
    } else {
      $this->version = self::VERSION;
      add_option( self::VERSION_OPTION, $this->version );
    }

    add_filter( 'excerpt_more', array( $this, 'filter_excerpt_more' ) );
    add_filter( 'excerpt_length', array( $this, 'filter_excerpt_length' ) );
    add_action( 'edit_category', array( $this, 'category_transient_flusher' ) );
    add_action( 'save_post', array( $this, 'category_transient_flusher' ) );
    add_filter( 'body_class', array( $this, 'body_classes' ) );
  }


  /**
   * Version Check
   *
   * @since 1.0.0
   */
  function action_init_check_version() {
    // Check if the version has changed and if so perform the necessary actions
    if ( ! isset( $this->version ) || $this->version < self::VERSION ) {
      // Do version upgrade tasks here
      update_option( self::VERSION_OPTION, self::VERSION );
    }
  }

  /**
   * Adds custom classes to the array of body classes.
   *
   * @since 1.0.0
   */
  function body_classes( $classes ) {
  	// Adds a class of group-blog to blogs with more than 1 published author.
  	if ( is_multi_author() ) {
  		$classes[] = 'group-blog';
  	}

  	return $classes;
  }

  /**
   * Returns true if a blog has more than 1 category.
   *
   * @return bool
   */
  public static function categorized_blog() {
  	if ( false === ( $all_the_cool_cats = get_transient( 'snug_categories' ) ) ) {
  		// Create an array of all the categories that are attached to posts.
  		$all_the_cool_cats = get_categories( array(
  			'fields'     => 'ids',
  			'hide_empty' => 1,

  			// We only need to know if there is more than one category.
  			'number'     => 2,
  		) );

  		// Count the number of categories that are attached to the posts.
  		$all_the_cool_cats = count( $all_the_cool_cats );

  		set_transient( 'snug_categories', $all_the_cool_cats );
  	}

  	if ( $all_the_cool_cats > 1 ) {
  		// This blog has more than 1 category so self::categorized_blog should return true.
  		return true;
  	} else {
  		// This blog has only 1 category so self::categorized_blog should return false.
  		return false;
  	}
  }

  /**
   * Prints HTML with meta information for the current post-date/time and author.
   *
   * @return html
   */
  public static function posted_on() {
  	$time_string = '<time class="entry-date published updated" datetime="%1$s">%2$s</time>';

  	$time_string = sprintf( $time_string,
  		esc_attr( get_the_date( 'c' ) ),
  		esc_html( get_the_date() ),
  		esc_attr( get_the_modified_date( 'c' ) ),
  		esc_html( get_the_modified_date() )
  	);

  	$posted_on = sprintf(
  		esc_html_x( 'Posted on %s', 'post date', 'snug' ),
  		'<a href="' . esc_url( get_permalink() ) . '" rel="bookmark">' . $time_string . '</a>'
  	);

  	$byline = sprintf(
  		esc_html_x( 'by %s', 'post author', 'snug' ),
  		'<span class="author vcard"><a class="url fn n" href="' . esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ) . '">' . esc_html( get_the_author() ) . '</a></span>'
  	);

  	echo '<span class="posted-on">' . $posted_on . '</span><span class="byline"> ' . $byline . '</span>'; // WPCS: XSS OK.

  }

  /**
   * Prints HTML with meta information for the categories, tags and comments.
   *
   * @return html
   */
  public static function entry_footer() {
  	// Hide category and tag text for pages.
  	if ( 'post' === get_post_type() ) {
  		/* translators: used between list items, there is a space after the comma */
  		$categories_list = get_the_category_list( esc_html__( ', ', 'snug' ) );
  		if ( $categories_list && self::categorized_blog() ) {
  			printf( '<span class="cat-links">' . esc_html__( 'Posted in %1$s', 'snug' ) . '</span>', $categories_list ); // WPCS: XSS OK.
  		}

  		/* translators: used between list items, there is a space after the comma */
  		$tags_list = get_the_tag_list( '', esc_html__( ', ', 'snug' ) );
  		if ( $tags_list ) {
  			printf( '<span class="tags-links">' . esc_html__( 'Tagged %1$s', 'snug' ) . '</span>', $tags_list ); // WPCS: XSS OK.
  		}
  	}

  	if ( ! is_single() && ! post_password_required() && ( comments_open() || get_comments_number() ) ) {
  		echo '<span class="comments-link">';
  		comments_popup_link( esc_html__( 'Leave a comment', 'snug' ), esc_html__( '1 Comment', 'snug' ), esc_html__( '% Comments', 'snug' ) );
  		echo '</span>';
  	}

  	edit_post_link(
  		sprintf(
  			/* translators: %s: Name of current post */
  			esc_html__( 'Edit %s', 'snug' ),
  			the_title( '<span class="screen-reader-text">"', '"</span>', false )
  		),
  		'<span class="edit-link">',
  		'</span>'
  	);
  }

  /**
   * Flush out the transients used in self::categorized_blog.
   *
   * @since 1.0.0
   */
  public static function category_transient_flusher( $more ) {
    if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
  		return;
  	}

  	delete_transient( 'snug_categories' );
  }

  /**
   * Replace excerpt's default Read More
   *
   * @since 1.0.0
   */
  public static function filter_excerpt_more( $more ) {
    return '&hellip;';
  }

  /**
   * Replace excerpt's default Read More
   *
   * @since 1.0.0
   */
  public static function filter_excerpt_length( $length ) {
    return 30;
  }

  /**
   * Error Logging
   *
   * @since 1.0.0
   */
  public static function error( $variable ) {
    error_log( print_r( $variable, true ) );
  }

  /**
   * SVG Output
   *
   * @since 1.0.0
   */
  public static function display_svg( $svg ) {
    include( locate_template( 'assets/svgs/partials/' . $svg . '.svg.php' ) );
  }

  /**
   * Icon Output
   *
   * @since 1.0.0
   */
  public static function icon( $type, $acf = true, $sub = false, $id = false ) {
    if( $acf ) {

      if( $id ) {
        if( $sub ) {
          $icon = get_sub_field( $type, $id );
        } else {
          $icon = get_field( $type, $id );
        }
      } else {
        if( $sub ) {
          $icon = get_sub_field( $type );
        } else {
          $icon = get_field( $type );
        }
      }

    } else {

      $icon = $type;

    }

    echo '<i class="icon icon-' . $icon . '"></i>';
  }

  /**
   * Get required image dimensions
   *
   * @since 1.0.0
   */
  public static function get_image_size( $image ) {
    global $_wp_additional_image_sizes;

    if ( isset( $_wp_additional_image_sizes[ $image ] ) ) {
      return $_wp_additional_image_sizes[ $image ];
    } else {
      return false;
    }
  }

  /**
   * Featured Image URL
   *
   * @since 1.0.0
   */
  public static function featured_image_url( $size = 'full', $id = false ) {
    global $post;

    if( $id ) {
      $post_id = $id;
    } else {
      $post_id = $post->ID;
    }

    $image_id = get_post_thumbnail_id( $post_id );
    $image_url_array = wp_get_attachment_image_src($image_id, $size, true);
    $image_url = false;

    if( has_post_thumbnail( $post_id ) ) {
      $image_url = $image_url_array[0];
    }

    return $image_url;
  }

  /**
   * ACF Image URL from array
   *
   * @since 1.0.0
   */
  public static function acf_image_url( $field, $size = 'full', $subfield = false, $options = false, $id = false ) {
    if( $options ) {
      if( $subfield ) {
        $image = get_sub_field( $field, 'options' );
        if( $image ) {
          $image_url = $image['sizes'][$size];
        } else {
          return false;
        }
      } else {
        $image = get_field( $field, 'options' );
        if( $image ) {
          $image_url = $image['sizes'][$size];
        } else {
          return false;
        }
      }
    } else {
      if( $subfield ) {
        $image = get_sub_field( $field );
        if( $image ) {
          $image_url = $image['sizes'][$size];
        } else {
          return false;
        }
      } else {
        if( $id ) {
          $image = get_field( $field, $id );
          if( $image ) {
            $image_url = $image['sizes'][$size];
          } else {
            return false;
          }
        } else {
          $image = get_field( $field );
          if( $image ) {
            $image_url = $image['sizes'][$size];
          } else {
            return false;
          }
        }
      }
    }
    return $image_url;
  }

  /**
   * Encode an phone number for tel
   *
   * @since 1.0.0
   */
  public static function tel( $phone ) {
    return rawurlencode( preg_replace( '/[^0-9]/', '', $phone ) );
  }

  /**
   * Encode an address string for Google Maps
   *
   * @since 1.0.0
   */
  public static function map_address( $address ) {
    $address_clean = strip_tags( $address );
    $encoded_address = 'http://maps.google.com/?q=' . urlencode( $address_clean );

    return $encoded_address;
  }

  /**
   * Get a user's Gravatar URL
   *
   * @since 1.0.0
   */
  public static function gravatar_url( $email ) {
    $hash = md5( strtolower( trim ( $email ) ) );
    return 'http://gravatar.com/avatar/' . $hash;
  }

  /**
   * Trim a string to a specific number of characters
   *
   * @since 1.0.0
   */
  public static function trim_string( $string, $length ) {
    $return = $string;
    if (preg_match("/^.{1,$length}\b/su", $string, $match))
        $return = $match[0];
    else
        $return = mb_substr($return, 0, $length);
    if (strlen($string) > strlen($return)) $return .= '';
    return strip_tags( $return );
  }

  /**
   * Geocode an address
   *
   * @since 1.0.0
   */
  public static function address_encode( $address ) {
    $output = strip_tags( $address );
    $string = preg_replace('!\s+!m', ' ', $output);
    $string = str_replace (" ", "+", urlencode($string));

    $details_url = "http://maps.googleapis.com/maps/api/geocode/json?address=". $string . "&sensor=false";

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $details_url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $response = json_decode(curl_exec($ch), true);

    // If Status Code is ZERO_RESULTS, OVER_QUERY_LIMIT, REQUEST_DENIED or INVALID_REQUEST
    if ($response['status'] != 'OK') {
      return null;
    }


    $geometry = $response['results'][0]['geometry'];

    $latitude = $geometry['location']['lat'];
    $longitude = $geometry['location']['lng'];

    $array = array(
      'latitude' => $geometry['location']['lat'],
      'longitude' => $geometry['location']['lng'],
      'location_type' => $geometry['location_type'],
    );

    return $array;

  }

  /**
   * Get the current post's archive title
   *
   * @since 1.0.0
   */
  public static function get_archive_title() {
    $post_type_obj = get_post_type_object( get_post_type() );
    $title = apply_filters( 'post_type_archive_title', $post_type_obj->labels->name );
    $archive_title = apply_filters( 'post_type_archive_title', $post_type_obj->labels->all_items );

    return $archive_title;
  }

  /**
   * Get post content by ID
   *
   * @since 1.0.0
   */
  public static function get_content_by_id( $post_id ) {
    $page_data = get_page( $post_id );

    if ( $page_data ) {
      return $page_data->post_content;
    } else {
      return false;
    }
  }

  /**
   * Return Sharing Buttons
   *
   * @since 1.0.0
   */
  public static function sharing() {
    global $post;

    $post_title = get_the_title( $post->ID );
    $post_url = get_the_permalink( $post->ID );
    $post_image = snug_featured_image_url( $post->ID ); ?>

    <li><a target="_blank" href="http://www.facebook.com/sharer.php?u=<?php echo $post_url;?>&amp;t=<?php echo $post_title; ?>" title="Share on Facebook"><i class="fa fa-facebook-square"></i></a></li>
    <li><a target="_blank" href="http://pinterest.com/pin/create/button/?url=<?php echo $post_url;?>&media=<?php echo $post_image; ?>"><i class="fa fa-pinterest-square"></i></a></li>
    <li><a target="_blank" href="http://twitter.com/home/?status=<?php echo $post_title; ?> - <?php echo $post_url;?> @thesnug" title="Tweet"><i class="fa fa-twitter-square"></i></a></li>
    <li><a target="_blank" href="http://www.linkedin.com/shareArticle?mini=true&amp;title=<?php echo $post_title; ?>&amp;url=<?php echo $post_url;?>" title="Share on LinkedIn"><i class="fa fa-linkedin-square"></i></a></li>
    <li><a target="_blank" href="https://plus.google.com/share?url=<?php echo $post_url;?>" onclick="javascript:window.open(this.href,
    '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;"><i class="fa fa-google-plus-square"></i></a></li><?php
  }

  /**
   * Safely output the value of an array
   *
   * @since 1.0.0
   */
  public static function array_value( $array, $key, $echo = true ) {
    $value = '';

    if( isset( $array[$key] ) ) {
      $value = $array[$key];
    }

    if( $echo ) {
      echo $value;
    } else {
      return $value;
    }
  }

  /**
   * Format a string as a currency
  */
  public static function format_currency( $number ) {
    setlocale( LC_MONETARY, 'en_US.UTF-8' );
    return money_format( '%.2n', $number );
  }

} // Class
Snug_Utilities::instance();
