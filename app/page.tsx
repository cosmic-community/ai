import Link from 'next/link'
import { ArrowLeft, TrendingUp, FileText, Sparkles, Shield, BarChart3 } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FeatureCard from '@/components/FeatureCard'
import InvoicePreview from '@/components/InvoicePreview'
import { getInvoices, getPaymentSuggestions } from '@/lib/cosmic'

export default async function HomePage() {
  const invoices = await getInvoices()
  const suggestions = await getPaymentSuggestions()
  
  const featuredInvoice = invoices[0]
  const featuredSuggestion = suggestions[0]
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-secondary-50 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            محاسب ذكي لأعمالك الصغيرة 🤖
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            وفر وقتك ومالك مع فلوسك AI - نحلل فواتيرك تلقائيًا ونقترح أفضل طرق الدفع لتوفير المال
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/dashboard" className="btn-primary text-lg">
              جرب الآن مجانًا
              <ArrowLeft className="inline mr-2" size={20} />
            </Link>
            <Link href="/pricing" className="px-6 py-3 text-lg border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary-50 transition-colors duration-200">
              عرض الأسعار
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">128 درهم</div>
              <div className="text-gray-600">متوسط التوفير الشهري</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">6.9%</div>
              <div className="text-gray-600">نسبة التوفير</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">3 دقائق</div>
              <div className="text-gray-600">لتحليل الفاتورة</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">ماذا نقدم لك؟</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            حلول ذكية لإدارة فواتيرك ومدفوعاتك بأقل جهد وأقصى توفير
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<FileText size={40} className="text-primary" />}
              title="تحليل الفواتير تلقائيًا"
              description="ارفع صورة الفاتورة ودع الذكاء الاصطناعي يستخرج كل التفاصيل: المبلغ، التاريخ، النوع، والغرامات"
            />
            <FeatureCard
              icon={<TrendingUp size={40} className="text-secondary" />}
              title="اقتراحات توفير ذكية"
              description="احصل على توصيات مخصصة لتوفير المال عبر أفضل طرق الدفع والبنوك"
            />
            <FeatureCard
              icon={<BarChart3 size={40} className="text-accent" />}
              title="تقارير شهرية شاملة"
              description="رسوم بيانية تفاعلية ونصائح AI لفهم إنفاقك وتحسين توفيرك"
            />
            <FeatureCard
              icon={<Sparkles size={40} className="text-primary" />}
              title="دفع إلكتروني سريع"
              description="ادفع فواتيرك مباشرة من التطبيق عبر البنوك المغربية المعتمدة"
            />
            <FeatureCard
              icon={<Shield size={40} className="text-secondary" />}
              title="أمان متقدم"
              description="بياناتك محمية بأعلى معايير الأمان والخصوصية (GDPR)"
            />
            <FeatureCard
              icon={<BarChart3 size={40} className="text-accent" />}
              title="متابعة مستمرة"
              description="تنبيهات تلقائية لمواعيد الاستحقاق والعروض الخاصة"
            />
          </div>
        </div>
      </section>
      
      {/* Demo Section */}
      {featuredInvoice && (
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">شاهد كيف يعمل</h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              مثال حقيقي لتحليل فاتورة كهرباء من LYDEC
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <InvoicePreview invoice={featuredInvoice} />
              
              {featuredSuggestion && (
                <div className="card">
                  <div className="text-4xl mb-4">{featuredSuggestion.metadata.suggestion_icon || '💡'}</div>
                  <h3 className="text-2xl font-bold mb-4">{featuredSuggestion.metadata.suggestion_title}</h3>
                  <div 
                    className="text-gray-700 mb-6 prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: featuredSuggestion.metadata.suggestion_description }}
                  />
                  <div className="flex items-center justify-between p-4 bg-secondary-50 rounded-lg">
                    <div>
                      <div className="text-sm text-gray-600">التوفير المتوقع</div>
                      <div className="text-3xl font-bold text-secondary">{featuredSuggestion.metadata.saved_amount} درهم</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">نسبة التوفير</div>
                      <div className="text-2xl font-bold text-secondary">{featuredSuggestion.metadata.savings_rate}%</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary to-primary-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ابدأ التوفير اليوم 🚀
          </h2>
          <p className="text-xl mb-8">
            الشهر الأول مجاني بالكامل - لا حاجة لبطاقة ائتمان
          </p>
          <Link href="/dashboard" className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-lg font-bold text-lg hover:shadow-xl transition-shadow duration-200">
            ابدأ الآن مجانًا
            <ArrowLeft className="mr-2" size={24} />
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}