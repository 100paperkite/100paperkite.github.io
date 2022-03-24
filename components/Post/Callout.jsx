import { BsExclamationCircleFill } from 'react-icons/bs';

const Callout = ({ children }) => {
  const {
    props: { children: text },
  } = children;

  return (
    <div className="bg-rose-50 p-2 md:p-3 rounded-lg flex space-x-3">
      <BsExclamationCircleFill className="w-7 h-7 text-rose-800" />
      <div className="">{text}</div>
    </div>
  );
};

export { Callout };
