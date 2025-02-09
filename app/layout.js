import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: '超集中英語ブートキャンプ | Intensive English Bootcamp',
  description: '9回のレッスンで英語文法を完全マスター。今まで曖昧だった文法を明確にし、自信を持って英語を使えるようになります。',
  keywords: 'English, Bootcamp, Grammar, Japanese, Learning, Online, Course',
  openGraph: {
    title: '超集中英語ブートキャンプ | Intensive English Bootcamp',
    description: '9回のレッスンで英語文法を完全マスター。',
    type: 'website',
    locale: 'ja_JP',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-sans antialiased">
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
