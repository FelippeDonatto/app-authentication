import { ComponentProps } from 'react'

export type LabelProps = ComponentProps<'label'>

export function Label(props: LabelProps) {
  return (
    <label
      className="text-sm font-bold text-zinc-950 dark:text-zinc-50"
      {...props}
    />
  )
}
