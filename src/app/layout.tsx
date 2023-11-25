import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '../styles/globals.css'
import { Logo } from '@/components/Logo'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Tela de Login - com NextJs',
  description: 'Tela de Login e cadastro desenvolvida em tutorial no YouTube',
  keywords: [
    'NextJs',
    'Next 14',
    'Tela de Login',
    'Tailwind Css',
    'Responsive',
    'Tela de Cadastro',
  ],
  creator: 'Felippe Donatto',
  category: 'App Web',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body
        className={`${roboto.variable} mx-auto flex h-screen w-full max-w-sm flex-col items-center justify-center bg-zinc-50 font-sans text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50 max-sm:px-4`}
      >
        <main className="mb-12">
          <Logo />
        </main>
        {children}
      </body>
    </html>
  )
}
