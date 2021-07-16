import stringify from "remark-stringify";
import unified from "unified";
import gfm from "remark-gfm";
import remarkHtml from "remark-html";
import remarkParse from "remark-parse";

export const mdProcessor = unified().use(gfm).use(stringify, {
  bullet: "-",
  fence: "`",
  fences: true,
  incrementListMarker: false,
});

export const htmlProcessor = unified().use(remarkParse).use(gfm).use(remarkHtml);
