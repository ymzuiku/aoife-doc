import css from "template-css";
import { actions } from "./actions";
import { MarkdownList } from "./types";

export const MarkdownMenu = ({
  state,
  title,
  version,
  data,
  homepage,
}: {
  state: any;
  title: string;
  version: string;
  homepage?: string;
  data: MarkdownList[];
}) => {
  return (
    <div class="menu">
      <div
        class={["menu-title", homepage && "menu-have-home-page"]}
        onclick={() => {
          if (homepage) {
            window.open(homepage);
          }
        }}
      >
        {title || "Aofie Document"}
      </div>
      {version && <div class="menu-version">{version}</div>}
      <div class="menu-items">
        {data.map((item, i) => {
          return (
            <div
              class={() => [
                state.num === i && "menu-item-selected",
                "menu-item",
              ]}
              onclick={() => {
                actions.changeUrl("/" + item.name, state, i);
              }}
            >
              {item.name}
            </div>
          );
        })}
      </div>
      <div
        class="menu-footer"
        onclick={() => window.open("https://github.com/ymzuiku/aoife-doc")}
      >
        Powered by <span class="by-aoife-doc">Aoife-doc</span>
      </div>
    </div>
  );
};

css`
  .aoife-markdown-page .menu {
    display: grid;
    grid-template-rows: auto auto 1fr auto;
    height: 100%;
    box-sizing: border-box;
    padding: 20px 0px 20px 60px;
  }
  .aoife-markdown-page .menu-items {
    overflow: auto;
  }
  .aoife-markdown-page .menu-have-home-page {
    color: hsl(210, 60%, 50%);
    cursor: pointer;
    border-radius: 10px;
    margin-right: 6px;
  }
  .aoife-markdown-page .menu-have-home-page:hover {
    background: hsla(210, 20%, 40%, 0.1);
  }
  .aoife-markdown-page .menu-title {
    font-size: 20px;
    font-weight: 500;
    padding: 20px;
    padding-left: 12px;
  }
  .aoife-markdown-page .menu-version {
    font-size: 12px;
    font-weight: 500;
    padding: 4px;
    padding-bottom: 20px;
    padding-left: 12px;
    opacity: 0.4;
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
      position: fixed;
      width: var(--vmdb-menu-width);
      height: 100vh;
      top: 0px;
      left: 0px;
    }
  }

  .aoife-markdown-page .menu-footer {
    cursor: pointer;
    font-size: 12px;
    opacity: 0.5;
    padding-top: 16px;
    padding-left: 16px;
    zoom: 0.8;
  }
  @media (min-width: 1200px) {
    .aoife-markdown-page .menu-footer {
      zoom: 1;
    }
  }
  .by-aoife-doc {
    font-size: 14px;
    font-family: monospace;
    background: hsl(210, 20%, 40%);
    color: hsl(210, 0%, 100%);
    padding: 2px 4px;
    border-radius: 4px;
  }
  .aoife-github {
    color: hsl(210, 20%, 40%);
    display: inline-block;
    line-height: 20px;
    font-size: 18px;
    transform: translate(4px, 3px);
  }
`;
