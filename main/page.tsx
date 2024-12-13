import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mt-20">
        <h1 className="text-8xl font-bold mb-16 text-center text-violet-500">Welcome</h1>
        <div className="space-y-12">
          <Link href="/user">
            <Button size="xl" className="w-96 h-20 text-3xl bg-violet-500 hover:bg-violet-300 text-white hover:text-violet-500">I need assistance</Button>
          </Link>
          <Link href="/contractor">
            <Button size="xl" variant="outline" className="w-96 h-20 text-3xl bg-white hover:bg-violet-300 text-violet-500 hover:text-violet-700">I'm a contractor</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}