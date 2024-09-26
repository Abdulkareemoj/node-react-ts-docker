import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Dashboard/linksPage')({
  component: () => <div>Hello /shortener/linksPage!</div>
})