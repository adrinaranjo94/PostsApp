import { Connector } from '@shared/connectors/types'
import axiosLib, { CreateAxiosDefaults } from 'axios'
import { getProps } from './types'
import { generateUrl } from './utils'

const configureAxios = (config: CreateAxiosDefaults) => axiosLib.create({ ...config })

export const axiosService = (connector: Connector, config: CreateAxiosDefaults) => {
  const axios = configureAxios(config)

  const get = <D, E>({ id, urlParams }: getProps = { id: '' }) =>
    connector.get<D, E>(() => axios.get(generateUrl(id, urlParams)))
  const put = <D, E>(id: string, body: D) => connector.put<D, E>(() => axios.put(generateUrl(id), body))
  return {
    get,
    put,
  }
}
