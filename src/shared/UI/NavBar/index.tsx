import { Link } from 'react-router-dom'
import './style.scss'
import { getPostsRouteByKey, KEY_ROUTE_POSTS_LIST } from '@router/route/posts/index'

const NavBar = () => {
  return (
    <div className='navbar'>
      <Link to={getPostsRouteByKey(KEY_ROUTE_POSTS_LIST)} className='navbar__title'>
        PostsApp
      </Link>
    </div>
  )
}

export default NavBar
