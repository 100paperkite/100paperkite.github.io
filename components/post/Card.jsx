import Link from 'next/link';
import Tag from './Tag';

const PostCard = ({ post }) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <a>
        <article className="my-2 p-2 px-4 transition duration-300 rounded-lg hover:bg-neutral-100">
          <p className="text-neutral-700 text-xs md:text-sm mb-1 md:mb-1 pl-1">
            {post.frontMatter.date}
          </p>
          <h3 className="text-lg md:text-xl font-bold">{post.frontMatter.title}</h3>
          <p className="my-1 md:my-2 text-base md:text-lg text-neutral-600">
            {post.frontMatter.description}
          </p>
          {post.frontMatter.tags && (
            <div className="my-1 md:my-2 text-sm md:text-base flex">
              {post.frontMatter.tags.map((tag, index) => (
                <Tag name={tag} key={index} />
              ))}
            </div>
          )}
        </article>
      </a>
    </Link>
  );
};

export default PostCard;
