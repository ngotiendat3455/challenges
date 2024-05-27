import useLazyLoad from "hooks/useLazyLoad";
import React, { useRef, useEffect } from "react";


interface LazyLoadProps {
  src: string;
  alt: string;
  type?: "src" | "background";
  loadedClassName?: string;
  options?: IntersectionObserverInit;
  children?: React.ReactNode;
  style?: Object
}

const LazyLoad = (props: LazyLoadProps) => {
  const {
    src,
    alt,
    type = "src",
    loadedClassName = "loaded",
    options = {},
    children,
    ...rest
  } = props;

  const lazyLoadRef = useLazyLoad({ options, type, loadedClassName });
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) lazyLoadRef(elementRef.current);
  }, [elementRef, lazyLoadRef]);

  if (type === "src") {
    return (
      <img
        ref={elementRef}
        data-src={src}
        alt={alt}
        className="lazy"
        {...rest}
      />
    );
  } else if (type === "background") {
    return (
      <div
        ref={elementRef}
        data-src={src}
        aria-label={alt}
        role="img"
        className="lazy-background"
        {...rest}
      >
        {children}
      </div>
    );
  } else {
    return null;
  }
};

export default LazyLoad;