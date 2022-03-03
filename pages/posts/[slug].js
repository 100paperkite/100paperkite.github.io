import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { serialize } from 'next-mdx-remote/serialize';
import Layout from '../../components/Layout';
import PostPage from '../../components/PostPage';

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.mdx', ''),
    },
  }));

  return {
    paths,
    fallback: false, // if any path not included in paths, results 404 page.
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(path.join('posts', `${slug}.mdx`), 'utf-8');

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

const Page = ({ frontMatter, mdxSource }) => {
  return (
    <Layout>
      <PostPage mdxSource={mdxSource} {...frontMatter} />
    </Layout>
  );
};

export default Page;