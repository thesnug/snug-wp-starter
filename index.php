<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Snug
 */

get_header();?>

  <div id="primary" class="content-area">
    <main id="main" class="site-main" role="main">

      <header>
        <h1 class="page-title screen-reader-text"><?php the_title();?></h1>
      </header>

      This is the index.php file.

    </main><!-- #main -->
  </div><!-- #primary -->

<?php get_footer();?>
