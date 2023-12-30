import { QueryClient } from '@tanstack/react-query'
import { redirect } from 'react-router-dom'

export const action =
  (queryClient: QueryClient) =>
  async ({ request }) => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    console.log(data)

    // assume the data is valid, call the backend api here
    // for db persistence

    // invalidate the react-query cache here for the said key
    // but for login it is not needed

    return redirect(`/`)
  }
