/* eslint-disable react/button-has-type */
import React from 'react';

import Icon from 'components/atoms/Icon';
import mapModifiers from 'utils/functions';

type Size = 'sm' | 'md';
type Variant = 'minWidth112px' | 'red' | 'primary' | 'bgRaisinBlack' | 'bgWhite' | 'bgBlack' | 'outlineGray' | 'bgWhiteBorder' | 'bgTransparent';
type BorderRadius = 'noBr' | 'br-2';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  modifiers?: (Variant | Size | BorderRadius | FontWeightStyle | 'inline')[];
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children, modifiers, name, id, className, isLoading, disabled, type = 'button',
  onClick,
}) => (
  <button
    id={id}
    name={name}
    type={type}
    disabled={disabled || isLoading}
    onClick={onClick}
    className={mapModifiers('a-button',
      modifiers,
      className,
      isLoading && 'loading')}
  >
    {isLoading ? <Icon iconName="loading" /> : children}
  </button>
);

Button.defaultProps = {
  modifiers: ['primary'],
  isLoading: false,
};

export default Button;
