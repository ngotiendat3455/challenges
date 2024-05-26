export const BASE_URL = process.env.REACT_APP_BASE_URL;

export const LOCAL_STORAGE = {
  LANGUAGE: 'NOVA_FASHION_Language',
  ACCESS_TOKEN: 'NOVA_FASHION_AccessToken',
};

export const DEFAULT_QUERY_OPTION = {
  retry: 0,
  refetchOnMount: false,
  refetchOnWindowFocus: false,
  refetchOnReconnect: false,
};

export const MENU_CODE = {
  MENU_HEADER: 'header',
  MENU_FOOTER: 'footer',
};

export const CONSTANT_LANGUAGE_LIST = ['vi', 'en'];

export type ConstantRoutesCodes = keyof typeof CONSTANT_ROUTES;
export type ConstantRoutesType = typeof CONSTANT_ROUTES;

export const CONSTANT_ROUTES = {
  NEWS_CATEGORIES: 'tin-tuc',
  INVESTMENT_SECTORS: 'linh-vuc-dau-tu',
  STORE_DETAIL: 'chi-tiet-cua-hang',
  STORE_SPECIAL_LIST: 'cua-hang-da-thuong-hieu',
  BRAND_DETAIL: 'chi-tiet-thuong-hieu',
  NEWS_DETAIL: 'chi-tiet-tin-tuc',
  OFFER_DETAIL: 'chi-tiet-uu-dai',
  RECRUITMENT_DETAILS: 'chi-tiet-tuyen-dung',
};

export const CONSTANT_ROUTES_EN: ConstantRoutesType = {
  NEWS_CATEGORIES: 'news',
  INVESTMENT_SECTORS: 'investment-sectors',
  STORE_DETAIL: 'store-detail',
  STORE_SPECIAL_LIST: 'store-list',
  BRAND_DETAIL: 'brand-detail',
  NEWS_DETAIL: 'news-detail',
  OFFER_DETAIL: 'offer-detail',
  RECRUITMENT_DETAILS: 'recruitment-details',
};

export type LanguageKey = keyof LocalesType;

export type LocalesType = {
  vi: LocalesItem,
  en: LocalesItem,
}
