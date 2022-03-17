import { VscGithubInverted, VscMail } from 'react-icons/vsc';
import siteMetadata from '../siteMetadata';

const Footer = () => {
  return (
    <footer className="font-title py-4 sm:py-8 flex flex-col items-center text-neutral-600">
      <div className="flex flex-row my-2">
        <div className="flex items-center py-1">
          <a className="m-2 " href={siteMetadata.github}>
            <VscGithubInverted className="w-7 h-7" />
          </a>
          <a className="m-2" href={`mailto:${siteMetadata.email}`}>
            <VscMail className="w-7 h-7" />
          </a>
        </div>
      </div>
      <span className="text-sm md:text-base text-neutral-500">
        {siteMetadata.author} © {`${new Date().getFullYear()}`}
      </span>
    </footer>
  );
};

export default Footer;
