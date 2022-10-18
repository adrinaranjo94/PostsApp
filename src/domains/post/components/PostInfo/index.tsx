import { usePostContext } from '../../hooks/usePostContext'

const PostInfo = () => {
  const {
    state: { post },
  } = usePostContext()
  return (
    <div>
      PostInfo
      <h1>{post.title}</h1>
    </div>
  )
}

export default PostInfo
