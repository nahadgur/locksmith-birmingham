// app/guides/page.tsx
import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import { GuidesIndexClient } from '@/components/GuidesIndexClient';

export const metadata: Metadata = {
  title: `Locksmith Guides | ${siteConfig.name}`,
  description: 'Expert locksmith guides for Birmingham homeowners. Learn about lock types, security standards, insurance requirements, and how to protect your property.',
  alternates: { canonical: `${siteConfig.url}/guides/` },
};

export default function GuidesPage() {
  return <GuidesIndexClient />;
}
