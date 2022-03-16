import fs from 'fs';
import matter from 'gray-matter';

const filepath = process.env.npm_config_filepath;

console.log(`*** Start updating ${filepath} ***`);

const lastModifedTime = (filepath) => fs.statSync(filepath).mtime.toISOString();

const findLineIndex = (frontMatter, keyName) => {
  const frontMaterLines = Object.entries(frontMatter);
  const lineindex = frontMaterLines.findIndex(([key, value]) => key === keyName) + 1;
  return lineindex;
};

const markdown = fs.readFileSync(filepath, 'utf-8');
const { data: frontMatter } = matter(markdown);

const lines = markdown.split('\n');
const updatedIndex = findLineIndex(frontMatter, 'updated');
const updated = lastModifedTime(filepath);

lines.splice(updatedIndex, 1, `updated: ${updated}`);
fs.writeFileSync(filepath, lines.join('\n'));
