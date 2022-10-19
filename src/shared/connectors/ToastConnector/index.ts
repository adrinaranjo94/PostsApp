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
    put: <D, E>(putAction: () => Promise<AxiosResponse<D, E>>) => {
      const toastId = toast.loading('Actualizando recurso')
      return putAction().then(({ ...args }: AxiosResponse<D, E>) => {
        toast.update(toastId, { type: 'success', isLoading: false, render: 'Recurso actualizado', autoClose: 3000 })
        return { ...args }
      })
    },
  }
}
