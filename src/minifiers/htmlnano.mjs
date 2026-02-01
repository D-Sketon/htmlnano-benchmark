import htmlnano, { presets } from "htmlnano";

export default async function (html) {
  const result = await htmlnano.process(html, {
    ...presets.max,
    removeUnusedCss: {
      tool: "purgeCSS", // uncss fails, so use purgeCSS
    },
  });
  return result.html;
}
