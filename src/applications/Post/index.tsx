import FormPost from '@domains/post/components/FormPost'
import PostInfo from '@domains/post/components/PostInfo'
import PostProvider from '@domains/post/contexts/PostContext'

interface PostProps {
  id: string
}
const Post = ({ id }: PostProps) => {
  return (
    <div>
      <PostProvider id={id}>
        <PostInfo />
        <FormPost />
      </PostProvider>
    </div>
  )
}

export default Post
