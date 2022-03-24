import { MDXRemote } from 'next-mdx-remote';
import Layout from './Layout';
import { Head as PostHead, Image, Callout } from './Post';

const PostPage = ({ mdxSource, ...frontMatter }) => {
  return (
    <Layout>
      <div className="px-2 md:px-4 py-2 md:py-4">
        <PostHead {...frontMatter} />
        <article className="max-w-none prose prose-neutral prose-sm sm:prose-base md:prose-md">
          <MDXRemote {...mdxSource} components={{ Image, Callout }} />
        </article>
      </div>
    </Layout>
  );
};

export default PostPage;
