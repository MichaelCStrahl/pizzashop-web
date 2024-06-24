import { OrderStatus } from '@/components/order-status'
import { api } from '@/lib/axios'

interface GetOrderDetailsResponse {
  id: string
  createdAt: string
  status: OrderStatus
  totalInCents: number
  customer: {
    name: string
    phone: string | null
    email: string
  }
  orderItems: {
    id: string
    quantity: string
    priceInCents: number
    product: {
      name: string
    }
  }[]
}

export interface GetOrderDetailsProps {
  orderId: string
}

export async function getOrderDetails({ orderId }: GetOrderDetailsProps) {
  const response = await api.get<GetOrderDetailsResponse>(`/orders/${orderId}`)

  return response.data
}
