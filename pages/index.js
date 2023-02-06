import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import HomePage from '../components/HomePage';
import { NextSeo } from 'next-seo';

import site from '../siteMetadata';

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'));

  let posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      frontMatter,
      slug: path.parse(filename).name,
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
  return (
    <>
      <NextSeo title={site.title} description={site.description} />
      <HomePage posts={posts} />
    </>
  );
}
