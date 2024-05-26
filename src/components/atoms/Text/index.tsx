import React, { ReactNode } from 'react';

import mapModifiers from 'utils/functions';

export type Sizes =
  | '20x30'
  | '16x24'
  | '14x22'
  | '12x16'
  | '18x28'
  | '25x25'

export type TextStyle = (GeneralTextStyle | Sizes | 'inline')[];

interface TextProps {
  modifiers?: TextStyle;
  type?: 'p' | 'span' | 'div';
  content?: string;
  children: ReactNode
}

const Text: React.FC<TextProps> = ({
  modifiers,
  type = 'p',
  content,
  children,
}) => {
  const Element = type;
  return (
    <>
      {content ? (
        <Element
          className={mapModifiers('a-text', modifiers)}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      ) : (
        <Element className={mapModifiers('a-text', modifiers)}>
          {children}
        </Element>
      )}
    </>
  );
};

Text.defaultProps = {
  modifiers: undefined,
  type: 'p',
  content: undefined,
};

export default Text;
