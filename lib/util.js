import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

const POST_DIR = 'posts/';

export const getAllPostInfos = async () => {
  const files = fs.readdirSync(POST_DIR);

  return files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join(POST_DIR, filename), 'utf-8');
    const { data } = matter(markdownWithMeta);

    return {
      ...data,
      slug: path.parse(filename).name,
    };
  });
};
