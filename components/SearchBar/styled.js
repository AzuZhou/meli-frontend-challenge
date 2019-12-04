import styled from 'styled-components'

import { COLORS, MEDIA_BREAKPOINTS, FONT_SIZES } from '../../utils/constants'

const Container = styled.div`
  background: ${COLORS.yellow};
  width: 100%;
  height: 60px;
  display: flex;

  > div {
    max-width: 1024px;
    width: 100%;
    padding: 0 22px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${MEDIA_BREAKPOINTS.laptop} {
      margin: 0 auto;
      padding: 0;
    }

    a {
      display: none;

      @media ${MEDIA_BREAKPOINTS.tablet} {
        display: initial;
      }
    }
  }
`

const StyledImage = styled.img`
  height: 35px;
  object-fit: contain;
`

const StyledForm = styled.form`
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  background: white;

  @media ${MEDIA_BREAKPOINTS.tablet} {
    margin-left: 32px;
  }

  input {
    box-sizing: border-box;
    height: 100%;
    width: calc(100% - 48px);
    border: none;
    padding: 8px 16px;
    font-size: ${FONT_SIZES.font8};
    color: ${COLORS.textBlack};

    &:focus {
      color: ${COLORS.grey};
    }

    &::placeholder {
      color: rgba(0, 0, 0, 0.2);
    }
  }

  button {
    width: 49px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    border: none;
    border-left: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;

    img {
      width: 16px;
      opacity: 0.6;
    }
  }
`

export { Container, StyledImage, StyledForm }
