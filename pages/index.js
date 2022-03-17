import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import HomePage from '../components/HomePage';

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'));

  let posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split('.')[0],
    };
  });

  if (process.env.NODE_ENV === 'production') {
    posts = posts.filter(({ frontMatter: { draft } }) => draft === false);
  }

  return {
    props: {
      posts,
    },
  };
};

export default function Home({ posts }) {
  return <HomePage posts={posts} />;
}
