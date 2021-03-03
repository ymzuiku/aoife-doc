import "./prism";

export type PrismTheme =
  | "gitbook"
  | "solarized"
  | "tomorrow"
  | "coy"
  | "dark"
  | "thin-dark"
  | "default"
  | "okaidia"
  | "twilight"
  | "darcula";

export const usePrismTheme = (theme: PrismTheme) => {
  const cb = ({ css }: any) => {
    const old = document.getElementById("prism-theme");
    if (old) {
      old.textContent = css;
      return;
    }
    const sty = document.createElement("style");
    sty.textContent = css;
    sty.id = "prism-theme";
    document.head.appendChild(sty);
  };
  if (theme === "gitbook") {
    import("./theme/gitbook").then(cb);
  } else if (theme === "solarized") {
    import("./theme/solarized").then(cb);
  } else if (theme === "tomorrow") {
    import("./theme/tomorrow").then(cb);
  } else if (theme === "coy") {
    import("./theme/coy").then(cb);
  } else if (theme === "dark") {
    import("./theme/dark").then(cb);
  } else if (theme === "thin-dark") {
    import("./theme/dark").then(cb);
  } else if (theme === "default") {
    import("./theme/default").then(cb);
  } else if (theme === "okaidia") {
    import("./theme/okaidia").then(cb);
  } else if (theme === "twilight") {
    import("./theme/twilight").then(cb);
  } else if (theme === "darcula") {
    import("./theme/darcula").then(cb);
  }
};

type HighlightCallback = (element: Element) => void;

interface IPrism {
  highlight(text: string, grammar: any, language: string): string;
  highlightAll(async?: boolean, callback?: HighlightCallback): void;
  highlightAllUnder(
    container: ParentNode,
    async?: boolean,
    callback?: HighlightCallback
  ): void;
  highlightElement(
    element: Element,
    async?: boolean,
    callback?: HighlightCallback
  ): void;
  Token: Function;
  hooks: {
    add: Function;
    all: any;
    run: Function;
  };
  languages: { [key: string]: any };
  plugins: any;
  util: {
    clone: any;
    currentScript: any;
    encode: any;
    getLanguage: any;
    isActive: any;
    objId: any;
    type: any;
  };
}

const Prism = (window as any).Prism as IPrism;

export { Prism };
