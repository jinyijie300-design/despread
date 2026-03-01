import React, { useEffect, useRef, useState } from 'react';

interface LazyVideoProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * 视频懒加载组件：只有当视频元素接近视口时才设置 src 并开始加载，
 * 避免页面初始化时同时请求多个大文件。
 */
export const LazyVideo = ({ src, className, style }: LazyVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !el.src) {
            el.src = src;
            el.load();
            observer.disconnect();
          }
        });
      },
      { rootMargin: '200px' } // 提前 200px 开始加载
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [src]);

  return (
    <div className="relative w-full h-full">
      {/* 骨架屏占位 */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-slate-800 animate-pulse">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-12 h-12 text-slate-600 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
          </div>
        </div>
      )}

      {hasError && (
        <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
          <p className="text-slate-500 text-sm">视频加载失败</p>
        </div>
      )}

      <video
        ref={videoRef}
        className={className}
        style={style}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        onCanPlay={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
      />
    </div>
  );
};
