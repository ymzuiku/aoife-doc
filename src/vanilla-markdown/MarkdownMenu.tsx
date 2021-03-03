import { MarkdownList } from "./types";

export const MarkdownMenu = ({
  state,
  title,
  data,
}: {
  state: any;
  title: string;
  data: MarkdownList[];
}) => {
  return (
    <div class="menu-real">
      <div class="menu-title">{title || "Aofie Document"}</div>
      {data.map((item, i) => {
        return (
          <div
            class={() => [state.num === i && "menu-item-selected", "menu-item"]}
            onclick={() => {
              state.num = i;
              aoife.next(".menu-item, .aoife-markdown-page-md");
              document.documentElement.scrollTo({ top: 0 });
            }}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
};
