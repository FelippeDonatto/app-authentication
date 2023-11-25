import { ElementType } from 'react'

export interface IconProps {
  icon: ElementType
}

export function Icon({ icon: Icon }: IconProps) {
  return <Icon className="h-[18px] w-[18px] text-zinc-500" />
}
