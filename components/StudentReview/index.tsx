import {
  ThumbDownOffAlt,
  ThumbDownOutlined,
  ThumbUpOffAlt,
  ThumbUpOutlined,
} from '@mui/icons-material'
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Rating,
  Stack,
  Typography,
} from '@mui/material'
import { grey } from '@mui/material/colors'
import Link from 'next/link'
import React from 'react'

export interface StudentReviewProps {
  review: {
    id: string | number
    avatar: string
    name: string
    rating: number
    content: string
    createdAt: string
  }
}

export default function StudentReview(props: StudentReviewProps) {
  const { avatar, name, rating, content, createdAt } = props.review
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={name} src={avatar} />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography fontWeight={600} fontSize="20px">
            {name}
          </Typography>
        }
        secondary={
          <Stack gap="5px">
            <Stack flexDirection="row" alignItems="center" gap="5px">
              <Rating value={5} readOnly size="small" />
              <Typography color={grey[600]}>{createdAt}</Typography>
            </Stack>
            <Typography>{content}</Typography>
            <Typography fontSize="14px">Was this review helpful?</Typography>
            <Stack flexDirection="row" alignItems="center">
              <IconButton>
                <ThumbUpOffAlt />
              </IconButton>
              <IconButton>
                <ThumbDownOffAlt />
              </IconButton>
              <Typography
                ml="18px"
                sx={{ '& a': { textDecoration: 'underline', color: grey[700] } }}
              >
                <Link href="#">Report</Link>
              </Typography>
            </Stack>
          </Stack>
        }
      />
    </ListItem>
  )
}
