// components/GuidePageClient.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Shield, BookOpen } from 'lucide-react';
import { Guide, guides } from '@/data/guides';
import { services } from '@/data/services';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQ } from '@/components/FAQ';
import { LeadFormModal } from '@/components/LeadFormModal';
import { siteConfig } from '@/data/site';

interface Props { guide: Guide }

export function GuidePageClient({ guide }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const relatedServices = services.filter(s => guide.relatedServices.includes(s.id));
  const otherGuides = guides.filter(g => g.slug !== guide.slug).slice(0, 4);

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">
        <section className="bg-gray-900 text-white">
          <div className="container-width py-12 md:py-16">
            <Breadcrumbs items={[{ label: 'Guides', href: '/guides/' }, { label: guide.title }]} />
            <div className="mt-6 max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-brand-500/20 text-brand-300 px-3 py-1 rounded-full text-sm font-medium mb-6 border border-brand-500/30">
                <BookOpen className="w-4 h-4" /> Locksmith Guide
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4">
                {guide.title}
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">{guide.excerpt}</p>
            </div>
          </div>
        </section>

        <div className="container-width py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* Intro */}
              <div className="prose prose-gray max-w-none text-gray-600 space-y-4 mb-10">
                {guide.content.intro.map((p, i) => <p key={i} className="text-base leading-relaxed">{p}</p>)}
              </div>

              {/* Content sections */}
              {guide.content.sections.map((section, i) => (
                <section key={i} className="mb-10">
                  <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">{section.heading}</h2>
                  <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
                    {section.paragraphs.map((p, j) => <p key={j} className="text-base leading-relaxed">{p}</p>)}
                  </div>
                </section>
              ))}

              {/* Internal links to money pages */}
              {relatedServices.length > 0 && (
                <section className="mb-10 bg-brand-50 rounded-2xl p-6 md:p-8 border border-brand-100">
                  <h2 className="text-xl font-display font-bold text-gray-900 mb-4">Need a Locksmith for This?</h2>
                  <p className="text-gray-600 mb-4">{siteConfig.name} matches you with vetted Birmingham locksmiths. Get free quotes with no obligation.</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {relatedServices.map(s => (
                      <Link key={s.id} href={`/services/${s.slug}/`} className="group flex items-center gap-3 p-4 bg-white rounded-xl border border-brand-100 hover:border-brand-300 transition-all">
                        <Shield className="w-5 h-5 text-brand-600 flex-shrink-0" />
                        <div>
                          <span className="font-bold text-gray-900 group-hover:text-brand-600 text-sm">{s.title}</span>
                          <span className="text-xs text-gray-500 block">Find vetted specialists</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-brand-400 ml-auto" />
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {/* FAQs */}
              {guide.content.faqs.length > 0 && (
                <div className="mb-10">
                  <FAQ faqs={guide.content.faqs} title="Common Questions" />
                </div>
              )}

              {/* CTA */}
              <div className="bg-brand-900 rounded-2xl p-8 text-center">
                <h2 className="text-2xl font-display font-bold text-white mb-3">Get Expert Locksmith Help in Birmingham</h2>
                <p className="text-brand-200 mb-6 max-w-xl mx-auto">{siteConfig.name} matches you with vetted, insured locksmiths across Birmingham. Free quotes, no obligation.</p>
                <button onClick={() => setIsModalOpen(true)} className="bg-white text-brand-900 font-bold py-3 px-8 rounded-xl hover:bg-brand-50 transition-colors">Get Free Quotes</button>
              </div>
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="font-display font-bold text-gray-900 mb-4">Other Guides</h3>
                  <div className="space-y-3">
                    {otherGuides.map(g => (
                      <Link key={g.slug} href={`/guides/${g.slug}/`} className="block p-3 rounded-lg bg-gray-50 border border-gray-100 hover:border-brand-300 hover:bg-brand-50 transition-all">
                        <span className="font-medium text-sm text-gray-700 hover:text-brand-700">{g.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="bg-brand-900 text-white p-6 rounded-2xl">
                  <h3 className="font-display font-bold mb-3">Need Help Now?</h3>
                  <p className="text-brand-100 text-sm mb-4">Get matched with a vetted Birmingham locksmith. Free quotes, no obligation.</p>
                  <button onClick={() => setIsModalOpen(true)} className="block w-full bg-white text-brand-900 text-center font-bold py-3 px-6 rounded-xl hover:bg-brand-50 transition-colors text-sm">Get Free Quotes</button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
