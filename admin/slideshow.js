wp.blocks.registerBlockType("gtbps/post-slideshow", {
	title: "Gutenberg Post Slideshow",
	description:
		"A gutenberg block to display a slideshow of posts dynamically fetching data from the WordPress REST API of any existing wordpress blogsite.",
	icon: "video-alt",
	keywords: ["gtb", "post", "slideshow"],
	category: "design",

	attributes: {
		apiSiteURL: {
			type: "string",
			default: "wptavern.com",
		}
	},

	edit: function (props) {
		return "Gutenberg Post Slideshow";
	},
	save: function (props) {
		return wp.element.createElement(
			"div",
			{
				class: "gtbps container-wrapper",
			},
			wp.element.createElement(
				"div",
				{
					class: "inputWrapper",
				},
				wp.element.createElement("input", {
					type: "text",
					name: "dataFetchApiUrl",
					class: "apiUrlInput",
					value: props.attributes.apiSiteURL,
					placeholder: "Enter url to fetch the data from",
				}),
				wp.element.createElement(
					"button",
					{
						id: "fetchData",
					},
					"Submit"
				)
			),
			wp.element.createElement(
				"section",
				{
					class: "slider-wrapper",
				},
				wp.element.createElement(
					"button",
					{
						class: "slide-arrow",
						id: "slide-arrow-prev",
					},
					"\u2039"
				),
				wp.element.createElement(
					"button",
					{
						class: "slide-arrow",
						id: "slide-arrow-next",
					},
					"\u203A"
				),
				wp.element.createElement(
					"ul",
					{
						class: "slides-container",
						id: "slides-container",
					}
				)
			)
		);
	},
});
