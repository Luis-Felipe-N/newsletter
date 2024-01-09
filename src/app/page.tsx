import { Background } from '@/components/home/background'
import Feed from '@/components/home/feed'
import { Menu } from '@/components/home/menu'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Background />
      <Menu />
      <Feed>
        <Feed.Header></Feed.Header>
        <Feed.Posts></Feed.Posts>
      </Feed>
    </main>
  )
}
