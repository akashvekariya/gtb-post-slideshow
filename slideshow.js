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
    //  title: {
    //    type: "string",
    //    selector: "h2",
    //    default: "Gutenberg Post Slideshow",
    //  },
    //  content: {
    //    type: "string",
    //    selector: "p",
    //  },
    //  link: {
    //    type: "string",
    //    selector: "a",
    //  },
    //  image: {
    //    type: "string",
    //    selector: "img",
    //  },
  },

  edit: function (props) {
    return wp.element.createElement(wp.editor.RichText, {
      tagName: "h3",
      className: props.className,
      value: "default url: " + props.attributes.apiSiteURL,
      // style: {
      //   backgroundColor: props.attributes.backgroundColor,
      //   color: props.attributes.textColor,
      // },
      onChange: function (newContent) {
        props.setAttributes({ apiSiteURL: newContent });
      },
    });
  },
  save: function (props) {
    function runthis() {
      console.log("yes done");
      var xhr = new XMLHttpRequest();

      var url = "https://" + props.apiSiteURL + "/wp-json/wp/v2/posts/";
      xhr.open("GET", url, true);

      xhr.onreadystatechange = function () {
        console.log("yes done again");
        if (this.readyState == 4 && this.status == 200) {
          console.log("Mehhhhh");
        } else {
          return wp.element.createElement("div", {
            dangerouslySetInnerHTML: {
              __html: "<b>Failed to load data from api</b> Try again",
            },
          });
        }
      };
      xhr.send();
    }
    runthis();

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
          },
          wp.element.createElement(
            "li",
            {
              class: "slide",
            },
            wp.element.createElement(
              "div",
              {
                class: "slide-section-left",
              },
              wp.element.createElement(
                "a",
                {
                  href: "#",
                },
                wp.element.createElement("div", {
                  class: "blog-image-holder",
                  style: "background-image: url('" + props.image + "')",
                })
              )
            ),
            wp.element.createElement(
              "div",
              {
                class: "post-content slide-section-right",
              },
              wp.element.createElement(
                "p",
                {
                  id: "date",
                },
                "December 2, 2020"
              ),
              wp.element.createElement(
                "h2",
                {
                  id: "title",
                },
                "Slides"
              ),
              wp.element.createElement(
                "p",
                {
                  id: "author",
                },
                "Akash Vekariya"
              ),
              wp.element.createElement(
                "h5",
                {
                  id: "content",
                },
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
              ),
              wp.element.createElement(
                "a",
                {
                  href: "#",
                  id: "read-more",
                },
                "Read More"
              )
            )
          )
        )
      )
    );
    console.log("yes done");
    var xhr = new XMLHttpRequest();

    var url = "https://" + props.apiSiteURL + "/wp-json/wp/v2/posts/";
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
      console.log("yes done again");
      if (this.readyState == 4 && this.status == 200) {
        console.log("Mehhhhh");
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
              },
              wp.element.createElement(
                "li",
                {
                  class: "slide",
                },
                wp.element.createElement(
                  "div",
                  {
                    class: "slide-section-left",
                  },
                  wp.element.createElement(
                    "a",
                    {
                      href: "#",
                    },
                    wp.element.createElement("div", {
                      class: "blog-image-holder",
                      style: "background-image: url('" + props.image + "')",
                    })
                  )
                ),
                wp.element.createElement(
                  "div",
                  {
                    class: "post-content slide-section-right",
                  },
                  wp.element.createElement(
                    "p",
                    {
                      id: "date",
                    },
                    "December 2, 2020"
                  ),
                  wp.element.createElement(
                    "h2",
                    {
                      id: "title",
                    },
                    "Slides"
                  ),
                  wp.element.createElement(
                    "p",
                    {
                      id: "author",
                    },
                    "Akash Vekariya"
                  ),
                  wp.element.createElement(
                    "h5",
                    {
                      id: "content",
                    },
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
                  ),
                  wp.element.createElement(
                    "a",
                    {
                      href: "#",
                      id: "read-more",
                    },
                    "Read More"
                  )
                )
              )
            )
          )
        );
      } else {
        return wp.element.createElement("div", {
          dangerouslySetInnerHTML: {
            __html: "<b>Failed to load data from api</b> Try again",
          },
        });
      }
    };
    xhr.send();
  },
});
