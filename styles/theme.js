const { extendTheme } = require('@chakra-ui/react');

export const fonts = {
  body: `'milimetre regular', sans-serif`,
  heading: `'milimetre bold', sans-serif`,
};

export const colors = {
  egg: '#FBF2D8',
  brand: {
    red: '#FF3D46',
    egg: '#FBF2D8',
  },
};

const theme = extendTheme({
  fonts,
  colors,
});

export default theme;
