import { Link } from 'react-router-dom'
import { KEY_ROUTE_POSTS_LIST, getPostsRouteByKey } from '@router/route/posts/index'

const Home = () => {
  return (
    <div>
      Home
      <Link to={getPostsRouteByKey(KEY_ROUTE_POSTS_LIST)}> POSTS </Link>
    </div>
  )
}

export default Home
