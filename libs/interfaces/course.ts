export interface Course {
  id: string | number
  image: string
  name: string
  price: string
  salePrise: string
  author: {}
  courseDetail: {
    averageStar: string
    starCount: {
      one: number
      two: number
      three: number
      four: number
      five: number
    }
    studentCount: number
  }
  updatedAt: string
  totalTime: string
}
