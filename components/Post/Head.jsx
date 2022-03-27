import site from '../../siteMetadata';
import Tag from './Tag';

const toLocaleDateString = (dateString) =>
  new Date(dateString).toLocaleDateString(site.local, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

const Head = ({ title, uploaded, updated, tags }) => {
  const uploadedDate = toLocaleDateString(uploaded);
  const updatedDate = toLocaleDateString(updated);

  return (
    <div className="border-b border-1 mb-4 sm:mb-6 border-dashed border-neutral-300">
      <div className="flex items-center	my-1 md:my-2 gap-x-2">
        {tags.map((tag, index) => (
          <Tag className="mr-2" name={tag} key={index} />
        ))}
      </div>

      <h1 className="text-4xl sm:text-[44px] font-extrabold mb-2 sm:mb-4 mt-6 sm:mt-10">{title}</h1>
      <div className="flex  py-2 md:py-3 pl-1 text-neutral-500">
        <small className="">{uploadedDate}에 작성</small>
        {uploadedDate < updatedDate && (
          <small className="">
            {' · '}
            {updatedDate}에 변경됨
          </small>
        )}
      </div>
    </div>
  );
};

export default Head;
