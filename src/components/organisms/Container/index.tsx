import React, { ReactNode } from 'react';

import mapModifiers from 'utils/functions';

interface ContainerProps {
  modifier?: 'fullscreen' | 'noPaddingRight' | 'noPaddingLeft';
  children: ReactNode
}

const Container: React.FC<ContainerProps> = ({
  modifier, children,
}) => (
  <div className={`container ${mapModifiers('o-container', modifier)}`}>
    {children}
  </div>
);

Container.defaultProps = {
  modifier: undefined,
};

export default Container;
