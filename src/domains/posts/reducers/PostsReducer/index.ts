import {
  API_GET_POSTS,
  PostsReducerAction,
  PostsReducerState,
  PostsStatus,
  API_GET_FILTERED_POSTS_BY_USER_ID,
  DOWNLOAD_POSTS,
  DOWNLOAD_POSTS_WITH_USERS,
  SELECT_USER_AND_FILTER,
  DESELECT_USER,
} from './types'

export const defaultState: PostsReducerState = {
  posts: [],
  users: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  userSelected: null,
  isLoading: true,
  status: PostsStatus.IDLE,
}

export const PostsReducer = (state: PostsReducerState, action: PostsReducerAction): PostsReducerState => {
  switch (action.type) {
    case API_GET_POSTS:
      return { ...state, status: PostsStatus.GET_POSTS, isLoading: true }
    case API_GET_FILTERED_POSTS_BY_USER_ID:
      return { ...state, status: PostsStatus.GET_FILTERED_POSTS_BY_USER_ID, isLoading: true }
    case DOWNLOAD_POSTS:
      return { ...state, posts: action.payload.posts, status: PostsStatus.IDLE, isLoading: false }
    case DOWNLOAD_POSTS_WITH_USERS:
      return {
        ...state,
        posts: [...action.payload.posts],
        users: [...new Set(action.payload.posts.map((dataObj) => dataObj.userId))],
        status: PostsStatus.IDLE,
        isLoading: false,
      }
    case SELECT_USER_AND_FILTER:
      return {
        ...state,
        userSelected: action.payload.userId,
        status: PostsStatus.GET_FILTERED_POSTS_BY_USER_ID,
        isLoading: true,
      }
    case DESELECT_USER:
      return {
        ...state,
        userSelected: null,
      }
    default:
      return state
  }
}
