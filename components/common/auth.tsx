import { useAuth } from '@/hooks'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export interface AuthProps {
  children: React.ReactNode
}

export function Auth({ children }: AuthProps) {
  const { profile, firstLoading }: any = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!firstLoading && !profile?.username) router.push('/login')
  }, [router, profile, firstLoading])

  if (!profile?.username) return <p>loading...</p>

  return <div>{children}</div>
}
