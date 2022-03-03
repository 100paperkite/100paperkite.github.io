import Link from 'next/link';

import siteMetadata from '../data/siteMetadata';

const Footer = () => {
  return (
    <footer className="font-title mt-16 mb-4 flex flex-col items-center text-xs sm:text-sm md:text-base">
      <div className="mt-1 mb-3 flex space-x-2 text-neutral-500">
        <div>{siteMetadata.author}</div>
        <div>{` • `}</div>
        <div>{`© ${new Date().getFullYear()}`}</div>
        <div>{` • `}</div>
        <Link href="/">
          <a>{siteMetadata.title}</a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
