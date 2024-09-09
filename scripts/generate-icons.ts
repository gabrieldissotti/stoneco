import { existsSync } from 'https://deno.land/std/fs/mod.ts';

const svgFilePath = "../static/sprites/icons.svg";
const outputFilePath = "../static/generated/icons.ts";

async function generateIconsFile() {
  const svgContent = await Deno.readTextFile(svgFilePath);
  let existingContent = '';
  let newIcons = [];

  if (existsSync(outputFilePath)) {
    await Deno.remove(outputFilePath); 
  }

  const regex = /<symbol id="(.+?)"(.+?)>(.+?)<\/symbol>/gs;
  let matchSymbol;
  while ((matchSymbol = regex.exec(svgContent)) !== null) {
    const [_, id, attributes, content] = matchSymbol;
    newIcons.push(id);
    const iconString = `export const ${id} = \`<svg id="${id}"${attributes}>${content}</svg>\`;\n`;
    existingContent += iconString;
  }

  const availableIconsString = `export const AvailableIcons = { ${newIcons.join(', ')} };`;
  existingContent += `\n${availableIconsString}`;

  await Deno.writeTextFile(outputFilePath, existingContent, { create: true });
  console.log('static/generated/icons.ts atualizado com sucesso com novos ícones.');
}

generateIconsFile().catch(console.error);