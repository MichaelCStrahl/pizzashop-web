import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'custom-user-id',
      name: 'John Doe',
      phone: '55999999999',
      role: 'manager',
      email: 'john.doe@example.com',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)
