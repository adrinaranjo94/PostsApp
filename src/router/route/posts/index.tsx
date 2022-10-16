import POSTS_PAGE from './page'
import { ROUTE, findRouteByKey } from '../../routes'

export const ROUTE_POSTS_LIST = 'ROUTE_POSTS_LIST'

export const ROUTES: ROUTE[] = [
  {
    path: 'posts',
    key: ROUTE_POSTS_LIST,
    element: POSTS_PAGE,
  },
]

export const getPostsRouteByKey = (key: string) => {
  return findRouteByKey(ROUTES, key)
}
