import { bench, run, group } from "mitata";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

import htmlminifier from "./minifiers/htmlminifier.mjs";
import htmlminifiernext from "./minifiers/htmlminifiernext.mjs";
import htmlminifierterser from "./minifiers/htmlminifierterser.mjs";
import htmlnano from "./minifiers/htmlnano.mjs";
import minify from "./minifiers/minify.mjs";
import minifyhtml from "./minifiers/minifyhtml.mjs";

const html = fs.readFileSync(
  path.join(__dirname, "../assets/tc39.es.html"),
  "utf8",
);
const html1 = fs.readFileSync(
  path.join(__dirname, "../assets/reimu.html"),
  "utf8",
);
// const html1 = fs.readFileSync(path.join(__dirname, "../assets/weather.com.html"), "utf8");
const html2 = fs.readFileSync(
  path.join(__dirname, "../assets/apple.com.html"),
  "utf8",
);
const html3 = fs.readFileSync(
  path.join(__dirname, "../assets/w3.org.html"),
  "utf8",
);
const html4 = fs.readFileSync(
  path.join(__dirname, "../assets/developer.mozilla.org.html"),
  "utf8",
);
// const html5 = fs.readFileSync(path.join(__dirname, "../assets/github.com.html"), "utf8");

group(() => {
  bench("htmlminifier-tc39.es.html-7.08M", async () => {
    await htmlminifier(html);
  });

  bench("htmlminifiernext-tc39.es.html-7.08M", async () => {
    await htmlminifiernext(html);
  });

  bench("htmlminifierterser-tc39.es.html-7.08M", async () => {
    await htmlminifierterser(html);
  });

  bench("htmlnano-tc39.es.html-7.08M", async () => {
    await htmlnano(html);
  });

  bench("minify-tc39.es.html-7.08M", async () => {
    await minify(html);
  });

  bench("minifyhtml-tc39.es.html-7.08M", async () => {
    await minifyhtml(html);
  });
});

group(() => {
  bench("htmlminifier-reimu.html-448K", async () => {
    await htmlminifier(html1);
  });

  bench("htmlminifiernext-reimu.html-448K", async () => {
    await htmlminifiernext(html1);
  });

  bench("htmlminifierterser-reimu.html-448K", async () => {
    await htmlminifierterser(html1);
  });

  bench("htmlnano-reimu.html-448K", async () => {
    await htmlnano(html1);
  });

  bench("minify-reimu.html-448K", async () => {
    await minify(html1);
  });

  bench("minifyhtml-reimu.html-448K", async () => {
    await minifyhtml(html1);
  });
});

group(() => {
  bench("htmlminifier-apple.com.html-259K", async () => {
    await htmlminifier(html2);
  });

  bench("htmlminifiernext-apple.com.html-259K", async () => {
    await htmlminifiernext(html2);
  });

  bench("htmlminifierterser-apple.com.html-259K", async () => {
    await htmlminifierterser(html2);
  });

  bench("htmlnano-apple.com.html-259K", async () => {
    await htmlnano(html2);
  });

  bench("minify-apple.com.html-259K", async () => {
    await minify(html2);
  });

  bench("minifyhtml-apple.com.html-259K", async () => {
    await minifyhtml(html2);
  });
});

group(() => {
  bench("htmlminifier-w3.org.html-50.4K", async () => {
    await htmlminifier(html3);
  });

  bench("htmlminifiernext-w3.org.html-50.4K", async () => {
    await htmlminifiernext(html3);
  });

  bench("htmlminifierterser-w3.org.html-50.4K", async () => {
    await htmlminifierterser(html3);
  });

  bench("htmlnano-w3.org.html-50.4K", async () => {
    await htmlnano(html3);
  });

  bench("minify-w3.org.html-50.4K", async () => {
    await minify(html3);
  });

  bench("minifyhtml-w3.org.html-50.4K", async () => {
    await minifyhtml(html3);
  });
});

group(() => {
  bench("htmlminifier-developer.mozilla.org.html-106K", async () => {
    await htmlminifier(html4);
  });

  bench("htmlminifiernext-developer.mozilla.org.html-106K", async () => {
    await htmlminifiernext(html4);
  });

  bench("htmlminifierterser-developer.mozilla.org.html-106K", async () => {
    await htmlminifierterser(html4);
  });

  bench("htmlnano-developer.mozilla.org.html-106K", async () => {
    await htmlnano(html4);
  });

  bench("minify-developer.mozilla.org.html-106K", async () => {
    await minify(html4);
  });

  bench("minifyhtml-developer.mozilla.org.html-106K", async () => {
    await minifyhtml(html4);
  });
});

run();
