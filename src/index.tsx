import "aoife";
// import { MarkdownBook } from "aoife-doc";
import { MarkdownBook } from "../lib";

export function App() {
  return <MarkdownBook url="/md/_md.json" />;
}

document.body.append(<App />);
