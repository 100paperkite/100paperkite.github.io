import Link from 'next/link';
import siteMetadata from '../siteMetadata';
import { FaTags } from 'react-icons/fa';

const NavBar = () => {
  return (
    <nav className="flex justify-between sticky top-0 z-50 space-x-4 py-2 font-medium mx-2 md:mx-6 my-1 md:my-2 p-2">
      <Link href="/">
        <a className="text-neutral-800 hover:text-neutral-600 text-lg md:text-xl">
          {siteMetadata.title}
        </a>
      </Link>
      <div className="flex gap-x-3">
        <Link href="/tags" passHref legacyBehavior>
          <a>
            <FaTags className="hover:cursor-pointer w-6 h-6 text-neutral-700" />
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
