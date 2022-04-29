import { IFetchState, UseFetchType } from './types'

const useFetch: UseFetchType = async (url, option) => {
  const { method, headers } = option
  const state: IFetchState = {
    data: null,
    error: null,
    status500: false
  }

  try {
    const response = await fetch(url, {
      method,
      headers: {
        'X-Api-Factory-Application-Id': process.env.REACT_APP_API_KEY as string,
        ...headers
      }
    })
    if (response.status === 500) state.status500 = true
    if (!response.ok) throw new Error(response.statusText)

    state.data = await response.json()
  } catch (error) {
    state.error = error as Error
  }

  return state
}

export default useFetch
