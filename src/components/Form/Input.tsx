import { ComponentProps } from 'react'

export type InputProps = ComponentProps<'input'>

export function Input(props: InputProps) {
  return (
    <input
      className="w-full bg-transparent text-sm font-bold text-zinc-950 outline-none dark:text-zinc-50"
      {...props}
    />
  )
}
