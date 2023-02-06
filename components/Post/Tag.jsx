import { useRouter } from 'next/router';

const Tag = ({ name, selected = false }) => {
  const router = useRouter();

  return (
    <button
      onClick={() =>
        router.push({
          pathname: '/tags/',
          query: { q: name },
        })
      }
      className={selected ? 'text-neutral-800 font-bold' : 'text-neutral-500 font-bold'}
    >
      {'#' + name}
    </button>
  );
};

export default Tag;
