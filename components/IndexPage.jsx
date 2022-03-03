import { FiGithub, FiMail } from 'react-icons/fi';

import Layout from '../components/Layout';
import PostCard from '../components/PostCard';
import siteMetadata from '../data/siteMetadata';

export const IndexPage = ({ posts }) => {
  return (
    <Layout>
      <section className="border-dashed border border-neutral-300 rounded mb-8 p-4 text-sm sm:text-base">
        안녕하세요 👋 백지연의 개발 블로그입니다.
        <div className="flex flex-row mt-2">
          <span className="flex items-center mr-1">
            <FiGithub className="w-4 h-5 mt-1" />
            <a className="mx-2" href={siteMetadata.github}>
              github
            </a>
          </span>
          <span className="flex items-center mr-1">
            <FiMail className="w-4 h-5 mt-1" />
            <a className="mx-2" href={`mailto:${siteMetadata.email}`}>
              email
            </a>
          </span>
        </div>
      </section>
      {posts.map((post, index) => (
        <PostCard post={post} key={index} />
      ))}
    </Layout>
  );
};
