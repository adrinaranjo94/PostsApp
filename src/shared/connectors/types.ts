import { AxiosResponse } from 'axios'

export interface Connector {
  get: <D, E>(getAction: () => Promise<AxiosResponse<D, E>>) => Promise<AxiosResponse<D, E>>
  put: <D, E>(putAction: () => Promise<AxiosResponse<D, E>>) => Promise<AxiosResponse<D, E>>
}
