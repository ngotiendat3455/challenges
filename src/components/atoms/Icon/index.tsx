import React from 'react';

import mapModifiers from 'utils/functions';

export const iconList = {
  search: 'search',
  fbBlack: 'fbBlack',
  instagram: 'instagram',
  dropDownGray: 'dropDownGray',
  hamburger: 'hamburger',
  close: 'close',
  searchGray: 'searchGray',
  loading: 'loading',
  igWhite: 'igWhite',
  fbWhite: 'fbWhite',
  fbBlue: 'fbBlue',
  zalo: 'zalo',
  arrowNextWhite: 'arrowNextWhite',
  arrowNextBlack: 'arrowNextBlack',
  accessTime: 'accessTime',
  locationOn: 'locationOn',
  phone: 'phone',
  shoppingBag: 'shoppingBag',
  cloudUpload: 'cloudUpload',
  closeBlack: 'closeBlack',
  greenSuccess: 'greenSuccess',
  redError: 'redError',
  arrowUpward: 'arrowUpward',
  pause: 'pause',
  unMute: 'unMute',
  mute: 'mute',
};

export type IconName = keyof typeof iconList;

export type IconSize = '10' | '14' | '15' | '16' | '20' | '24' | '32';
interface IconProps {
  iconName: IconName;
  size?: IconSize;
}
const Icon: React.FC<IconProps> = ({ iconName, size }) => (
  <i className={mapModifiers('a-icon', iconName, size)} />);

Icon.defaultProps = {
  size: '24',
};

export default Icon;
