import { ReactNode } from 'react'

interface FeedProps {
  children: ReactNode
}

export default function Feed({ children }: FeedProps) {
  return (
    <div>
      <h1>Feed Base</h1>
      {children}
    </div>
  )
}

function Header() {
  return (
    <div>
      <h1>Feed HEader</h1>
    </div>
  )
}

function Posts() {
  return (
    <div>
      <h1>Feed POst</h1>
    </div>
  )
}

Feed.Header = Header
Feed.Posts = Posts
