import Layout from './Layout';
import { Card as PostCard } from './Post';

const HomePage = ({ posts }) => {
  return (
    <Layout>
      <section className="border-dashed border border-neutral-300 rounded mb-4 md:mb-8 p-4 text-base">
        안녕하세요 👋 백지연의 개발 블로그입니다.
      </section>
      {posts
        .sort((a, b) => {
          return a.frontMatter.uploaded < b.frontMatter.uploaded ? 1 : -1;
        })
        .map((post, index) => (
          <PostCard post={post} key={index} />
        ))}
    </Layout>
  );
};

export default HomePage;
