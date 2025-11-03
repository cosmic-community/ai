import { Invoice } from '@/types'
import { Calendar, DollarSign, AlertCircle } from 'lucide-react'

interface InvoicePreviewProps {
  invoice: Invoice;
}

export default function InvoicePreview({ invoice }: InvoicePreviewProps) {
  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    paid: 'bg-green-100 text-green-800',
    overdue: 'bg-red-100 text-red-800',
    cancelled: 'bg-gray-100 text-gray-800',
  }
  
  return (
    <div className="card">
      {invoice.metadata.invoice_image && (
        <img 
          src={`${invoice.metadata.invoice_image.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
          alt={invoice.title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      )}
      
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold">{invoice.title}</h3>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[invoice.metadata.payment_status.key]}`}>
          {invoice.metadata.payment_status.value}
        </span>
      </div>
      
      <div className="space-y-3 mb-4">
        <div className="flex items-center gap-2 text-gray-600">
          <DollarSign size={20} />
          <span className="font-medium">المبلغ:</span>
          <span className="font-bold text-gray-900">{invoice.metadata.total_amount} درهم</span>
        </div>
        
        <div className="flex items-center gap-2 text-gray-600">
          <Calendar size={20} />
          <span className="font-medium">تاريخ الاستحقاق:</span>
          <span>{new Date(invoice.metadata.due_date).toLocaleDateString('ar-MA')}</span>
        </div>
        
        {invoice.metadata.potential_penalty && invoice.metadata.potential_penalty > 0 && (
          <div className="flex items-center gap-2 text-red-600">
            <AlertCircle size={20} />
            <span className="font-medium">الغرامة المحتملة:</span>
            <span className="font-bold">{invoice.metadata.potential_penalty} درهم</span>
          </div>
        )}
      </div>
      
      {invoice.metadata.ai_notes && (
        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-start gap-2">
            <span className="text-2xl">🤖</span>
            <div>
              <div className="font-bold text-primary mb-1">ملاحظات الذكاء الاصطناعي</div>
              <p className="text-gray-700 text-sm">{invoice.metadata.ai_notes}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}