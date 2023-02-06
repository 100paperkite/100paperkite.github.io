import { Card } from './Post';

export default function PostList({ postInfos }) {
  return (
    <>
      {postInfos
        .sort((a, b) => {
          return a.uploaded < b.uploaded ? 1 : -1;
        })
        .map((info, index) => (
          <Card {...info} key={index} />
        ))}
    </>
  );
}
