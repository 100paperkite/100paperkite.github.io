import Link from 'next/link';
import { FiGithub, FiMail } from 'react-icons/fi';

import siteMetadata from '../data/siteMetadata';

const Footer = () => {
  return (
    <footer>
      <div className="mt-16 mb-4 flex flex-col items-center text-sm md:text-base">
        <div className="mb-3 flex space-x-4">
          <Link href={`mailto:${siteMetadata.email}`}>
            <a>
              <FiMail size="20" className="text-neutral-600" />
            </a>
          </Link>
          <Link href={siteMetadata.github}>
            <a>
              <FiGithub size="20" className="text-neutral-600" />
            </a>
          </Link>
        </div>
        <div className="mt-1 mb-3 flex space-x-2 text-neutral-500">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">
            <a>{siteMetadata.title}</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
