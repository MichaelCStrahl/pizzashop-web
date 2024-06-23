import { api } from '@/lib/axios'

interface GetProfileResponse {
  id: string
  name: string
  phone: string | null
  role: 'manager' | 'customer'
  email: string
  createdAt: Date | null
  updatedAt: Date | null
}

export async function getProfile() {
  const response = await api.get<GetProfileResponse>('/me')

  return response.data
}
