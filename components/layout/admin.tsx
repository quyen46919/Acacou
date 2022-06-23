import { useAuth } from '@/hooks'
import { LayoutProps } from '@/models'
import Link from 'next/link'
import * as React from 'react'
import { Auth } from '../common'

export function AdminLayout(props: LayoutProps) {
  const { logout } = useAuth()

  async function handleLogoutClick() {
    try {
      await logout()
    } catch (error) {}
  }
  return (
    <Auth>
      <h1>Admin layout</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
      <button onClick={handleLogoutClick}>Logout</button>
      <div>{props.children}</div>
    </Auth>
  )
}
