import { file, write } from "bun";
import { mkdirSync, unlinkSync } from "fs";
import { join, resolve } from "path";

// Combine all the .d.ts files into a single .d.ts file
// so that your editor loads the types faster
const BUN_VERSION = (process.env.BUN_VERSION || process.version).replace(
  /^v/,
  ""
);
const folder = resolve(process.argv.at(-1)!);
if (folder.endsWith("bundle.ts")) {
  throw new Error("Pass a folder");
}

try {
  mkdirSync(folder, { recursive: true });
} catch {}

const header = await file(join(import.meta.dir, "header.txt")).text();
const filesToCat = (
  await file(join(import.meta.dir, "paths.txt")).text()
).split("\n");

const fileContents: string[] = [];

for (let i = 0; i < filesToCat.length; i++) {
  const name = filesToCat[i];
  fileContents.push(
    "// " +
      name +
      "\n\n" +
      (await file(resolve(import.meta.dir, name)).text()) +
      "\n"
  );
}

const text = header + fileContents.join("\n");

const destination = resolve(folder, "types.d.ts");
await write(destination, text);

const packageJSON = {
  name: process.env.PACKAGE_NAME || "bun-types",
  version: BUN_VERSION,
  description: "Type definitions for bun.js",
  types: "types.d.ts",
  files: ["types.d.ts"],
  private: false,
  keywords: ["bun", "bun.js", "types"],
  repository: "https://github.com/oven-sh/bun",
  homepage: "https://bun.sh",
};

await write(
  resolve(folder, "package.json"),
  JSON.stringify(packageJSON, null, 2) + "\n"
);

export {};

import "./index";
