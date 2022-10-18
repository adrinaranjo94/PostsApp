import GenericBody from '@applications/GenericBody'
import Home from '@applications/Home'
import { ROUTES as POSTS_ROUTES } from './route/posts'

export const ROOT_PATH = '/'

type BASIC_ROUTE = {
  path: string
  key: string
  element: () => JSX.Element
}

type STATIC_ROUTE = BASIC_ROUTE

interface DYNAMIC_ROUTE extends BASIC_ROUTE {
  getDynamicPath: (id: string) => string
}

export type ROUTE = (STATIC_ROUTE | DYNAMIC_ROUTE) & { routes: ROUTE[] }

export const ROUTES: ROUTE[] = [
  {
    path: ROOT_PATH,
    key: 'posts',
    element: () => (
      <GenericBody>
        <Home />
      </GenericBody>
    ),
    routes: [...POSTS_ROUTES],
  },
]

export const findRouteByKey = (routes: ROUTE[], key: string) => {
  return `${routes.find((route) => route.key === key)?.path || ''}`
}
