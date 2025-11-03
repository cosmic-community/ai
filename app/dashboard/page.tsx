import Link from 'next/link'
import { FileText, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import InvoiceCard from '@/components/InvoiceCard'
import SuggestionCard from '@/components/SuggestionCard'
import StatsCard from '@/components/StatsCard'
import { getInvoices, getPaymentSuggestions, getMonthlyReports } from '@/lib/cosmic'

export default async function DashboardPage() {
  const invoices = await getInvoices()
  const suggestions = await getPaymentSuggestions()
  const reports = await getMonthlyReports()
  
  const latestReport = reports[0]
  
  // Calculate dashboard stats
  const pendingInvoices = invoices.filter(inv => inv.metadata.payment_status.key === 'pending')
  const paidInvoices = invoices.filter(inv => inv.metadata.payment_status.key === 'paid')
  const totalAmount = invoices.reduce((sum, inv) => sum + (inv.metadata.total_amount || 0), 0)
  const totalSavings = invoices.reduce((sum, inv) => sum + (inv.metadata.suggested_savings || 0), 0)
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">لوحة التحكم</h1>
            <p className="text-xl text-gray-600">مرحبًا بك في فلوسك AI - إليك ملخص حسابك</p>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard
              icon={<FileText className="text-primary" size={24} />}
              title="إجمالي الفواتير"
              value={invoices.length.toString()}
              subtitle="فاتورة مسجلة"
              bgColor="bg-primary-50"
            />
            <StatsCard
              icon={<AlertCircle className="text-accent" size={24} />}
              title="فواتير معلقة"
              value={pendingInvoices.length.toString()}
              subtitle="تحتاج إلى دفع"
              bgColor="bg-accent-50"
            />
            <StatsCard
              icon={<CheckCircle className="text-secondary" size={24} />}
              title="فواتير مدفوعة"
              value={paidInvoices.length.toString()}
              subtitle="تم الدفع"
              bgColor="bg-secondary-50"
            />
            <StatsCard
              icon={<TrendingUp className="text-secondary" size={24} />}
              title="التوفير المتوقع"
              value={`${totalSavings} درهم`}
              subtitle="إجمالي التوفير"
              bgColor="bg-secondary-50"
            />
          </div>
          
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Invoices Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">الفواتير الحديثة</h2>
                <Link href="/invoices" className="text-primary hover:text-primary-700 font-medium">
                  عرض الكل ←
                </Link>
              </div>
              
              <div className="space-y-4">
                {invoices.length > 0 ? (
                  invoices.slice(0, 5).map((invoice) => (
                    <InvoiceCard key={invoice.id} invoice={invoice} />
                  ))
                ) : (
                  <div className="card text-center py-12">
                    <FileText size={48} className="mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-600 text-lg">لا توجد فواتير حتى الآن</p>
                    <p className="text-gray-500 mt-2">ارفع أول فاتورة لك لبدء التحليل الذكي</p>
                  </div>
                )}
              </div>
            </div>
            
            {/* Suggestions Column */}
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">اقتراحات التوفير 💡</h2>
              </div>
              
              <div className="space-y-4">
                {suggestions.length > 0 ? (
                  suggestions.map((suggestion) => (
                    <SuggestionCard key={suggestion.id} suggestion={suggestion} />
                  ))
                ) : (
                  <div className="card text-center py-8">
                    <TrendingUp size={40} className="mx-auto text-gray-400 mb-3" />
                    <p className="text-gray-600">لا توجد اقتراحات حاليًا</p>
                  </div>
                )}
              </div>
              
              {/* Monthly Report Summary */}
              {latestReport && (
                <div className="card mt-6 bg-gradient-to-br from-primary-50 to-secondary-50">
                  <h3 className="text-xl font-bold mb-3">📊 التقرير الشهري</h3>
                  <p className="text-gray-700 mb-4">{latestReport.metadata.report_month}</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-gray-600">إجمالي المدفوعات</div>
                      <div className="text-2xl font-bold text-primary">{latestReport.metadata.total_payments} درهم</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">إجمالي التوفير</div>
                      <div className="text-2xl font-bold text-secondary">{latestReport.metadata.total_savings} درهم</div>
                    </div>
                  </div>
                  <Link href="/reports" className="text-primary hover:text-primary-700 font-medium inline-flex items-center">
                    عرض التقرير الكامل ←
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}