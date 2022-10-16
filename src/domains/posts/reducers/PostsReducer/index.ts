import { Post } from '../../models/Post'
import * as TYPES from './types'

export enum PostsStatus {
  IDLE,
  GET_POSTS,
  GET_FILTERED_POSTS_BY_USER_ID,
}

export interface PostsReducerState {
  posts: Post[]
  isLoading: boolean
  status: PostsStatus
}

interface PostsReducerAction {
  type: string
  payload: {
    data: Post[]
  }
}

export const defaultState: PostsReducerState = {
  posts: [],
  isLoading: false,
  status: PostsStatus.IDLE,
}

export const PostsReducer = (state: PostsReducerState, { type, payload }: PostsReducerAction) => {
  switch (type) {
    case TYPES.API_GET_POSTS:
      return { ...state, status: PostsStatus.GET_POSTS }
    case TYPES.API_GET_FILTERED_POSTS_BY_USER_ID:
      return { ...state, status: PostsStatus.GET_FILTERED_POSTS_BY_USER_ID }
    case TYPES.DOWNLOAD_POSTS:
      return { ...state, posts: [...payload.data], status: PostsStatus.IDLE }
    default:
      return state
  }
}
