import { courseCard } from '@/seedData'
import { Box, useMediaQuery } from '@mui/material'
import Slider from 'react-slick/lib/slider'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import CourseCard from '../CourseCard'

function SlickSlider() {
  const belowSM = useMediaQuery('max-width(600px)')

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: belowSM ? 1 : 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <Box
      sx={{
        width: '96%',
        height: 'fit-content',
        m: '0 auto',
        boxSizing: 'border-box',
        '& button.slick-arrow': {
          display: 'none',
        },
        '& .slick-track': {
          display: 'flex',
          alignItems: {
            xs: 'stretch',
            md: 'stretch',
          },
          gap: 3,
          pt: 2,
          pb: 2,
        },
      }}
    >
      <Slider {...settings}>
        {courseCard.map((card, index) => (
          <CourseCard key={card.id} card={card} />
        ))}
      </Slider>
    </Box>
  )
}

export default SlickSlider
