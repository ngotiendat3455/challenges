import React, { ReactNode } from 'react';

import mapModifiers from 'utils/functions';

type Modifiers = 'noMarginTop' | 'marginBottom' | 'mt-60' | 'mb-60' | 'mt-100' | 'mb-100' | 'mb-120' | 'mt-80' | 'mb-80';

interface SectionProps {
  className?: string;
  modifiers?: (Modifiers)[];
  children: ReactNode
}

const Section: React.FC<SectionProps> = ({ className, modifiers, children }) => (
  <section className={`${mapModifiers('o-section', modifiers)} ${className}`}>
    {children}
  </section>
);

Section.defaultProps = {
  className: '',
  modifiers: undefined,
};

export default Section;
