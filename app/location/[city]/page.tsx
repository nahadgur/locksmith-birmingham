// app/location/[city]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LOCATIONS, getCityBySlug, toSlug } from '@/data/locations';
import { siteConfig } from '@/data/site';
import { FAQS_SERVICES, FAQS_LOCATION } from '@/data/site';
import { LocationPageClient } from '@/components/LocationPageClient';

interface PageProps { params: { city: string } }

export function generateStaticParams() {
  return Object.values(LOCATIONS).flat().map(city => ({ city: toSlug(city) }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const cityName = getCityBySlug(params.city);
  if (!cityName) return {};
  const title = `Locksmiths in ${cityName} | ${siteConfig.name}`;
  const description = `Find vetted locksmiths in ${cityName}. ${siteConfig.name} covers emergency lockouts, lock repairs, UPVC doors, and security upgrades. Free quotes, no obligation.`;
  const url = `${siteConfig.url}/location/${params.city}/`;
  return {
    title, description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: siteConfig.name, type: 'website', locale: 'en_GB' },
    twitter: { card: 'summary', title, description },
  };
}

export default function CityPage({ params }: PageProps) {
  const cityName = getCityBySlug(params.city);
  if (!cityName) notFound();

  const cityFaqs = [...FAQS_LOCATION, ...FAQS_SERVICES];

  const localBusinessSchema = {
    '@context': 'https://schema.org', '@type': 'Locksmith',
    name: `${siteConfig.name} in ${cityName}`,
    url: `${siteConfig.url}/location/${params.city}/`,
    description: `Find vetted locksmiths in ${cityName}. Free assessments, written quotes, and up to 3 options with no obligation.`,
    areaServed: { '@type': 'City', name: cityName, containedInPlace: { '@type': 'AdministrativeArea', name: 'Birmingham' } },
    priceRange: '\u00a3\u00a3',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: `${siteConfig.url}/location/` },
      { '@type': 'ListItem', position: 3, name: cityName },
    ],
  };

  const faqSchema = cityFaqs.length > 0 ? {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: cityFaqs.map(faq => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <LocationPageClient cityName={cityName} citySlug={params.city} />
    </>
  );
}
