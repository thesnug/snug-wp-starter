<?php
/**
 ** TheSnug\Models\Settings
 ** Version 1.0.0
 **/

namespace TheSnug\Models;
use \TheSnug\ACF as ACF;

class Settings {

  /**
   * Menus
   *
   * @var array|null
   */
  public $menus = null;

  /**
   * Constructor
   *
   * @since 1.0.0
   */
  function __construct() {
    $this->acf = new ACF();
  }

  /**
   * Get Navigation
   *
   * @since 1.0.0
   */
  function get_navigation() {
    $menu_objects = get_terms( 'nav_menu', array( 'hide_empty' => true ) );
    $menus        = array();

    if ( !empty( $menu_objects ) ) {
      foreach ( $menu_objects as $menu_object ) {
        $array_menu = wp_get_nav_menu_items( $menu_object->slug, array( 'orderby' => 'menu_order', 'output' => object ) );
        $menu       = array();
        $submenus   = array();

        foreach ( $array_menu as $m ) {
          if ( empty( $m->menu_item_parent ) ) {
            $menu[$m->ID] = array(
              'label'    => $m->title,
              'url'      => $m->url,
              'target'   => $m->target === '' ? null : $m->target,
              'children' => null,
            );
          } else {
            if ( !isset( $submenus[$m->menu_item_parent] ) ) {
              $submenus[$m->menu_item_parent] = array();
            }

            $submenus[$m->menu_item_parent][] = array(
              'label'  => $m->title,
              'url'    => $m->url,
              'target' => $m->target === '' ? null : $m->target,
            );
          }
        }

        if ( !empty( $submenus ) ) {
          foreach ( $submenus as $parent => $submenu ) {
            $menu[$parent]['children'] = $submenu;
          }
        }

        if ( !empty( $menu ) ) {
          $menus[$menu_object->slug] = array_values( $menu );
        }
      }
    }

    return $menus;
  }

  /**
   * Get
   *
   * @since 1.0.0
   */
  function get() {
    return array(
      'navigation' => $this->get_navigation(),
    );
  }

}
