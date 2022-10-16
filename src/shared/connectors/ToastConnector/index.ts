import { Connector } from '../types'
import { AxiosResponse } from 'axios'
import { toast } from 'react-toastify'

export const ToastConnector = (): Connector => {
  return {
    get: <D, E>(getAction: () => Promise<AxiosResponse<D, E>>) => {
      const toastId = toast.loading('Descargando recurso')
      return getAction().then(({ ...args }: AxiosResponse<D, E>) => {
        toast.update(toastId, { type: 'success', isLoading: false, render: 'Recurso descargado', autoClose: 3000 })
        return { ...args }
      })
    },
    post: <D, E>(postAction: () => Promise<AxiosResponse<D, E>>) => {
      return postAction().then(({ ...args }: AxiosResponse<D, E>) => {
        return { ...args }
      })
    },
  }
}
