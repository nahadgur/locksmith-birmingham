// app/guides/[slug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { guides, getGuideBySlug, getAllGuideSlugs } from '@/data/guides';
import { siteConfig } from '@/data/site';
import { GuidePageClient } from '@/components/GuidePageClient';

interface PageProps { params: { slug: string } }

export function generateStaticParams() {
  return getAllGuideSlugs().map(slug => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const guide = getGuideBySlug(params.slug);
  if (!guide) return {};
  const url = `${siteConfig.url}/guides/${guide.slug}/`;
  return {
    title: `${guide.title} | ${siteConfig.name}`,
    description: guide.metaDescription,
    alternates: { canonical: url },
    openGraph: { title: guide.title, description: guide.metaDescription, url, siteName: siteConfig.name, type: 'article', locale: 'en_GB' },
    twitter: { card: 'summary', title: guide.title, description: guide.metaDescription },
  };
}

export default function GuidePage({ params }: PageProps) {
  const guide = getGuideBySlug(params.slug);
  if (!guide) notFound();

  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: `${siteConfig.url}/guides/` },
      { '@type': 'ListItem', position: 3, name: guide.title },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: guide.title,
    description: guide.metaDescription,
    author: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
    publisher: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
    mainEntityOfPage: `${siteConfig.url}/guides/${guide.slug}/`,
  };

  const faqSchema = guide.content.faqs.length > 0 ? {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: guide.content.faqs.map(faq => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <GuidePageClient guide={guide} />
    </>
  );
}
