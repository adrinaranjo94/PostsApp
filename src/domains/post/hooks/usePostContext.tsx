import { useContext } from 'react'
import { PostContext } from '../contexts/PostContext'

export const usePostContext = () => {
  const context = useContext(PostContext)

  return {
    ...context,
  }
}
