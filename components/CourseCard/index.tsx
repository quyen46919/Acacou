import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Stack } from '@mui/material'
import { grey } from '@mui/material/colors'
import { useRouter } from 'next/router'

export default function CourseCard(props: any) {
  const router = useRouter()
  const { id, image, name, price, salePrice, authorName } = props.card
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={name}
        sx={{ cursor: 'pointer' }}
        onClick={() => router.push(`/course-detail?name=${name}&id=${id}`)}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {authorName}
        </Typography>
        <Typography>{name}</Typography>
        <Stack flexDirection="row" justifyContent="flex-end" alignItems="flex-end" gap="10px">
          <Typography fontSize="14px" sx={{ textDecoration: 'line-through', color: grey[500] }}>
            {price}$US
          </Typography>
          <Typography>{salePrice}$US</Typography>
        </Stack>
      </CardContent>
    </Card>
  )
}
