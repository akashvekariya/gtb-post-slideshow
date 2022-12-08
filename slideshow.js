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
      default: "https://wptavern.com/",
    },
    title: {
      type: "string",
      selector: "h2",
      default: "Gutenberg Post Slideshow",
    },
    content: {
      type: "string",
      selector: "p",
    },
    link: {
      type: "string",
      selector: "a",
    },
    image: {
      type: "string",
      selector: "img",
    },
  },

  edit: function (props) {
    return wp.element.createElement(wp.editor.RichText, {
      tagName: "h3",
      className: props.className,
      value: props.attributes.title,
      // style: {
      //   backgroundColor: props.attributes.backgroundColor,
      //   color: props.attributes.textColor,
      // },
      onChange: function (newContent) {
        props.setAttributes({ content: newContent });
      },
    });
  },
  save: function (props) {
    return "save hello";
  },
});
