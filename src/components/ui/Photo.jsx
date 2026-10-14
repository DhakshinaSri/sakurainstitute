/** Responsive, lazy-loaded photo. width/height are set to prevent layout shift. */
export default function Photo({ image, alt, sizes, priority = false, className = "" }) {
  return (
    <img
      className={className}
      src={image.src}
      srcSet={image.srcSet}
      sizes={sizes}
      width={image.width}
      height={image.height}
      alt={alt ?? image.alt}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : undefined}
    />
  );
}
