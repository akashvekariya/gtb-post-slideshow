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

	$block_path = 'script.js';

	wp_enqueue_script(
		'gtb-post-slideshow-public-script',
		plugin_dir_url(__FILE__) . $block_path,
		['wp-blocks', 'wp-editor'],
		true
	);

	$style_path = 'style.css';

	wp_enqueue_style(
		'gtb-post-slideshow-public-style',
		plugin_dir_url(__FILE__) . $style_path,
		[],
		true
	);
}

add_action('enqueue_block_assets', 'gtbps_register_public_assets');

// $response = wp_remote_get('https://rtcamp.com/wp-json/wp/v2/posts/');

// $body = json_decode(wp_remote_retrieve_body($response), true);

// function console_log($output, $with_script_tags = true) {
// 	$js_code = 'console.log(' . json_encode($output, JSON_HEX_TAG) .
// 		');';
// 	if ($with_script_tags) {
// 		$js_code = '<script>' . $js_code . '</script>';
// 	}
// 	echo $js_code;
// }

// console_log($body);