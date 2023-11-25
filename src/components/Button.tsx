import { ComponentProps } from 'react'

export type ButtonProps = ComponentProps<'button'> & {
  title: string
}

export function Button({ title }: ButtonProps) {
  return (
    <button className="w-full rounded bg-sky-500 p-4 text-sm font-bold ring-white transition-all hover:bg-sky-600 focus:ring-2">
      {title}
    </button>
  )
}
