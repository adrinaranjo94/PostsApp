import { ToastConnector } from '@shared/connectors/ToastConnector'
import { createContext, useEffect, useMemo, useReducer, useState } from 'react'
import { defaultState, PostsReducer, PostsStatus, PostsReducerState } from '../reducers/PostsReducer/index'
import { API_GET_POSTS, DOWNLOAD_POSTS, API_GET_FILTERED_POSTS_BY_USER_ID } from '../reducers/PostsReducer/types'
import { axiosService } from '@shared/services'
import { Post } from '../models/Post'

interface ContextValue {
  state: PostsReducerState
}

const defaultContextValue: ContextValue = {
  state: defaultState,
}
export const PostsContext = createContext(defaultContextValue)

interface PostsProviderProps {
  children: React.ReactNode
}
const PostsProvider = ({ children }: PostsProviderProps) => {
  const [service] = useState(axiosService(ToastConnector(), { baseURL: 'https://jsonplaceholder.typicode.com/posts' }))
  const [state, dispatch] = useReducer(PostsReducer, defaultState)

  useEffect(() => {
    dispatch({ type: API_GET_POSTS, payload: { data: [] } })
  }, [])

  useEffect(() => {
    switch (state.status) {
      case PostsStatus.GET_POSTS:
        service
          .get<Post[], Post>()
          .then((response) => {
            dispatch({ type: DOWNLOAD_POSTS, payload: { data: response.data } })
          })
          .catch((err) => {
            console.log(err)
          })
        break
      case PostsStatus.GET_FILTERED_POSTS_BY_USER_ID:
        service
          .get<Post[], Post>({ urlParams: [{ key: 'userId', value: '1' }] })
          .then((response) => {
            dispatch({ type: DOWNLOAD_POSTS, payload: { data: response.data } })
          })
          .catch((err) => {
            console.log(err)
          })
        break
      case PostsStatus.IDLE:
        console.log('IDLE STATUS')
        break
      default:
        break
    }
  }, [state.status])

  const value = useMemo(() => ({ state }), [state])

  return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
}

export default PostsProvider
