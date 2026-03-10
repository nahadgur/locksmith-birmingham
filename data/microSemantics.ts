// data/microSemantics.ts - Location-specific micro-semantic content for bottom 1/3 of pages
// Provides unique, NLP-detectable content per location that competitors won't have

interface MicroSemantic {
  heading: string;
  paragraphs: string[];
}

// Area profiles: property types, common issues, and local context
const areaProfiles: Record<string, { propertyMix: string; commonIssues: string; localContext: string }> = {
  'Edgbaston': {
    propertyMix: 'large Victorian and Edwardian detached and semi-detached houses, many converted to flats, alongside 1930s semis and modern apartment developments near Five Ways',
    commonIssues: 'original Victorian mortice locks needing BS3621 upgrades, sash window security on period properties, and conservation area restrictions on external hardware changes',
    localContext: 'Edgbaston is one of Birmingham\'s most affluent residential areas and a designated conservation area in parts. Properties near Calthorpe Park and along Hagley Road command premium values, making security a priority for homeowners and landlords of HMO conversions',
  },
  'Moseley': {
    propertyMix: 'Victorian and Edwardian terraces and villas, Edwardian semis along St Mary\'s Row, plus inter-war housing and some 1960s social housing developments',
    commonIssues: 'ageing mortice locks on Victorian timber doors, UPVC rear door mechanisms failing on extended properties, and security upgrades following break-in clusters reported in local community groups',
    localContext: 'Moseley\'s vibrant village centre and Highbury Park make it one of Birmingham\'s most desirable postcodes. The mix of young professionals, families, and students in shared houses creates varied locksmith demand from emergency lockouts to full security reviews',
  },
  'Jewellery Quarter': {
    propertyMix: 'converted industrial workshops and warehouses, purpose-built city apartments, and remaining commercial premises with mixed-use ground floors',
    commonIssues: 'access control systems in converted buildings, insurance-compliant locks for high-value premises, conservation area restrictions requiring sympathetic hardware choices, and communal door entry systems needing maintenance',
    localContext: 'The Jewellery Quarter conservation area has strict guidelines on external alterations to buildings. Many converted workshop apartments have non-standard door configurations that require specialist locksmith knowledge. The area\'s high-value commercial premises also demand advanced security solutions',
  },
  'Kings Heath': {
    propertyMix: '1920s and 1930s semi-detached houses form the backbone of the area, with Victorian terraces near the High Street, 1960s estates, and newer infill developments',
    commonIssues: 'UPVC door mechanisms failing on 1990s replacement doors, euro cylinder vulnerability to lock snapping on inter-war properties with modern door upgrades, and window lock failures on timber-framed sash windows',
    localContext: 'Kings Heath\'s mix of family homes and rental properties near local amenities creates steady demand for both emergency and planned locksmith services. The area has an active community forum where security concerns are regularly discussed, driving awareness of lock upgrade options',
  },
  'Harborne': {
    propertyMix: 'substantial Edwardian and inter-war semi-detached houses, detached properties near Harborne Golf Club, and terraced workers\' cottages near the High Street',
    commonIssues: 'insurance-driven security upgrades on high-value detached properties, multi-point lock failures on composite front doors replacing original timber, and lock changes following property sales in the active Harborne housing market',
    localContext: 'Harborne is one of Birmingham\'s most sought-after suburbs with property values that justify comprehensive security investment. Proximity to the QE Hospital also means a significant population of medical professionals who value reliable 24-hour locksmith availability',
  },
  'Erdington': {
    propertyMix: '1930s semi-detached and terraced housing, Victorian terraces near the High Street, post-war council estates, and 1990s-2000s housing association developments',
    commonIssues: 'lock snapping on UPVC doors across 1990s developments, failing multipoint mechanisms on housing association properties, and emergency lockouts at older properties with worn lock mechanisms',
    localContext: 'Erdington has a diverse housing stock that spans over a century of building styles. The area has seen investment in housing improvements, driving demand for security upgrades. Good transport links via the A38 and Erdington station make it accessible for locksmiths covering north Birmingham',
  },
  'Northfield': {
    propertyMix: '1950s and 1960s semi-detached council houses (many now privately owned), inter-war terraces, and newer developments around the former Longbridge works site',
    commonIssues: 'UPVC door lock failures on ex-council properties with original 1990s replacement doors, security upgrades following area regeneration, and master key system changes in housing association blocks',
    localContext: 'Northfield and neighbouring Longbridge have seen significant regeneration since the closure of the Rover plant. New housing developments alongside the existing 20th-century housing stock create a mix of modern and legacy lock systems that locksmiths need to navigate',
  },
  'Digbeth': {
    propertyMix: 'converted warehouse apartments, new-build city apartments, commercial units with residential above, and remaining industrial premises',
    commonIssues: 'access control and entry systems in multi-occupancy converted buildings, high-security requirements for commercial ground floors, and insurance compliance for loft-style apartments with non-standard door configurations',
    localContext: 'Digbeth\'s ongoing transformation from industrial quarter to creative and residential hub means locksmith needs are evolving. New residents in converted spaces often find that original commercial door hardware needs replacing with residential-grade security. The HS2 development nearby is also driving new construction with modern lock requirements',
  },
  'Selly Oak': {
    propertyMix: 'Victorian terraces divided into student HMOs, 1930s semis, purpose-built student accommodation, and family housing further from the university',
    commonIssues: 'high-frequency lock changes between academic years for student lets, damaged locks from forced entry attempts on HMOs, and landlord compliance with HMO licensing security requirements',
    localContext: 'Selly Oak\'s proximity to the University of Birmingham makes it one of the UK\'s largest student accommodation areas. Landlords managing HMOs need reliable locksmith services for annual lock changes, emergency call-outs during term time, and security compliance for HMO licensing inspections',
  },
  'Sutton Coldfield': {
    propertyMix: 'large detached properties in Four Oaks and Little Aston, inter-war semis around the town centre, and newer executive developments on the outskirts',
    commonIssues: 'comprehensive security systems for high-value properties, smart lock installations on executive homes, insurance-driven upgrades following targeted burglaries, and gate and perimeter security integration',
    localContext: 'Sutton Coldfield includes some of Birmingham\'s most valuable residential property, particularly in Four Oaks where homes regularly exceed a million pounds. This drives demand for premium security solutions including alarm-integrated lock systems, CCTV-compatible access control, and insurance-specified high-security hardware',
  },
  'Handsworth': {
    propertyMix: 'large Victorian villas (many converted to flats or HMOs), Edwardian terraces, inter-war council housing, and some newer housing association developments',
    commonIssues: 'security upgrades on converted Victorian properties with multiple entry points, communal door entry system maintenance, and emergency lockout services for multi-occupancy buildings',
    localContext: 'Handsworth\'s stock of large Victorian houses presents unique locksmith challenges, particularly where properties have been divided into multiple units. Each conversion creates additional entry points that need securing, and communal areas require door entry systems that balance security with accessibility for all residents',
  },
  'Bournville': {
    propertyMix: 'distinctive Cadbury-era Arts and Crafts cottages and houses managed by Bournville Village Trust, alongside inter-war private housing and some modern infill',
    commonIssues: 'Bournville Village Trust restrictions on external modifications including door hardware, period-appropriate lock solutions for Arts and Crafts properties, and maintaining security standards within trust design guidelines',
    localContext: 'Bournville Village Trust properties have specific guidelines about external appearance that affect door hardware choices. Locksmiths working in Bournville need to understand these restrictions and source hardware that meets security standards while conforming to the trust\'s architectural conservation requirements',
  },
};

