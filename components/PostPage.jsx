import { MDXRemote } from 'next-mdx-remote';
import Layout from './Layout';
import PostHead from './post/Head';
/**
 * @todo tailwindcss 깔끔하게 정리하기
 */
const headlineStyle = [
  'prose-headings:border-b',
  'prose-headings:pb-2',
  'prose-headings:border-neutral-200',
  'prose-headings:mb-2',
  'prose-h1:border-0',
].join(' ');

const PostPage = ({ mdxSource, ...frontMatter }) => {
  return (
    <Layout>
      <article
        className={`max-w-none prose prose-neutral prose-sm sm:prose-base md:prose-md ${headlineStyle}`}
      >
        <PostHead {...frontMatter} />
        <MDXRemote {...mdxSource} />
      </article>
    </Layout>
  );
};

export default PostPage;
