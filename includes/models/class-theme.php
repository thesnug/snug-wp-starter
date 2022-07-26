<?php
/**
 ** TheSnug\Models\Theme
 ** Version 1.0.0
 **/
namespace TheSnug\Models;

class Theme {

  /**
   * @var array
   */
  private $defaults = array(
    'version' => '1.0.0',
    'domain'  => null,
    'date'    => 'F j, Y',
    'acf'     => false,
  );

  /**
   * Theme
   *
   * WordPress theme object
   *
   * @var \WP_Theme
   */
  public $theme;

  /**
   * Version
   *
   * The theme version number
   *
   * @var string
   */
  public $version;

  /**
   * Domain
   *
   * The text domain for the the theme
   *
   * @var string
   */
  public $domain;

  /**
   * Date
   *
   * The theme date format
   *
   * @var string
   */
  public $date;

  /**
   * ACF
   *
   * Determines if ACF has been installed
   *
   * @var boolean
   */
  public $acf = false;

  /**
   * Constructor
   *
   * @since 1.0.0
   */
  function __construct() {
    $this->theme = wp_get_theme();
    $this->setup();
  }

  /**
   * Setting the version
   *
   * @return void
   */
  function set_version() {
    $this->version = $this->theme->get( 'Version' ) ? $this->theme->get( 'Version' ) : $this->defaults['version'];
  }

  /**
   * Setting the text domain
   *
   * @return void
   */
  function set_domain() {
    $this->domain = $this->theme->get( 'TextDomain' ) ? $this->theme->get( 'TextDomain' ) : $this->defaults['domain'];
  }

  /**
   * Setting the date format
   *
   * @return void
   */
  function set_date() {
    $this->date = $this->defaults['date'];
  }

  /**
   * Setting if ACF is available
   *
   * @return void
   */
  function set_acf() {
    $this->acf = class_exists( 'ACF' );
  }

  /**
   * Setting up the Theme
   *
   * @return void
   */
  function setup() {
    $this->set_version();
    $this->set_domain();
    $this->set_date();
    $this->set_acf();
  }
}
