import React from 'react'
import styled from 'styled-components'
import { AppProps } from 'next/app'

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const FakeMobileView = styled.div`
  width: 30%;
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PageWrapper>
      <FakeMobileView>
        <Component {...pageProps} />
      </FakeMobileView>
    </PageWrapper>
  )
}

export default MyApp
