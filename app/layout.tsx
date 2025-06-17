import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Robsen Teshome - Full-Stack Mobile Developer",
  description:
    "Professional portfolio of Robsen Teshome, a Full-Stack Mobile Developer specializing in Flutter,backend development, and competitive programming. A2SV trainee with strong problem-solving skills.",
  keywords:
    "mobile app developer, flutter developer, backend developer, competitive programming, A2SV, leetcode, portfolio",
  authors: [{ name: "Robsen Teshome" }],
  openGraph: {
    title: "Robsen Teshome - Full-Stack Mobile Developer",
    description:
      "Professional portfolio showcasing mobile app development, backend solutions, and competitive programming achievements",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
