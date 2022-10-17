import PostsTableWithActions from '@domains/posts/components/PostsTableWithActions'
import PostsProvider from '@domains/posts/contexts/PostsContext'

const Posts = () => {
  return (
    <div>
      <PostsProvider>
        <PostsTableWithActions />
      </PostsProvider>
    </div>
  )
}

export default Posts
