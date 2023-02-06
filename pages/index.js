import HomePage from '../components/HomePage';
import { NextSeo } from 'next-seo';

import site from '../siteMetadata';
import { getAllPostInfos } from '../lib/util';

export const getStaticProps = async () => {
  const postInfos = await getAllPostInfos();

  if (process.env.NODE_ENV === 'production') {
    postInfos = postInfos.filter(({ draft }) => draft === false);
  }

  return {
    props: {
      postInfos,
    },
  };
};

export default function Home({ postInfos }) {
  return (
    <>
      <NextSeo title={site.title} description={site.description} />
      <HomePage postInfos={postInfos} />
    </>
  );
}
