import { LayoutProps } from '@/models'
import Footer from '../Footer'
import Header from '../Header'
import * as React from 'react'

export function MainLayout(props: LayoutProps) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}
