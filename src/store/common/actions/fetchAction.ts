import { FetchMethod, IFetchOptions, IFetchState } from "../types"

const fetchOptions: IFetchOptions = {
  method: FetchMethod.GET,
  headers: {
    "X-Api-Factory-Application-Id": process.env.REACT_APP_API_KEY!
  }
}

const fetchAction = async (url: string): Promise<IFetchState> => {
  const state: IFetchState = {
    data: null,
    error: null
  }

  try {
    const response = await fetch(url, fetchOptions)

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    state.data = await response.json()
  } catch (error) {
    state.error = error as Error
  }

  return state
}

export default fetchAction
