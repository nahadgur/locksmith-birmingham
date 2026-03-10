// app/services/[serviceSlug]/[locationSlug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services, getServiceBySlug } from '@/data/services';
import { LOCATIONS, getCityBySlug, toSlug } from '@/data/locations';
import { siteConfig } from '@/data/site';
import { ServiceLocationPageClient } from '@/components/ServiceLocationPageClient';

interface PageProps {
  params: { serviceSlug: string; locationSlug: string };
}

export function generateStaticParams() {
  const allCities = Object.values(LOCATIONS).flat();
  const params: { serviceSlug: string; locationSlug: string }[] = [];
  for (const service of services) {
    for (const city of allCities) {
      params.push({ serviceSlug: service.slug, locationSlug: toSlug(city) });
    }
  }
  return params;
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = getServiceBySlug(params.serviceSlug);
  const cityName = getCityBySlug(params.locationSlug);
  if (!service || !cityName) return {};

  const title = `${service.title} in ${cityName} | ${siteConfig.name}`;
  const description = `Find vetted ${service.title.toLowerCase()} specialists in ${cityName}. ${siteConfig.name} matches you with insured, experienced Birmingham locksmiths. Free quotes, no obligation.`;
  const url = `${siteConfig.url}/services/${service.slug}/${params.locationSlug}/`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: siteConfig.name, type: 'website', locale: 'en_GB' },
    twitter: { card: 'summary', title, description },
  };
}

export default function ServiceLocationPage({ params }: PageProps) {
  const service = getServiceBySlug(params.serviceSlug);
  const cityName = getCityBySlug(params.locationSlug);
  if (!service || !cityName) notFound();

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Locksmith',
    name: `${siteConfig.name} - ${service.title} in ${cityName}`,
    url: `${siteConfig.url}/services/${service.slug}/${params.locationSlug}/`,
    description: `Find vetted ${service.title.toLowerCase()} specialists in ${cityName}. Free assessment, written quotes, no obligation.`,
    areaServed: { '@type': 'City', name: cityName, containedInPlace: { '@type': 'AdministrativeArea', name: 'Birmingham' } },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.title,
      itemListElement: [{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: service.title, areaServed: { '@type': 'City', name: cityName } } }],
    },
    priceRange: '\u00a3\u00a3',
    currenciesAccepted: 'GBP',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteConfig.url}/services/` },
      { '@type': 'ListItem', position: 3, name: service.title, item: `${siteConfig.url}/services/${service.slug}/` },
      { '@type': 'ListItem', position: 4, name: cityName },
    ],
  };

  const faqSchema = service.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map(faq => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <ServiceLocationPageClient service={service} cityName={cityName} locationSlug={params.locationSlug} />
    </>
  );
}
