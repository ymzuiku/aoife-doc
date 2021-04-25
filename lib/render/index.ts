import { renderCore } from "./renderCore";

import { renderPrism } from "./extends/extendsPrism";
import { renderMermaid, htmlMermaid } from "./extends/extendsMermaid";
import { htmlVideo, renderVideo } from "./extends/extendsVideo";
import { htmlCharts, renderCharts } from "./extends/extendsCharts";

const VanillaMarkdown = renderCore([
  { render: renderPrism },
  {
    language: "graph",
    htmlCreator: htmlMermaid,
    render: renderMermaid,
  },
  {
    language: "video",
    htmlCreator: htmlVideo,
    render: renderVideo,
  },
  {
    language: "chart",
    htmlCreator: htmlCharts,
    render: renderCharts,
  },
]);

export default VanillaMarkdown;
