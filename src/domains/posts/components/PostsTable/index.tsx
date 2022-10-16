import { PostsContext } from '@domains/posts/contexts/PostsContext'
import { PostProperties } from '@domains/posts/models/Post'
import Table, { Cell, Row, Body, Head, HeadCell } from '@shared/UI/Table'
import { useContext } from 'react'

const PostsTable = () => {
  const {
    state: { posts },
  } = useContext(PostsContext)

  return (
    <Table>
      <Head>
        <HeadCell key={`cell-${PostProperties.id}`}>{PostProperties.id}</HeadCell>
        <HeadCell key={`cell-${PostProperties.title}`}>{PostProperties.title}</HeadCell>
        <HeadCell key={`cell-${PostProperties.body}`}>{PostProperties.body}</HeadCell>
        <HeadCell key={`cell-${PostProperties.userId}`}>{PostProperties.userId}</HeadCell>
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
