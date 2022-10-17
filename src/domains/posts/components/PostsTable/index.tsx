import { PostProperties } from '@domains/posts/models/Post'
import Table, { Cell, Row, Body, Head, HeadCell } from '@shared/UI/Table'
import { Post } from '../../models/Post'

interface PostsTableProps {
  posts: Post[]
}
const PostsTable = ({ posts }: PostsTableProps) => {
  return (
    <Table>
      <Head>
        <Row>
          <HeadCell key={`cell-${PostProperties.id}`}>{PostProperties.id}</HeadCell>
          <HeadCell key={`cell-${PostProperties.title}`}>{PostProperties.title}</HeadCell>
          <HeadCell key={`cell-${PostProperties.body}`}>{PostProperties.body}</HeadCell>
          <HeadCell key={`cell-${PostProperties.userId}`}>{PostProperties.userId}</HeadCell>
        </Row>
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
