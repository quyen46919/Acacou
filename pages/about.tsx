import { useAuth } from '@/hooks'
import { NextPageWithLayout } from '@/models'
import { AdminLayout } from '@/components/layout'
import { Box, Typography } from '@mui/material'

const AboutPage: NextPageWithLayout = () => {
  // const { profile } = useAuth()
  return (
    <Box>
      <Typography component="h1" variant="h3" color="primary.main">
        About page
      </Typography>
      {/* <p>{JSON.stringify(profile)}</p> */}
    </Box>
  )
}

AboutPage.Layout = AdminLayout

export default AboutPage
