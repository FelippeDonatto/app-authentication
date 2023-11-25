import { ComponentProps, ReactNode } from 'react'

export type RootProps = ComponentProps<'div'> & {
  children: ReactNode
}

export function Root({ children }: RootProps) {
  return <div className="flex w-full flex-col gap-2">{children}</div>
}
