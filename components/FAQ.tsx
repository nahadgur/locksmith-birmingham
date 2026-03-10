// components/FAQ.tsx
'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem { question: string; answer: string }
interface FAQProps { faqs: FAQItem[]; title?: string }

export function FAQ({ faqs, title }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section>
      {title && <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-6">{title}</h2>}
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex items-center justify-between w-full p-5 text-left"
            >
              <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
              <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-96 pb-5 px-5' : 'max-h-0'}`}>
              <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
