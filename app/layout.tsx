import type { Metadata } from 'next'

import './styles/index.css'

import type { FC, PropsWithChildren } from 'react'

export const metadata: Metadata = {
  title: 'nextapp',
  description: 'nextjs前端开发模板',
}

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="en">
    <body>{children}</body>
  </html>
)

export default RootLayout
