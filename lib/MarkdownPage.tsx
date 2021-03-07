import { Markdown, markdownState } from "./Markdown";
import css from "template-css";
import { MarkdownList } from "./types";
import { MarkdownMenu } from "./MarkdownMenu";
import { MarkdownHeader } from "./MarkdownHeader";
import { MarkdownFooter } from "./MarkdownFooter";
import { getNum } from "./utils";

export interface MarkdownData {
  title: string;
  path: string;
  version: string;
  files: string[];
  data: MarkdownList[];
}

export const MarkdownPage = ({ version, title, data }: MarkdownData) => {
  const state = {
    num: getNum(data),
    showMobileMenu: false,
    showPcMenu: true,
  };
  return (
    <div class="aoife-markdown-page">
      <MarkdownHeader
        version={version}
        data={data}
        title={title}
        state={state}
        markdownState={markdownState}
      />
      <div class="content">
        <div class="menu-box">
          <MarkdownMenu
            version={version}
            title={title}
            state={state}
            data={data}
          />
        </div>
        <div class="aoife-markdown-page-md">
          {() => (
            <Markdown
              footer={
                <MarkdownFooter state={state} num={state.num} data={data} />
              }
              text={data[state.num] && data[state.num].text}
            />
          )}
        </div>
      </div>
    </div>
  );
};

css`
  .aoife-markdown-page-md {
  }
  .aoife-markdown-page {
    min-height: 100vh;
    font-family: var(--vmdb-fm);
    display: grid;
  }
  .aoife-markdown-page .content {
    display: block;
    box-sizing: border-box;
    padding-top: var(--vmdb-header);
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
      padding-top: 0px;
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
