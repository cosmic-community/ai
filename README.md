# فلوسك AI - محاسب ذكي للأعمال الصغيرة

![App Preview](https://imgix.cosmicjs.com/04f6f180-b8fb-11f0-b235-e738b47b10be-photo-1473341304170-971dccb5ac1e-1762204868084.jpg?w=1200&h=300&fit=crop&auto=format,compress)

تطبيق محاسب ذكي تلقائي مصمم خصيصًا للأعمال الصغيرة في السوق العربي (المغرب، السعودية). يستخدم الذكاء الاصطناعي لقراءة وتحليل الفواتير، اقتراح أفضل طرق الدفع، حساب التوفير، وإنشاء تقارير شهرية شاملة.

## ✨ Features

- 🤖 **تحليل الفواتير بالذكاء الاصطناعي**: رفع صور/PDF وتحليلها تلقائيًا
- 💡 **اقتراحات دفع ذكية**: توصيات مخصصة لتوفير المال
- 📊 **تقارير شهرية تفاعلية**: رسوم بيانية ومعلومات تفصيلية
- 💰 **حساب التوفير التلقائي**: معرفة المبالغ الموفرة في كل عملية دفع
- 🏦 **تكامل مع البنوك المغربية**: دعم CIH، Attijariwafa Bank، وغيرها
- 📱 **تصميم متجاوب بالكامل**: يعمل بشكل مثالي على جميع الأجهزة
- 🌐 **دعم كامل للغة العربية (RTL)**: واجهة عربية بالكامل
- 🔒 **أمان متقدم**: حماية البيانات بمعايير GDPR

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69091ae2b786425f45f38104&clone_repository=69091f16b786425f45f38143)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "أنت مطور ويب محترف متخصص في تطبيقات SaaS بالذكاء الاصطناعي. قم ببرمجة موقع ويب كامل ومتجاوب (responsive) لتطبيق "فلوسك AI" – محاسب ذكي تلقائي للأعمال الصغيرة في السوق العربي (مثل المغرب والسعودية). الموقع يحل محل المحاسب التقليدي: يقرأ فواتير (صور/PDF)، يحللها بـAI، يقترح دفعات، يحسب توفيرًا، ويولد تقارير شهرية."

### Code Generation Prompt

> "Build a Next.js website that uses my existing objects in this bucket أنت مطور ويب محترف متخصص في تطبيقات SaaS بالذكاء الاصطناعي. قم ببرمجة موقع ويب كامل ومتجاوب (responsive) لتطبيق "فلوسك AI" – محاسب ذكي تلقائي للأعمال الصغيرة في السوق العربي (مثل المغرب والسعودية). الموقع يحل محل المحاسب التقليدي: يقرأ فواتير (صور/PDF)، يحللها بـAI، يقترح دفعات، يحسب توفيرًا، ويولد تقارير شهرية."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript with strict type checking
- **Styling**: Tailwind CSS with custom RTL configuration
- **Content Management**: Cosmic CMS SDK
- **Charts**: Chart.js with React wrapper
- **Icons**: Lucide React
- **Package Manager**: Bun

## 🚀 Getting Started

### Prerequisites

- Bun installed on your machine
- Cosmic account with bucket credentials

### Installation

1. Clone this repository
2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
Create a `.env.local` file with:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:
```bash
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📚 Cosmic SDK Examples

### Fetching Invoices with Connected Objects

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all invoices with type information
const response = await cosmic.objects
  .find({ type: 'invoices' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

const invoices = response.objects
```

### Fetching Payment Suggestions

```typescript
// Get payment suggestions sorted by priority
const response = await cosmic.objects
  .find({ type: 'payment-suggestions' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

const suggestions = response.objects.sort((a, b) => {
  const priorityOrder = { high: 0, medium: 1, low: 2 }
  return priorityOrder[a.metadata.priority.key] - priorityOrder[b.metadata.priority.key]
})
```

### Fetching Monthly Reports

```typescript
// Get the latest monthly report
const response = await cosmic.objects
  .find({ type: 'monthly-reports' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

const latestReport = response.objects[0]
```

## 🌐 Cosmic CMS Integration

This application is fully integrated with Cosmic CMS. All content is dynamically loaded from your Cosmic bucket:

- **Invoices** (الفواتير): Displays all invoices with details, status, and images
- **Payment Suggestions** (اقتراحات الدفع): Shows smart payment recommendations
- **Monthly Reports** (التقارير الشهرية): Interactive reports with charts and AI insights

To manage content, visit your [Cosmic Dashboard](https://app.cosmicjs.com/).

## 📦 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Connect repository to Netlify
3. Add environment variables
4. Deploy!

## 🔒 Security

- All sensitive data stored in environment variables
- HTTPS enforced in production
- Input validation on all forms
- GDPR-compliant data handling
- No sensitive data stored in localStorage

## 📄 License

This project is licensed under the MIT License.

<!-- README_END -->