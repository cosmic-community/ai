import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">💰</span>
              <span className="text-2xl font-bold">فلوسك AI</span>
            </div>
            <p className="text-gray-400">
              محاسب ذكي للأعمال الصغيرة في السوق العربي
            </p>
          </div>
          
          {/* Product */}
          <div>
            <h3 className="font-bold text-lg mb-4">المنتج</h3>
            <ul className="space-y-2">
              <li><Link href="/dashboard" className="text-gray-400 hover:text-white">لوحة التحكم</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-white">الأسعار</Link></li>
              <li><Link href="/#features" className="text-gray-400 hover:text-white">المميزات</Link></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">الشركة</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white">من نحن</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">اتصل بنا</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white">سياسة الخصوصية</Link></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="font-bold text-lg mb-4">الدعم</h3>
            <ul className="space-y-2">
              <li><Link href="/help" className="text-gray-400 hover:text-white">مركز المساعدة</Link></li>
              <li><Link href="/docs" className="text-gray-400 hover:text-white">التوثيق</Link></li>
              <li><a href="mailto:support@floosak.ai" className="text-gray-400 hover:text-white">support@floosak.ai</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} فلوسك AI. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}