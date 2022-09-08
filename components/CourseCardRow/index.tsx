import { People, Star } from '@mui/icons-material'
import { Stack, Typography } from '@mui/material'
import { grey, orange } from '@mui/material/colors'
import Image from 'next/image'

interface CourseCardRowProps {
  image: string
  name: string
  totalHours: number
  star: number
  studentCount: number
  price: number
  salePrice: number
  updatedAt: string
}

export default function CourseCardRow(props: CourseCardRowProps) {
  const { image, name, totalHours, star, studentCount, price, salePrice, updatedAt } = props
  return (
    <Stack flexDirection="row" justifyContent="space-between" alignItems="flex-start">
      <Stack flexDirection="row" gap="14px">
        <Image src={image} width="80px" height="80px" alt={name} objectFit="cover" />
        {/* <Box
          sx={{
            width: '80px',
            height: '80px',
            backgroundImage: `url('${image}')`,
            backgroundSize: 'cover',
          }}
        /> */}
        <Stack>
          <Typography maxWidth="340px" fontWeight={600} fontSize="18px">
            {name}
          </Typography>
          <Stack flexDirection="row">
            <Typography>{totalHours} hours</Typography>
            <Typography>Updated {updatedAt}</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack flexDirection="row" flexGrow={1} sx={{ '& > div': { width: '100%' } }}>
        <Stack flexDirection="row" alignItems="flex-start" justifyContent="center">
          <Typography color={orange[800]} fontWeight={600}>
            {star}
          </Typography>{' '}
          <Star sx={{ color: orange[600], transform: 'translateY(1px)' }} fontSize="small" />
        </Stack>
        <Stack flexDirection="row" alignItems="flex-start" justifyContent="center" gap="2px">
          <People fontSize="small" sx={{ transform: 'translateY(1px)' }} /> {studentCount}
        </Stack>
        <Stack alignItems="center">
          <Typography>${salePrice}</Typography>
          <Typography color={grey[300]} sx={{ textDecoration: 'line-through' }} fontSize="14px">
            ${price}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}
