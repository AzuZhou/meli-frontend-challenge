import styled from 'styled-components'

import { MEDIA_BREAKPOINTS } from '../../utils/constants'

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

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 0;
  margin-bottom: 80px;

  li {
    &:first-child {
      > div {
        @media ${MEDIA_BREAKPOINTS.laptop} {
          border-top-right-radius: 4px;
          border-top-left-radius: 4px;
        }
      }
    }

    &:last-child {
      > div {
        @media ${MEDIA_BREAKPOINTS.laptop} {
          border-bottom-right-radius: 4px;
          border-bottom-left-radius: 4px;
        }
      }
    }

    & ~ li {
      border-top: 1px solid #eee;
    }
  }
`

export { Container, List }
