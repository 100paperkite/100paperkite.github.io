import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import PostCard from '../components/PostCard';

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split('.')[0],
    };
  });

  return {
    props: {
      posts,
    },
  };
};

export default function Home({ posts }) {
  return (
    <div>
      <div className="grid grid-cols-1 max-w-screen-md mx-auto">
        {posts.map((post, index) => (
          <PostCard post={post} key={index} />
        ))}
      </div>
    </div>
  );
}
