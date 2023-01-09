import NextImage from 'next/image';

const Image = ({ src, alt, width, height, sourceHref, source }) => {
  return (
    <div className="text-center pt-1 sm:pt-2 md:pt-3">
      <NextImage
        className="max-w-full h-auto"
        src={src}
        alt={alt}
        width={width || 700}
        height={height}
        unoptimized
      />
      <a className=" text-xs underline text-neutral-500" href={sourceHref}>
        {source || sourceHref}
      </a>
    </div>
  );
};

export default Image;
