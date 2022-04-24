const Tag = ({ name }) => {
  return (
    <div className="text-[10px] md:text-xs rounded-full bg-neutral-200 text-neutral-500 font-semibold px-2.5 md:px-3.5 md:py-1">
      {name}
    </div>
  );
};

export default Tag;
