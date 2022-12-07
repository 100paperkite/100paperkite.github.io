import Layout from './Layout';
import siteMetadata from '../siteMetadata';

import { Card as PostCard } from './Post';

const HomePage = ({ posts }) => {
  return (
    <Layout>
      <div className="mt-2">
        <h3 className="font-bold text-xl md:text-2xl border-neutral-200 border-b pb-2">
          All Posts
        </h3>
        {posts
          .sort((a, b) => {
            return a.frontMatter.uploaded < b.frontMatter.uploaded ? 1 : -1;
          })
          .map((post, index) => (
            <PostCard post={post} key={index} />
          ))}
      </div>
    </Layout>
  );
};

export default HomePage;
