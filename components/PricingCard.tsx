import Link from 'next/link'
import { Check } from 'lucide-react'

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  featured?: boolean;
}

export default function PricingCard({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  buttonLink,
  featured = false,
}: PricingCardProps) {
  return (
    <div className={`card ${featured ? 'border-2 border-primary shadow-xl scale-105' : ''}`}>
      {featured && (
        <div className="bg-primary text-white text-center py-2 -mx-6 -mt-6 mb-6 rounded-t-xl font-bold">
          الأكثر شعبية ⭐
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-baseline justify-center gap-2">
          <span className="text-5xl font-bold text-primary">{price}</span>
          {price !== 'حسب الطلب' && <span className="text-gray-600">درهم</span>}
        </div>
        <div className="text-gray-500 mt-2">{period}</div>
      </div>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check size={20} className="text-secondary flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Link 
        href={buttonLink}
        className={`block w-full text-center py-3 rounded-lg font-bold transition-colors duration-200 ${
          featured 
            ? 'bg-primary text-white hover:bg-primary-700' 
            : 'border-2 border-primary text-primary hover:bg-primary-50'
        }`}
      >
        {buttonText}
      </Link>
    </div>
  )
}