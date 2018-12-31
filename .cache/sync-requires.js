const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-class-js": hot(preferDefault(require("/home/oier/projects/necrol/src/templates/class.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/oier/projects/necrol/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/oier/projects/necrol/src/pages/index.js")))
}

