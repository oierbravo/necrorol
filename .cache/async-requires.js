// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-class-js": () => import("/home/oier/projects/necrol/src/templates/class.js" /* webpackChunkName: "component---src-templates-class-js" */),
  "component---cache-dev-404-page-js": () => import("/home/oier/projects/necrol/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-index-js": () => import("/home/oier/projects/necrol/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/home/oier/projects/necrol/.cache/data.json")

