import styled from 'styled-components'

import { MEDIA_BREAKPOINTS, FONT_WEIGHTS, FONT_SIZES, COLORS } from '../../utils/constants'

const Container = styled.div`
  background: white;
  height: 140px;

  @media ${MEDIA_BREAKPOINTS.tablet} {
    height: 200px;
  }

  .link {
    height: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
    margin: 0 22px;
    cursor: pointer;

    @media ${MEDIA_BREAKPOINTS.tablet} {
      pointer-events: none;
    }

    > div {
      > a {
        pointer-events: none;
        display: inline-block;

        @media ${MEDIA_BREAKPOINTS.tablet} {
          pointer-events: auto;
        }
      }

      img {
        width: 90px;
        object-fit: contain;
        max-height: 90px;

        @media ${MEDIA_BREAKPOINTS.tablet} {
          width: 150px;
          max-height: 150px;
        }
      }

      &:first-child {
        width: 90px;
        @media ${MEDIA_BREAKPOINTS.tablet} {
          width: 150px;
        }
      }

      &:last-child {
        height: 70%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 0 12px;

        @media ${MEDIA_BREAKPOINTS.tablet} {
          padding: 0 22px;
        }

        .title {
          font-size: ${FONT_SIZES.font9};
          line-height: 18px;
          font-weight: ${FONT_WEIGHTS.weight2};
          margin-bottom: 12px;

          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;

          @media ${MEDIA_BREAKPOINTS.tablet} {
            font-size: ${FONT_SIZES.font6};
            line-height: 1.2;
          }
        }

        label {
          color: ${COLORS.green};
          font-size: ${FONT_SIZES.font9};
          line-height: 14px;
          margin-top: 12px;
          font-weight: ${FONT_WEIGHTS.weight2};

          @media ${MEDIA_BREAKPOINTS.tablet} {
            line-height: 1.3;
            margin-top: 32px;
          }
        }
      }
    }
  }
`

const Price = styled.div`
  display: inline-block;

  span {
    font-size: ${FONT_SIZES.font6};
    line-height: 1;
    color: ${COLORS.textBlack};

    @media ${MEDIA_BREAKPOINTS.tablet} {
      font-size: ${FONT_SIZES.font4};
      line-height: 1.1;
    }

    &.decimals {
      position: relative;
      top: -8px;
      right: -2px;
      font-size: ${FONT_SIZES.font10};
    }
  }
`

export { Container, Price }
