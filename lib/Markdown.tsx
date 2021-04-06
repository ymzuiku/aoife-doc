import markdown from "./render";
import css from "template-css";

export const markdownState = {
  viewIndex: 0,
  detail: false,
  isScrollDown: false,
};

window.addEventListener("scroll", (e) => {
  const eles = document.body.querySelectorAll(
    ".aoife-markdown h1[data-moc], .aoife-markdown h2[data-moc]"
  );

  let minEl = 9999;
  eles.forEach((ele) => {
    const rect = ele.getBoundingClientRect();
    if (rect.bottom > -50) {
      const index = Number(ele.getAttribute("data-moc"));
      if (index < minEl) {
        minEl = index;
      }
    }
  });
  if (
    document.documentElement.scrollTop > 100 &&
    markdownState.isScrollDown === false
  ) {
    markdownState.isScrollDown = true;
    aoife.next(".js-aoife-markdown-header");
  }
  if (
    document.documentElement.scrollTop < 100 &&
    markdownState.isScrollDown === true
  ) {
    markdownState.isScrollDown = false;
    aoife.next(".js-aoife-markdown-header");
  }
  if (minEl !== markdownState.viewIndex) {
    markdownState.viewIndex = minEl;
    aoife.next(".moc-real");
  }
});

export const Markdown = ({
  text,
  footer,
}: {
  text: string;
  footer?: HTMLElement;
}) => {
  const ele = markdown(text, true);

  const out = (
    <div class="aoife-markdown">
      <div class="aoife-markdown-content">
        {ele}
        {footer && footer}
      </div>
      <div class="moc">
        <div class="moc-real">
          <div
            class="moc-detail"
            onclick={() => {
              markdownState.detail = !markdownState.detail;
              aoife.next(".moc-real");
            }}
          >
            {() => (markdownState.detail ? "Hidden detail" : "Show detail")}
          </div>
          {ele.moc.map((item) => {
            return (
              <div
                class={() => [
                  "moc-titel-" + item.index,
                  "moc-level-item",
                  "moc-level-" + item.level,
                  !markdownState.detail && item.level > 2 && "moc-level-none",
                  markdownState.viewIndex === item.index && "moc-title-in-page",
                ]}
                onclick={() => {
                  const e = document.querySelector(
                    item.selector
                  ) as HTMLElement;
                  if (e) {
                    window.scrollTo({
                      top: e.offsetTop - 20,
                      behavior: "auto",
                    });
                  }
                }}
              >
                {item.raw}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  return out;
};

css`
  .aoife-markdown {
    display: grid;
    grid-template-areas: "moc" "content";
    position: relative;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  }
  .aoife-markdown-content {
    display: grid;
    grid-area: content;
    padding-bottom: 60px;
    grid-auto-flow: row;
  }
  .aoife-markdown > .moc {
    grid-area: moc;
    position: relative;
    box-sizing: border-box;
    width: 100%;
    font-family: var(--vmdb-fm);
    padding: 20px;
    padding-bottom: 0px;
  }

  @media (min-width: 640px) {
    .aoife-markdown {
      grid-template-areas: "content moc";
    }
    .aoife-markdown > .moc {
      position: relative;
      margin-bottom: 30px;
      font-family: var(--vmdb-fm);
    }
  }

  .aoife-markdown > .moc > .moc-real {
    position: static;
    top: 20px;
    padding-bottom: 20px;
    box-sizing: border-box;
    left: 0px;
    height: auto;
    max-height: calc(100% - 20px);
    padding-right: 20px;
    line-height: 1.5;
    font-weight: 500;
    color: rgb(116, 129, 141);
    font-size: 12px;
    word-break: break-all;
    border-left: 1px solid var(--vmdb-line);
  }

  @media (min-width: 640px) {
    .aoife-markdown > .moc > .moc-real {
      position: sticky;
    }
  }

  .aoife-markdown .moc-real .moc-level-none {
    display: none;
  }
  .aoife-markdown .moc-real .moc-level-item {
    cursor: pointer;
    margin-top: 10px;
  }
  .aoife-markdown .moc-real .moc-level-1 {
    padding-left: 16px;
  }
  .aoife-markdown .moc-real .moc-level-2 {
    padding-left: 30px;
  }
  .aoife-markdown .moc-real .moc-level-3 {
    padding-left: 40px;
    font-size: 10px;
  }
  .aoife-markdown .moc-real .moc-level-4 {
    padding-left: 50px;
    font-size: 10px;
  }
  .aoife-markdown .moc-real .moc-level-5 {
    padding-left: 56px;
    font-size: 10px;
  }
  .aoife-markdown .moc-real .moc-level-6 {
    padding-left: 62px;
    font-size: 10px;
  }
  .aoife-markdown .moc-real .moc-level-item:hover {
    color: hsl(220, 50%, 50%);
  }
  .aoife-markdown .moc-detail {
    cursor: pointer;
    padding: 2px 6px;
    font-size: 10px;
    border-radius: 4px;
    user-select: none;
    margin-left: 16px;
    margin-bottom: 16px;
    display: inline-block;
    border: 1px solid var(--vmdb-line);
  }
  .aoife-markdown .moc-level-item {
    /* color: hsl(220, 50%, 50%); */
    border-left: 4px solid hsl(220, 60%, 60%, 0);
  }
  .moc-title-in-page {
    color: hsl(220, 50%, 50%);
    border-left: 4px solid var(--vmdb-line) !important;
    /* background: hsl(220, 50%, 95%); */
  }
`;
