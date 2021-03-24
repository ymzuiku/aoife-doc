import marked from "marked";
import "./githubCss";
import { Prism } from "./prism";

const renderer = new marked.Renderer();
const mermaidCache = {} as any;

export interface MocOptions {
  selector: string;
  text: string;
  raw: string;
  level: number;
  index: number;
  line: number;
  onClick?: Function;
}

export interface MarkdownElement extends HTMLDivElement {
  moc: MocOptions[];
}

function HTMLEncode(html: string) {
  let temp = document.createElement("div");
  temp.textContent = html;
  const output = temp.innerHTML;
  temp = null as any;
  return output;
}

let vid = 0;

renderer.code = function (
  code: string,
  language: string | undefined,
  isEscaped: boolean
): string {
  if (code) {
    if (language === "g" || language === "graph") {
      const lastHtml = mermaidCache[code];
      if (lastHtml) {
        return `<div style="opacity: 1; text-align:center; transition: opacity 0.1s ease-out; min-height: 10px; padding:10px 0px; overflow:auto; border:0.6px solid var(--vmdb-line); border-radius:var(--vmdb-radius); margin:10px 0px;">${lastHtml}</div>`;
      }

      code = code.trim();

      return `<div data-code="${code}" style="opacity: 0; text-align:center; transition: opacity 0.1s ease-out; min-height: 10px; padding:10px 0px; overflow:auto; margin:10px 0px;" class="mermaid">${code}</div>`;
    }
    if (language === "video") {
      vid += 1;
      return `<div id="vid-${vid}" class="md-video videoWrapper" data-url="${code.trim()}" ></div>`;
    }
  }

  let out = `<pre><code class="line-numbers highlight language-${language}">${HTMLEncode(
    code
  )}</code></pre>`;

  return out;
};

import("mermaid");

function VanillaMarkdown(md: string, isGetMoc?: boolean) {
  const moc: MocOptions[] = [];

  if (isGetMoc) {
    (window as any).vmd_moc_click = (i: number) => {
      if (moc && moc[i] && moc[i].onClick) {
        (moc as any)[i].onClick(moc[i].index, moc[i].line);
      }
    };

    // 计算每个 header在第几行
    const lines: number[] = [];
    md.split("\n").forEach((v, i) => {
      if (v[0] === "#") {
        lines.push(i);
      }
      return v;
    });

    let index = -1;
    renderer.heading = (text, level, raw, slugger) => {
      index += 1;

      moc.push({
        selector: ".moc-" + index,
        text,
        raw,
        level,
        index,
        line: lines[index],
      });

      let dataMocFirst = "";

      if (index === 0) {
        dataMocFirst = `data-moc-first="1"`;
      }

      return `<h${level} ${dataMocFirst} data-moc="${index}" onclick="vmd_moc_click(${index})" class="moc-${index}">${text}</h${level}>`;
    };
  }

  const view = document.createElement("div") as MarkdownElement;
  view.className = "vmdb";
  view.style.overflowX = "hidden";
  view.style.padding = "5px 5% 60px 5%";
  view.innerHTML = marked(md, {
    renderer,
    xhtml: true,
  });
  view.moc = moc;

  setTimeout(() => {
    try {
      const nodeList = view.querySelectorAll(".mermaid");
      if (nodeList && nodeList.length) {
        import("mermaid").then((e) => {
          e.default.init(nodeList);
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
        });
      }

      const videoList = view.querySelectorAll(".md-video");
      if (videoList && videoList.length) {
        import("xgplayer").then((e) => {
          const Player = e.default;

          videoList.forEach((v) => {
            const url = v.getAttribute("data-url");
            if (url) {
              const list = url.split("\n");
              const data = {} as any;
              list.forEach((item) => {
                const [key, ...values] = item.split(":").map((v) => v.trim());
                data[key] = values.join(":");
              });
              let player = new Player({
                id: v.id,
                autoplay: true,
                volume: 1,
                url: url,
                playsinline: true,
                height: 400,
                width: "100%",
                ...data,
              });
            }
          });
        });
      }
    } catch (err) {
      console.warn("[mermaid]: ", err);
    }
    try {
      Prism.highlightAll();
    } catch (err) {
      console.warn(err);
    }
  }, 50);

  return view;
}

export default VanillaMarkdown;
