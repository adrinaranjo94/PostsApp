import { AxiosResponse } from 'axios'

export interface Connector {
  get: <D, E>(getAction: () => Promise<AxiosResponse<D, E>>) => Promise<AxiosResponse<D, E>>
  post: <D, E>(postAction: () => Promise<AxiosResponse<D, E>>) => Promise<AxiosResponse<D, E>>
}
