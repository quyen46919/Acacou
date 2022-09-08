import { MainLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/models'
import {
  Avatar,
  Box,
  Breadcrumbs,
  Divider,
  Grid,
  LinearProgress,
  LinearProgressProps,
  Rating,
  Stack,
  Typography,
} from '@mui/material'
import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import Link from 'next/link'
import { Check, People, PlayCircle, Star, Verified } from '@mui/icons-material'
import { blue, grey, orange } from '@mui/material/colors'
import CourseContentCollapse from '@/components/CourseContentCollapse'
import CoursePreview from '@/components/CoursePreview'
import { courseCard } from '@/seedData'
import { whatWillYouLearn } from '@/seedData/whatWillYouLearn'
import CourseCardRow from '@/components/CourseCardRow'
import StudentReview from '@/components/StudentReview'
import { studentReviews } from '@/seedData/studentReviews'

function LinearProgressWithStarLabel(props: LinearProgressProps & { value: number; star: number }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', p: '2px 0' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} sx={{ height: 8 }} color="secondary" />
      </Box>
      <Stack flexDirection="row" width="100px" alignItems="center" gap="10px">
        <Rating value={props.star} readOnly sx={{ '& span': { color: orange[800] } }} />
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Stack>
    </Box>
  )
}

const CourseDetail: NextPageWithLayout = () => {
  const breadcrumbs = [
    <Link key="1" href="/">
      MUI
    </Link>,
    <Link key="2" href="/material-ui/getting-started/installation/">
      Core
    </Link>,
    <Typography key="3">Breadcrumb</Typography>,
  ]
  return (
    <Stack width="100%">
      <Stack
        height="fit-content"
        width="100%"
        bgcolor="black.main"
        p="30px 40% 30px 160px"
        boxSizing="border-box"
      >
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          sx={{
            '& a, & p': {
              color: blue[600],
              fontWeight: 700,
            },
            '& svg': {
              color: 'white.main',
            },
            mb: '10px',
          }}
        >
          {breadcrumbs}
        </Breadcrumbs>
        <Typography color="white.main" gutterBottom variant="h3">
          NestJS Zero to Hero - Modern TypeScript Back-end Development
        </Typography>
        <Typography color="white.main" gutterBottom variant="h4">
          Develop and deploy enterprise back-end applications following best practices using Node.js
          and TypeScript
        </Typography>
        <Typography color="white.main" gutterBottom variant="h5" display="flex" alignItems="center">
          Rating: 4.6 <Star fontSize="small" /> (7,894 ratings) 107,235 students
        </Typography>
        <Typography color="white.main" gutterBottom variant="h5">
          Created by <Link href="#">Chau Quyen</Link>
        </Typography>
        <Typography color="white.main" gutterBottom variant="h5">
          Last updated 7/2021
        </Typography>
      </Stack>
      <Stack p="20px 40% 20px 160px">
        <Stack border={`1px solid ${grey[200]}`} p="20px 40px" boxSizing="border-box">
          <Typography fontSize="30px" fontWeight={700} gutterBottom>
            What you&apos;ll learn
          </Typography>
          <Grid container spacing={1}>
            {whatWillYouLearn.map((item: string, index: number) => (
              <Grid item key={index} xs={12} md={6}>
                <Stack flexDirection="row" gap="10px">
                  <Check color="blueGrey" fontSize="small" />
                  <Typography variant="h5">{item}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Stack>
        <Typography variant="h4" fontWeight={700} mt="30px" mb="10px">
          Course content
        </Typography>
        <Stack flexDirection="row" alignItems="flex-end" justifyContent="space-between" mb="10px">
          <Typography variant="h5">13 sections • 136 lectures • 8h 44m total length</Typography>
          <Typography color="info.main" fontWeight={700}>
            Expand all sections
          </Typography>
        </Stack>
        <CourseContentCollapse />
        <Stack gap="5px">
          <Typography variant="h4" m="40px 0px 10px 0px" fontWeight={600}>
            Requirements
          </Typography>
          <Typography component="li" variant="h5">
            Having a basic understanding of JavaScript and/or NodeJS
          </Typography>
          <Typography component="li" variant="h5">
            Having basic knowledge of TypeScript is recommended, but not required
          </Typography>
        </Stack>
        <Stack gap="5px">
          <Typography variant="h4" m="20px 0px 10px 0px" fontWeight={600}>
            Description
          </Typography>
          <Typography whiteSpace="pre-line" variant="h5">
            {`NestJS is a Node.js back-end development framework built upon Express, leveraging the
              power of TypeScript. \nNestJS leverages the incredible popularity and robustness of
              JavaScript as a language and Node.js as a technology. It is inspired by common libraries
              and frameworks such as Angular, React and Vue which improve developer productivity and
              experience. \nEven considering the amount of superb libraries, helpers and tools that
              exist for server-side Node.js, none of them effectively solve the main problem - the
              architecture of an application. \nNestJS provides an out-of-the-box application
              architecture which allows developers and teams to create highly testable, scalable,
              loosely coupled and easily maintainable applications.`}
          </Typography>
        </Stack>
        <Stack gap="5px">
          <Typography variant="h4" m="40px 0px 10px 0px" fontWeight={600}>
            Who this course is for:
          </Typography>
          <Typography component="li" variant="h5">
            Intermediate JavaScript developers who want to dive into back-end development
          </Typography>
          <Typography component="li" variant="h5">
            Any developers willing to apply TypeScript on the back-end
          </Typography>
          <Typography component="li" variant="h5">
            Developers eager to learn how to develop performant, secure and production-ready REST
            APIs following best practices
          </Typography>
          <Typography component="li" variant="h5">
            Developers who want to learn how to deploy their application to the cloud (Amazon Web
            Services)
          </Typography>
          <Typography component="li" variant="h5">
            Developers who want to follow building a practical, real-world application from zero to
            production
          </Typography>
        </Stack>
        <Stack gap="5px">
          <Typography variant="h4" m="40px 0px 10px 0px" fontWeight={600}>
            Students also bought
          </Typography>
          <Stack divider={<Divider sx={{ m: '10px 0' }} />}>
            {courseCard.map((course) => (
              <CourseCardRow
                key={course.id}
                image={course.image}
                name={course.name}
                totalHours={course.totalHours}
                star={course.averageStar}
                studentCount={course.studentCount}
                price={course.price}
                salePrice={course.salePrice}
                updatedAt={course.updatedAt}
              />
            ))}
          </Stack>
        </Stack>
        <Stack gap="5px">
          <Typography variant="h4" m="40px 0px 10px 0px" fontWeight={600}>
            Instructors
          </Typography>
          <Stack>
            <Typography
              sx={{
                '& a': {
                  fontSize: '20px',
                  fontWeight: 700,
                  color: blue[600],
                  textDecoration: 'underline',
                },
              }}
            >
              <Link href="#">Mohamed Salah</Link>
              <br />
              CEO of TheCodex.me - Teaching 500,000+ Students how to code
            </Typography>
            <Stack flexDirection="row" m="15px 0" gap="15px">
              <Avatar src="/images/u1.jpg" sx={{ width: 100, height: 100 }} alt="author" />
              <Stack>
                <Typography>
                  <Star fontSize="small" sx={{ transform: 'translateY(4px)', mr: '5px' }} /> 4.4
                  Instructor Rating
                </Typography>
                <Typography>
                  <Verified fontSize="small" sx={{ transform: 'translateY(4px)', mr: '5px' }} />{' '}
                  73,293 Reviews
                </Typography>
                <Typography>
                  <People fontSize="small" sx={{ transform: 'translateY(4px)', mr: '5px' }} />{' '}
                  886,105 Students
                </Typography>
                <Typography>
                  <PlayCircle fontSize="small" sx={{ transform: 'translateY(4px)', mr: '5px' }} />{' '}
                  16 Courses
                </Typography>
              </Stack>
            </Stack>
            <Typography whiteSpace="pre-line" variant="h5">
              {`Avinash Jain is currently a senior at UC Berkeley majoring in Electrical Engineering and Computer Science. He's the CEO and Founder of TheCodex, an online educational platform focused on bringing the best programming content to hundreds of thousands of students around the world.\nHis programming journey began at the age of 10, starting off with simple Python scripts to crawl the weather. Since then, he's worked at numerous companies and is professionally experienced in Python, iOS Development and Web Development. He's launched a plethora of applications in the App Store amassing thousands of downloads. Additionaly, he's competed and won in several hackathons around the world including PennApps and NWHacks.\nAvinash has a passion to teach - his enthusiasm and love for programming is evident in every video. For the past 7 years he's been an instructor on Udemy and he loves motivating and enabling others to pursue their programming dreams. He hopes to help students realize the power of programming and jumpstart their careers through his courses.\nCheckout TheCodex for all of his courses, fantastic discounts, and any guidance or help. `}
            </Typography>
          </Stack>
        </Stack>
        <Stack gap="5px">
          <Typography variant="h4" mt="40px" fontWeight={600}>
            Student feedback
          </Typography>
          <Stack flexDirection="row" gap="15px" alignItems="center">
            <Stack alignItems="center">
              <Typography fontSize="60px" fontWeight={700} color={orange[800]}>
                4.4
              </Typography>
              <Rating value={4.4} readOnly sx={{ '& span': { color: orange[800] } }} />
              <Typography color={orange[800]} fontWeight={500}>
                Course rating
              </Typography>
            </Stack>
            <Stack width="100%">
              <LinearProgressWithStarLabel value={40} star={5} />
              <LinearProgressWithStarLabel value={30} star={4} />
              <LinearProgressWithStarLabel value={10} star={3} />
              <LinearProgressWithStarLabel value={8} star={2} />
              <LinearProgressWithStarLabel value={2} star={1} />
            </Stack>
          </Stack>
          <Stack gap="5px">
            <Typography variant="h4" mt="40px" fontWeight={600}>
              Reviews
            </Typography>
            <Stack divider={<Divider sx={{ color: grey[200], m: '8px 0' }} />}>
              {studentReviews.map((review) => (
                <StudentReview key={review.id} review={review} />
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <CoursePreview />
    </Stack>
  )
}
CourseDetail.Layout = MainLayout

export default CourseDetail
export async function getStaticProps() {
  return {
    props: { title: 'Course detail - Acacou' },
  }
}
