<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">

	<link rel="stylesheet" href="./style.css">
	<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.3.5/js/swiper.min.js"></script>

	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>

<body>
	<section class="slider-wrapper">
		<button class="slide-arrow" id="slide-arrow-prev">
			&#8249;
		</button>
		<button class="slide-arrow" id="slide-arrow-next">
			&#8250;
		</button>
		<ul class="slides-container" id="slides-container">
			<li class="slide">
				<div class="slide-section-left">
					<a href="#">
						<div class="blog-image-holder" style="background-image: url('./dummy.jpg')"></div>
					</a>
				</div>
				<div class="post-content slide-section-right">
					<p id="date">December 2, 2020</p>
					<h2 id="title">Slides</h2>
					<p id="author">Akash Vekariya</p>
					<h5 id="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum
						dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Quisquam, quod.
					</h5>
					<a href="#" id="read-more">Read More</a>
				</div>
			</li>
		</ul>
	</section>

	<script src="./script.js"></script>
</body>

</html>