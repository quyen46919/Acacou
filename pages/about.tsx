import { useAuth } from '@/hooks'
import { NextPageWithLayout } from '@/models'
import { AdminLayout } from '../components/layout'

const AboutPage: NextPageWithLayout = () => {
  // const { profile } = useAuth()
  return (
    <div>
      <h1>About page</h1>
      {/* <p>{JSON.stringify(profile)}</p> */}
    </div>
  )
}

AboutPage.Layout = AdminLayout

export default AboutPage
