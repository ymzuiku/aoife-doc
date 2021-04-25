export const renderPrism = () => {
  import("./prism/index").then(({ Prism }) => {
    try {
      Prism.highlightAll();
    } catch (err) {
      console.warn(err);
    }
  });
};
