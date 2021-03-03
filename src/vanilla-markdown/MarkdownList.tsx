import { Markdown } from "./Markdown";
import css from "template-css";

export interface MarkdownTextList {
  name: string;
  text: string;
}

export const MarkdownList = ({
  textList,
}: {
  textList: MarkdownTextList[];
}) => {
  const state = {
    num: 0,
  };
  return (
    <div class="aoife-markdown-book">
      <div>line</div>
      <Markdown text={textList[state.num] && textList[state.num].text} />
    </div>
  );
};

css`
  .aoife-markdown-book {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
`;
