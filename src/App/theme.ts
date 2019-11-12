import colors from '../utils/styles/colors';
const darkTheme = {
  backGround: '#333',
  dimBackGround: '#212121',
  hover: '#333',
  iconLightColor: 'rgba(248, 248, 248, 0.54)',
  textColor: '#ebebeb',
  testColorSecondary: '#d1d1d1',
  footer: '#333',
  codeSnippetBgColor: '#090909',
  secondaryBgColor: '#333',
  dottedLines: 'rgba(236, 236, 236, 0.2)',
};

const defaultTheme = {
  backGround: colors.primary,
  dimBackGround: 'white',
  hover: '#f3f4f240',
  iconLightColor: 'rgba(0, 0, 0, 0.54)',
  textColor: '#24292e',
  footer: colors.snow,
  testColorSecondary: '#586069',
  codeSnippetBgColor: '#f6f8fa',
  secondaryBgColor: 'white',
  dottedLines: 'rgba(0, 0, 0, 0.2)',
};

export default {
  darkTheme,
  defaultTheme,
};
