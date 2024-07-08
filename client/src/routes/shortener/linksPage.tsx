import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/shortener/linksPage')({
  component: () => <div>Hello /shortener/linksPage!</div>
})