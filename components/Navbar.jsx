import Link from 'next/link';
import siteMetadata from '../data/siteMetadata';

const NavBar = () => {
  return (
    <nav className="flex bg-gradient-to-t from-neutral-50/0 via-neutral-50/90 to-neutral-50/100 justify-between sticky top-0 z-50 space-x-4 w-full">
      <Link href="/">
        <a className="font-title text-neutral-800 md:text-lg font-bold mx-4 md:mx-6 my-1 md:my-2 p-2 hover:text-neutral-600">
          {siteMetadata.author}
        </a>
      </Link>
    </nav>
  );
};

export default NavBar;
