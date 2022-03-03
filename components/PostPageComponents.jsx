import SyntaxHighlighter from 'react-syntax-highlighter';
import Image from 'next/image';

export const PageSyntaxHighlighter = (props) => (
  <SyntaxHighlighter
    {...props}
    className="not-prose sm:not-prose md:not-prose rounded-lg text-sm"
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
      />
      <div>
        <a className="text-xs underline text-neutral-500" href={props.sourceHref}>
          {props.source || props.sourceHref}
        </a>
      </div>
    </figure>
  );
};
