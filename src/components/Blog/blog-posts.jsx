import React from "react"
import _ from "lodash"
import List from "components/_ui/List/List"
import LocalExample from "components/_ui/LocalExample/LocalExample";
import hooksImage from "./posts/react-hooks.png"
import d3Image from "./posts/d3.png"
import d3InteractiveImage from "./posts/d3-interactive.png"


// eslint-disable-next-line import/no-webpack-loader-syntax
const dataCsv = require("!!raw-loader!examples/interactions/data.csv").default
// eslint-disable-next-line import/no-webpack-loader-syntax
const exampleBarsFull = require("!!raw-loader!examples/interactions/bars-full/chart.js").default
// eslint-disable-next-line import/no-webpack-loader-syntax
const exampleBarsFullHtml = require("!!raw-loader!examples/interactions/bars-full/index.html").default
// eslint-disable-next-line import/no-webpack-loader-syntax
const exampleBarsFullCss = require("!!raw-loader!examples/interactions/bars-full/styles.css").default

// import VisualDesign from "./posts/VisualDesign"

const posts = [{
  title: "Thinking in React Hooks",
  id: "react-hooks",
  image: hooksImage,
  description: <>
    React introduced hooks one year ago, and they've been a game-changer for a lot of developers. There are tons of how-to introduction resources out there, but I want to talk about the <b>fundamental mindset change</b> when switching from React class components to function components + hooks.
  </>
  // component: Hooks,
},{
  title: "How to learn D3.js",
  id: "d3",
  image: d3Image,
  description: <>
    So, you want to create amazing data visualizations on the web and you keep hearing about D3.js. But what is D3.js, and how can you learn it? Let’s start with the question: What is D3?
  </>,
},{
    title: "Interactive Charts with D3.js",
    id: "d3-interactive-charts",
    image: d3InteractiveImage,
    description: <>

        <p>
        You did it! You grabbed a data set and visualized it, right here in the browser. Congratulations, that is no easy feat!
        </p>
        <p>
            <b>This is 2019</b> and the web browser opens up a whole new realm of possibilities when visualizing data.
        </p>

        <List
          items={[
            <>If a user wonders what the exact value of a data point is, they can hover over it and find out</>,
            <>We can even show whole charts <i>within</i> a chart tooltip</>,
            <>We can tell a story with a chart, progressively revealing parts of it as the user scrolls</>,
          ]}
        />
        <p>
          Let’s take advantage of these new possibilities and talk about how to take your chart to the next level.
        </p>

        <LocalExample
          className="Interactions__iframe"
          html={exampleBarsFullHtml}
          css={exampleBarsFullCss}
          js={exampleBarsFull}
          data={dataCsv}
        />

    </>,
    // component: VisualDesign,
// },{
//     title: "Visual vs. Visualization Design",
// //     link: "visual-vs-visualization-design",
// //     component: VisualDesign,
// },{
//     title: "Drawing a Map",
//     // component: VisualDesign,
}]
const processedPosts = _.map(posts, post => ({
    ...post,
    link: post.link || _.kebabCase(post.title),
}))

export default posts