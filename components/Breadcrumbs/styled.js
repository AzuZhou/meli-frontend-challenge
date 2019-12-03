import styled from 'styled-components'

import { MEDIA_BREAKPOINTS } from '../../utils/constants'

const Container = styled.div`
  display: none;
  height: 45px;
  position: absolute;
  top: 0;
  left: 0;

  @media ${MEDIA_BREAKPOINTS.tablet} {
    display: flex;
  }
`

export { Container }
