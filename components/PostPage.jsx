import { MDXRemote } from 'next-mdx-remote';
import SyntaxHighlighter from 'react-syntax-highlighter';

const PostPageHead = ({ title, date, tags }) => {
  return (
    <div>
      <div className="text-sm italic md:text-base mb-1 md:mb-2 ml-2">{date}</div>
      <h1>{title}</h1>
    </div>
  );
};

const PostPage = ({ mdxSource, ...frontMatter }) => {
  return (
    <div className="justify-center flex">
      <article className="mt-3 md:mt-5 mx-3 md:mx-6 prose prose-neutral lg:prose-lg md:max-w-screen-sm lg:max-w-screen-md">
        <PostPageHead {...frontMatter} />
        <MDXRemote {...mdxSource} components={{ SyntaxHighlighter }} />
      </article>
    </div>
  );
};

export default PostPage;
