import Link from 'next/link';
import Tag from './Tag';

const PostCard = ({ post }) => {
  return (
    <article className="my-4 p-3 px-4 md:px-5 md:p-4 rounded-2xl md:rounded-3xl bg-neutral-100">
      <div className="flex items-center text-sm text-neutral-500">
        <span className="mr-1 my-auto">{post.frontMatter.date}</span>
        {'-'}
        {post.frontMatter.tags && (
          <div className="flex">
            {post.frontMatter.tags.map((tag, index) => (
              <Tag name={tag} key={index} />
            ))}
          </div>
        )}
      </div>

      <h2 className="font-title font-bold my-3 md:my-4 text-2xl md:text-3xl hover:underline">
        <Link href={`/posts/${post.slug}`}>
          <a>{post.frontMatter.title}</a>
        </Link>
      </h2>

      <p className="my-1 md:my-2 text-sm md:text-base text-neutral-600">
        {post.frontMatter.description}
      </p>
    </article>
  );
};

export default PostCard;
