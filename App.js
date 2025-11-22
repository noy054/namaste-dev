import React from "react";
import { createRoot } from "react-dom/client";

const heading = React.createElement(
  "h1",
  {
    id: "title",
    key: 1,
  },
  "Heading 1"
);
const heading2 = React.createElement(
  "h2",
  {
    id: "title",
    key: 2,
  },
  "Heading 2"
);
const container = React.createElement(
  "div",
  {
    id: "container",
    key: 3,
  },
  [heading, heading2]
);

const root = createRoot(document.getElementById("root"));

root.render(container);
