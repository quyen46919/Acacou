import { LayoutProps } from '@/models'
import Link from 'next/link'
import React from 'react'

export function MainLayout(props: LayoutProps) {
  return (
    <div>
      <h1>Main layout</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
      <br />
      <Link href="/about">
        <a>About</a>
      </Link>
      <br />
      <Link href="/login">
        <a>Login</a>
      </Link>
      <br />
      {props.children}
    </div>
  )
}
