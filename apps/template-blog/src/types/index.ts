// Types for the blog template

export interface Post {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: Category
  tags: string[]
  author: Author
  publishedAt: string
  readingTime: number
  coverImage: string
  featured: boolean
  blogName?: string
  coordinador?: string
}

export interface Author {
  id: string
  name: string
  avatar: string
  bio: string
  role: string
  social: {
    twitter?: string
    instagram?: string
    linkedin?: string
  }
}

export interface Category {
  id: string
  name: string
  slug: string
  color: string
}
