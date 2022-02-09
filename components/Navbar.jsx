import Link from 'next/link';
import siteMetadata from '../data/siteMetadata';

const Navbar = () => {
  return (
    <nav className="flex bg-gradient-to-t from-neutral-100/90 to-neutral-100/100  border-neutral-200 border-b justify-between sticky top-0 z-50 space-x-4 w-full">
      <Link href="/">
        <a className="font-title text-neutral-800 md:text-lg lg:text-xl font-bold pl-5 md:px-8 py-3 md:py-4 hover:text-neutral-600">
          {siteMetadata.author}
        </a>
      </Link>
    </nav>
  );
};

export default Navbar;
