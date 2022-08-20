import { courseCard } from '@/seedData'
import { Box, IconButton, useMediaQuery } from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import CourseCard from '../CourseCard'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <IconButton
        color="black"
        sx={{ position: 'absolute', left: '-50%', top: '-50%', zIndex: 999999999 }}
      >
        <KeyboardArrowRightIcon />
      </IconButton>
    </div>
  )
}

function SlickSlider() {
  const belowSM = useMediaQuery('max-width(600px)')

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: belowSM ? 1 : 5,
    slidesToScroll: 4,
    initialSlide: 0,
    // nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
          dots: true,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          initialSlide: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  }

  return (
    <Box
      sx={{
        width: '100%',
        height: 'fit-content',
        m: '0 auto',
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
        overflow: 'hidden',
        p: '10px 30px',
        boxSizing: 'border-box',
      }}
    >
      <Slider {...settings}>
        {courseCard.map((card) => (
          <CourseCard key={card.id} card={card} />
        ))}
      </Slider>
    </Box>
  )
}

export default SlickSlider
