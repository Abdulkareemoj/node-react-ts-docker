import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/product/')({
  component: () => <div>Hello /product/!</div>
})