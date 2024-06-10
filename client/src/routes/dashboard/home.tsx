import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/home')({
  component: () => <div>Hello /dashboard/home!</div>
})