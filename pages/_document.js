import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, createGlobalStyle } from 'styled-components'

import { COLORS } from '../utils/constants'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap');
  * {
    font-family: 'Roboto', sans-serif; 
  }

  body {
    background: ${COLORS.backgroundGrey};
    margin: 0;

    input, button {
      outline: none;
    }

    a {
      text-decoration: none;
      cursor: pointer;
      color: ${COLORS.textBlack};

      &:focus, &:active, &:visited {
        color: ${COLORS.textBlack};
      }

      &:hover {
        color: ${COLORS.hoverTextBlack};
      }
    }
  }
`

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            sheet.collectStyles(
              <>
                <GlobalStyles />
                <App {...props} />
              </>
            )
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
