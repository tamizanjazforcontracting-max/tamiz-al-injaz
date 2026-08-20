// Image Optimization Hook for Lazy Loading and Performance
import React, { useState, useRef, useEffect } from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallback?: string;
  skeleton?: boolean;
}

export const OptimizedImage = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ src, fallback = 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80', skeleton = true, ...props }, ref) => {
    const [imageSrc, setImageSrc] = useState<string>(src);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const handleImageLoad = () => {
      setIsLoading(false);
    };

    const handleImageError = () => {
      setHasError(true);
      setImageSrc(fallback);
      setIsLoading(false);
    };

    return (
      <>
        {skeleton && isLoading && !hasError && (
          <div className="absolute inset-0 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 animate-pulse" />
        )}
        <img
          ref={ref}
          src={imageSrc}
          loading="lazy"
          decoding="async"
          onLoad={handleImageLoad}
          onError={handleImageError}
          className={`${props.className} ${
            isLoading && skeleton ? 'opacity-0' : 'opacity-100'
          } transition-opacity duration-300`}
          {...props}
        />
      </>
    );
  }
);

OptimizedImage.displayName = 'OptimizedImage';
