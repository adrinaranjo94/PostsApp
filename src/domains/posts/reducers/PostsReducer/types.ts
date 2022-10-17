import { Post } from '@domains/posts/models/Post'

// API ACTIONS
export const API_GET_POSTS = '[POSTS]_API_GET_POSTS'
export const API_GET_FILTERED_POSTS_BY_USER_ID = '[POSTS]_API_GET_FILTERED_POSTS_BY_USER_ID'

// STATE ACTIONS
export const DOWNLOAD_POSTS = '[POSTS]_DOWNLOAD_POSTS'
export const DOWNLOAD_POSTS_WITH_USERS = '[POSTS]_DOWNLOAD_POSTS_WITH_USERS'
export const SELECT_USER_AND_FILTER = '[POSTS]_SELECT_USER_AND_FILTER'
export const DESELECT_USER = '[POSTS]_DESELECT_USER'

export enum PostsStatus {
  IDLE,
  GET_POSTS,
  GET_FILTERED_POSTS_BY_USER_ID,
}

export interface PostsReducerState {
  posts: Post[]
  users: number[]
  userSelected: number | null
  isLoading: boolean
  status: PostsStatus
}

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key
      }
    : {
        type: Key
        payload: M[Key]
      }
}

type PostPayload = {
  [API_GET_POSTS]: undefined
  [API_GET_FILTERED_POSTS_BY_USER_ID]: undefined
  [DOWNLOAD_POSTS]: {
    posts: Post[]
  }
  [DOWNLOAD_POSTS_WITH_USERS]: {
    posts: Post[]
  }
  [SELECT_USER_AND_FILTER]: {
    userId: number | null
  }
  [DESELECT_USER]: undefined
}

export type PostsReducerAction = ActionMap<PostPayload>[keyof ActionMap<PostPayload>]
