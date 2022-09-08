import * as React from 'react'
import { styled } from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import { Stack } from '@mui/material'
import { blue, grey } from '@mui/material/colors'
import Link from 'next/link'
import { CourseContentRow } from '@/libs/enums'
import {
  Article,
  ArticleOutlined,
  Assignment,
  AssignmentOutlined,
  InsertDriveFile,
  InsertDriveFileOutlined,
  YouTube,
} from '@mui/icons-material'

interface ContentList {
  id: number
  title: string
  time: string
  content: {
    id: number
    type: string
    title: string
    time: string
    isPreview: boolean
  }[]
}

const listContent: ContentList[] = [
  {
    id: 1,
    title: 'Introduction to NestJS & Pre-requisites',
    time: '6 min',
    content: [
      {
        id: 1,
        type: CourseContentRow.DOCUMENT,
        title: 'NEW COURSE VERSION LIVE (JUNE 2021)',
        time: '00:29',
        isPreview: false,
      },
      {
        id: 2,
        type: CourseContentRow.VIDEO,
        title: 'Welcome to the course!',
        time: '01:11',
        isPreview: true,
      },
      {
        id: 3,
        type: CourseContentRow.ASSIGNMENT,
        title: 'Installing Node.js and Yarn',
        time: '00:16',
        isPreview: false,
      },
      {
        id: 5,
        type: CourseContentRow.FILE,
        title: '(Optional) Installing VSCode and Extensions',
        time: '02:55',
        isPreview: false,
      },
    ],
  },
  {
    id: 2,
    title: 'Task Management Application (REST API)',
    time: '1hr52min',
    content: [
      {
        id: 1,
        type: CourseContentRow.DOCUMENT,
        title: 'NEW COURSE VERSION LIVE (JUNE 2021)',
        time: '00:29',
        isPreview: false,
      },
      {
        id: 2,
        type: CourseContentRow.VIDEO,
        title: 'Welcome to the course!',
        time: '01:11',
        isPreview: true,
      },
      {
        id: 5,
        type: CourseContentRow.VIDEO,
        title: '(Optional) Installing VSCode and Extensions',
        time: '02:55',
        isPreview: false,
      },
    ],
  },
  {
    id: 3,
    title: 'Validation and Error handling',
    time: '20 min',
    content: [
      {
        id: 1,
        type: CourseContentRow.DOCUMENT,
        title: 'NEW COURSE VERSION LIVE (JUNE 2021)',
        time: '00:29',
        isPreview: false,
      },
      {
        id: 2,
        type: CourseContentRow.VIDEO,
        title: 'Welcome to the course!',
        time: '01:11',
        isPreview: true,
      },
      {
        id: 3,
        type: CourseContentRow.DOCUMENT,
        title: 'Installing Node.js and Yarn',
        time: '00:16',
        isPreview: false,
      },
      {
        id: 4,
        type: CourseContentRow.VIDEO,
        title: 'Installing the NestJS CLI',
        time: '00:16',
        isPreview: false,
      },
      {
        id: 5,
        type: CourseContentRow.VIDEO,
        title: '(Optional) Installing VSCode and Extensions',
        time: '02:55',
        isPreview: false,
      },
    ],
  },
  {
    id: 4,
    title: 'Data Persistence - PostgreSQL and TypeORM',
    time: '1hr09min',
    content: [
      {
        id: 1,
        type: CourseContentRow.DOCUMENT,
        title: 'NEW COURSE VERSION LIVE (JUNE 2021)',
        time: '00:29',
        isPreview: false,
      },
      {
        id: 2,
        type: CourseContentRow.VIDEO,
        title: 'Welcome to the course!',
        time: '01:11',
        isPreview: true,
      },
      {
        id: 3,
        type: CourseContentRow.DOCUMENT,
        title: 'Installing Node.js and Yarn',
        time: '00:16',
        isPreview: false,
      },
      {
        id: 4,
        type: CourseContentRow.VIDEO,
        title: 'Installing the NestJS CLI',
        time: '00:16',
        isPreview: false,
      },
      {
        id: 5,
        type: CourseContentRow.VIDEO,
        title: '(Optional) Installing VSCode and Extensions',
        time: '02:55',
        isPreview: false,
      },
      {
        id: 6,
        type: CourseContentRow.VIDEO,
        title: 'Installing the NestJS CLI',
        time: '00:16',
        isPreview: false,
      },
      {
        id: 7,
        type: CourseContentRow.VIDEO,
        title: '(Optional) Installing VSCode and Extensions',
        time: '02:55',
        isPreview: false,
      },
    ],
  },
]

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}))

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  padding: '5px 16px',
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : grey[50],
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}))

function showRowIcon(type?: string) {
  switch (type) {
    case CourseContentRow.VIDEO:
      return <YouTube fontSize="small" />
    case CourseContentRow.DOCUMENT:
      return <ArticleOutlined fontSize="small" />
    case CourseContentRow.FILE:
      return <InsertDriveFileOutlined fontSize="small" />
    case CourseContentRow.ASSIGNMENT:
      return <AssignmentOutlined fontSize="small" />
    default:
      return null
  }
}

export default function CourseContentCollapse() {
  return (
    <div>
      {listContent.map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-header`}>
            <Stack
              sx={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography fontWeight={600}>{item.title}</Typography>
              <Typography variant="h5">
                {item.content.length} lectures - {item.time}
              </Typography>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            {item.content.map((row) => (
              <Stack key={row.id} flexDirection="row" justifyContent="space-between" p="4px 0">
                <Stack flexDirection="row" gap="10px">
                  {showRowIcon(row.type)}
                  <Typography>{row.title}</Typography>
                </Stack>
                <Stack flexDirection="row" gap="20px">
                  {row.isPreview && (
                    <Typography sx={{ '& a': { color: blue[500], textDecoration: 'underline' } }}>
                      <Link href="#">Preview</Link>
                    </Typography>
                  )}

                  <Typography>{row.time}</Typography>
                </Stack>
              </Stack>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  )
}
