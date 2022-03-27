import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import { github as style } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const CodeBlock = ({ children: { props } }) => {
  const { className, children: codeString } = props;
  const language = className?.split('-')[1]; // language-${language} 형태.
  return (
    <SyntaxHighlighter language={language} style={style}>
      {codeString.trim()}
    </SyntaxHighlighter>
  );
};

export { CodeBlock };
