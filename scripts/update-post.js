const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const filepath = process.env.npm_config_filepath;

console.log(`*** Start updating ${filepath} ***`);

const lastModifedTime = (filepath) => fs.statSync(filepath).mtime.toISOString();
const titleToSlug = (title) => title.replace(/[^\w가-힣 ]+/g, '').replace(/ +/g, '-');

const findLineIndex = (frontMatter, keyName) => {
  const frontMaterLines = Object.entries(frontMatter);
  const lineindex = frontMaterLines.findIndex(([key, value]) => key === keyName) + 1;
  return lineindex;
};

const markdown = fs.readFileSync(filepath, 'utf-8');
const { data: frontMatter } = matter(markdown);

const lines = markdown.split('\n');
const updatedIndex = findLineIndex(frontMatter, 'updated');
const updatedTime = lastModifedTime(filepath);
const slug = titleToSlug(frontMatter.title);

lines.splice(updatedIndex, 1, `updated: '${updatedTime}'`);
fs.writeFileSync(filepath, lines.join('\n'));
fs.renameSync(filepath, path.join(path.dirname(filepath), `${slug}.mdx`));
