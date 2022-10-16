import Home from '@applications/Home'
import { ROUTES as POSTS_ROUTES } from './route/posts'

export const ROOT_PATH = '/'

export interface ROUTE {
  path: string
  key: string
  element: () => JSX.Element
  routes?: ROUTE[]
}

export const ROUTES: ROUTE[] = [{ path: ROOT_PATH, key: 'posts', element: () => <Home />, routes: [...POSTS_ROUTES] }]

export const findRouteByKey = (routes: ROUTE[], key: string) => {
  return `${routes.find((route) => route.key === key)?.path || ''}`
}
