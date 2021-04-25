import { encode, decode } from "querystring-number";

export const checkCharts = (v: string) => /chart/.test(v);

export const htmlCharts = (code: string) => {
  let _code = encode(code);
  return `<div id="vid-${Math.random()
    .toString()
    .replace(
      ".",
      ""
    )}" class="md-chart videoWrapper" data-code="${_code}" style="border-radius:var(--vmdb-radius); overflow:hidden" ></div>`;
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
          console.log(node);
        } catch (err) {
          console.error(err);
        }
      }
    });
  }
};
