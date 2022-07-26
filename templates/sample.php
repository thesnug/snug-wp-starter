<?php
/**
 * Template Name: Sample
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Snug
 */

get_header();?>

  <div id="primary" class="content-area">
    <main id="main" class="site-main" role="main">

      <?php while ( have_posts() ) {the_post();?>

        Sample Template

      <?php } // End of the loop. ?>

    </main><!-- #main -->
  </div><!-- #primary -->

<?php get_footer();?>
