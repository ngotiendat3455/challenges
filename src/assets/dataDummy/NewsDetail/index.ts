import otherNews01Img from 'assets/images/newsDetail/other_news_01.png';
import otherNews02Img from 'assets/images/newsDetail/other_news_02.png';
import otherNews03Img from 'assets/images/newsDetail/other_news_03.png';
import otherNews04Img from 'assets/images/newsDetail/other_news_04.png';
import otherNews05Img from 'assets/images/newsDetail/other_news_05.png';

export const topic = [
  {
    label: 'Khám tổng quát',
    slug: '',
    href: '/',
    target: '_self',
  },
  {
    label: 'Sức khỏe toàn diện',
    slug: '',
    href: '/',
    target: '_self',
  },
  {
    label: 'Ưu đãi',
    slug: '',
    href: '/',
    target: '_self',
  },
];

export const dataInfo = {
  title: 'Nova Fashion Detail mở rộng 6 chi nhánh miền Bắc...',
  href: '/',
  target: '_self',
  date: '23/12/2021',
};

const dataFeaturedArticlesList = {
  title: 'Các bài viết nổi bật',
  relatedList: [
    {
      imgSrc: otherNews01Img,
      ...dataInfo,
    },
    {
      imgSrc: otherNews02Img,
      ...dataInfo,
    },
    {
      imgSrc: otherNews03Img,
      ...dataInfo,
    },
    {
      imgSrc: otherNews04Img,
      ...dataInfo,
    },
    {
      imgSrc: otherNews05Img,
      ...dataInfo,
    },
  ],
};

export default dataFeaturedArticlesList;
