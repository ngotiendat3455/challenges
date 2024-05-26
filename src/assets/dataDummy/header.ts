import { MenuItemDataTypes } from 'services/menus/types';

const menuList: MenuItemDataTypes[] = [
  {
    id: 1,
    menuId: 1,
    depth: 1,
    lft: 1,
    parentId: 1,
    referenceId: 1,
    reference: {
      slug: '/ve-chung-toi',
    },
    type: '22',
    createdAt: 'ss',
    target: '_blank',
    rgt: 1,
    title: 'Về Chúng Tôi',
    updatedAt: 'sss',
  },
  {
    id: 1,
    menuId: 1,
    depth: 1,
    lft: 1,
    parentId: 1,
    referenceId: 1,
    reference: {
      slug: '/thuong-hieu',
    },
    type: '22',
    createdAt: 'ss',
    target: '_blank',
    rgt: 1,
    title: 'Thương Hiệu',
    updatedAt: 'sss',
  },
  {
    id: 1,
    menuId: 1,
    depth: 1,
    lft: 1,
    parentId: 1,
    referenceId: 1,
    reference: {
      slug: '/tin-tuc',
    },
    type: '22',
    createdAt: 'ss',
    target: '_blank',
    rgt: 1,
    title: 'Tin Tức ',
    updatedAt: 'sss',
  },
  {
    id: 1,
    menuId: 1,
    depth: 1,
    lft: 1,
    parentId: 1,
    referenceId: 1,
    reference: {
      slug: '/he-thong-cua-hang',
    },
    type: '22',
    createdAt: 'ss',
    target: '_blank',
    rgt: 1,
    title: 'Hệ Thống Cửa Hàng',
    updatedAt: 'sss',
  },
  {
    id: 1,
    menuId: 1,
    depth: 1,
    lft: 1,
    parentId: 1,
    referenceId: 1,
    reference: {
      slug: '/uu-dai',
    },
    type: '22',
    createdAt: 'ss',
    target: '_blank',
    rgt: 1,
    title: 'Ưu Đãi',
    updatedAt: 'sss',
  },
  {
    id: 1,
    menuId: 1,
    depth: 1,
    lft: 1,
    parentId: 1,
    referenceId: 1,
    reference: {
      slug: '/tuyen-dung',
    },
    type: '22',
    createdAt: 'ss',
    target: '_blank',
    rgt: 1,
    updatedAt: 'sss',
    title: 'Tuyển Dụng',
  },
  {
    id: 1,
    menuId: 1,
    depth: 1,
    lft: 1,
    parentId: 1,
    referenceId: 1,
    reference: {
      slug: '/lien-he',
    },
    type: '22',
    createdAt: 'ss',
    target: '_blank',
    rgt: 1,
    updatedAt: 'sss',
    title: 'Liên Hệ',
  },
];

export type LanguageType = 'VN'|'EN'|'JP';

export const languageActive = { value: 'vi', label: 'VI' };
export const listLanguage = [{ value: 'vi', label: 'VI' }, { value: 'en', label: 'EN' }];

export const LIST_LANGUAGE:Array<{label:LanguageType, value: string}> = [
  {
    label: 'VN',
    value: 'vi',
  },
  {
    label: 'EN',
    value: 'en',
  },
];

export default menuList;
