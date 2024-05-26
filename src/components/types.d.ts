type Ratio =
  | 'logo'
  | '1x1'
  | '4x3'
  | '16x9'
  | '450x182'
  | '1366x600'
  | '259x52'
  | 'banner'
  | '1094x1280'
  | '429x572'
  | '547x752'
  | '547x360'
  | '353x254'
  | '415x572'
  | '257x343'
  | '547x308'
  | '206x154'
  | '488x322'
  | '1126x633'
  | '271x410'
  | '449x596'
  | '348x469'
  | '465x618'
  | '257x215'
  | '354x119'
  | '416x552'
  | '255x214';

type FontWeightStyle =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

type TextStyle =
  | 'uppercase'
  | 'capitalize'
  | 'underline'
  | 'italic'
  | 'center'
  | 'justify'
  | 'normal'
  | 'right'
  | 'left';

type ColorStyle =
  | 'white'
  | 'grayX11'
  | 'raisinBlack'
  | 'davysGrey'
  | 'arsenic'
  | 'black085'
  | 'silverChalice'
  | 'gainsboro'
  | 'gray82'
  | 'snow'
  | 'outerSpace'
  | 'charlestonGreen'
  | 'raisinBlack3'
  | 'whiteSmoke';

type FontFamily = 'fontNoto' | 'fontMontserrat' | 'fontLexend' | 'fontSan';

type GeneralTextStyle = ColorStyle | FontWeightStyle | TextStyle | FontFamily |'lineCamp1' |'lineCamp2' | 'lineCamp4';
