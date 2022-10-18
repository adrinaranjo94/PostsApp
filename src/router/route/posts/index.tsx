import POSTS_PAGE from './PagePosts'
import POST_PAGE from './PagePost'
import { ROUTE, findRouteByKey, ROOT_PATH } from '../../routes'

export const KEY_ROUTE_POSTS_LIST = 'ROUTE_POSTS_LIST'
export const KEY_ROUTE_POST = 'ROUTE_POST'

const ROUTE_POSTS: ROUTE = {
  path: 'posts',
  key: KEY_ROUTE_POSTS_LIST,
  element: POSTS_PAGE,
  routes: [],
}

const ROUTE_POST: ROUTE = {
  path: 'editorials/:id',
  key: KEY_ROUTE_POST,
  element: POST_PAGE,
  routes: [],
  getDynamicPath: function (id: string) {
    return `${this.path.split(`:${Object.keys({ id })[0]}`).join(id)}`
  },
}

export const ROUTES: ROUTE[] = [ROUTE_POSTS, ROUTE_POST]

export const getPostsRouteByKey = (key: string) => {
  return findRouteByKey(ROUTES, key)
}

export const getDynamicRoutePostByKey = (id: string): string => {
  return `${ROOT_PATH}${ROUTE_POST.getDynamicPath(id)}`
}

export default ROUTES
