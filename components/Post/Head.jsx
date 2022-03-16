const PostHead = ({ title, date, tags }) => {
  return (
    <div className="border-b border-1 pt-2 sm:pt-4 md:pt-6 border-dashed border-neutral-400">
      <small className="mb-1 md:mb-2 pl-1 text-neutral-500">{date}</small>
      <h1 className="font-title">{title}</h1>
    </div>
  );
};

export default PostHead;
