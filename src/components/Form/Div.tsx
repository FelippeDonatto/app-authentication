import { ReactNode } from 'react'

interface DivProps {
  children: ReactNode
}

export function Div({ children }: DivProps) {
  return (
    <div className="flex items-center gap-2 rounded bg-zinc-200 p-4 ring-sky-500 focus-within:ring-2 dark:bg-zinc-900">
      {children}
    </div>
  )
}
