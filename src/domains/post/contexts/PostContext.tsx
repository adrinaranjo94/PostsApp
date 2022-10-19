import { createContext, ReactNode, useEffect, useMemo, useReducer, useState } from 'react'
import { defaultState, PostReducer } from '../reducers/PostReducer'
import {
  PostReducerState,
  API_GET_POST,
  PostStatus,
  DOWNLOAD_POST,
  BULK_POST,
  IDLE_POST,
} from '../reducers/PostReducer/types'
import { axiosService } from '../../../shared/services/index'
import { ToastConnector } from '../../../shared/connectors/ToastConnector/index'
import { Post } from '../models/Post'

export interface PostContextType {
  state: PostReducerState
  editPost: (post: Post) => void
}

const ContextValue: PostContextType = {
  state: defaultState,
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  editPost: (post: Post) => {},
}

export const PostContext = createContext(ContextValue)

interface PostProviderProps {
  id: string
  children: ReactNode
}

const PostProvider = ({ id, children }: PostProviderProps) => {
  const [service] = useState(
    axiosService(ToastConnector(), { baseURL: `https://jsonplaceholder.typicode.com/posts/${id}` })
  )
  const [state, dispatch] = useReducer(PostReducer, defaultState)

  useEffect(() => {
    dispatch({ type: API_GET_POST })
  }, [])

  useEffect(() => {
    switch (state.status) {
      case PostStatus.GET_POST:
        service
          .get<Post, Post>()
          .then((response) => {
            dispatch({ type: DOWNLOAD_POST, payload: { post: response.data } })
          })
          .catch((err) => {
            console.log(err)
          })
        break
      case PostStatus.PUT_POST:
        service
          .put<Post, Post>('', state.post)
          .then(() => {
            dispatch({ type: IDLE_POST })
          })
          .catch((err) => {
            console.log(err)
          })
        break
      default:
        break
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.status])

  const editPost = (post: Post) => {
    dispatch({ type: BULK_POST, payload: { post: post } })
  }

  const value = useMemo(() => ({ state, editPost }), [state])

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>
}

export default PostProvider
