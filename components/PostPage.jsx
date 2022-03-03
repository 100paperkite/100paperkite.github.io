import { MDXRemote } from 'next-mdx-remote';
import { PageSyntaxHighlighter, PageImage } from '../components/PostPageComponents';

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

const PostPageHead = ({ title, date, tags }) => {
  return (
    <div>
      <div className="text-sm italic md:text-base mb-1 md:mb-2 ml-2">{date}</div>
      <h1>{title}</h1>
      <div className="border-b border-1 border-dashed border-neutral-400" />
    </div>
  );
};

const PostPage = ({ mdxSource, ...frontMatter }) => {
  return (
    <article
      className={`max-w-none prose prose-neutral prose-sm sm:prose-base md:prose-md ${headlineStyle}`}
    >
      <PostPageHead {...frontMatter} />
      <MDXRemote {...mdxSource} components={{ code: PageSyntaxHighlighter, PageImage }} />
    </article>
  );
};

export default PostPage;
