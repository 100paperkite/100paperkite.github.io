import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 as codeStyle } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import Image from 'next/image';

export const PageSyntaxHighlighter = (props) => (
  <SyntaxHighlighter
    {...props}
    style={codeStyle}
    customStyle={{ padding: '' }}
    className="not-prose sm:not-prose md:not-prose rounded-lg text-xs md:text-sm p-3 md:p-4"
  />
);

export const PageImage = (props) => {
  return (
    <figure className="text-center pt-1 sm:pt-2 md:pt-3">
      <Image
        className="flex rounded"
        src={props.src}
        alt={props.alt}
        height={props.height || 700}
        width={props.width || 700}
        unoptimized
      />
      <div>
        <a className="text-xs underline text-neutral-500" href={props.sourceHref}>
          {props.source || props.sourceHref}
        </a>
      </div>
    </figure>
  );
};
