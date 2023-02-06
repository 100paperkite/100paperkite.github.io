import Layout from './Layout';

import { Card } from './Post';

const HomePage = ({ postInfos }) => {
  return (
    <Layout>
      <div className="mt-2">
        {postInfos
          .sort((a, b) => (a.uploaded < b.uploaded ? 1 : -1))
          .map((info, index) => (
            <Card {...info} key={index} />
          ))}
      </div>
    </Layout>
  );
};

export default HomePage;
