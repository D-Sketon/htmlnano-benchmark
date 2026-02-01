import { Buffer } from "node:buffer";
import minifyHtml from "@minify-html/node";;

export default function (html) {
  return minifyHtml.minify(Buffer.from(html), {});
}

