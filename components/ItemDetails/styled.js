import styled from 'styled-components'

import { MEDIA_BREAKPOINTS, FONT_SIZES, COLORS, FONT_WEIGHTS } from '../../utils/constants'

const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  @media ${MEDIA_BREAKPOINTS.tablet} {
    padding-top: 45px;
  }

  @media ${MEDIA_BREAKPOINTS.laptop} {
    margin: 0 auto;
  }
`

const Grid = styled.div`
  display: grid;
  margin-bottom: 80px;
  background: white;
  padding: 22px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-row: repeat(3, 1fr);
  grid-template-areas:
    'picture picture picture'
    'primaryInfo primaryInfo primaryInfo'
    'secondaryInfo secondaryInfo secondaryInfo';

  @media ${MEDIA_BREAKPOINTS.tablet} {
    padding: 32px;
    grid-template-areas:
      'picture picture primaryInfo'
      'picture picture primaryInfo'
      'secondaryInfo secondaryInfo .';
  }
`

const Picture = styled.div`
  grid-area: picture;
  display: flex;
  justify-content: center;
  padding: 10px;

  @media ${MEDIA_BREAKPOINTS.tablet} {
    padding: 12px;
  }

  img {
    object-fit: contain;
  }
`

const PrimaryInfo = styled.div`
  grid-area: primaryInfo;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;

  @media ${MEDIA_BREAKPOINTS.tablet} {
    padding: 12px;
  }

  > span {
    font-size: ${FONT_SIZES.font9};
    color: ${COLORS.lightGrey};
    line-height: 1.35;
    font-weight: ${FONT_WEIGHTS.weight2};
  }

  h1 {
    font-size: ${FONT_SIZES.font5};
    line-height: 1;
    margin: 12px 0 22px 0;

    @media ${MEDIA_BREAKPOINTS.tablet} {
      font-size: ${FONT_SIZES.font3};
      line-height: 1.18;
    }
  }

  label {
    color: ${COLORS.green};
    font-size: ${FONT_SIZES.font10};
    line-height: 14px;
    font-weight: ${FONT_WEIGHTS.weight2};
    margin-top: 12px;

    @media ${MEDIA_BREAKPOINTS.tablet} {
      font-size: ${FONT_SIZES.font9};
      line-height: 1.3;
    }
  }

  button {
    margin-top: 48px;
    height: 50px;
    width: 100%;
    border-radius: 4px;
    border: none;
    background: ${COLORS.blue};
    color: white;
    font-size: ${FONT_SIZES.font7};
    font-weight: ${FONT_WEIGHTS.weight2};
    cursor: pointer;
  }
`

const SecondaryInfo = styled.div`
  grid-area: secondaryInfo;
  padding: 10px;

  @media ${MEDIA_BREAKPOINTS.tablet} {
    padding: 12px;
  }

  h3 {
    font-size: ${FONT_SIZES.font4};
    color: ${COLORS.grey};
    line-height: 1.35;
    font-weight: ${FONT_WEIGHTS.weight2};
    margin: 40px 0 22px 0;

    @media ${MEDIA_BREAKPOINTS.tablet} {
      font-size: ${FONT_SIZES.font7};
    }
  }

  p {
    font-size: ${FONT_SIZES.font8};
    line-height: 1.35;
    color: ${COLORS.grey};
    white-space: pre-wrap;
  }
`

const Price = styled.div`
 display: inline-block;

  span {
    font-size: ${FONT_SIZES.font2};
    line-height: 1em;
    color: ${COLORS.textBlack};
    font-weight: ${FONT_WEIGHTS.weight2};

    @media ${MEDIA_BREAKPOINTS.tablet} {
      font-size: ${FONT_SIZES.font1};
    }

    &.decimals {
      position: relative;
      top: -8px;
      right: -2px;
      font-size: ${FONT_SIZES.font6};
      line-height: 1.8;
    }
`

export { Container, Grid, Picture, PrimaryInfo, SecondaryInfo, Price }
