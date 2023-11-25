import Link from 'next/link'
import { Form } from './Form'
import { Button } from './Button'
import { MailCheck, Lock } from 'lucide-react'

export function SignIn() {
  return (
    <form className="flex w-full flex-col gap-4">
      <Form.Root>
        <Form.Label htmlFor="email">Endereço de e-mail</Form.Label>
        <Form.Div>
          <Form.Icon icon={MailCheck} />
          <Form.Input
            type="email"
            name="email"
            id="email"
            placeholder="Endereço de e-mail"
            autoFocus
          />
        </Form.Div>
      </Form.Root>

      <Form.Root>
        <Form.Label htmlFor="password">Sua Senha</Form.Label>
        <Form.Div>
          <Form.Icon icon={Lock} />
          <Form.Input
            type="password"
            name="password"
            id="password"
            placeholder="*************"
          />
        </Form.Div>
      </Form.Root>

      <Button type="submit" title="Acessar" />

      <p className="w-full text-center text-sm">
        Não possui um conta?{' '}
        <Link
          href="/cadastro"
          className="font-bold text-sky-500 transition-all hover:text-sky-600"
        >
          Cadastre-se agora!
        </Link>
      </p>
    </form>
  )
}
