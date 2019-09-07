const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-index-js": hot(preferDefault(require("/home/kon/git/jungkonkim.github.io/src/templates/blogPost/index.js"))),
  "component---src-templates-tag-list-index-js": hot(preferDefault(require("/home/kon/git/jungkonkim.github.io/src/templates/tagList/index.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/kon/git/jungkonkim.github.io/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/kon/git/jungkonkim.github.io/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/kon/git/jungkonkim.github.io/src/pages/index.js"))),
  "component---src-pages-search-js": hot(preferDefault(require("/home/kon/git/jungkonkim.github.io/src/pages/search.js")))
}

