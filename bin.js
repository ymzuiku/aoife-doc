#!/usr/bin/env node

const fs = require("fs-extra");
const resolve = require("path").resolve;
const pwd = (...args) => resolve(process.cwd(), ...args);
const argv = process.argv.splice(2);

const p = argv[0];

fs.mkdirpSync(pwd(p, "md"));
fs.copySync(resolve(__dirname, "public/md"), pwd(p, "md"));
fs.copyFileSync(resolve(__dirname, "example.html"), pwd(p, "index.html"));
fs.copyFileSync(resolve(__dirname, "public/md.json"), pwd(p, "md.json"));
fs.copyFileSync(resolve(__dirname, "README.md"), pwd(p, "README.md"));

console.log("create aoife-dco done!");
console.log("Please run:", `cd ${p} && npx serve -s ./`);
