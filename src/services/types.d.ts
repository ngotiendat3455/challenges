/* eslint-disable camelcase */
type ErrorResponse = { code: number; message: string; field?: string };

type ErrorFormResponse = { field: string; code: string; message: string };

type ErrorCodeResponse = {
  code: string;
  title: string;
}

type SEOData = {
  title?: string;
  description?: string;
  keywords?: string;
}

type OGData = {
  title?: string;
  description?: string;
  type?: string;
  image?: string;
}

type OpenGraph = {
  ogTitle?: any;
  ogImage?: any;
  ogDescription?: any;
  ogType?: string;
}

type DetailBanner = {
  link?: any;
  title: string;
  subTitle: string;
  imageMobile: string;
  imageTablet: string;
  imageDesktop: string;
}

type LinkData = {
  self: string;
  first: string;
  prev: string;
  next: string;
  last: string;
}

type Meta = {
  totalPages: number;
  limit: number;
  total: number;
  page: number;
};

type BreadcrumbsDataTypes = {
  type: string;
  text: string;
  slug: string;
}

type APIPaginationResponse<T> = {
  data: T;
  links: LinkData;
  meta: Meta;
  message: string;
}

type APIResponse<T> = {
  data: T;
  message: string;
};

type LocalesItem = {
  icon?: string;
  message?: string;
  active?: boolean;
  default?: boolean;
}

type LocalesResponse = {
  vi: LocalesItem;
  en: LocalesItem;
}

type LanguageType = 'VN' | 'EN' | 'CN' | 'JP' | 'KR';

type Translation = {
  locale: string;
  title: string;
  slug: string;
  description: string;
}

type BlockComponents<T> = {
  code: string;
  blocks: T;
  active?: boolean;
}

type BannerData = {
  videoDesktop?: string;
  videoTablet?: string;
  videoMobile?: string
  imageDesktop?: string;
  imageMobile?: string;
  imageTablet?: string;
  link?: string;
  subTitle?: string;
  title?: string;
  video?: boolean;
}

type BannersDataTypes = {
  data: BannerData;
  type: string;
}

type PageData = {
  id: number;
  templateCode: string;
  code: string;
  active: boolean;
  isHome: boolean;
  groupCode?: any;
  name: string;
  status: number;
  parentId?: any;
  bannerId: number;
  createdAt: Date;
  updatedAt: Date;
  locale: string;
  title: string;
  slug: string;
  description?: any;
  translations: Translation[];
  image?: string;
}

type BasePageData<T> = {
  pageData: PageData;
  blocks: BlockComponents<T>[];
  banners: BannersDataTypes[];
  seoData: SEOData;
  breadcrumbs: BreadcrumbsDataTypes[];
}

type LanguageRouteMapping = {
  vi: string;
  en: string;
  kr: string;
  jp: string;
  cn: string;
}

type InfoIconTypes = {
  icon?: string;
  link?: {
    url: string;
    target: string;
    text: string;
  };
};

type NewsletterTypes = {
  labelName: string;
  placeholderName: string;
  labelPhone: string;
  placeholderPhone: string;
  labelEmail: string;
  placeholderEmail: string;
  btnSubmit: string;
};

type InfoFooterTypes = {
  logo?: string;
  background?: string;
  address?: string;
  email?: string;
  phone?: string;
  copyright?: string;
  returnPolicy?: {
    text: string;
    url: string;
    target: string;
  };
  latestNews?: {
    text: string;
    url: string;
    target: string;
  };
  social?: InfoIconTypes[];
  newsletter: NewsletterTypes;
};

interface Page<I extends {}> extends BasePageProps {
  pageState: PageData<I>;
  breadcrumbs?: Array<BreadcrumbCustom>;
  slug?: string;
  isLoading?: boolean;
}

type BusinessAreaData<T> = {
  data: T;
  openGraph: OpenGraph;
  seoData: SEOData;
  breadcrumbs: BreadcrumbsDataTypes;
};

/*
| Trang chủ
| =======================================================================
*/

type HomeBlock = {
  code: string;
  blocks: HomeBlockChildType;
};

type HomeBlockChildType = {
  title: string;
  items: HomeBlockItemType[];
}

