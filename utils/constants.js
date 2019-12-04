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
  lightGrey: 'rgba(0,0,0,.45)',
  green: '#00a650',
  yellow: '#fff159',
  placeholderGrey: 'rgba(0, 0, 0, 0.2)',
  blue: 'rgb(52, 131, 250)'
}

const FONT_WEIGHTS = {
  weight1: 400,
  weight2: 300
}

const FONT_SIZES = {
  font1: '44px',
  font2: '36px',
  font3: '26px',
  font4: '24px',
  font5: '22px',
  font6: '20px',
  font7: '18px',
  font8: '16px',
  font9: '14px',
  font10: '12px'
}

const CURRENCY = {
  ARS: '$'
}

const CONDITIONS = {
  new: 'Nuevo',
  not_specified: '',
  used: 'Usado'
}

export { MEDIA_BREAKPOINTS, COLORS, FONT_WEIGHTS, FONT_SIZES, CURRENCY, CONDITIONS }
