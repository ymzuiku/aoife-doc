import css from "template-css";

css`
  :root {
    --vmdb-header: 50px;
    --vmdb-radius: 6px;
    --vmdb-line: #ddeeee;
    --vmdb-menu-width: 240px;
    --vmdb-fm: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
      sans-serif, Apple Color Emoji, Segoe UI Emoji;
  }
  .vmdb pre {
    border-radius: var(--vmdb-radius) !important;
  }
  .vmdb pre > code {
    white-space: break-spaces !important;
    word-break: break-all !important;
  }
  .vmdb {
    -moz-user-select: auto !important;
    -webkit-user-select: auto !important;
    -ms-user-select: auto !important;
    user-select: auto !important;
  }
  .vmdb .octicon {
    display: inline-block;
    fill: currentColor;
    vertical-align: text-bottom;
  }
  .vmdb .anchor {
    float: left;
    line-height: 1;
    margin-left: -20px;
    padding-right: 4px;
  }

  .vmdb .anchor:focus {
    outline: none;
  }

  .vmdb h1 .octicon-link,
  .vmdb h2 .octicon-link,
  .vmdb h3 .octicon-link,
  .vmdb h4 .octicon-link,
  .vmdb h5 .octicon-link,
  .vmdb h6 .octicon-link {
    color: #1b1f23;
    vertical-align: middle;
    visibility: hidden;
  }

  .vmdb h1:hover .anchor,
  .vmdb h2:hover .anchor,
  .vmdb h3:hover .anchor,
  .vmdb h4:hover .anchor,
  .vmdb h5:hover .anchor,
  .vmdb h6:hover .anchor {
    text-decoration: none;
  }

  .vmdb h1:hover .anchor .octicon-link,
  .vmdb h2:hover .anchor .octicon-link,
  .vmdb h3:hover .anchor .octicon-link,
  .vmdb h4:hover .anchor .octicon-link,
  .vmdb h5:hover .anchor .octicon-link,
  .vmdb h6:hover .anchor .octicon-link {
    visibility: visible;
  }

  .vmdb h1:hover .anchor .octicon-link:before,
  .vmdb h2:hover .anchor .octicon-link:before,
  .vmdb h3:hover .anchor .octicon-link:before,
  .vmdb h4:hover .anchor .octicon-link:before,
  .vmdb h5:hover .anchor .octicon-link:before,
  .vmdb h6:hover .anchor .octicon-link:before {
    width: 16px;
    height: 16px;
    content: " ";
    display: inline-block;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' width='16' height='16' aria-hidden='true'%3E%3Cpath fill-rule='evenodd' d='M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z'%3E%3C/path%3E%3C/svg%3E");
  }
  .vmdb {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    line-height: 1.5;
    // color: #24292e;
    color: #3d454d;
    font-family: var(--vmdb-fm);
    font-size: 16px;
    line-height: 1.5;
    word-wrap: break-word;
  }

  .vmdb details {
    display: block;
  }

  .vmdb summary {
    display: list-item;
  }

  .vmdb a {
    background-color: initial;
  }

  .vmdb a:active,
  .vmdb a:hover {
    outline-width: 0;
  }

  .vmdb strong {
    font-weight: inherit;
    font-weight: bolder;
  }

  .vmdb h1 {
    margin: 0.67em 0;
  }

  .vmdb img {
    border-style: none;
  }

  .vmdb code,
  .vmdb kbd,
  .vmdb pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  .vmdb hr {
    box-sizing: initial;
    height: 0;
    overflow: visible;
  }

  .vmdb input {
    font: inherit;
    margin: 0;
  }

  .vmdb input {
    overflow: visible;
  }

  .vmdb [type="checkbox"] {
    box-sizing: border-box;
    padding: 0;
  }

  .vmdb * {
    box-sizing: border-box;
  }

  .vmdb input {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  .vmdb a {
    color: #0366d6;
    text-decoration: none;
  }

  .vmdb a:hover {
    text-decoration: underline;
  }

  .vmdb strong {
    font-weight: 600;
  }

  .vmdb hr {
    height: 0;
    margin: 15px 0;
    overflow: hidden;
    background: transparent;
    border: 0;
    border-bottom: 1px solid #dfe2e5;
  }

  .vmdb hr:after,
  .vmdb hr:before {
    display: table;
    content: "";
  }

  .vmdb hr:after {
    clear: both;
  }

  .vmdb table {
    border-spacing: 0;
    border-collapse: collapse;
  }

  .vmdb td,
  .vmdb th {
    padding: 0;
  }

  .vmdb details summary {
    cursor: pointer;
  }

  .vmdb kbd {
    display: inline-block;
    padding: 3px 5px;
    font: 11px SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
    line-height: 10px;
    color: #444d56;
    vertical-align: middle;
    background-color: #fafbfc;
    border: 1px solid #d1d5da;
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 #d1d5da;
  }

  .vmdb h1[data-moc-first] {
    margin: 0 0 !important;
    padding: 0.6em 0 !important;
    border-top: none !important;
  }

  .vmdb h1,
  .vmdb h2,
  .vmdb h3,
  .vmdb h4,
  .vmdb h5,
  .vmdb h6 {
    color: #000;
    margin-top: 0;
    margin-bottom: 0;
  }

  .vmdb h5,
  .vmdb h6 {
    font-weight: 600;
  }

  .vmdb h6 {
    font-size: 12px;
  }

  .vmdb p {
    margin-top: 0;
    margin-bottom: 10px;
  }

  .vmdb blockquote {
    margin: 0;
    background: hsl(220, 15%, 97%);
    border-radius: var(--vmdb-radius);
  }

  .vmdb ol,
  .vmdb ul {
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
  }

  .vmdb ol ol,
  .vmdb ul ol {
    list-style-type: lower-roman;
  }

  .vmdb ol ol ol,
  .vmdb ol ul ol,
  .vmdb ul ol ol,
  .vmdb ul ul ol {
    list-style-type: lower-alpha;
  }

  .vmdb dd {
    margin-left: 0;
  }

  .vmdb code,
  .vmdb pre {
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
    font-size: 12px;
  }

  .vmdb pre {
    margin-top: 0;
    margin-bottom: 0;
  }

  .vmdb input::-webkit-inner-spin-button,
  .vmdb input::-webkit-outer-spin-button {
    margin: 0;
    -webkit-appearance: none;
    appearance: none;
  }

  .vmdb :checked + .radio-label {
    position: relative;
    z-index: 1;
    border-color: #0366d6;
  }

  .vmdb .border {
    border: 1px solid #e1e4e8 !important;
  }

  .vmdb .border-0 {
    border: 0 !important;
  }

  .vmdb .border-bottom {
    border-bottom: 1px solid #e1e4e8 !important;
  }

  .vmdb .rounded-1 {
    border-radius: 3px !important;
  }

  .vmdb .bg-white {
    background-color: #fff !important;
  }

  .vmdb .bg-gray-light {
    background-color: #fafbfc !important;
  }

  .vmdb .text-gray-light {
    color: #6a737d !important;
  }

  .vmdb .mb-0 {
    margin-bottom: 0 !important;
  }

  .vmdb .my-2 {
    margin-top: 8px !important;
    margin-bottom: 8px !important;
  }

  .vmdb .pl-0 {
    padding-left: 0 !important;
  }

  .vmdb .py-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .vmdb .pl-1 {
    padding-left: 4px !important;
  }

  .vmdb .pl-2 {
    padding-left: 8px !important;
  }

  .vmdb .py-2 {
    padding-top: 8px !important;
    padding-bottom: 8px !important;
  }

  .vmdb .pl-3,
  .vmdb .px-3 {
    padding-left: 16px !important;
  }

  .vmdb .px-3 {
    padding-right: 16px !important;
  }

  .vmdb .pl-4 {
    padding-left: 24px !important;
  }

  .vmdb .pl-5 {
    padding-left: 32px !important;
  }

  .vmdb .pl-6 {
    padding-left: 40px !important;
  }

  .vmdb .f6 {
    font-size: 12px !important;
  }

  .vmdb .lh-condensed {
    line-height: 1.25 !important;
  }

  .vmdb .text-bold {
    font-weight: 600 !important;
  }

  .vmdb .pl-c {
    color: #6a737d;
  }

  .vmdb .pl-c1,
  .vmdb .pl-s .pl-v {
    color: #005cc5;
  }

  .vmdb .pl-e,
  .vmdb .pl-en {
    color: #6f42c1;
  }

  .vmdb .pl-s .pl-s1,
  .vmdb .pl-smi {
    color: #24292e;
  }

  .vmdb .pl-ent {
    color: #22863a;
  }

  .vmdb .pl-k {
    color: #d73a49;
  }

  .vmdb .pl-pds,
  .vmdb .pl-s,
  .vmdb .pl-s .pl-pse .pl-s1,
  .vmdb .pl-sr,
  .vmdb .pl-sr .pl-cce,
  .vmdb .pl-sr .pl-sra,
  .vmdb .pl-sr .pl-sre {
    color: #032f62;
  }

  .vmdb .pl-smw,
  .vmdb .pl-v {
    color: #e36209;
  }

  .vmdb .pl-bu {
    color: #b31d28;
  }

  .vmdb .pl-ii {
    color: #fafbfc;
    background-color: #b31d28;
  }

  .vmdb .pl-c2 {
    color: #fafbfc;
    background-color: #d73a49;
  }

  .vmdb .pl-c2:before {
    content: "^M";
  }

  .vmdb .pl-sr .pl-cce {
    font-weight: 700;
    color: #22863a;
  }

  .vmdb .pl-ml {
    color: #735c0f;
  }

  .vmdb .pl-mh,
  .vmdb .pl-mh .pl-en,
  .vmdb .pl-ms {
    font-weight: 700;
    color: #005cc5;
  }

  .vmdb .pl-mi {
    font-style: italic;
    color: #24292e;
  }

  .vmdb .pl-mb {
    font-weight: 700;
    color: #24292e;
  }

  .vmdb .pl-md {
    color: #b31d28;
    background-color: #ffeef0;
  }

  .vmdb .pl-mi1 {
    color: #22863a;
    background-color: #f0fff4;
  }

  .vmdb .pl-mc {
    color: #e36209;
    background-color: #ffebda;
  }

  .vmdb .pl-mi2 {
    color: #f6f8fa;
    background-color: #005cc5;
  }

  .vmdb .pl-mdr {
    font-weight: 700;
    color: #6f42c1;
  }

  .vmdb .pl-ba {
    color: #586069;
  }

  .vmdb .pl-sg {
    color: #959da5;
  }

  .vmdb .pl-corl {
    text-decoration: underline;
    color: #032f62;
  }

  .vmdb .mb-0 {
    margin-bottom: 0 !important;
  }

  .vmdb .my-2 {
    margin-bottom: 8px !important;
  }

  .vmdb .my-2 {
    margin-top: 8px !important;
  }

  .vmdb .pl-0 {
    padding-left: 0 !important;
  }

  .vmdb .py-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .vmdb .pl-1 {
    padding-left: 4px !important;
  }

  .vmdb .pl-2 {
    padding-left: 8px !important;
  }

  .vmdb .py-2 {
    padding-top: 8px !important;
    padding-bottom: 8px !important;
  }

  .vmdb .pl-3 {
    padding-left: 16px !important;
  }

  .vmdb .pl-4 {
    padding-left: 24px !important;
  }

  .vmdb .pl-5 {
    padding-left: 32px !important;
  }

  .vmdb .pl-6 {
    padding-left: 40px !important;
  }

  .vmdb .pl-7 {
    padding-left: 48px !important;
  }

  .vmdb .pl-8 {
    padding-left: 64px !important;
  }

  .vmdb .pl-9 {
    padding-left: 80px !important;
  }

  .vmdb .pl-10 {
    padding-left: 96px !important;
  }

  .vmdb .pl-11 {
    padding-left: 112px !important;
  }

  .vmdb .pl-12 {
    padding-left: 128px !important;
  }

  .vmdb hr {
    border-bottom-color: #eee;
  }

  .vmdb kbd {
    display: inline-block;
    padding: 3px 5px;
    font: 11px SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
    line-height: 10px;
    color: #444d56;
    vertical-align: middle;
    background-color: #fafbfc;
    border: 1px solid #d1d5da;
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 #d1d5da;
  }

  .vmdb:after,
  .vmdb:before {
    display: table;
    content: "";
  }

  .vmdb:after {
    clear: both;
  }

  .vmdb > :first-child {
    margin-top: 0 !important;
  }

  .vmdb > :last-child {
    margin-bottom: 0 !important;
  }

  .vmdb a:not([href]) {
    color: inherit;
    text-decoration: none;
  }

  .vmdb blockquote,
  .vmdb details,
  .vmdb dl,
  .vmdb ol,
  .vmdb p,
  .vmdb pre,
  .vmdb table,
  .vmdb ul {
    margin-top: 0;
    margin-bottom: 16px;
  }

  .vmdb hr {
    height: 0.25em;
    padding: 0;
    margin: 24px 0;
    background-color: #e1e4e8;
    border: 0;
  }

  .vmdb blockquote {
    padding: 0.5em 1em;
    color: #6a737d;
    border-left: 0.4em solid #dfe2e5;
  }

  .vmdb blockquote > :first-child {
    margin-top: 0;
  }

  .vmdb blockquote > :last-child {
    margin-bottom: 0;
  }

  .vmdb h1,
  .vmdb h2,
  .vmdb h3,
  .vmdb h4,
  .vmdb h5,
  .vmdb h6 {
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
  }

  .vmdb pre {
    margin: 1.8em 0px !important;
  }

  .vmdb h1 {
    margin-top: 2.5em;
    padding-top: 2em;
    border-top: 1px solid var(--vmdb-line);
    font-size: 2.7em;
  }

  .vmdb h2 {
    margin-top: 1.6em;
    margin-bottom: 1.6em;
    font-size: 2em;
  }

  .vmdb h3 {
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: 1.6em;
  }

  .vmdb h4 {
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: 1.25em;
  }

  .vmdb h5 {
    margin-top: 0.6em;
    margin-bottom: 0.6em;
    font-size: 0.875em;
  }

  .vmdb h6 {
    margin-top: 0.6em;
    margin-bottom: 0.6em;
    font-size: 0.85em;
    color: #6a737d;
  }

  .vmdb ol,
  .vmdb ul {
    padding-left: 2em;
  }

  .vmdb ol ol,
  .vmdb ol ul,
  .vmdb ul ol,
  .vmdb ul ul {
    margin-top: 0;
    margin-bottom: 0;
  }

  .vmdb li {
    word-wrap: break-all;
  }

  .vmdb li > p {
    margin-top: 16px;
  }

  .vmdb li + li {
    margin-top: 0.25em;
  }

  .vmdb dl {
    padding: 0;
  }

  .vmdb dl dt {
    padding: 0;
    margin-top: 16px;
    font-size: 1em;
    font-style: italic;
    font-weight: 600;
  }

  .vmdb dl dd {
    padding: 0 16px;
    margin-bottom: 16px;
  }

  .vmdb table {
    display: table;
    width: 100%;
    overflow: auto;
  }

  .vmdb table th {
    font-weight: 600;
    text-align: left;
    background: rgba(0, 0, 0, 0.015);
  }

  .vmdb table td,
  .vmdb table th {
    padding: 6px 13px;
    // border-bottom: 1px solid #dfe2e5;
  }

  .vmdb table tr {
    background-color: #fff;
    border-bottom: 1px solid var(--vmdb-line);
  }

  .vmdb table tr:nth-child(2n) {
    background-color: #f6f8fa;
  }

  .vmdb img {
    max-width: 100%;
    box-sizing: initial;
    background-color: #fff;
  }

  .vmdb img[align="right"] {
    padding-left: 20px;
  }

  .vmdb img[align="left"] {
    padding-right: 20px;
  }

  .vmdb code {
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    background-color: rgba(27, 31, 35, 0.05);
    border-radius: 3px;
  }

  .vmdb pre {
    word-wrap: normal;
  }

  .vmdb pre > code {
    padding: 0;
    margin: 0;
    font-size: 100%;
    word-break: normal;
    white-space: pre;
    background: transparent;
    border: 0;
  }

  .vmdb .highlight {
    margin-bottom: 16px;
  }

  .vmdb .highlight pre {
    margin-bottom: 0;
    word-break: normal;
  }

  .vmdb .highlight {
    font-size: 85%;
  }

  .vmdb .highlight pre,
  .vmdb pre {
    padding: 16px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background-color: #f6f8fa;
    border-radius: 3px;
  }

  .vmdb pre code {
    display: inline;
    max-width: auto;
    padding: 0;
    margin: 0;
    overflow: visible;
    line-height: inherit;
    word-wrap: normal;
    background-color: initial;
    border: 0;
  }

  .vmdb .commit-tease-sha {
    display: inline-block;
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
    font-size: 90%;
    color: #444d56;
  }

  .vmdb .full-commit .btn-outline:not(:disabled):hover {
    color: #005cc5;
    border-color: #005cc5;
  }

  .vmdb .blob-wrapper {
    overflow-x: auto;
    overflow-y: hidden;
  }

  .vmdb .blob-wrapper-embedded {
    max-height: 240px;
    overflow-y: auto;
  }

  .vmdb .blob-num {
    width: 1%;
    min-width: 50px;
    padding-right: 10px;
    padding-left: 10px;
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
    font-size: 12px;
    line-height: 20px;
    color: rgba(27, 31, 35, 0.3);
    text-align: right;
    white-space: nowrap;
    vertical-align: top;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .vmdb .blob-num:hover {
    color: rgba(27, 31, 35, 0.6);
  }

  .vmdb .blob-num:before {
    content: attr(data-line-number);
  }

  .vmdb .blob-code {
    position: relative;
    padding-right: 10px;
    padding-left: 10px;
    line-height: 20px;
    vertical-align: top;
  }

  .vmdb .blob-code-inner {
    overflow: visible;
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
    font-size: 12px;
    color: #24292e;
    word-wrap: normal;
    white-space: pre;
  }

  .vmdb .pl-token.active,
  .vmdb .pl-token:hover {
    cursor: pointer;
    background: #ffea7f;
  }

  .vmdb .tab-size[data-tab-size="1"] {
    -moz-tab-size: 1;
    tab-size: 1;
  }

  .vmdb .tab-size[data-tab-size="2"] {
    -moz-tab-size: 2;
    tab-size: 2;
  }

  .vmdb .tab-size[data-tab-size="3"] {
    -moz-tab-size: 3;
    tab-size: 3;
  }

  .vmdb .tab-size[data-tab-size="4"] {
    -moz-tab-size: 4;
    tab-size: 4;
  }

  .vmdb .tab-size[data-tab-size="5"] {
    -moz-tab-size: 5;
    tab-size: 5;
  }

  .vmdb .tab-size[data-tab-size="6"] {
    -moz-tab-size: 6;
    tab-size: 6;
  }

  .vmdb .tab-size[data-tab-size="7"] {
    -moz-tab-size: 7;
    tab-size: 7;
  }

  .vmdb .tab-size[data-tab-size="8"] {
    -moz-tab-size: 8;
    tab-size: 8;
  }

  .vmdb .tab-size[data-tab-size="9"] {
    -moz-tab-size: 9;
    tab-size: 9;
  }

  .vmdb .tab-size[data-tab-size="10"] {
    -moz-tab-size: 10;
    tab-size: 10;
  }

  .vmdb .tab-size[data-tab-size="11"] {
    -moz-tab-size: 11;
    tab-size: 11;
  }

  .vmdb .tab-size[data-tab-size="12"] {
    -moz-tab-size: 12;
    tab-size: 12;
  }

  .vmdb .task-list-item {
    list-style-type: none;
  }

  .vmdb .task-list-item + .task-list-item {
    margin-top: 3px;
  }

  .vmdb .task-list-item input {
    margin: 0 0.2em 0.25em -1.6em;
    vertical-align: middle;
  }
`;