type HomeBlockItemType = {
  image: string | null;
  title: string;
  description: string | null,
  content: string | null,
}

type BusinessModalAreaType = {
  id: string
  logo: string
  name: string
  slug: string
  description: string;
}
interface BusinessAreaType {
  id: number;
  logo: string;
  name: string;
  slug: string;
  description: string;
  usp: Usp[];
  banner: [];
  imgSrc?: string;
  href?:string;
}

interface Usp {
  image: string | null;
  title: string | null;
  description: string | null;
}

interface INewsType {
  id?: number;
  displayOrder?: number;
  isPopular?: boolean;
  thumbnail?: string;
  publishedAt?: string;
  visitedCount?: number;
  status?: number;
  createdAt?: string;
  updatedAt?: string;
  showDate?: string;
  locale?: string;
  slug?: string;
  title?: string;
  description?: string;
  content?: string;
  tags?: any[];
  ogTitle?: null | string;
  ogImage?: null | string;
  ogDescription?: null | string;
  categories?: Category[];
  breadcrumbs?: BreadcrumbsDataTypes[];
  seoData?: SEOData;
}
interface Category {
  id: number;
  name: string;
  slug: string;
}

interface IExchangePolicyBlock{
  title?:string,
  content?:string
}
// ==== Thương Hiệu ====
   interface InewTypeModels {
  id?: string;
  thumbnail?: string;
  title?: string;
  slug?: string;
  description?: string;
  isSpecial?: boolean;
}
type IndustryBlockChildType = {
  title: string;
  items: IndustryBlockItemType[];
}

type IndustryBlockItemType = {
  image:string | null;
  title: string;
  description: string | null
  content?:stirng | null
}
/*
| Recruitment
| =======================================================================
*/
interface IRecruitmentFormData {
  name: string,
  email: string,
  phone : string,
  work_experience: string,
  nearest_working_company: string,
  recruitment_position_id : string,
  recruitment_news_id : string,
  city_id : string,
  file?: File
}

interface IRecruitmentNewsType{
  page?: number,
  keyword?:string,
  limit?:string | number,
  recruitment_unit_id?: string | number,
  recruitment_position_id?: string | number,
  recruitment_department_id?: string | number,
  city_id?: string | number
}

interface IResponseRecruitmentDepartments{
  id:number,
  name:string,
}

interface IResponseRecruitmentData{
  id: number | string,
  name: string
  slug: string
  applyCode: string
  quantity: number,
  expirationDate:string
  position: {
    id: number | string,
    name: string,
  },
  unit: string,
  department: string,
  city: string,
}

// interface IResponseRecruitmentPositions{
//   id:number,
//   name:string,
// }

// interface IResponseRecruitmentUnits{
//   id:number,
//   name:string,
// }
type OptionType = {
  id: string;
  label: string;
  value: string;
  templateCode?: string;
  slug?: string;
}

type RecruitmentOption = {
  id:number,
  name:string,
}
type RecruitmentBlock = {
  code: string;
  blocks: RecruitmentBlocks;
}
type ReasonItemRecruitment = {
  description:string,
  image: null | string,
  title:string
}
type JobSearchRecuitmentType = {
  department:string
  location: string
  position: string
}
type JobTableRecruitmentType = {
  department: string
  expiryDate: string
  jobCode: string
  location: string
  position: string
  unit: string
}
type RecruitmentBlocks = {
  item1?:ReasonItemRecruitment,
  item2?:ReasonItemRecruitment,
  item3?:ReasonItemRecruitment
  title?: string;
  search?:JobSearchRecuitmentType,
  table?: JobTableRecruitmentType
}

interface ResponseCareerInfoType{
  applyCode: string
  city: string
  department: string
  expirationDate: Date
  id: number
  name: string
  position: {
    id: number
    name: string
  }
  quantity: number
  slug: string
  unit: string
}
interface IDetailRecruitment {
  id: number;
  name: string;
  slug: string;
  applyCode: string;
  quantity: number;
  expirationDate: Date;
  position: Position;
  unit: string;
  department: string;
  city: {
    id: number
    name: string
  };
  description: string;
  seoData: SEOData;
  breadcrumbs: Breadcrumb[];
}

