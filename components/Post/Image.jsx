import NextImage from 'next/image';

const Image = (props) => {
  return (
    <figure className="text-center pt-1 sm:pt-2 md:pt-3">
      <NextImage
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

export { Image };
