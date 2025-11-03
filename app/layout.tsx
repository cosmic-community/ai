import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import './globals.css'
import CosmicBadge from '@/components/CosmicBadge'

const cairo = Cairo({ 
  subsets: ['arabic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'فلوسك AI - محاسب ذكي للأعمال الصغيرة',
  description: 'محاسب ذكي تلقائي للأعمال الصغيرة في السوق العربي. يقرأ الفواتير، يحللها بالذكاء الاصطناعي، ويقترح أفضل طرق الدفع والتوفير.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string
  
  return (
    <html lang="ar" dir="rtl">
      <head>
        <script src="/dashboard-console-capture.js"></script>
      </head>
      <body className={cairo.className}>
        {children}
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}