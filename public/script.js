const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");
const body = document.querySelector("body");
const apiInput = document.querySelector(".gtbps .apiUrlInput");
const fetchDataBtn = document.querySelector(".gtbps #fetchData");

nextButton.addEventListener("click", () => {
	console.log("next button clicked");
	const slideWidth = slide.clientWidth;
	slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
	console.log("prev button clicked");
	const slideWidth = slide.clientWidth;
	slidesContainer.scrollLeft -= slideWidth;
});

try {
	body.addEventListener("keydown", (e) => {
		const slideWidth = slide.clientWidth;
		if (e.key === "ArrowRight") {
			slidesContainer.scrollLeft += slideWidth;
		} else if (e.key === "ArrowLeft") {
			slidesContainer.scrollLeft -= slideWidth;
		}
	});

	function truncateStr(str, n = 100, useWordBoundary = true) {
		if (str.length <= n) {
			return str;
		}
		const subString = str.slice(0, n - 1); // the original check
		return (
			(useWordBoundary
				? subString.slice(0, subString.lastIndexOf(" "))
				: subString) + " &hellip;"
		);
	}

	fetchDataBtn.addEventListener("click", () => {
		try {
			const apiUrl = apiInput.value || "wptavern.com";

			var xhr = new XMLHttpRequest();

			var url = "https://" + apiUrl + "/wp-json/wp/v2/posts/";
			xhr.open("GET", url, true);

			xhr.onreadystatechange = function () {
				if (xhr.readyState >= 0 && xhr.readyState < 4) {

					document.getElementById("slides-container").innerHTML = `Loading please wait...`;


				} else if (this.readyState == 4 && this.status == 200) {

					var data = JSON.parse(this.responseText);
					document.getElementById("slides-container").innerHTML = "";

					for (let i = 0; i < data.length; i++) {

						var bg_title = truncateStr(data[i]["title"]["rendered"] || "No Title", 80);
						var bg_image = "";
						var bg_url = data[i]["guid"]["rendered"] || "#";
						var bg_date = new Date(Date.parse(data[i]["date"]));
						bg_date = bg_date.getDate() + '/' + bg_date.getMonth() + '/' + bg_date.getFullYear();
						var bg_author = "Unknown";
						var bg_content = truncateStr(data[i]["excerpt"]["rendered"] || "Visit the link to read more", 140);

						document.getElementById("slides-container").innerHTML += `
				<li class="slide">
					<div class="slide-section-left">
						<a href="#">
							<div class="blog-image-holder" style="background-image: url('` +
							bg_image +
							`')"></div>
						</a>
					</div>
					<div class="post-content slide-section-right">
						<p id="date">` +
							bg_date +
							`</p>
						<h2 id="title">` +
							bg_title +
							`</h2>
						<p id="author">` +
							bg_author +
							`</p>
						<h5 id="content">` +
							bg_content +
							`</h5>
						<a href="` +
							bg_url +
							`" id="read-more">Read More</a>
					</div>
				</li>`;
					}
				}
			};
			xhr.send();
		} catch (e) { }
	});
} catch (e) { }
