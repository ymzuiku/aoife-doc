const fs = require("fs");
const { resolve } = require("path");

const dir = fs.readdirSync(resolve(__dirname, "./public/md"));
const list = [];
dir.forEach((file) => {
  if (/\.md$/.test(file)) {
    list.push({
      name: file,
      url: "/md/" + file,
    });
  }
});

fs.writeFileSync(
  resolve(__dirname, "public/md/_files.json"),
  JSON.stringify(list, null, 2)
);
