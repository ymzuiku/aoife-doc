export const renderPrism = async (view: HTMLElement) => {
  await aoife.waitAppend(view);
  import("./prism/index").then(({ Prism }) => {
    try {
      Prism.highlightAll();
    } catch (err) {
      console.warn(err);
    }
  });
};
