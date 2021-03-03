import markdown, { usePrismTheme } from ".";
import css from "template-css";

usePrismTheme((window as any).aoifeMarkdownTheme || "gitbook");

const state = {
  viewIndex: 0,
  detail: false,
};

window.addEventListener("scroll", (e) => {
  const eles = document.body.querySelectorAll(
    ".aoife-markdown-page h1[data-moc], .aoife-markdown-page h2[data-moc]"
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
  if (minEl !== state.viewIndex) {
    state.viewIndex = minEl;
    aoife.next(".moc-real");
  }
});

export const Markdown = ({ text }: { text: string }) => {
  const ele = markdown(text, true);

  const out = (
    <div class="aoife-markdown-page">
      {ele}
      <div class="moc">
        <div class="moc-real">
          <div
            class="moc-detail"
            onclick={() => {
              state.detail = !state.detail;
              aoife.next(".moc-real");
            }}
          >
            {() => (state.detail ? "Hidden detail" : "Show detail")}
          </div>
          {ele.moc.map((item) => {
            // if (item.level > 4) {
            //   return;
            // }
            return (
              <div
                class={() => [
                  "moc-titel-" + item.index,
                  "moc-level-item",
                  "moc-level-" + item.level,
                  !state.detail && item.level > 2 && "moc-level-none",
                  state.viewIndex === item.index && "moc-title-in-page",
                ]}
                onclick={() => {
                  const e = document.querySelector(
                    item.selector
                  ) as HTMLElement;
                  if (e) {
                    document.documentElement.scrollTo({
                      top: e.offsetTop - 20,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                {item.text}
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
  .aoife-markdown-page {
    display: grid;
    grid-auto-flow: row;
  }
  .aoife-markdown-page > .moc {
    position: relative;
    width: 100%;
    font-family: var(--vmdb-fm);
    margin-bottom: 30px;
  }

  @media (min-width: 640px) {
    .aoife-markdown-page {
      display: grid;
      grid-template-columns: 1fr 200px;
      /* grid-auto-flow: column; */
    }
    .aoife-markdown-page > .moc {
      position: relative;
      width: 200px;
      font-family: var(--vmdb-fm);
    }
  }

  .aoife-markdown-page > .moc > .moc-real {
    position: sticky;
    top: 20px;
    left: 0px;
    font-size: 12px;
    line-height: 1.5;
    font-weight: 500;
    color: rgb(116, 129, 141);
    font-size: 12px;
    word-break: break-all;
    border-left: 1px solid var(--vmdb-line);
  }
  .aoife-markdown-page .moc-real .moc-level-none {
    display: none;
  }
  .aoife-markdown-page .moc-real .moc-level-1 {
    padding-left: 16px;
    cursor: pointer;
    margin-top: 6px;
  }
  .aoife-markdown-page .moc-real .moc-level-2 {
    padding-left: 24px;
    cursor: pointer;
    margin-top: 6px;
  }
  .aoife-markdown-page .moc-real .moc-level-3 {
    padding-left: 36px;
    cursor: pointer;
    margin-top: 6px;
    font-size: 10px;
  }
  .aoife-markdown-page .moc-real .moc-level-4 {
    padding-left: 42px;
    cursor: pointer;
    margin-top: 6px;
    font-size: 10px;
  }
  .aoife-markdown-page .moc-real .moc-level-5 {
    padding-left: 52px;
    cursor: pointer;
    margin-top: 6px;
    font-size: 10px;
  }
  .aoife-markdown-page .moc-real .moc-level-6 {
    padding-left: 62px;
    cursor: pointer;
    margin-top: 6px;
    font-size: 10px;
  }
  .aoife-markdown-page .moc-real .moc-level-item:hover {
    color: hsl(220, 50%, 50%);
  }
  .aoife-markdown-page .moc-detail {
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
  .aoife-markdown-page .moc-level-item {
    /* color: hsl(220, 50%, 50%); */
    border-left: 4px solid hsl(220, 60%, 60%, 0);
  }
  .moc-title-in-page {
    border-left: 4px solid var(--vmdb-line) !important;
    /* background: hsl(220, 50%, 95%); */
  }
`;
