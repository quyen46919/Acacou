import '../styles/globals.css'
import { SWRConfig } from 'swr'
import axiosClient from '@/api-client/axiosClient'
import { AppPropsWithLayout } from '@/models/common'
import { EmptyLayout } from '../components/layout'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout

  return (
    <Layout>
      <SWRConfig value={{ fetcher: (url) => axiosClient.get(url), shouldRetryOnError: false }}>
        <Component {...pageProps} />
      </SWRConfig>
    </Layout>
  )
}

export default MyApp
