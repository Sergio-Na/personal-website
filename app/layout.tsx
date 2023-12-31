import './globals.css'
import { Inter } from 'next/font/google'
import Providers from "./providers"
import ThemeSwitch from '@/components/ThemeSwitch'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Sergio's Portfolio",
  description: "Sergio Najm's Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script src='../vendor/snow.js' defer></script>
        <body className="${inter.className} bg-slate-300 dark:bg-[#111010]"><Providers>{children}</Providers></body>
      </head>
    </html>
  )
}
