import { MDXRemote } from 'next-mdx-remote';
import { PageSyntaxHighlighter, PageImage } from '../components/PostPageComponents';

const PostPageHead = ({ title, date, tags }) => {
  return (
    <div>
      <div className="text-sm italic md:text-base mb-1 md:mb-2 ml-2">{date}</div>
      <h1>{title}</h1>
      <div className="border-b border-1 border-dashed border-neutral-300" />
    </div>
  );
};

const PostPage = ({ mdxSource, ...frontMatter }) => {
  return (
    <article className="max-w-none prose prose-neutral prose-sm sm:prose-base md:prose-md">
      <PostPageHead {...frontMatter} />
      <MDXRemote {...mdxSource} components={{ code: PageSyntaxHighlighter, PageImage }} />
    </article>
  );
};

export default PostPage;
