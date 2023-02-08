import { MDXRemote } from 'next-mdx-remote';
import Layout from '../Layout';
import { Head as PostHead, Image, Callout, CodeBlock, Utterances } from '.';

const Page = ({ mdxSource, ...frontMatter }) => {
  return (
    <Layout>
      <div className="px-2 md:px-4 py-2 md:py-4">
        <PostHead {...frontMatter} />
        <article className="max-w-none prose prose-neutral sm:prose-h1:text-[2.5rem] sm:prose-h2:text-[2rem] sm:prose-h3:text-2xl sm:prose-h4:text-xl">
          <MDXRemote {...mdxSource} components={{ Image, Callout, pre: CodeBlock }} />
        </article>
        <Utterances />
      </div>
    </Layout>
  );
};

export default Page;
