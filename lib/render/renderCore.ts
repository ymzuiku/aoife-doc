import marked from "marked";
import "./markdownBaseCss";

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

interface ExtendsItem {
  checker?: string;
  htmlCreator?: (code: string) => string;
  render: (view: HTMLElement) => Promise<any>;
}

export const renderCore = (items: ExtendsItem[]) => {
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
      items.forEach((item) => {
        if (item.checker && item.htmlCreator) {
          if (new RegExp(item.checker).test(language)) {
            return item.htmlCreator(code);
          }
        }
      });
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

    // 应用所有扩展
    items.forEach((item) => {
      item.render(view);
    });

    return view;
  }

  return VanillaMarkdown;
};
