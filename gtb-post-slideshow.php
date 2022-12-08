<?php

/**
 * Plugin Name: Gutenberg Post Slideshow
 * Description: Creates a Gutenberg Block to display a slideshow of posts dynamically.
 * Version: 1.0.0
 * Author: Akash Vekariya
 * Author URI: https://github.com/akashvekariya
 */

function gtbps_register_block_assets() {

	$block_path = 'slideshow.js';

	wp_enqueue_script(
		'gtb-post-slideshow-block',
		plugin_dir_url(__FILE__) . $block_path,
		['wp-blocks', 'wp-editor'],
		true
	);

	// $style_path = 'slideshow.css';

	// wp_enqueue_style(
	// 	'gtb-post-slideshow-style',
	// 	plugin_dir_url(__FILE__) . $style_path,
	// 	[],
	// 	true
	// );
}

add_action('enqueue_block_editor_assets', 'gtbps_register_block_assets');

function gtbps_register_public_assets() {

	$block_path = 'public/script.js';

	wp_enqueue_script(
		'gtb-post-slideshow-public-script',
		plugin_dir_url(__FILE__) . $block_path,
		['wp-blocks', 'wp-editor'],
		true
	);

	$style_path = 'public/style.css';

	wp_enqueue_style(
		'gtb-post-slideshow-public-style',
		plugin_dir_url(__FILE__) . $style_path,
		[],
		true
	);
}

add_action('enqueue_block_assets', 'gtbps_register_public_assets');