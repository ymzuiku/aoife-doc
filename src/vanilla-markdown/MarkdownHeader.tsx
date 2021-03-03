import css from "template-css";
import { actions } from "./actions";
import { MarkdownMenu } from "./MarkdownMenu";
import { menu } from "./svgs";

export const MarkdownHeader = ({
  title,
  state,
  markdownState,
  data,
}: {
  title: string;
  state: any;
  markdownState: any;
  data: any;
}) => {
  return (
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
          actions.changeMobileMenuShow(state, true);
        }}
      ></div>
      <label class="header-title">{title || "Aofie Document"}</label>
      <div class={() => ["mobile-menu", state.showMobileMenu && "mobile-show"]}>
        <div class="mobile-plan">
          <MarkdownMenu title={title} data={data} state={state} />
        </div>
        <div
          class="mobile-mask"
          onclick={() => {
            actions.changeMobileMenuShow(state, false);
          }}
        ></div>
      </div>
    </div>
  );
};

css`
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
  @media (min-width: 900px) {
    .aoife-markdown-page .header {
      display: none;
    }
  }
  .aoife-markdown-page .mobile-menu {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    display: grid;
    background: rgba(0, 0, 0, 0);
    transition: all 0.3s ease-out;
    grid-template-columns: 1fr minmax(20%, 150px);
  }
  .aoife-markdown-page .mobile-menu .mobile-plan {
    padding: 0px;
    margin: 0px;
    height: 100vh;
    background: #f5f7f9;
    border-right: 1px solid var(--vmdb-line);
  }

  /* 点击动画 */
  .aoife-markdown-page .mobile-menu > div {
    transition: all 0.2s ease-out;
    transform: translateX(-100vw);
  }
  .aoife-markdown-page .mobile-menu {
    pointer-events: none;
  }
  .aoife-markdown-page .mobile-show {
    pointer-events: auto;
    background: rgba(0, 0, 0, 0.5);
  }
  .aoife-markdown-page .mobile-show > div {
    transform: translateX(0px) !important;
  }
`;
