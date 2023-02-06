import Layout from './Layout';
import PostList from './PostList';

const HomePage = ({ postInfos }) => {
  return (
    <Layout>
      <div className="mt-2">
        <PostList postInfos={postInfos} />
      </div>
    </Layout>
  );
};

export default HomePage;
