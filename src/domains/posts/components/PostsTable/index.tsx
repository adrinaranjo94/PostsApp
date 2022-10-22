import { PostProperties } from '@domains/posts/models/Post'
import Table, { Cell, Row, Body, Head, HeadCell } from '@shared/UI/Table'
import { useNavigate } from 'react-router-dom'
import { Post } from '../../models/Post'
import { getDynamicRoutePostByKey } from '@router/route/posts/index'
import Paragraph from '@shared/UI/Paragraph'

interface PostsTableProps {
  posts: Post[]
}
const PostsTable = ({ posts }: PostsTableProps) => {
  const navigate = useNavigate()
  const handleClickPost = (id: string) => {
    navigate(getDynamicRoutePostByKey(id))
  }
  return (
    <Table>
      <Head>
        <Row>
          <HeadCell key={`cell-${PostProperties.id}`}>{PostProperties.id}</HeadCell>
          <HeadCell key={`cell-${PostProperties.userId}`}>{PostProperties.userId}</HeadCell>
          <HeadCell key={`cell-${PostProperties.title}`}>{PostProperties.title}</HeadCell>
          <HeadCell key={`cell-${PostProperties.body}`}>{PostProperties.body}</HeadCell>
        </Row>
      </Head>
      <Body>
        {posts.map((post) => (
          <Row key={post.id} onClick={() => handleClickPost(post.id as unknown as string)}>
            <Cell alignCenter key={`cell-${post.id}-id`} dataLabel='Id'>
              {post.id}
            </Cell>
            <Cell alignCenter key={`cell-${post.id}-userId`} dataLabel='Id usuario'>
              {post.userId}
            </Cell>
            <Cell key={`cell-${post.id}-title`} dataLabel='Titulo'>
              <Paragraph charsLimit={20}>{post.title}</Paragraph>
            </Cell>
            <Cell key={`cell-${post.id}-body`} dataLabel='Cuerpo'>
              <Paragraph charsLimit={20}>{post.body}</Paragraph>
            </Cell>
          </Row>
        ))}
      </Body>
    </Table>
  )
}

export default PostsTable
