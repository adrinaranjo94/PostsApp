/* eslint-disable @typescript-eslint/no-unused-vars */
import GenericBody from '@applications/GenericBody'
import Post from '@applications/Post'
import { useParams } from 'react-router-dom'

const PagePost = () => {
  const { id } = useParams()
  return (
    <GenericBody>
      <Post id={id || ''} />
    </GenericBody>
  )
}

export default PagePost
