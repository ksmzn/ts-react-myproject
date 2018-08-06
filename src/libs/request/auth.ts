import { AxiosPromise } from 'axios'
import { postDataToServer } from './utils'

export const login = (id: string, password: string): AxiosPromise<any> => {
  const endpoint = '/auth'
  const args = { data: { id, password } }
  return postDataToServer(endpoint, args)
}
