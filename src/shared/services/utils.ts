import { UrlParam } from './types'
export const generateUrl = (id?: string, urlParams?: UrlParam[]) => {
  let url = ''

  if (id) {
    url += `${id}`
  }

  if (urlParams) {
    url += generateUrlParams(urlParams)
  }

  return url
}

const generateUrlParams = (urlParams: UrlParam[]) => {
  return `?${urlParams.map(({ key, value }) => `${key}=${value}`).join('&')}`
}
