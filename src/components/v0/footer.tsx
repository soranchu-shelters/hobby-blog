import { Instagram, ExternalLink, Mail, Plane } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-sky-900 text-white py-8">
      <div className="mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Plane className="h-5 w-5" />
            <span className="text-xl font-bold">空旅</span>
          </div>

          <div className="flex gap-6">
            <a
              href="https://instagram.com/soranchu_liz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-300 transition-colors"
            >
              <span className="sr-only">Instagram</span>
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://bsky.app/profile/jiyuujin.bsky.social"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-300 transition-colors"
            >
              <span className="sr-only">Bluesky</span>
              <ExternalLink className="h-5 w-5" />
            </a>
            <a
              href="https://times.nekohack.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-300 transition-colors"
            >
              <span className="sr-only">Mstodon</span>
              <ExternalLink className="h-5 w-5" />
            </a>
            <a href="mailto:jiyuujin@nekohack.me" className="hover:text-sky-300 transition-colors">
              <span className="sr-only">Email</span>
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <div className="text-sm text-sky-200">
            &copy; {new Date().getFullYear()} nekohack inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
