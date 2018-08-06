import axios, { AxiosPromise } from 'axios'

axios.defaults.timeout = 50000

declare const API_URL: string
export const request = axios.create({
  baseURL: API_URL,
  responseType: 'json'
})

interface ArgsProps {
  access_token?: string
  data?: {}
}

type Endpoint = string

export const postDataToServer = (endpoint: Endpoint, args: ArgsProps): AxiosPromise => {
  const defaultHeader = { 'content-type': 'application/json' }
  const headers = args.access_token ? { ...defaultHeader, Authorization: 'Bearer ' + args.access_token } : defaultHeader

  const defaultSettings = {
    url: endpoint,
    method: 'post',
    headers
  }
  const settings = 'data' in args ? { ...defaultSettings, data: args.data } : defaultSettings

  return request(settings)
}

export const putDataToServer = (endpoint: Endpoint, args: ArgsProps): AxiosPromise => {
  const defaultHeader = { 'content-type': 'application/json' }
  const headers = args.access_token ? { ...defaultHeader, Authorization: 'Bearer ' + args.access_token } : defaultHeader

  const defaultSettings = {
    url: endpoint,
    method: 'put',
    headers
  }
  const settings = 'data' in args ? { ...defaultSettings, data: args.data } : defaultSettings

  return request(settings)
}

export const getDataFromServer = (endpoint: Endpoint, args: ArgsProps = {}): AxiosPromise => {
  const headers = !!args.access_token ? { Authorization: 'Bearer ' + args.access_token } : {}

  const defaultSettings = {
    url: endpoint,
    method: 'get',
    headers
  }
  const settings = 'data' in args ? { ...defaultSettings, params: args.data } : defaultSettings

  return request(settings)
}
