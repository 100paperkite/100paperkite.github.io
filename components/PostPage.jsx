import { MDXRemote } from 'next-mdx-remote';
import Layout from './Layout';
import PostHead from './post/Head';

const PostPage = ({ mdxSource, ...frontMatter }) => {
  return (
    <Layout>
      <article className="max-w-none px-2 md:px-4 py-2 md:py-4 prose prose-neutral prose-sm sm:prose-base md:prose-md">
        <PostHead {...frontMatter} />
        <MDXRemote {...mdxSource} />
      </article>
    </Layout>
  );
};

export default PostPage;
