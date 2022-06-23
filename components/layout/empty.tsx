import { LayoutProps } from '@/models/common'
import React from 'react'

export function EmptyLayout(props: LayoutProps) {
  return <div>{props.children}</div>
}
