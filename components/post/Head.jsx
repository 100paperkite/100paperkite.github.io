const PostHead = ({ title, date, tags }) => {
  return (
    <div>
      <div className="text-sm italic md:text-base mb-1 md:mb-2 ml-2">{date}</div>
      <h1>{title}</h1>
      <div className="border-b border-1 border-dashed border-neutral-400" />
    </div>
  );
};

export default PostHead;
