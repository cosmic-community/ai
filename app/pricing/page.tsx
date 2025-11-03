import Link from 'next/link'
import { Check, Zap } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingCard from '@/components/PricingCard'

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">خطط بسيطة وشفافة</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              ابدأ مجانًا واختر الخطة المناسبة لحجم عملك
            </p>
          </div>
          
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="مجاني"
              price="0"
              period="الشهر الأول"
              description="مثالي للتجربة والبدء"
              features={[
                '5 فواتير شهريًا',
                'تحليل AI أساسي',
                'اقتراحات الدفع',
                'تقرير شهري واحد',
                'دعم عبر البريد الإلكتروني'
              ]}
              buttonText="ابدأ مجانًا"
              buttonLink="/dashboard"
            />
            
            <PricingCard
              title="احترافي"
              price="9.99"
              period="شهريًا"
              description="للأعمال الصغيرة النامية"
              features={[
                'فواتير غير محدودة',
                'تحليل AI متقدم',
                'اقتراحات مخصصة',
                'تقارير شهرية تفصيلية',
                'رسوم بيانية تفاعلية',
                'دفع إلكتروني مدمج',
                'دعم عبر الواتساب',
                'تصدير التقارير PDF'
              ]}
              buttonText="اشترك الآن"
              buttonLink="/dashboard"
              featured={true}
            />
            
            <PricingCard
              title="الشركات"
              price="حسب الطلب"
              period="اتصل بنا"
              description="للشركات والمكاتب المحاسبية"
              features={[
                'كل ميزات الخطة الاحترافية',
                'حسابات متعددة',
                'API مخصص',
                'تكامل مع أنظمة المحاسبة',
                'مدير حساب مخصص',
                'دعم فني أولوية',
                'تدريب فريق العمل',
                'SLA مضمون'
              ]}
              buttonText="تواصل معنا"
              buttonLink="/contact"
            />
          </div>
          
          {/* FAQ Section */}
          <div className="mt-20 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">الأسئلة الشائعة</h2>
            
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-xl font-bold mb-2">هل يمكنني إلغاء الاشتراك في أي وقت؟</h3>
                <p className="text-gray-600">نعم، يمكنك إلغاء اشتراكك في أي وقت دون أي رسوم إضافية. سيستمر حسابك حتى نهاية الفترة المدفوعة.</p>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold mb-2">هل بياناتي آمنة؟</h3>
                <p className="text-gray-600">نعم، نستخدم أعلى معايير الأمان والتشفير لحماية بياناتك. نحن ملتزمون بمعايير GDPR ولا نشارك بياناتك مع أي طرف ثالث.</p>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold mb-2">ما هي طرق الدفع المتاحة؟</h3>
                <p className="text-gray-600">نقبل بطاقات الائتمان (Visa, Mastercard)، التحويل البنكي، والدفع عبر تطبيقات البنوك المغربية المعتمدة.</p>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold mb-2">هل يمكنني تجربة الخطة الاحترافية مجانًا؟</h3>
                <p className="text-gray-600">نعم! الشهر الأول من الخطة الاحترافية مجاني بالكامل. لا حاجة لبطاقة ائتمان للتسجيل.</p>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="mt-20 text-center card bg-gradient-to-br from-primary to-primary-700 text-white py-12">
            <Zap size={48} className="mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">هل لديك أسئلة أخرى؟</h2>
            <p className="text-xl mb-6">فريقنا جاهز لمساعدتك في اختيار الخطة المناسبة</p>
            <Link href="/contact" className="inline-flex items-center px-8 py-3 bg-white text-primary rounded-lg font-bold hover:shadow-xl transition-shadow duration-200">
              تواصل معنا
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}