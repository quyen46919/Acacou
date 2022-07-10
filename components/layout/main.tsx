import { LayoutProps } from '@/models'
import Header from '../Header'

export function MainLayout(props: LayoutProps) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  )
}
