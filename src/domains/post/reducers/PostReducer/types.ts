import { Post } from '../../models/Post'

// API ACTIONS
export const API_GET_POST = '[POST]_API_GET_POST'

// STATE ACTIONS
export const DOWNLOAD_POST = '[POST]_DOWNLOAD_POST'

export enum PostStatus {
  IDLE,
  GET_POST,
}

export interface PostReducerState {
  post: Post
  isLoading: boolean
  status: PostStatus
}

type ActionMap<M extends { [index: string]: unknown }> = {
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
  [API_GET_POST]: undefined
  [DOWNLOAD_POST]: {
    post: Post
  }
}

export type PostReducerAction = ActionMap<PostPayload>[keyof ActionMap<PostPayload>]
