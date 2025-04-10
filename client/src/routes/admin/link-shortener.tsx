import AdminLayout from '@/layouts/AdminLayout'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/link-shortener')({
  component: () => (
    <AdminLayout>
      <div>Hello /shortener/linksPage!</div>
    </AdminLayout>
  ),
})
