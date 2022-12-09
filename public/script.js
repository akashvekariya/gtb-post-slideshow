const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");
const body = document.querySelector("body");


document.addEventListener('DOMContentLoaded', function () {

	try {

		/**
		 * loadPostsAJAX - fetches the data from the given url and displays it
		 * 
		 * @param {string} apiUrl domain name from where the data will be fetched
		 * @returns {void}
		 */
		function loadPostsAJAX(apiUrl) {
			var xhr = new XMLHttpRequest();

			var url = "https://" + apiUrl + "/wp-json/wp/v2/posts/";
			xhr.open("GET", url, true);

			xhr.onreadystatechange = function () {
				if (xhr.readyState >= 0 && xhr.readyState < 4) {

					document.getElementById("slides-container").innerHTML = `<div style="
					width: 100%; 
					height: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
					">Loading please wait...</div>`;

				} else if (this.readyState == 4 && this.status == 200) {

					var data = JSON.parse(this.responseText);
					document.getElementById("slides-container").innerHTML = "";

					for (let i = 0; i < data.length; i++) {

						var bg_title = truncateStr(data[i].title.rendered || "No Title", 80);
						var bg_image = data[i]?.jetpack_featured_media_url || "";
						var bg_url = data[i]?.guid?.rendered || "#";
						var bg_date = new Date(Date.parse(data[i]?.date || 0));
						bg_date = bg_date.getDate() + '/' + bg_date.getMonth() + '/' + bg_date.getFullYear();
						var bg_author = data[i]?.yoast_head_json?.author || "Unknown";
						var bg_content = truncateStr(data[i]?.excerpt?.rendered || "Visit the link to read more", 140);

						document.getElementById("slides-container").innerHTML += `
								<li class="slide">
									<div class="slide-section-left">
										<a href="`+ bg_url + `" target="_blank">
											<div class="blog-image-holder" style="background-image: url('` +
							bg_image +
							`'); background-color: #ced4da"></div>
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
							`" id="read-more" target="_blank">Read More</a>
									</div>
								</li>`;
					}
				}
			};
			xhr.send();
		}

		const apiUrl = document.querySelector(".gtbps .apiUrlInput").value || "wptavern.com";
		loadPostsAJAX(apiUrl);

		// Adds click event to next slide button
		nextButton.addEventListener("click", () => {
			const slideWidth = document.querySelector(".slide").clientWidth;
			slidesContainer.scrollLeft += slideWidth;
		});

		// Adds click event to previous slide button
		prevButton.addEventListener("click", () => {
			const slideWidth = document.querySelector(".slide").clientWidth;
			slidesContainer.scrollLeft -= slideWidth;
		});

		// Adds scrolling carousel via keyboard arrow keys left and right
		body.addEventListener("keydown", (e) => {
			const slideWidth = document.querySelector(".slide").clientWidth;
			if (e.key === "ArrowRight") {
				slidesContainer.scrollLeft += slideWidth;
			} else if (e.key === "ArrowLeft") {
				slidesContainer.scrollLeft -= slideWidth;
			}
		});

		/**
		 * truncateStr - truncate a string to a certain length
		 * 
		 * @param {string} str string that needs to be truncated
		 * @param {number} n how many characters to truncate to?
		 * @param {boolean} useWordBoundary should consider last word not to be truncated?
		 * @returns {string} truncated string
		 */
		function truncateStr(str, n = 100, useWordBoundary = true) {
			if (str.length <= n) { return str; }
			const subString = str.slice(0, n - 1);
			return (
				(useWordBoundary
					? subString.slice(0, subString.lastIndexOf(" "))
					: subString) + " &hellip;"
			);
		}

		// Adds event listener to the button to load posts from the provided url
		document.querySelector(".gtbps #fetchData").addEventListener("click", () => {
			try {
				const apiUrl = document.querySelector(".gtbps .apiUrlInput").value || "wptavern.com";
				loadPostsAJAX(apiUrl);
			} catch (e) {
				console.log('POST LOADING FAILED\n' + e);
			}
		});
	} catch (e) { }


}, false);