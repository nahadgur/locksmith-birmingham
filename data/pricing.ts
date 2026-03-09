// data/pricing.ts - Auto-generated
export interface PricingTier { treatment: string; slug: string; priceFrom: number; priceTo: number; typicalDuration: string; alignerSets: string; description: string; }
export const pricingTiers: PricingTier[] = [
  {
    "treatment": "Emergency Lockout Service",
    "slug": "emergency-lockout-service",
    "priceFrom": 80,
    "priceTo": 200,
    "typicalDuration": "30 minutes to 2 hours",
    "alignerSets": "Callout, assessment, and non-destructive entry",
    "description": "Birmingham emergency lockout prices depend on time of day, location accessibility, and lock complexity. Victorian properties in conservation areas may require specialist techniques, while modern UPVC locks typically cost less to open safely."
  },
  {
    "treatment": "Lock Replacement",
    "slug": "lock-replacement",
    "priceFrom": 120,
    "priceTo": 400,
    "typicalDuration": "1 to 3 hours",
    "alignerSets": "New lock supply, removal, and installation",
    "description": "Lock replacement costs in Birmingham vary significantly based on lock quality, property type, and conservation requirements. Heritage properties in areas like Edgbaston requiring period-appropriate hardware typically cost more than standard residential replacements."
  },
  {
    "treatment": "Lock Repair",
    "slug": "lock-repair",
    "priceFrom": 60,
    "priceTo": 180,
    "typicalDuration": "1 to 2 hours",
    "alignerSets": "Assessment, parts if needed, and repair work",
    "description": "Birmingham lock repair pricing depends on mechanism complexity and parts availability. Victorian locks in heritage properties may require specialist components, while modern lock repairs typically use readily available parts at lower costs."
  },
  {
    "treatment": "Security Upgrades",
    "slug": "security-upgrades",
    "priceFrom": 200,
    "priceTo": 800,
    "typicalDuration": "2 to 6 hours",
    "alignerSets": "Security assessment, hardware supply, and installation",
    "description": "Security upgrade costs in Birmingham depend on property size, existing security level, and insurance requirements. Victorian terraces often need comprehensive upgrades, while modern properties may only require targeted improvements to vulnerable areas."
  },
  {
    "treatment": "UPVC Door Lock Repair",
    "slug": "upvc-door-lock-repair",
    "priceFrom": 90,
    "priceTo": 300,
    "typicalDuration": "1 to 4 hours",
    "alignerSets": "Diagnosis, adjustment or parts replacement",
    "description": "UPVC door repairs in Birmingham range from simple adjustments to complete multipoint system replacement. Costs depend on door age, mechanism type, and whether specialist parts need ordering for older Birmingham housing developments."
  },
  {
    "treatment": "Safe Opening",
    "slug": "safe-opening",
    "priceFrom": 150,
    "priceTo": 600,
    "typicalDuration": "1 to 4 hours",
    "alignerSets": "Assessment, opening attempt, and combination reset",
    "description": "Safe opening costs in Birmingham depend on safe type, age, and opening method required. Antique safes common in Edgbaston period properties may require specialist techniques, while modern residential safes typically cost less to open professionally."
  }
];
export const servicePricingMap: Record<string, string[]> = {
  'emergency-lockout': ['emergency-lockout'],
  'lock-replacement': ['lock-replacement'],
  'lock-repair': ['lock-repair'],
  'security-upgrades': ['security-upgrades'],
  'upvc-door-repair': ['upvc-door-repair'],
  'safe-opening': ['safe-opening']
};
export function getPricingForService(serviceId: string): PricingTier[] {
  const slugs = servicePricingMap[serviceId] || ['emergency-lockout'];
  return pricingTiers.filter(p => slugs.includes(p.slug));
}
export const treatmentIncludes = [
  "Callout, assessment, and non-destructive entry",
  "New lock supply, removal, and installation",
  "Assessment, parts if needed, and repair work",
  "Security assessment, hardware supply, and installation",
  "Diagnosis, adjustment or parts replacement",
  "Assessment, opening attempt, and combination reset"
];
export const financeInfo = { available: true, interestFree: true, monthlyFrom: 99, spreadOver: '6 to 36 months', description: '0% finance available through selected installers. Subject to status.' };
