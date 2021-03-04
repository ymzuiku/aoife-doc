import "aoife";
import { MarkdownBook } from "../lib";

export function App() {
  return <MarkdownBook url="/md.json" />;
}

document.body.append(<App />);
