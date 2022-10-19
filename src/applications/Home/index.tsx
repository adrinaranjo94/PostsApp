import { Link } from 'react-router-dom'
import { KEY_ROUTE_POSTS_LIST, getPostsRouteByKey } from '@router/route/posts/index'
import Button from '@shared/UI/Button'
import './style.scss'

const Home = () => {
  return (
    <div className='homePage'>
      <h1>Home</h1>

      <h2>Prueba técnica</h2>
      <h2>Adrian Naranjo</h2>
      <hr />
      <h3>Proyecto creado en Vite + React / TS</h3>
      <Button>
        <Link to={getPostsRouteByKey(KEY_ROUTE_POSTS_LIST)}> POSTS </Link>
      </Button>
    </div>
  )
}

export default Home
