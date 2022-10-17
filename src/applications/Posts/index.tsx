import PostsTable from '@domains/posts/components/PostsTable'
import PostsTableActions from '@domains/posts/components/PostsTableActions'
import PostsProvider, { PostsContext } from '@domains/posts/contexts/PostsContext'

const Posts = () => {
  return (
    <div>
      <PostsProvider>
        <PostsTableActions />
        <PostsContext.Consumer>
          {({ state: { isLoading } }) =>
            !isLoading && (
              <>
                <PostsTable />
              </>
            )
          }
        </PostsContext.Consumer>
      </PostsProvider>
    </div>
  )
}

export default Posts
