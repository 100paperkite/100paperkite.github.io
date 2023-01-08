import NextImage from 'next/image';

const Image = ({ src, alt, height, sourceHref, source }) => {
  return (
    <div className="text-center pt-1 sm:pt-2 md:pt-3">
      <figure className="relative w-full drop-shadow-xl" style={{ height }}>
        <NextImage
          className="flex"
          src={src}
          alt={alt}
          layout="fill"
          objectFit="contain"
          unoptimized
        />
      </figure>
      <a className=" text-xs underline text-neutral-500" href={sourceHref}>
        {source || sourceHref}
      </a>
    </div>
  );
};

export default Image;
