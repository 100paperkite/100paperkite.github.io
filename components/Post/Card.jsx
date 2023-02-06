import Link from 'next/link';
import Tag from './Tag';

const formatDate = (dateString) => {
  const yyyymmdd = new Date(dateString).toISOString().substring(0, 10);
  return yyyymmdd.replaceAll('-', '.');
};

const Card = ({ title, uploaded, tags, slug }) => {
  const uploadedDate = formatDate(uploaded);

  const isTagExist = (tags ?? []).length === 0 ? false : true;

  return (
    <article className="my-5 rounded-2xl md:rounded-2xl">
      <h3 className="font-medium md:text-lg mb-auto pb-1 text-neutral-800 hover:text-neutral-500 hover:duration-150">
        <Link href={`/posts/${slug}`}>
          <a>{title}</a>
        </Link>
      </h3>
      <div className="flex">
        <span className="text-xs mr-2 mb-auto text-neutral-500">{uploadedDate}</span>

        {isTagExist && (
          <span className="text-xs flex flex-wrap gap-x-2 my-auto">
            {tags.map((tag) => (
              <Tag name={tag} key={tag} className="text-neutral-500 font-bold" />
            ))}
          </span>
        )}
      </div>
    </article>
  );
};

export default Card;
