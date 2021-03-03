import { Markdown, markdownState } from "./Markdown";
import css from "template-css";

export interface MarkdownList {
  name: string;
  text: string;
}

export interface MarkdownData {
  title: string;
  path: string;
  verson: string;
  files: string[];
  data: MarkdownList[];
}

export const MarkdownPage = ({ data }: MarkdownData) => {
  const state = {
    num: 0,
    showMobileMenu: false,
    showPcMenu: true,
  };
  return (
    <div class="aoife-markdown-page">
      <div
        class={() => [
          "header js-aoife-markdown-header",
          markdownState.isScrollDown && "header-shadow",
        ]}
      >
        bar
      </div>
      <div class="content">
        <div class="menu">
          <div class="menu-real">
            <div>button</div>
            {data.map((item, i) => {
              return (
                <div
                  class={() => [
                    state.num === i && "menu-item-selected",
                    "menu-item",
                  ]}
                  onclick={() => {
                    state.num = i;
                    aoife.next(".menu-item, .aoife-markdown-page-md");
                    document.documentElement.scrollTo({ top: 0 });
                  }}
                >
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>
        <div class="aoife-markdown-page-md">
          {() => <Markdown text={data[state.num] && data[state.num].text} />}
        </div>
      </div>
    </div>
  );
};

css`
  .aoife-markdown-page {
    display: grid;
    grid-template-rows: var(--vmdb-header) 1fr;
  }
  .aoife-markdown-page .header {
    display: block;
    position: sticky;
    top: 0px;
    left: 0px;
    background: #fff;
    z-index: 1000;
    border-bottom: 1px solid var(--vmdb-line);
    transition: all 0.2s ease-out;
  }
  .aoife-markdown-page .header-shadow {
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.04);
  }
  @media (min-width: 640px) {
    .aoife-markdown-page .header {
      display: none;
    }
  }
  .aoife-markdown-page .content {
    display: block;
  }
  .aoife-markdown-page .menu {
    position: relative;
    display: none;
  }
  .aoife-markdown-page-md {
    padding: 20px 0px;
  }
  .aoife-markdown-page .menu-real {
    box-sizing: border-box;
    padding: 60px 0px 60px 60px;
  }
  .aoife-markdown-page .menu-item {
    font-family: var(--vmdb-fm);
    margin: 1px;
    margin-right: 0px;
    padding: 12px;
    cursor: pointer;
    border-top-left-radius: var(--vmdb-radius);
    border-bottom-left-radius: var(--vmdb-radius);
    font-size: 14px;
    color: rgb(59, 69, 78);
    border: 1px solid rgba(0, 0, 0, 0);
  }
  .aoife-markdown-page .menu-item:hover {
    background: rgba(0, 0, 0, 0.05);
  }
  .aoife-markdown-page .menu-item-selected {
    color: hsl(220, 69%, 50%);
    border: 1px solid var(--vmdb-line);
    background: #fff;
  }
  .aoife-markdown-page .menu-item-selected:hover {
    background: rgba(255, 255, 255, 0.8);
  }
  @media (min-width: 640px) {
    .aoife-markdown-page .menu {
      position: relative;
      display: grid;
    }
    .aoife-markdown-page .menu-real {
      position: fixed;
      width: 360px;
      height: 100vw;
      top: 0px;
      left: 0px;
    }
    .aoife-markdown-page .content {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 360px 1fr;
    }
  }
  .aoife-markdown-page .menu {
    background: #f5f7f9;
    border-right: 1px solid var(--vmdb-line);
  }
`;
