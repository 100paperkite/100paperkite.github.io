import Link from 'next/link';
import Tag from '../components/Tag';

const PostCard = ({ post }) => {
  return (
    <article className="rounded-lg hover:bg-neutral-200 hover:border-neutral-200 py-2 px-4 mx-2 md:mx-4 my-3 md:my-5">
      <Link href={`/posts/${post.slug}`}>
        <a>
          <p className="text-neutral-500 text-sm md:text-base mb-1 md:mb-2 italic pl-1">
            {post.frontMatter.date}
          </p>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">{post.frontMatter.title}</h3>
          <p className="my-2 lg:my-3 lg:text-lg text-base text-neutral-800">
            {post.frontMatter.description}
          </p>
          {post.frontMatter.tags && (
            <div className="my-1 md:my-2 text-sm lg:text-base flex">
              {post.frontMatter.tags.map((tag, index) => (
                <Tag name={tag} key={index} />
              ))}
            </div>
          )}
        </a>
      </Link>
    </article>
  );
};

export default PostCard;
