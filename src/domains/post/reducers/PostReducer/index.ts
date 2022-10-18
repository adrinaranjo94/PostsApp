import { API_GET_POST, PostReducerAction, PostReducerState, PostStatus, DOWNLOAD_POST } from './types'

export const defaultState: PostReducerState = {
  post: { id: 0, body: '', title: '', userId: 0 },
  isLoading: true,
  status: PostStatus.IDLE,
}

export const PostReducer = (state: PostReducerState, action: PostReducerAction): PostReducerState => {
  switch (action.type) {
    case API_GET_POST:
      return { ...state, status: PostStatus.GET_POST, isLoading: true }
    case DOWNLOAD_POST:
      return { ...state, post: { ...action.payload.post }, status: PostStatus.IDLE, isLoading: false }

    default:
      return state
  }
}
