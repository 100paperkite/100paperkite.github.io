import Link from 'next/link';
import siteMetadata from '../siteMetadata';

const NavBar = () => {
  return (
    <nav className="flex justify-between sticky top-0 z-50 space-x-4 py-2">
      <Link href="/">
        <a className="text-neutral-800 hover:text-neutral-600 text-lg md:text-xl font-medium mx-2 md:mx-6 my-1 md:my-2 p-2 ">
          {siteMetadata.title}
        </a>
      </Link>
    </nav>
  );
};

export default NavBar;
