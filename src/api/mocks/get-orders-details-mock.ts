import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsProps,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsProps,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      phone: '55999999999',
      email: 'john.doe@example.com',
    },
    createdAt: new Date().toISOString(),
    status: 'pending',
    totalInCents: 20000,
    orderItems: [
      {
        id: 'item-1',
        quantity: '2',
        priceInCents: 5000,
        product: {
          name: 'Product 1',
        },
      },
      {
        id: 'item-2',
        quantity: '1',
        priceInCents: 10000,
        product: {
          name: 'Product 2',
        },
      },
    ],
  })
})
