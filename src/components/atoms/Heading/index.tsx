import React, { ReactNode } from 'react';

import mapModifiers from 'utils/functions';

export type Sizes = '20x30' | '24x32' | '48x72' | '32x48' | '32x40' | '48x56' | '24x36' | '48x48';

export type TextStyle = (GeneralTextStyle | Sizes)[];

interface HeadingProps {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  content?: string;
  modifiers?: TextStyle;
  children: ReactNode
}

const Heading: React.FC<HeadingProps> = ({
  children,
  type = 'h2',
  content,
  modifiers,
}) => {
  const Element = type;
  return (
    <>
      {content ? (
        <Element
          className={mapModifiers('a-heading', modifiers)}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      ) : (
        <Element className={mapModifiers('a-heading', modifiers)}>
          {children}
        </Element>
      )}
    </>
  );
};

Heading.defaultProps = {
  type: 'h2',
  modifiers: undefined,
  content: undefined,
};

export default Heading;
