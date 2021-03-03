import render from "./render";
import { MarkdownBook } from "./MarkdownBook";
import { MarkdownPage } from "./MarkdownPage";
import { Markdown } from "./Markdown";
import { usePrismTheme } from "vanilla-prism";

usePrismTheme((window as any).aoifeMarkdownTheme || "gitbook");

export { usePrismTheme, render, MarkdownBook, MarkdownPage, Markdown };
