import { encode, decode } from "querystring-number";
import "./extendsCharts.css";

export const htmlCharts = (code: string) => {
  let _code = encode(code);
  return `<div id="vid-${Math.random()
    .toString()
    .replace(".", "")}" class="md-chart" data-code="${_code}" ></div> `;
};

export const renderCharts = async (view: HTMLElement) => {
  await aoife.waitAppend(view);
  const nodes = view.querySelectorAll(".md-chart");
  if (nodes) {
    const apexcharts = await import("apexcharts").then((e) => {
      return e.default;
    });
    nodes.forEach((node) => {
      const code = node.getAttribute("data-code");
      if (code) {
        try {
          const data = JSON.parse(decode(code)!);
          const chart = new apexcharts(node, data);
          chart.render();
        } catch (err) {
          console.error(err);
        }
      }
    });
  }
};
