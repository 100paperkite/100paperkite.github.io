import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';

import Layout from '../../components/Layout';
import Tag from '../../components/Post/Tag';

import { getAllPostInfos } from '../../lib/util';
import PostList from '../../components/PostList';

export async function getStaticProps() {
  const postInfos = await getAllPostInfos();

  return {
    props: { postInfos },
  };
}

export default function Tags({ postInfos }) {
  const [currentTag, setTag] = useState();
  const router = useRouter();
  const { q } = router.query;

  const allTags = useMemo(() => {
    return [...new Set(postInfos.map((info) => info.tags).flat())].sort();
  }, [postInfos]);

  useEffect(() => {
    if (!router.isReady) {
      return;
    }
    setTag(q);
  }, [q, router.isReady]);

  return (
    <Layout>
      <div className="flex flex-wrap gap-x-3 gap-y-1 my-3">
        {allTags.map((tag) => (
          <Tag name={tag} key={tag} selected={tag == currentTag ? true : false} />
        ))}
      </div>
      <PostList
        postInfos={postInfos.filter((post) => !currentTag || post.tags.includes(currentTag))}
      />
    </Layout>
  );
}
