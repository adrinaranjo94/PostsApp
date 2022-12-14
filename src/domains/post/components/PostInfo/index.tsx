import Paragraph from '@shared/UI/Paragraph'
import { usePostContext } from '../../hooks/usePostContext'

import './style.scss'

const PostInfo = () => {
  const {
    state: { post },
  } = usePostContext()
  return (
    <div className='postInfo'>
      <h1>
        Post {post.id} | ID usuario: {post.userId}
      </h1>
      <hr />
      <h2>{post.title}</h2>
      <Paragraph>{post.body}</Paragraph>
    </div>
  )
}

export default PostInfo
