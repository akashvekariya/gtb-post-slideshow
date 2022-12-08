<?php

add_action('rest_api_init', function () {
	register_rest_route('gtb-post-slideshow/v1', '/update-website-url', array(
		'methods' => 'POST',
		'callback' => 'update_website_url',
	));
});