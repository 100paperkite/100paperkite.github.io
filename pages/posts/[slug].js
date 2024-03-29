import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { ArticleJsonLd, NextSeo } from 'next-seo';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import Page from '../../components/Post/Page';

import site from '../../siteMetadata';

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
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  });

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

export default function Post({ frontMatter, slug, mdxSource }) {
  return (
    <>
      <NextSeo
        title={site.title}
        titleTemplate={`${frontMatter.title} | %s`}
        description={frontMatter.description || frontMatter.title}
      />
      <ArticleJsonLd
        type="Blog"
        title={frontMatter.title}
        description={frontMatter.description || frontMatter.title}
        datePublished={frontMatter.uploaded}
        dateModified={frontMatter.updated}
        authorName={site.author}
        url={`${site.url}/posts/${slug}`}
      ></ArticleJsonLd>
      <Page mdxSource={mdxSource} {...frontMatter} />
    </>
  );
}
