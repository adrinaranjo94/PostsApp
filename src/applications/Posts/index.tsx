import PostsTable from '@domains/posts/components/PostsTable'
import PostsProvider from '@domains/posts/contexts/PostsContext'

const Posts = () => {
  return (
    <div>
      <PostsProvider>
        <PostsTable />
      </PostsProvider>
    </div>
  )
}

export default Posts
