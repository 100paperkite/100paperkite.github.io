import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 as codeStyle } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export const PageSyntaxHighlighter = (props) => (
  <SyntaxHighlighter
    {...props}
    style={codeStyle}
    customStyle={{ padding: '' }}
    className="not-prose sm:not-prose md:not-prose rounded-lg text-xs md:text-sm p-3 md:p-4"
  />
);
