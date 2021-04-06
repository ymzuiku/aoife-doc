import css from "template-css";
import { actions } from "./actions";
import { MarkdownMenu } from "./MarkdownMenu";
import { menu } from "./svgs";

export const MarkdownHeader = ({
  title,
  version,
  state,
  markdownState,
  data,
  homepage,
}: {
  title: string;
  version: string;
  state: any;
  markdownState: any;
  homepage?: string;
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
      <label
        class={["header-title", homepage && "header-have-home-page"]}
        onclick={() => {
          if (homepage) {
            window.open(homepage);
          }
        }}
      >
        {title || "Aofie Document"}
      </label>
      <span />
      <span
        class="header-info"
        onclick={() => {
          window.scrollTo({ top: 0, behavior: "auto" });
        }}
      >
        {() => state && data && data[state.num] && data[state.num].name}
      </span>
      <span
        class="header-arrow"
        onclick={() => {
          window.scrollTo({ top: 0, behavior: "auto" });
        }}
      >
        <svg
          t="1617685881508"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1921"
          width="1em"
          height="1em"
        >
          <path
            d="M329.745 562.745c-12.497 12.497-12.497 32.758 0 45.255 12.372 12.372 32.354 12.496 44.878 0.371L375 608l126.059-126.059c6.248-6.248 16.379-6.248 22.627 0L649.746 608c12.371 12.372 32.353 12.496 44.877 0.371L695 608c12.372-12.372 12.496-32.354 0.371-44.878l-0.371-0.377-137.373-137.372c-24.743-24.744-64.707-24.991-89.755-0.743l-0.754 0.743-137.373 137.372z"
            p-id="1922"
          ></path>
        </svg>
      </span>
      <div class={() => ["mobile-menu", state.showMobileMenu && "mobile-show"]}>
        <div class="mobile-plan">
          <MarkdownMenu
            version={version}
            title={title}
            data={data}
            state={state}
            homepage={homepage}
          />
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
    border-bottom: 0px solid rgba(0, 0, 0, 0);
    display: grid;
    grid-template-columns: auto auto 1fr auto auto;
    place-content: center start;
  }
  .aoife-markdown-page .header-title {
    font-size: 16px;
    display: grid;
    font-weight: bold;
    align-items: center;
  }
  .aoife-markdown-page .header-info {
    font-size: 12px;
    display: grid;
    align-items: center;
    margin-right: 4px;
  }
  .aoife-markdown-page .header-arrow {
    display: grid;
    align-items: center;
    margin-right: 10px;
  }
  .aoife-markdown-page .header-have-home-page {
    color: hsl(210, 60%, 50%);
    padding: 2px 4px;
    font-weight: bold;
    border-radius: 10px;
  }
  .aoife-markdown-page .header-have-home-page:active {
    background: hsla(210, 20%, 40%, 0.1);
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
    grid-template-columns: 1fr 100px;
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
