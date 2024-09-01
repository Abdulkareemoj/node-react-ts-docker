import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/product/[slug]/')({
  component: () => <div>Hello /blog/[slug]/!</div>
})