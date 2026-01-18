import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Young Minds Research Foundation | Where Young Ideas Become Research",
  description:
    "YMRF empowers high school students to explore STEM research through mentorship, hands-on projects, and real scientific events. Join our research programs, boot camps, and hackathons.",
  keywords: [
    "STEM research",
    "high school students",
    "mentorship",
    "science education",
    "research programs",
    "hackathons",
  ],
  openGraph: {
    title: "Young Minds Research Foundation",
    description: "Where Young Ideas Become Research - Empowering high school students in STEM",
    type: "website",
    locale: "en_US",
    siteName: "YMRF",
  },
  twitter: {
    card: "summary_large_image",
    title: "Young Minds Research Foundation",
    description: "Where Young Ideas Become Research",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
