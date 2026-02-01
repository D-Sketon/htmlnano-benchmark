import { createRequire } from "module";
const require = createRequire(import.meta.url);
const htmlMinifier = require("html-minifier");

export default async function (html) {
  try {
    return htmlMinifier.minify(html, {
      removeComments: true,
      removeCommentsFromCDATA: true,
      removeCDATASectionsFromCDATA: true,
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      removeAttributeQuotes: true,
      removeRedundantAttributes: true,
      useShortDoctype: false,
      removeEmptyAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      removeOptionalTags: false,
      removeEmptyElements: false,
    });
  } catch (err) {
    console.error(
      "html-minifier failed:",
      err && err.message ? err.message : err,
    );
    return html;
  }
}
