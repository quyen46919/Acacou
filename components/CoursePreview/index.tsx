import { AllInclusive, Article, EmojiEvents, PhoneAndroid, YouTube } from '@mui/icons-material'
import { Button, Stack, Typography } from '@mui/material'
import React from 'react'

export default function CoursePreview() {
  return (
    <Stack
      width={350}
      height="fit-content"
      position="absolute"
      right="15%"
      top="100px"
      bgcolor="white.main"
      boxShadow={3}
    >
      <Stack p="2px" boxSizing="border-box">
        <iframe
          width="100%"
          height="220px"
          src="https://www.youtube.com/embed/0M8AYU_hPas"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Stack>
      <Stack p="20px 30px" boxSizing="border-box" gap="10px">
        <Typography variant="h3">$29.99</Typography>
        <Stack flexDirection="row">
          <Button fullWidth color="error" variant="contained" sx={{ height: 50 }}>
            Go to cart
          </Button>
        </Stack>
        <Button fullWidth variant="outlined" sx={{ height: 50 }}>
          Buy now
        </Button>
        <Typography variant="h6" textAlign="center">
          30-Day Money-Back Guarantee
        </Typography>
        <Typography fontSize="20px" fontWeight={500}>
          This course includes:
        </Typography>
        <Stack flexDirection="row" alignItems="center" gap="10px">
          <YouTube fontSize="small" />
          <Typography variant="h5">8.5 hours on-demand video</Typography>
        </Stack>
        <Stack flexDirection="row" alignItems="center" gap="10px">
          <Article fontSize="small" />
          <Typography variant="h5">20 articles</Typography>
        </Stack>
        <Stack flexDirection="row" alignItems="center" gap="10px">
          <AllInclusive fontSize="small" />
          <Typography variant="h5">Full lifetime access</Typography>
        </Stack>
        <Stack flexDirection="row" alignItems="center" gap="10px">
          <PhoneAndroid fontSize="small" />
          <Typography variant="h5">Access on mobile and TV</Typography>
        </Stack>
        <Stack flexDirection="row" alignItems="center" gap="10px">
          <EmojiEvents fontSize="small" />
          <Typography variant="h5">Certificate of completion</Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}
