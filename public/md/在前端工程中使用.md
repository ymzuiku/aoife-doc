# 使用原生 JS 或 React、Vue

## 安装

```bash
$ yarn add aoife-doc
```

## 渲染整个文档

```jsx
import { MarkdownBook } from "aoife-doc";

const ele = MarkdownBook({ url: "/md.json" });

document.body.append(ele);
```

## 渲染一个 markdown 文件, 包含右侧目录

```jsx
import { Markdown } from "aoife-doc";

const ele = Markdown({
  text: `
# hello 

- title 1
- title 2
`,
});

document.body.append(ele);
```

# 使用 aoife 框架

aoife 是一个高性能原生的前端框架，可以规避现代框架众多概念的心智疲倦。由于 aoife 框架非常小，仅有约 6kb，aoife-doc 内部使用的是 aoife 框架。

## 创建工程

```bash
$ npx aoife-app my-document
$ cd my-document
$ yarn add aoife-doc
$ yarn
```

## 渲染整个文档

```jsx
import { MarkdownBook } from "aoife-doc";

export function App() {
  return <MarkdownBook url="/md.json" />;
}

document.body.append(<App />);
```

## 渲染一个 markdown 文件, 包含右侧目录

```jsx
import { Markdown } from "aoife-doc";

const text = `
# hello 

- title 1
- title 2
`;

export function App() {
  return <Markdown text={text} />;
}

document.body.append(<App />);
```
