import { ToastConnector } from '@shared/connectors/ToastConnector'
import { createContext, useEffect, useMemo, useReducer, useState } from 'react'
import { defaultState, PostsReducer } from '../reducers/PostsReducer'
import {
  API_GET_POSTS,
  DOWNLOAD_POSTS,
  DOWNLOAD_POSTS_WITH_USERS,
  PostsReducerState,
  PostsStatus,
  DESELECT_USER,
  SELECT_USER_AND_FILTER,
} from '../reducers/PostsReducer/types'
import { axiosService } from '@shared/services'
import { Post } from '../models/Post'

export interface PostContextType {
  state: PostsReducerState
  filterByUserId: (userId: number | null) => void
}

const ContextValue: PostContextType = {
  state: defaultState,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  filterByUserId: (userId: number | null) => {},
}

export const PostsContext = createContext(ContextValue)

interface PostsProviderProps {
  children: React.ReactNode
}
const PostsProvider = ({ children }: PostsProviderProps) => {
  const [service] = useState(axiosService(ToastConnector(), { baseURL: 'https://jsonplaceholder.typicode.com/posts' }))
  const [state, dispatch] = useReducer(PostsReducer, defaultState)

  useEffect(() => {
    dispatch({ type: API_GET_POSTS })
  }, [])

  useEffect(() => {
    switch (state.status) {
      case PostsStatus.GET_POSTS:
        service
          .get<Post[], Post>()
          .then((response) => {
            dispatch({ type: DOWNLOAD_POSTS_WITH_USERS, payload: { posts: response.data } })
          })
          .catch((err) => {
            console.log(err)
          })
        break
      case PostsStatus.GET_FILTERED_POSTS_BY_USER_ID:
        service
          .get<Post[], Post>({
            urlParams: [{ key: 'userId', value: state.userSelected ? `${state.userSelected}` : '' }],
          })
          .then((response) => {
            dispatch({ type: DOWNLOAD_POSTS, payload: { posts: response.data } })
          })
          .catch((err) => {
            console.log(err)
          })
        break
      default:
        break
    }
  }, [state.status])

  const filterByUserId = (userId: number | null) => {
    if (userId) {
      dispatch({ type: SELECT_USER_AND_FILTER, payload: { userId } })
    } else {
      dispatch({ type: DESELECT_USER })
      dispatch({ type: API_GET_POSTS })
    }
  }

  const value = useMemo(() => ({ state, filterByUserId }), [state])

  return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
}

export default PostsProvider
