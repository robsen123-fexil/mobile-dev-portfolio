import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

const title = "Robsen Teshome | Flutter Mobile App Developer"
const description =
  "Mobile App Developer in Addis Ababa with 3+ years building production Flutter apps. Upwork Top Rated, 100% Job Success Score. Flutter, Dart, Python, FastAPI, Django, and Supabase."

export const metadata: Metadata = {
  title,
  description,
  keywords:
    "Robsen Teshome, Flutter developer, mobile app developer, Dart, Addis Ababa, Upwork, Supabase, FastAPI",
  authors: [{ name: "Robsen Teshome" }],
  metadataBase: new URL("https://robsenteshome.vercel.app"),
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://robsenteshome.vercel.app/",
    siteName: "Robsen Teshome",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
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
