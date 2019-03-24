import { configure } from "@storybook/vue"

function loadStories() {
  require("../stories/index.js")
}

configure(loadStories, module)
