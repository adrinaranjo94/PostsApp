import { useContext } from 'react'
import { PostsContext } from '../contexts/PostsContext'

export const usePostsContext = () => {
  const context = useContext(PostsContext)

  return {
    ...context,
  }
}
