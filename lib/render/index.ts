import marked from "marked";
import "./githubCss";

import { renderMermaid, htmlMermaid } from "./extendsMermaid";
import { htmlVideo, renderVideo } from "./extendsVideo";
import { renderPrism } from "./extendsPrism";
import { htmlCharts, renderCharts } from "./extendsCharts";

const renderer = new marked.Renderer();

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

renderer.code = function (
  code: string,
  language: string | undefined,
  isEscaped: boolean
): string {
  if (code && language) {
    language = language.trim();
    if (/chart/.test(language)) {
      return htmlCharts(code);
    }
    if (/graph/.test(language)) {
      return htmlMermaid(code);
    }
    if (/video/.test(language)) {
      return htmlVideo(code);
    }
  }

  let out = `<pre><code class="line-numbers highlight language-${language}">${HTMLEncode(
    code
  )}</code></pre>`;

  return out;
};

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

  renderMermaid(view);
  renderVideo(view);
  renderPrism();
  renderCharts(view);

  return view;
}

export default VanillaMarkdown;
