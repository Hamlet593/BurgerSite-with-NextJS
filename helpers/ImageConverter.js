import Image from 'next/image';

const ImageConverter = ({ src, alt, width, height }) => {
    const convertImage = (width, height) => `
    <svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#333" offset="20%" />
          <stop stop-color="#222" offset="50%" />
          <stop stop-color="#333" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="#333" />
      <rect id="r" width="${width}" height="${height}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${width}" to="${width}" dur="1s" repeatCount="indefinite"  />
    </svg>`;

    const toBase64 = (str) =>
        typeof window === 'undefined'
            ? Buffer.from(str).toString('base64')
            : window.btoa(str);

    return (
        <div>
            <div>
                <Image
                    src={src}
                    alt={alt}
                    placeholder="blur"
                    width={width}
                    height={height}
                    className="rounded-t"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                        convertImage(width, height)
                    )}`}
                />
            </div>
        </div>
    )
}

export default ImageConverter;