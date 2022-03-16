import { FiGithub, FiMail } from 'react-icons/fi';

import Layout from './Layout';
import PostCard from './post/Card';
import siteMetadata from '../data/siteMetadata';

const HomePage = ({ posts }) => {
  return (
    <Layout>
      <section className="border-dashed border border-neutral-300 rounded mb-4 md:mb-8 p-4 text-base">
        안녕하세요 👋 백지연의 개발 블로그입니다.
      </section>
      {posts.map((post, index) => (
        <PostCard post={post} key={index} />
      ))}
    </Layout>
  );
};

export default HomePage;
