import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
})

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["italic", "normal"],
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Adarsh Kumar | Artist Portfolio",
  description: "A digital showcase of minimal sculpture and light installations by Adarsh Kumar.",
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} antialiased selection:bg-accent selection:text-white font-sans`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
