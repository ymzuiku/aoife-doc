import css from "template-css";
import { actions } from "./actions";

const Arrow = () => {
  return (
    <svg
      t="1614958133927"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="4404"
      width="1.5em"
      height="1.5em"
    >
      <path
        d="M866.92864 476.29312a35.84 35.84 0 1 1 0 71.68h-696.32a35.82976 35.82976 0 0 1-35.84-35.84c0-19.80416 16.03584-35.84 35.84-35.84h696.32z"
        fill="currentColor"
        p-id="4405"
      ></path>
      <path
        d="M221.2864 512.13312l213.59616-213.59616a35.84 35.84 0 0 0-50.67776-50.688l-238.9504 238.9504a35.84 35.84 0 0 0 0 50.67776l238.9504 238.9504a35.84 35.84 0 0 0 50.67776-50.688l-213.59616-213.6064z"
        fill="currentColor"
        p-id="4406"
      ></path>
    </svg>
  );
};

export const MarkdownFooter = ({
  state,
  data,
  num,
}: {
  state: any;
  data: any;
  num: number;
}) => {
  const changePage = (n: number) => {
    actions.changeUrl("/" + data[n].name, state, n);
  };
  const previous = () => {
    if (!data[num - 1]) {
      return;
    }
    changePage(num - 1);
  };

  const next = () => {
    if (!data[num + 1]) {
      return;
    }
    changePage(num + 1);
  };

  if (num === data.length - 1) {
    return (
      <div class="aoife-markdown-page-btn">
        <div class="btn left" onclick={previous}>
          <div class="arrow arrow-left">
            <Arrow />
          </div>
          <div class="title">
            <label class="tip">Previous</label>
            <span class="name">{data[num - 1].name}</span>
          </div>
        </div>
      </div>
    );
  }

  if (num === 0) {
    return (
      <div class="aoife-markdown-page-btn">
        <div class="btn right" onclick={next}>
          <div class="title">
            <label class="tip">Next</label>
            <span class="name">{data[num + 1].name}</span>
          </div>
          <div class="arrow arrow-right">
            <Arrow />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div class="aoife-markdown-page-btn double">
      <div class="btn left" onclick={previous}>
        <div class="arrow arrow-left">
          <Arrow />
        </div>
        <div class="title">
          <label class="tip">Previous</label>
          <span class="name">{data[num - 1].name}</span>
        </div>
      </div>
      <div class="btn right" onclick={next}>
        <div class="title">
          <label class="tip">Next</label>
          <span class="name">{data[num + 1].name}</span>
        </div>
        <div class="arrow arrow-right">
          <Arrow />
        </div>
      </div>
    </div>
  );
};

css`
  .aoife-markdown-page-btn {
    padding: 20px 5% 20px;
    broder: 1px solid rgba(0, 0, 0, 0.2);
  }
  .aoife-markdown-page-btn.double {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
  .aoife-markdown-page-btn > .btn {
    cursor: pointer;
    transition: all 0.2s ease-out;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.03);
    border-radius: 4px;
    padding: 20px;
    display: grid;
    grid-auto-flow: column;
    grid-gap: 10px;
  }
  @media (min-width: 640px) {
    .aoife-markdown-page-btn > .btn:hover {
      border: 1px solid hsl(210, 50%, 50%);
      color: hsl(210, 50%, 50%);
    }
    .aoife-markdown-page-btn > .btn:hover .arrow-left {
      transform: translate(-6px, 0px);
    }
    .aoife-markdown-page-btn > .btn:hover .arrow-right {
      transform: scaleX(-1) translate(-6px, 0px);
    }
  }
  .aoife-markdown-page-btn > .btn.left {
    grid-template-columns: 1fr auto;
  }
  .aoife-markdown-page-btn > .btn .arrow {
    grid-template-columns: 1fr auto;
  }
  .aoife-markdown-page-btn > .btn.right {
    grid-template-columns: auto 1fr;
  }
  .aoife-markdown-page-btn > .btn .title {
    display: grid;
    grid-auto-flow: row;
  }
  .aoife-markdown-page-btn > .btn .tip {
    font-size: 12px;
    color: hsl(210, 0%, 40%);
    margin-bottom: 10px;
  }
  .aoife-markdown-page-btn > .btn .name {
    font-size: 16px;
    color: hsl(210, 20%, 20%);
  }
  .aoife-markdown-page-btn > .btn .arrow-left {
    font-size: 16px;
    color: hsl(210, 20%, 20%);
    display: grid;
    transition: all 0.2s ease-out;
    place-content: center start;
  }
  .aoife-markdown-page-btn > .btn .arrow-right {
    font-size: 16px;
    color: hsl(210, 20%, 20%);
    display: grid;
    place-content: center start;
    transition: all 0.2s ease-out;
    transform: scaleX(-1);
  }
`;
