import Link from 'next/link'
import { Menu } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-3xl">💰</span>
            <span className="text-2xl font-bold text-primary">فلوسك AI</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-primary font-medium transition-colors">
              الرئيسية
            </Link>
            <Link href="/dashboard" className="text-gray-700 hover:text-primary font-medium transition-colors">
              لوحة التحكم
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-primary font-medium transition-colors">
              الأسعار
            </Link>
            <Link href="/dashboard" className="btn-primary">
              ابدأ الآن
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <Menu size={24} className="text-gray-700" />
          </button>
        </div>
      </nav>
    </header>
  )
}