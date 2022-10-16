import { PostsContext } from '@domains/posts/contexts/PostsContext'
import { PostProperties } from '@domains/posts/models/Post'
import Table, { Cell, Row, Body, Head } from '@shared/UI/Table'
import { useContext } from 'react'

const PostsTable = () => {
  const {
    state: { posts },
  } = useContext(PostsContext)

  return (
    <Table>
      <Head>
        <Cell key={`cell-${PostProperties.id}`}>{PostProperties.id}</Cell>
        <Cell key={`cell-${PostProperties.title}`}>{PostProperties.title}</Cell>
        <Cell key={`cell-${PostProperties.body}`}>{PostProperties.body}</Cell>
        <Cell key={`cell-${PostProperties.userId}`}>{PostProperties.userId}</Cell>
      </Head>
      <Body>
        {posts.map((post) => (
          <Row key={post.id}>
            <Cell key={`cell-${post.id}-id`}>{post.id}</Cell>
            <Cell key={`cell-${post.id}-title`}>{post.title}</Cell>
            <Cell key={`cell-${post.id}-body`}>{post.body}</Cell>
            <Cell key={`cell-${post.id}-userId`}>{post.userId}</Cell>
          </Row>
        ))}
      </Body>
    </Table>
  )
}

export default PostsTable
