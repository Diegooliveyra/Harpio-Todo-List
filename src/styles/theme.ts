export default {
  grid: {
    container: '150rem',
    gutter: '1.6rem',
  },

  border: {
    radius: '0.8rem',
  },

  font: {
    family: "Poppins, 'Open Sans', sans-serif",
    light: 300,
    normal: 400,
    semiBold: 600,

    sizes: {
      h1: '3.2rem',
      h2: '2rem',
      h3: '1.6rem',
      body: '1.6rem',
      button: '1.4rem',
      caption: '1.2rem',
    },
  },

  colors: {
    black: '#767676',
    gray: '#B1B1B1',
    grayLight: '#ECECEC',
    green: '#07AF9D',
    red: '#FA4949',
    yellow: '#FECE01',
    white: '#ede9f0',
  },

  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    sp20: '2.0rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '10rem',
  },
} as const;
