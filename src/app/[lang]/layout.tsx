import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import '../globals.css'
import { Dictionary } from './dictionary/dictionaries'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Amir Andrade - Portfolio',
  description: 'Amir Andrade - Portfolio'
}

export async function generateStaticParams () {
  return [{ lang: 'en-US' }, { lang: 'pt-BR' }]
}

export default function RootLayout ({
  children,
  params
}: Readonly<{
  children: React.ReactNode
  params: {
    lang: keyof Dictionary
  }
}>) {
  return (
    <html
      lang={params.lang}
      className={`${inter.variable} ${poppins.variable}`}
    >
      <body className={inter.className}>{children}</body>
    </html>
  )
}
