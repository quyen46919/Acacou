import { authAPI } from '@/api-client'
import useSWR from 'swr'
import { PublicConfiguration } from 'swr/dist/types'

export function useAuth(options?: Partial<PublicConfiguration>) {
  const {
    data: profile,
    error,
    mutate,
  } = useSWR('/profile', {
    dedupingInterval: 60 * 60 * 1000,
    revalidateOnFocus: false,
    ...options,
  })

  console.log({ profile, error })
  const firstLoading = profile === undefined && error === undefined

  async function login() {
    await authAPI.login({
      username: 'chauquyen',
      password: '123123123',
    })
    await mutate()
  }
  async function logout() {
    await authAPI.logout()
    await mutate({}, false)
  }

  return {
    profile,
    error,
    login,
    logout,
    firstLoading,
  }
}