// Fallback for areas without specific profiles
function getGenericMicro(serviceId: string, cityName: string): MicroSemantic {
  const serviceLabels: Record<string, string> = {
    'emergency-lockout': 'emergency lockout',
    'lock-replacement': 'lock replacement',
    'lock-repair': 'lock repair',
    'security-upgrades': 'security upgrade',
    'upvc-door-repair': 'UPVC door lock repair',
    'safe-opening': 'safe opening',
  };
  const serviceLabel = serviceLabels[serviceId] || 'locksmith';

  return {
    heading: `${cityName}: Local Property and Security Context`,
    paragraphs: [
      `${cityName} has a mix of property types that influence ${serviceLabel} requirements. Older properties may have original lock mechanisms that need specialist attention, while newer builds typically have UPVC or composite doors with euro cylinder locks. A local locksmith familiar with ${cityName} will understand the common door and lock configurations in the area.`,
      `When booking a ${serviceLabel} service in ${cityName}, providing your property type, door material, and current lock type (if known) helps the locksmith arrive with the right tools and parts. This reduces appointment time and ensures the correct solution for your specific property.`,
    ],
  };
}

export function getMicroSemantics(serviceId: string, cityName: string): MicroSemantic {
  const profile = areaProfiles[cityName];

  if (!profile) return getGenericMicro(serviceId, cityName);

  const serviceContextMap: Record<string, (city: string, p: typeof profile) => MicroSemantic> = {
    'emergency-lockout': (city, p) => ({
      heading: `Emergency Lockout Context for ${city} Properties`,
      paragraphs: [
        `${city} is characterised by ${p.propertyMix}. Emergency lockout response in ${city} requires familiarity with these varied door types and locking mechanisms to ensure non-destructive entry techniques are used appropriately.`,
        `${p.localContext}. For emergency lockouts, response time is critical. Locksmiths based near ${city} or familiar with the area\'s road layout can typically reach most addresses within 30 to 45 minutes during daytime hours.`,
      ],
    }),
    'lock-replacement': (city, p) => ({
      heading: `Lock Replacement Considerations for ${city} Properties`,
      paragraphs: [
        `Properties in ${city} typically feature ${p.propertyMix}. Lock replacement needs vary significantly across these property types, from BS3621 mortice locks for period timber doors to TS007 anti-snap cylinders for modern UPVC installations.`,
        `Common lock replacement triggers in ${city} include ${p.commonIssues}. ${p.localContext}. A locksmith experienced with ${city} properties will know which lock types and brands are most appropriate for the local housing stock.`,
      ],
    }),
    'lock-repair': (city, p) => ({
      heading: `Lock Repair Patterns in ${city}`,
      paragraphs: [
        `The housing stock in ${city} consists of ${p.propertyMix}. Lock repair requirements follow predictable patterns based on property age and type, with ${p.commonIssues}.`,
        `${p.localContext}. Understanding these local patterns allows locksmiths to carry appropriate parts and tools when attending ${city} appointments, increasing the likelihood of same-visit resolution.`,
      ],
    }),
    'security-upgrades': (city, p) => ({
      heading: `Security Upgrade Recommendations for ${city}`,
      paragraphs: [
        `${city} properties range from ${p.propertyMix}. Security upgrade recommendations depend on property type, local risk profile, and insurance requirements specific to the ${city} area.`,
        `${p.localContext}. Key security considerations for ${city} homeowners include ${p.commonIssues}. A comprehensive security assessment takes these local factors into account when recommending upgrades.`,
      ],
    }),
    'upvc-door-repair': (city, p) => ({
      heading: `UPVC Door Issues Common in ${city}`,
      paragraphs: [
        `${city} has a significant number of properties with UPVC doors, particularly across ${p.propertyMix.includes('1990s') || p.propertyMix.includes('2000s') ? 'the 1990s and 2000s housing developments' : 'properties where original timber doors have been replaced'}. Common UPVC door problems in ${city} include ${p.commonIssues}.`,
        `${p.localContext}. UPVC door repairs in ${city} often involve multipoint mechanism adjustment, euro cylinder replacement, or hinge realignment. A locksmith carrying common gearbox components can often resolve issues in a single visit.`,
      ],
    }),
    'safe-opening': (city, p) => ({
      heading: `Safe Opening Services in ${city}`,
      paragraphs: [
        `${city} properties include ${p.propertyMix}. Safe opening requests in the area range from accessing inherited vintage safes in period properties to resolving digital safe lockouts in modern homes and businesses.`,
        `${p.localContext}. Safe opening in ${city} requires specialist skills that not all general locksmiths possess. Confirming safe opening experience before booking ensures the technician arrives with appropriate tools and techniques for your specific safe type.`,
      ],
    }),
  };

  const generator = serviceContextMap[serviceId];
  if (generator) return generator(cityName, profile);
  return getGenericMicro(serviceId, cityName);
}
