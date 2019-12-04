import styled from 'styled-components'

import { COLORS, FONT_SIZES, MEDIA_BREAKPOINTS } from '../../utils/constants'

const Container = styled.div`
  max-width: 1024px;
  width: 100%;

  @media ${MEDIA_BREAKPOINTS.tablet} {
    padding-top: 45px;
  }

  @media ${MEDIA_BREAKPOINTS.laptop} {
    margin: 0 auto;
  }

  h3 {
    color: ${COLORS.orange};
    font-size: ${FONT_SIZES.font9};
    font-style: italic;
    padding: 22px;
    text-align: center;
    line-height: 1.35;

    @media ${MEDIA_BREAKPOINTS.tablet} {
      font-size: ${FONT_SIZES.font7};
    }
  }
`

export { Container }
