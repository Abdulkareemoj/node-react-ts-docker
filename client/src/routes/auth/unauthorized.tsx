import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/unauthorized')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/shortener/unauthorized"!</div>
}
