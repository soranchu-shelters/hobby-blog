import { Plane } from 'lucide-react'

export function Header() {
  return (
    <header className="bg-gradient-to-r from-sky-800 to-sky-600 text-white py-12">
      <div className="mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 mb-2">
            <Plane className="h-8 w-8" />
            <h1 className="text-4xl font-bold tracking-tight">空旅</h1>
          </div>
          <p className="text-xl font-light tracking-wide mb-6">Soratabi Photo Gallery</p>
          <nav className="flex gap-6 text-sm font-medium">
            <a href="/" className="hover:text-sky-200 transition-colors">
              ホーム
            </a>
            <a href="/blog" className="hover:text-sky-200 transition-colors">
              ブログ
            </a>
            <a href="https://nekohack.me/" className="hover:text-sky-200 transition-colors">
              nekohack inc.について
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
