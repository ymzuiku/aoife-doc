import { renderCore } from "./renderCore";

import { renderPrism } from "./extends/extendsPrism";
import { renderMermaid, htmlMermaid } from "./extends/extendsMermaid";
import { htmlVideo, renderVideo } from "./extends/extendsVideo";
import { htmlCharts, renderCharts } from "./extends/extendsCharts";

const VanillaMarkdown = renderCore([
  { render: renderPrism },
  { checker: "graph", htmlCreator: htmlMermaid, render: renderMermaid },
  { checker: "video", htmlCreator: htmlVideo, render: renderVideo },
  { checker: "chart", htmlCreator: htmlCharts, render: renderCharts },
]);

export default VanillaMarkdown;
