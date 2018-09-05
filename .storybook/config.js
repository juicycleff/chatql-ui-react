import "../src/styles/global";

import { configure } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";

setOptions({
  name: "chatql-ui-react",
  url: "",
  goFullScreen: false,
  showDownPanel: false,
  downPanelInRight: false,
});

const req = require.context("../src", true, /.+\.stories\.js/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
