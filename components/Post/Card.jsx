import Link from 'next/link';
import Tag from './Tag';
import site from '../../siteMetadata';

const Card = ({ post: { frontMatter, slug } }) => {
  const { title, uploaded, description, tags } = frontMatter;
  const uploadedDate = new Date(uploaded).toLocaleDateString(site.locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const isTagExist = (tags ?? []).length === 0 ? false : true;

  return (
    <article className="my-4 p-3 px-4 md:px-5 md:p-4 rounded-2xl md:rounded-2xl bg-neutral-50">
      <div className="flex flex-wrap gap-x-1 gap-y-2 items-center text-sm text-neutral-500">
        <span className="mr-2 my-auto align-middle">{uploadedDate}</span>
        {isTagExist && (
          <div className="flex flex-wrap gap-x-2">
            {tags.map((tag, index) => (
              <Tag name={tag} key={index} />
            ))}
          </div>
        )}
      </div>

      <h2 className="font-extrabold mt-2 md:mt-3 text-xl md:text-2xl hover:text-neutral-600 hover:duration-150">
        <Link href={`/posts/${slug}`}>
          <a>{title}</a>
        </Link>
      </h2>

      <p className="my-1 md:my-2 text-neutral-500 text-xs md:text-sm">{description}</p>
    </article>
  );
};

export default Card;
