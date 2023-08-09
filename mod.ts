import { parse } from "std/flags/mod.ts";

const [pattern, location] = Deno.args;

const flags = parse(Deno.args, {
  boolean: ["help"],
  string: ["t"],
});

const fileType = flags.t ? `-t${flags.t}` : null;

const baseArgs = [
  pattern,
  location,
  "--line-number",
  "--with-filename",
  "--only-matching",
  "-0",
  "-r=$1",
];

const ripgrep = new Deno.Command("rg", {
  args: fileType ? [fileType].concat(baseArgs) : baseArgs,
});

async function main() {
  const { code, stdout, stderr } = await ripgrep.output();

  const decoder = new TextDecoder();

  if (code !== 0) {
    console.error(`Ripgrep Error: Code ${code}
${decoder.decode(stderr)}
`);
    return;
  }

  console.log(decoder.decode(stdout));
}

try {
  await main();
} catch (error) {
  console.error(error);
}
