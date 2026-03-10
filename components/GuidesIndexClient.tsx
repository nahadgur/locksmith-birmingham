// components/GuidesIndexClient.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BookOpen, ArrowRight } from 'lucide-react';
import { guides } from '@/data/guides';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { LeadFormModal } from '@/components/LeadFormModal';
import { siteConfig } from '@/data/site';

export function GuidesIndexClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">
        <section className="bg-gray-900 text-white">
          <div className="container-width py-12 md:py-16">
            <Breadcrumbs items={[{ label: 'Guides' }]} />
            <div className="mt-6 max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4">
                Locksmith Guides | {siteConfig.name}
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Expert advice on locks, security standards, and protecting your Birmingham property. Written by experienced locksmiths for homeowners.
              </p>
            </div>
          </div>
        </section>

        <div className="container-width py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guides.map(guide => (
              <Link key={guide.slug} href={`/guides/${guide.slug}/`} className="group block bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-100 p-3 rounded-xl text-brand-600 flex-shrink-0">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-lg font-display font-bold text-gray-900 group-hover:text-brand-600 mb-2">{guide.title}</h2>
                    <p className="text-sm text-gray-500 mb-3">{guide.excerpt}</p>
                    <span className="text-brand-600 font-medium text-sm flex items-center">
                      Read guide <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
