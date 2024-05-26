import React, { ReactNode, useLayoutEffect, useRef } from 'react';

import mapModifiers, { handleScrollCenter } from 'utils/functions';

interface TabProps {
  label?: string;
  active?: boolean;
  handleClick?: () => void;
}
interface TabPanelProps {
  active?: boolean;
  children: ReactNode
}

type TabsProps = {
  variableMutate?: number;
  classTabsActive?: string;
  variant?: 'vertical';
  // eslint-disable-next-line react/require-default-props
  modifierTabs?: ('borderActive2px' | 'gap100' | 'searchModifier')[],
  children: ReactNode
};

export const TabPanel: React.FC<TabPanelProps> = ({ active, children }) => (
  <div className={mapModifiers('o-tabs_panel', active && 'active')}>
    <div className="o-tabs_panelGroup">
      {children}
    </div>
  </div>
);

TabPanel.defaultProps = {
  active: false,
};

export const Tab: React.FC<TabProps> = ({ active, label, handleClick }) => (
  <div onClick={handleClick} className={mapModifiers('o-tabs_tab', active && 'active')}>
    <span className="o-tabs_label">{label}</span>
  </div>
);

Tab.defaultProps = {
  label: '',
  active: false,
  handleClick: undefined,
};

export const Tabs: React.FC<TabsProps> = ({
  children, variableMutate, classTabsActive, variant, modifierTabs,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    handleScrollCenter(ref, classTabsActive || '.o-tabs_tab-active');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variableMutate]);

  return (
    <div className={mapModifiers('o-tabs', variant, modifierTabs)}>
      <div ref={ref} className="o-tabs_labels">
        {children}
      </div>
    </div>
  );
};

Tabs.defaultProps = {
  variableMutate: undefined,
  classTabsActive: '',
  variant: undefined,
};

export default React.memo(Tabs);
