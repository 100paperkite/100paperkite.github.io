import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const PostCodeBlock = ({ children: { props: props } }) => {
  const { className: language } = props;
  return <SyntaxHighlighter language={language} {...props} style={vs2015} />;
};

export default PostCodeBlock;
