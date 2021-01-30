export interface Usuario {
  name: string,
  id: number
}

export interface Post {
  body: string,
  id: number,
  title: string,
  userId: number
}