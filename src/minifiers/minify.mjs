import { minify } from "@tdewolff/minify";

export default async function (html) {
  return await minify({ data: html, type: "text/html" });
}
