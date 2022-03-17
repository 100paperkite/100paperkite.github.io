import { MDXRemote } from 'next-mdx-remote';
import Layout from './Layout';
import PostHead from './Post/Head';
import CodeBlock from './Post/CodeBlock';
import Image from './Post/Image';

const PostPage = ({ mdxSource, ...frontMatter }) => {
  return (
    <Layout>
      <div className="px-2 md:px-4 py-2 md:py-4">
        <PostHead {...frontMatter} />
        <article className="max-w-none prose prose-neutral prose-sm sm:prose-base md:prose-md">
          <MDXRemote {...mdxSource} components={{ pre: CodeBlock, Image }} />
        </article>
      </div>
    </Layout>
  );
};

export default PostPage;
