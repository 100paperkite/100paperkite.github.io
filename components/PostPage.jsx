import { MDXRemote } from 'next-mdx-remote';
import Layout from './Layout';
import PostHead from './Post/Head';
import CodeBlock from './Post/CodeBlock';
import Image from './Post/Image';

const PostPage = ({ mdxSource, ...frontMatter }) => {
  return (
    <Layout>
      <article className="max-w-none px-2 md:px-4 py-2 md:py-4 prose prose-neutral prose-sm sm:prose-base md:prose-md">
        <PostHead {...frontMatter} />
        <MDXRemote {...mdxSource} components={{ pre: CodeBlock, Image }} />
      </article>
    </Layout>
  );
};

export default PostPage;
