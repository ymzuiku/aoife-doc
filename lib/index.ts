import "aoife";
import render from "./render";
import { MarkdownBook } from "./MarkdownBook";
import { MarkdownPage } from "./MarkdownPage";
import { Markdown } from "./Markdown";
import { usePrismTheme } from "./render/prism";

usePrismTheme((window as any).aoifeMarkdownTheme || "gitbook");

export { usePrismTheme, render, MarkdownBook, MarkdownPage, Markdown };

(window as any).MarkdownBook = MarkdownBook;
