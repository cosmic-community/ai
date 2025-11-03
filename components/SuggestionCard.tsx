import { PaymentSuggestion } from '@/types'
import { TrendingUp, Calendar } from 'lucide-react'

interface SuggestionCardProps {
  suggestion: PaymentSuggestion;
}

export default function SuggestionCard({ suggestion }: SuggestionCardProps) {
  const priorityColors = {
    high: 'bg-red-100 text-red-800 border-red-300',
    medium: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    low: 'bg-green-100 text-green-800 border-green-300',
  }
  
  return (
    <div className={`card border-2 ${priorityColors[suggestion.metadata.priority.key]}`}>
      <div className="flex items-start justify-between mb-3">
        <span className="text-3xl">{suggestion.metadata.suggestion_icon || '💡'}</span>
        <span className="text-xs px-2 py-1 rounded-full bg-white font-medium">
          {suggestion.metadata.priority.value}
        </span>
      </div>
      
      <h3 className="font-bold text-lg mb-2">{suggestion.metadata.suggestion_title}</h3>
      
      <div 
        className="text-gray-700 text-sm mb-4 prose prose-sm max-w-none"
        dangerouslySetInnerHTML={{ __html: suggestion.metadata.suggestion_description }}
      />
      
      <div className="flex items-center justify-between p-3 bg-white rounded-lg">
        <div>
          <div className="text-xs text-gray-600">التوفير</div>
          <div className="text-xl font-bold text-secondary flex items-center gap-1">
            <TrendingUp size={18} />
            {suggestion.metadata.saved_amount} درهم
          </div>
        </div>
        
        {suggestion.metadata.valid_until && (
          <div className="text-left">
            <div className="text-xs text-gray-600">صالح حتى</div>
            <div className="text-sm font-medium flex items-center gap-1">
              <Calendar size={14} />
              {new Date(suggestion.metadata.valid_until).toLocaleDateString('ar-MA', { month: 'short', day: 'numeric' })}
            </div>
          </div>
        )}
      </div>
      
      {suggestion.metadata.recommended_bank && (
        <div className="mt-3 text-sm text-gray-600">
          <span className="font-medium">البنك الموصى به:</span> {suggestion.metadata.recommended_bank}
        </div>
      )}
    </div>
  )
}