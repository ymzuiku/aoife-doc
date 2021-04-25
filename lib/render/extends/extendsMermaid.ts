const mermaidCache = {} as any;

export const htmlMermaid = (code: string) => {
  const lastHtml = mermaidCache[code];
  if (lastHtml) {
    return `<div style="opacity: 1; text-align:center; transition: opacity 0.1s ease-out; min-height: 10px; padding:10px 0px; overflow:auto; border:0.6px solid var(--vmdb-line); border-radius:var(--vmdb-radius); margin:10px 0px;">${lastHtml}</div>`;
  }

  code = code.trim();

  return `<div data-code="${code}" style="opacity: 0; text-align:center; transition: opacity 0.1s ease-out; min-height: 10px; padding:10px 0px; overflow:auto; margin:10px 0px;" class="mermaid">${code}</div>`;
};

export const renderMermaid = async (view: HTMLElement) => {
  await aoife.waitAppend(view);
  try {
    const nodeList = view.querySelectorAll(".mermaid");

    if (nodeList && nodeList.length > 0) {
      const mermaid = await import("mermaid").then((e) => {
        return e.default;
      });
      mermaid.init(nodeList);
      nodeList.forEach((v) => {
        const code = v.getAttribute("data-code");
        const html = v.innerHTML.trim();
        if (code) {
          mermaidCache[code] = html;
        }
      });
      nodeList.forEach((ele: any) => {
        ele.style.opacity = 1;
        ele.style.minHeight = "auto";
      });
    }
  } catch (err) {
    console.warn("[mermaid]: ", err);
  }
};
