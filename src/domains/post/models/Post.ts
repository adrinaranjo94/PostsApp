export interface Post {
  id: number
  title: string
  body: string
  userId: number
}

type TPostProperties = keyof Post

export type PostTypeProperties = {
  [key in TPostProperties]: string
}

export const PostProperties: PostTypeProperties = {
  id: 'ID',
  title: 'Titulo',
  body: 'Cuerpo',
  userId: 'ID usuario',
}
