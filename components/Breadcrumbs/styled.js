import styled from 'styled-components'

import { MEDIA_BREAKPOINTS, FONT_SIZES, COLORS, FONT_WEIGHTS } from '../../utils/constants'

const Container = styled.div`
  display: none;
  height: 45px;
  position: absolute;
  top: 0;
  left: 0;

  @media ${MEDIA_BREAKPOINTS.tablet} {
    display: flex;
    align-items: center;
    padding: 0 22px;
  }

  @media ${MEDIA_BREAKPOINTS.laptop} {
    padding: 0;
  }

  span {
    font-size: ${FONT_SIZES.font9};
    line-height: 1.45;
    display: inherit;
    color: ${COLORS.grey};
    cursor: default;
    font-weight: ${FONT_WEIGHTS.weight2};

    &:last-child {
      color: ${COLORS.textBlack};
    }

    & ~ span {
      position: relative;
      margin-left: 22px;

      &::before {
        position: absolute;
        left: -22px;
        content: url('/chevron.svg');
      }
    }
  }
`

export { Container }
