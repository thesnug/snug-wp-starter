<?php
/**
 * Template Name: Sample
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Snug
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

			<?php while ( have_posts() ) { the_post(); ?>

				<?php get_template_part( 'template-parts/content', 'page' ); ?>

			<?php } // End of the loop. ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
