export interface MarkdownList {
  name: string;
  text: string;
}

export interface MarkdownData {
  title: string;
  path: string;
  verson: string;
  files: string[];
  data: MarkdownList[];
}
