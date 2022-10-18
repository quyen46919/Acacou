import { useAuth } from '@/hooks'
import { useRouter } from 'next/router'
import React from 'react'

export default function LoginPage() {
  const { login, logout } = useAuth({
    revalidateOnMount: false,
  })
  const router = useRouter()

  async function handleLoginClick() {
    try {
      await login()
      router.push('/about')
      console.log('redirect to dashboard page')
    } catch (error) {}
  }

  async function handleLogoutClick() {
    try {
      await logout()
      console.log('redirect to login page')
    } catch (error) {}
  }

  return (
    <div>
      <button onClick={handleLoginClick}>Login</button>
      {/* <button onClick={getProfile}>Get profile</button> */}
      <button onClick={handleLogoutClick}>Logout</button>
      <button onClick={() => router.push('/about')}>Go to about</button>
    </div>
  )
}
