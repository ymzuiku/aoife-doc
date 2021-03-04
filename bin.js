#!/usr/bin/env node

const fs = require("fs-extra");
const resolve = require("path").resolve;
const pwd = (...args) => resolve(process.cwd(), ...args);
const argv = process.argv.splice(2);

fs.mkdirpSync(pwd(argv[0], "md"));
fs.copySync(resolve(__dirname, "public/md"), pwd(argv[0]));
fs.copyFileSync(
  resolve(__dirname, "example/index.html"),
  pwd(argv[0], "index.html")
);
fs.copyFileSync(resolve(__dirname, "public/md.json"), pwd(argv[0], "md.json"));
fs.copyFileSync(resolve(__dirname, "README.md"), pwd(argv[0], "README.md"));

console.log("create aoife-dco done!");
console.log("Please run:", `cd ${argv[0]} && npx serve -s ./`);
