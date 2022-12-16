import NextImage from 'next/image';

const Image = ({ src, alt, height, sourceHref, source }) => {
  return (
    <figure
      className="text-center pt-1 sm:pt-2 md:pt-3 relative w-full drop-shadow-xl"
      style={{ height }}
    >
      <NextImage
        className="flex"
        src={src}
        alt={alt}
        layout="fill"
        objectFit="contain"
        unoptimized
      />
      <div>
        <a className="text-xs underline text-neutral-500" href={sourceHref}>
          {source || sourceHref}
        </a>
      </div>
    </figure>
  );
};

export default Image;
