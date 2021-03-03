import { Markdown, markdownState } from "./Markdown";
import css from "template-css";
import { menu } from "./svgs";
import { MarkdownData } from "./types";
import { MarkdownMenu } from "./MarkdownMenu";
import { MarkdownHeader } from "./MarkdownHeader";

export const MarkdownPage = ({ title, data }: MarkdownData) => {
  console.log(window.location.hash);
  const num = Number(window.location.hash.replace("#/", ""));
  const state = {
    num: !isNaN(num) ? num : 0,
    showMobileMenu: false,
    showPcMenu: true,
  };
  return (
    <div class="aoife-markdown-page">
      <MarkdownHeader
        data={data}
        title={title}
        state={state}
        markdownState={markdownState}
      />
      <div class="content">
        <div class="menu-box">
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
  .aoife-markdown-page-md {
    padding: 20px 0px;
  }
  .aoife-markdown-page {
    font-family: var(--vmdb-fm);
    display: grid;
  }
  .aoife-markdown-page .content {
    display: block;
    margin-top: var(--vmdb-header);
  }
  .aoife-markdown-page .menu-box {
    position: relative;
    display: none;
  }
  .aoife-markdown-page .menu-box {
    background: #f5f7f9;
    border-right: 1px solid var(--vmdb-line);
  }
  @media (min-width: 900px) {
    .aoife-markdown-page .menu-box {
      position: relative;
      display: grid;
    }
    .aoife-markdown-page .content {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: var(--vmdb-menu-width) 1fr;
      margin-top: 0px;
    }
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
