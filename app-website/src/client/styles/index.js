import typography from '../config/typography'

function getTypographyCss(config) {
  return {
    fontSize: config.size,
    fontWeight: config.weight || 400,
    fontFamily: config.family,
    lineHeight: config.lineHeight
  };
}

export const typographyStyles = typography.reduce((styles, config) => {
  styles[config.id] = getTypographyCss(config);
  return styles;
}, {});

export const globalStyle = `
  body {
    background-color: #f9f8f6;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  }
`;