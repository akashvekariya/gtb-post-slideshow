const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");
const body = document.querySelector("body");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});

body.addEventListener("keydown", (e) => {
  const slideWidth = slide.clientWidth;
  if (e.key === "ArrowRight") {
    slidesContainer.scrollLeft += slideWidth;
  } else if (e.key === "ArrowLeft") {
    slidesContainer.scrollLeft -= slideWidth;
  }
});

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
