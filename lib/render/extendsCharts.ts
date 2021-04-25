export const htmlCharts = (code: string) => {
  return `<div id="vid-${Math.random()
    .toString()
    .replace(
      ".",
      ""
    )}" class="md-chart videoWrapper" data-code="${code.trim()}" style="border-radius:var(--vmdb-radius); overflow:hidden" ></div>`;
};

export const renderCharts = async (view: HTMLElement) => {
  const apexcharts = await import("apexcharts").then((e) => {
    return e.default;
  });
  return apexcharts;
};