interface Position {
  id: number;
  name: string;
}

/*
| Liên hệ
| =======================================================================
*/
type ContactBlocks = {
  fax: null | string;
  cskh: null | string;
  email: null | string;
  title: string;
  address: null | string;
  socials: Social[];
  lableFax: null | string;
  lableCskh: null | string;
  lableEmail: null | string;

  buttonSend: string;
  placeholderName: string;
  placeholderEmail: string;
  placeholderPhone: string;
  placeholderTitle: string;
  placeholderContent: string;
};
interface Social {
  icon: string;
  link: {
    url: null;
    text: null;
    target: string;
  };
}

type ContactParamsType = {
  name:string,
  email:string,
  phone:string,
  title:string,
  content?:string,
  grecaptcha_token:string,
}
/**
 *
 * ERROR BLOCK
 */

 interface ErrorProps {
  templateCode: string;
  slug: string;
  title: string;
  blocks: BlockData[];
}

interface BlockData {
  code: string;
  active: boolean;
  blocks: BlocksErrorContainer;
}

interface BlocksErrorContainer {
  title: string;
  description: string;
  buttonContact: Button;
  buttonRedirect: Button;
}
/*
| News
| =======================================================================
*/

interface IParamNews extends IParamPagination{
  date_from?:string,
  date_to?:string,
}

interface ResponseNews {
  id: number;
  displayOrder: number;
  isPopular: boolean;
  thumbnail: string;
  publishedAt: Date;
  visitedCount: number;
  status: number;
  createdAt: Date;
  updatedAt: Date;
  showDate: Date;
  locale: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  tags: any[];
  ogTitle: null | string;
  ogImage: null | string;
  ogDescription: null | string;
  categories: Category[];
  breadcrumbs: Breadcrumb[];
  seoData: SEOData;
}

interface VideoType {
  id: number;
  displayOrder: number;
  thumbnail: string;
  name: string;
  video: string;
  videoType: string;
  slug: string;
  locale: string;
  createdAt: Date;
  updatedAt: Date;
  isFeatured: boolean,
}

interface IParamVideo extends IParamPagination{
  is_featured?: 0 | 1,
}

interface IParamPagination{
  page?:number,
  keyword?:string,
  limit?:number,
}
interface ResponseDetail {
  newsData: NewsData;
  relatedNews: NewsData[];
  seoData: SEOData;
  breadcrumbs: Breadcrumb[];
}
interface NewsData {
  id: number;
  displayOrder: number;
  isPopular: boolean;
  thumbnail: string;
  publishedAt: Date;
  visitedCount: number;
  status: number;
  createdAt: Date;
  updatedAt: Date;
  showDate: Date;
  categories?: Category[];
  title: string;
  slug: string;
  description: string;
  content: string;
  tags: any[];
  pivot?: Pivot;
}
// ===== VỀ CHÚNG TÔI ======
type AboutBlockChildType = {
  title: string;
  items: AboutUsBlockItemType[];
  image1: null | string,
  image2: null | string,
  title: null | string,
  description: null | string
};
type AboutUsBlockItemType = {
  description: null | string
  icon: null | string
  title: null |string
};

/**
 * TIM KIEM
 */

 type StateSearchLocation = {
  keyword: string;
}

type SearchChildType = {
  title: string;
  placeholderSearch: string;
}

type ISearchParamsType = {
  is_populater?: 0 | 1,
  sort_published_at?: boolean,
  limit?:number,
  page?:number,
  keyword?:string,
}

interface StoreSystemData {
  address: string;
  businessArea: string;
  businessBrand: string;
  businessModel: string;
  city: string;
  district: string;
  id: number;
  image: string;
  name: string;
  openHours: string;
  slug: string;
  ward: string;
  phone?: string;
}
/**
 * Shop system
 */
interface IShopSystemBlock{
  placeholderBrand: string
  placeholderCity: string
  placeholderModel: string
  title: string
}
interface IBusinessAreas{
  id: number | string,
  logo: string | null,
  name: string,
  slug: string,
  description: string,
}
