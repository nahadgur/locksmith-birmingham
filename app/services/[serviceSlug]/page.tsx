// app/services/[serviceSlug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services, getServiceBySlug } from '@/data/services';
import { siteConfig } from '@/data/site';
import { ServicePageClient } from '@/components/ServicePageClient';

interface PageProps { params: { serviceSlug: string } }

export function generateStaticParams() {
  return services.map(s => ({ serviceSlug: s.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = getServiceBySlug(params.serviceSlug);
  if (!service) return {};
  const title = `${service.title} Birmingham | ${siteConfig.name}`;
  const description = `Compare vetted ${service.title.toLowerCase()} specialists across Birmingham. ${siteConfig.name} matches you with insured professionals. Free quotes, no obligation.`;
  const url = `${siteConfig.url}/services/${service.slug}/`;
  return {
    title, description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: siteConfig.name, type: 'website', locale: 'en_GB' },
    twitter: { card: 'summary', title, description },
  };
}

export default function ServicePage({ params }: PageProps) {
  const service = getServiceBySlug(params.serviceSlug);
  if (!service) notFound();

  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteConfig.url}/services/` },
      { '@type': 'ListItem', position: 3, name: service.title },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org', '@type': 'Service',
    name: service.title,
    provider: { '@type': 'Locksmith', name: siteConfig.name, url: siteConfig.url },
    areaServed: { '@type': 'AdministrativeArea', name: 'Birmingham' },
    description: service.description,
  };

  const faqSchema = service.faqs.length > 0 ? {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: service.faqs.map(faq => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <ServicePageClient service={service} />
    </>
  );
}
