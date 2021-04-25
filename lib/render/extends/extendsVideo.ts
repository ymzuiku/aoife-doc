import { decode, encode } from "querystring-number";

import { stringToObj } from "../../utils";

export const htmlVideo = (code: string) => {
  return `<div id="vid-${Math.random()
    .toString()
    .replace(".", "")}" class="md-video videoWrapper" data-code="${encode(
    code
  )}" style="border-radius:var(--vmdb-radius); overflow:hidden" ></div>`;
};

export const renderVideo = async (view: HTMLElement) => {
  await aoife.waitAppend(view);
  const videoList = view.querySelectorAll(".md-video");

  if (videoList && videoList.length > 0) {
    import("xgplayer").then((e) => {
      const Player = e.default;

      videoList.forEach((v) => {
        const code = v.getAttribute("data-code");

        if (code) {
          const data = stringToObj(decode(code)!);
          new Player({
            id: v.id,
            autoplay: false,
            volume: 1,
            url: code,
            playsinline: true,
            height: 400,
            width: "100%",
            ...data,
          });
        }
      });
    });
  }
};
