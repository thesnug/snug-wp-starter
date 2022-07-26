<?php
/**
 ** TheSnug\Hooks
 ** Version 1.0.0
 **/

namespace TheSnug;
use \TheSnug\Logger as Logger;

class Hooks {

  /**
   * Constructor
   *
   * @since 1.0.0
   */
  function __construct() {
    $this->logger = new Logger();

    $this->add_actions();
    $this->add_filters();
  }

  /**
   * Add Actions
   *
   * @since 1.0.0
   */
  function add_actions() {}

  /**
   * Add Filters
   *
   * @since 1.0.0
   */
  function add_filters() {}

}
