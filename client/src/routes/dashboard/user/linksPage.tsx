import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/user/linksPage')({
  component: () => <div>Hello /shortener/linksPage!</div>
})