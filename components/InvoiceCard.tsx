import { Invoice } from '@/types'
import { Calendar, DollarSign } from 'lucide-react'

interface InvoiceCardProps {
  invoice: Invoice;
}

export default function InvoiceCard({ invoice }: InvoiceCardProps) {
  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    paid: 'bg-green-100 text-green-800',
    overdue: 'bg-red-100 text-red-800',
    cancelled: 'bg-gray-100 text-gray-800',
  }
  
  const typeIcons = {
    electricity: '⚡',
    water: '💧',
    internet: '🌐',
    phone: '📱',
    gas: '🔥',
    other: '📄',
  }
  
  return (
    <div className="card hover:border-primary transition-all duration-200 cursor-pointer">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{typeIcons[invoice.metadata.invoice_type.key]}</span>
          <div>
            <h3 className="font-bold text-lg">{invoice.title}</h3>
            <p className="text-sm text-gray-600">{invoice.metadata.company_name}</p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[invoice.metadata.payment_status.key]}`}>
          {invoice.metadata.payment_status.value}
        </span>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2 text-gray-600">
          <DollarSign size={18} />
          <div>
            <div className="text-xs">المبلغ</div>
            <div className="font-bold text-gray-900">{invoice.metadata.total_amount} درهم</div>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-gray-600">
          <Calendar size={18} />
          <div>
            <div className="text-xs">الاستحقاق</div>
            <div className="font-medium text-gray-900">
              {new Date(invoice.metadata.due_date).toLocaleDateString('ar-MA', { month: 'short', day: 'numeric' })}
            </div>
          </div>
        </div>
      </div>
      
      {invoice.metadata.suggested_savings && invoice.metadata.suggested_savings > 0 && (
        <div className="mt-3 p-2 bg-secondary-50 rounded-lg flex items-center justify-between">
          <span className="text-sm text-gray-700">توفير محتمل</span>
          <span className="font-bold text-secondary">{invoice.metadata.suggested_savings} درهم</span>
        </div>
      )}
    </div>
  )
}