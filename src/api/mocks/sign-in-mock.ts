import { http, HttpResponse } from 'msw'

import { SignInBody } from '../sign-in'

export const signInMock = http.post<never, SignInBody>(
  'authenticate',
  async ({ request }) => {
    const { email } = await request.json()

    if (email === 'johndoe@exeample.com') {
      return new HttpResponse(null, {
        status: 200,
        headers: { 'Set-Cookie': 'auth=samble-jwt' },
      })
    }

    return new HttpResponse(null, { status: 401 })
  },
)
