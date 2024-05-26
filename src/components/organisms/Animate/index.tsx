import React, { ReactNode, useRef } from 'react';
import 'index.scss';

import useScrollAnimate from 'hooks/useScrollAnimation';

type AnimateType =
  // Attention seekers
  | 'bounce'
  | 'flash'
  | 'pulse'
  | 'rubberBand'
  | 'shakeX'
  | 'shakeY'
  | 'swing'
  | 'tada'
  | 'wobble'
  | 'heartBeat'
  | 'jello'
  | 'headShake'
  // Back entrances
  | 'backInDown'
  | 'backInLeft'
  | 'backInRight'
  | 'backInUp'
  // Back exits
  | 'backOutDown'
  | 'backOutLeft'
  | 'backOutRight'
  | 'backOutUp'
  // Bouncing entrances
  | 'bounceIn'
  | 'bounceInDown'
  | 'bounceInLeft'
  | 'bounceInRight'
  | 'bounceInUp'
  // Bouncing exits
  | 'bounceOut'
  | 'bounceOutDown'
  | 'bounceOutLeft'
  | 'bounceOutRight'
  | 'bounceOutUp'
  // Fading entrances
  | 'fadeIn'
  | 'fadeInBottomLeft'
  | 'fadeInBottomRight'
  | 'fadeInDown'
  | 'fadeInDownBig'
  | 'fadeInLeft'
  | 'fadeInLeftBig'
  | 'fadeInRight'
  | 'fadeInRightBig'
  | 'fadeInTopLeft'
  | 'fadeInTopRight'
  | 'fadeInUp'
  | 'fadeInUpBig'
  // Fading exits
  | 'fadeOut'
  | 'fadeOutBottomLeft'
  | 'fadeOutBottomRight'
  | 'fadeOutDown'
  | 'fadeOutDownBig'
  | 'fadeOutLeft'
  | 'fadeOutLeftBig'
  | 'fadeOutRight'
  | 'fadeOutRightBig'
  | 'fadeOutTopLeft'
  | 'fadeOutTopRight'
  | 'fadeOutUp'
  | 'fadeOutUpBig'
  // Flippers
  | 'flip'
  | 'flipInX'
  | 'flipInY'
  | 'flipOutX'
  | 'flipOutY'
  // Lightspeed
  | 'lightSpeedInLeft'
  | 'lightSpeedInRight'
  | 'lightSpeedOutLeft'
  | 'lightSpeedOutRight'
  // Rotating entrances
  | 'rotateIn'
  | 'rotateInDownLeft'
  | 'rotateInDownRight'
  | 'rotateInUpLeft'
  | 'rotateInUpRight'
  // Rotating exits
  | 'rotateOut'
  | 'rotateOutDownLeft'
  | 'rotateOutDownRight'
  | 'rotateOutUpLeft'
  | 'rotateOutUpRight'
  // Specials
  | 'hinge'
  | 'jackInTheBox'
  | 'rollIn'
  | 'rollOut'
  // Zooming entrances
  | 'zoomIn'
  | 'zoomInDown'
  | 'zoomInLeft'
  | 'zoomInRight'
  | 'zoomInUp'
  // Zooming exits
  | 'zoomOut'
  | 'zoomOutDown'
  | 'zoomOutLeft'
  | 'zoomOutRight'
  | 'zoomOutUp'
  // Sliding entrances
  | 'slideInDown'
  | 'slideInLeft'
  | 'slideInRight'
  | 'slideInUp'
  // Sliding exits
  | 'slideOutDown'
  | 'slideOutLeft'
  | 'slideOutRight'
  | 'slideOutUp';

interface AnimateProps {
  extendClassName?: string;
  type?: AnimateType;
  animationDelay?: string;
  defaultDivideScreen?: number;
  children: ReactNode
}

const Animate: React.FC<AnimateProps> = ({
  children,
  extendClassName,
  animationDelay,
  type,
  defaultDivideScreen,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const animate = useScrollAnimate(ref, defaultDivideScreen);
  return (
    <div
      ref={ref}
      className={animate ? `${extendClassName} animate animate-${type || ''}` : `${extendClassName} preanimate`}
      style={{ animationDelay }}
    >
      {children}
    </div>
  );
};

Animate.defaultProps = {
  extendClassName: undefined,
  type: undefined,
  animationDelay: '',
  defaultDivideScreen: 2,
};

export default Animate;
