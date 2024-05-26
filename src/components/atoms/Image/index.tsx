import React, { useMemo } from 'react';

import useDeviceQueries from 'hooks/useDeviceQueries';
import mapModifiers from 'utils/functions';

export type SizeImageType = 'cover' | 'contain' | 'inherit' | 'initial';

interface ImageProps {
  imgSrc: string;
  srcTablet?: string;
  srcMobile?: string;
  alt: string;
  ratio: Ratio;
  size?: SizeImageType;
  blur?: boolean
}

const Image: React.FC<ImageProps> = ({
  imgSrc, srcTablet, srcMobile, alt, ratio, size, blur,
}) => {
  const { isMobile, isTablet } = useDeviceQueries();
  const sourceImage = useMemo(() => {
    if (isMobile) {
      return srcMobile || imgSrc;
    }
    if (isTablet) {
      return srcTablet || imgSrc;
    }
    return imgSrc;
  }, [isMobile, isTablet, imgSrc, srcMobile, srcTablet]);
  return (
    <div
      className={mapModifiers('a-image', ratio, size, blur && 'blur')}
      style={{ backgroundImage: `url(${sourceImage})` }}
    >
      <img src={sourceImage} alt={alt} />
    </div>
  );
};

Image.defaultProps = {
  srcTablet: undefined,
  srcMobile: undefined,
  size: 'cover',
  blur: false,
};

export default Image;
