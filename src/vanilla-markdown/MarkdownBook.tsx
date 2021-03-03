import { MarkdownList, MarkdownTextList } from "./MarkdownList";

export const MarkdownBook = ({ url }: { url: string }) => {
  fetch(url + "?t=" + Date.now())
    .then((v) => v.json())
    .then((data) => {
      const promiseList = data.files.map((file: string) => {
        if (!/\.md$/.test(file)) {
          file += ".md";
        }
        return fetch(
          data.path + file + "?version=" + data.version || "0.0.0"
        ).then((v) => v.text());
      });

      Promise.all(promiseList).then((texts) => {
        const list = [] as MarkdownTextList[];
        texts.forEach((text, i) => {
          list.push({ name: data.files[i], text: text as string });
        });
        out.innerHTML = "";
        out.append(<MarkdownList textList={list} />);
      });
    });

  const out = <div>Loading...</div>;
  return out;
};
