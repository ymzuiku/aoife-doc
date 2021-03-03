import { Markdown, markdownState } from "./Markdown";
import css from "template-css";
import { menu } from "./svgs";
import { MarkdownData } from "./types";
import { MarkdownMenu } from "./MarkdownMenu";

export const MarkdownPage = ({ title, data }: MarkdownData) => {
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
        <div
          class="header-icon"
          innerHTML={menu}
          onclick={() => {
            state.showMobileMenu = true;
            aoife.next(".aoife-markdown-page .menu");
          }}
        ></div>
        <label class="header-title">{title || "Aofie Document"}</label>
      </div>
      <div class="content">
        <div class="menu">
          <MarkdownMenu title={title} state={state} data={data} />
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
    font-family: var(--vmdb-fm);
    display: grid;
  }
  .aoife-markdown-page .header {
    position: fixed;
    height: var(--vmdb-header);
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.04);
    width: 100vw;
    top: 0px;
    left: 0px;
    background: #fff;
    z-index: 1000;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease-out;
    display: grid;
    grid-auto-flow: column;
    place-content: center start;
  }
  .aoife-markdown-page .header-title {
    font-size: 16px;
    display: grid;
    align-items: center;
  }
  .aoife-markdown-page .header-shadow {
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.04);
  }
  .aoife-markdown-page .header-icon {
    width: 40px;
    height: 40px;
    display: grid;
    margin: 0px 10px;
    border-radius: 4px;
    place-content: center;
  }
  .aoife-markdown-page .header-icon:active {
    background: rgba(0, 0, 0, 0.1);
  }
  .aoife-markdown-page .content {
    display: block;
    margin-top: var(--vmdb-header);
  }
  @media (min-width: 900px) {
    .aoife-markdown-page .header {
      display: none;
    }
    .aoife-markdown-page .content {
      display: block;
      margin-top: 0px;
    }
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
    padding: 20px 0px 60px 60px;
  }
  .aoife-markdown-page .menu-title {
    font-size: 20px;
    font-weight: 500;
    padding: 20px;
    padding-left: 12px;
  }
  .aoife-markdown-page .menu-item {
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
  @media (min-width: 900px) {
    .aoife-markdown-page .menu {
      position: relative;
      display: grid;
    }
    .aoife-markdown-page .menu-real {
      position: fixed;
      width: var(--vmdb-menu-width);
      height: 100vw;
      top: 0px;
      left: 0px;
    }
    .aoife-markdown-page .content {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: var(--vmdb-menu-width) 1fr;
    }
  }
  .aoife-markdown-page .menu {
    background: #f5f7f9;
    border-right: 1px solid var(--vmdb-line);
  }
  @media (min-width: 900px) {
    .aoife-markdown-page {
      --vmdb-menu-width: 240px;
    }
  }
  @media (min-width: 1200px) {
    .aoife-markdown-page {
      --vmdb-menu-width: 300px;
    }
  }
  @media (min-width: 1700px) {
    .aoife-markdown-page {
      --vmdb-menu-width: 340px;
    }
  }
`;
