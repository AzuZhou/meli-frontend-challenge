const MEDIA_SIZES = {
  mobile: '425px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1440px'
}

const MEDIA_BREAKPOINTS = {
  mobile: `(min-width: ${MEDIA_SIZES.mobile})`,
  tablet: `(min-width: ${MEDIA_SIZES.tablet})`,
  laptop: `(min-width: ${MEDIA_SIZES.laptop})`,
  desktop: `(min-width: ${MEDIA_SIZES.desktop})`
}

const COLORS = {
  backgroundGrey: '#eee',
  textBlack: '#333',
  hoverTextBlack: '#000',
  grey: '#666',
  green: '#00a650',
  yellow: '#fff159',
  placeholderGrey: 'rgba(0, 0, 0, 0.2)'
}

const FONT_WEIGHTS = {
  weight1: 400,
  weight2: 300
}

const FONT_SIZES = {
  font1: '24px',
  font2: '20px',
  font3: '16px',
  font4: '14px',
  font5: '12px'
}

const CURRENCY = {
  ARS: '$'
}

export { MEDIA_BREAKPOINTS, COLORS, FONT_WEIGHTS, FONT_SIZES, CURRENCY }
