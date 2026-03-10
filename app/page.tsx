// app/page.tsx
import { services } from '@/data/services';
import { siteConfig } from '@/data/site';
import { homepageFaqs, schemaData } from '@/data/homepage';
import { HomePageClient } from '@/components/HomePageClient';

export default function HomePage() {
  const locksmithSchema = {
    '@context': 'https://schema.org',
    '@type': 'Locksmith',
    '@id': siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/android-chrome-512x512.png`,
    image: `${siteConfig.url}/android-chrome-512x512.png`,
    areaServed: {
      '@type': 'AdministrativeArea',
      name: schemaData.areaServedName,
      containedInPlace: { '@type': 'Country', name: 'United Kingdom' },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: schemaData.offerCatalogName,
      itemListElement: services.map(s => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.title },
      })),
    },
    priceRange: '\u00a3\u00a3',
    currenciesAccepted: 'GBP',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer',
    openingHours: 'Mo-Su 00:00-23:59',
  };

  const faqSchema = homepageFaqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homepageFaqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locksmithSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <HomePageClient />
    </>
  );
}
