// data/guides.ts - Query network pages for topical authority
export interface Guide {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  relatedServices: string[]; // service IDs
  content: {
    intro: string[];
    sections: { heading: string; paragraphs: string[] }[];
    faqs: { question: string; answer: string }[];
  };
}

export const guides: Guide[] = [
  {
    slug: 'bs3621-locks-explained',
    title: 'BS3621 Locks Explained: The British Standard for Door Locks',
    excerpt: 'What BS3621 means for your home insurance and security, and how to check if your locks meet the standard.',
    metaDescription: 'BS3621 is the British Standard for thief-resistant locks. Learn what it means, why insurers require it, and how Birmingham locksmiths can upgrade your locks to meet the standard.',
    relatedServices: ['lock-replacement', 'security-upgrades'],
    content: {
      intro: [
        'BS3621 is the British Standard for thief-resistant locks, and it is the benchmark that most UK home insurance policies reference when specifying minimum lock requirements. If your locks do not carry this certification, your insurer may reduce or refuse a claim after a break-in.',
        'For Birmingham homeowners, understanding BS3621 matters because the city has a wide mix of property ages and door types. Victorian terraces in Moseley may still have original locks that predate the standard entirely, while newer builds in areas like Perry Barr typically come fitted with compliant hardware from the developer.',
      ],
      sections: [
        {
          heading: 'What Does BS3621 Actually Test?',
          paragraphs: [
            'The standard tests locks against picking, drilling, cutting, and forced entry. A lock must resist attack for a minimum duration using standardised tools before it earns the kitemark. The test also checks that the key cannot be copied without specialist equipment, which is why BS3621 keys have a distinctive profile.',
            'Mortice deadlocks and sashlocks are the most common lock types that carry BS3621 certification. Cylinder locks (the type found in UPVC and composite doors) follow a different standard called TS007, often combined with SS312 diamond certification for anti-snap protection.',
          ],
        },
        {
          heading: 'Why Insurers Require BS3621 in Birmingham',
          paragraphs: [
            'Insurance companies use BS3621 as a shorthand for adequate security. Most standard home insurance policies include a clause requiring BS3621-compliant locks on all external timber doors. Some policies extend this requirement to French doors, patio doors, and any door accessible from a shared area.',
            'In Birmingham, properties in higher-risk postcodes may face stricter requirements. Areas that have experienced clusters of burglaries may trigger insurers to request evidence of BS3621 compliance during renewal or after a claim. A qualified locksmith can provide a certificate confirming your locks meet the standard.',
          ],
        },
        {
          heading: 'How to Check If Your Locks Are BS3621 Compliant',
          paragraphs: [
            'Look for the BSI Kitemark stamped on the lock faceplate (the metal strip visible on the door edge when open). The number BS3621 should be visible alongside the kitemark. If your locks are old or the markings have worn away, a locksmith can identify the make and model to confirm compliance.',
            'If your Birmingham property has original Victorian or Edwardian locks, these almost certainly do not meet BS3621. They may be beautiful pieces of hardware, but they lack the anti-drill and anti-pick features the standard demands. A locksmith experienced with period properties can often fit a compliant lock alongside the original to maintain aesthetics while meeting insurance requirements.',
          ],
        },
        {
          heading: 'Upgrading to BS3621 Locks in Birmingham',
          paragraphs: [
            'A straightforward BS3621 lock upgrade on a standard timber door typically takes under an hour and costs between 80 and 150 pounds including the lock and fitting. For properties in conservation areas like the Jewellery Quarter, you may need period-appropriate hardware that carries the certification, which a specialist locksmith can source.',
            'If you have UPVC or composite doors, BS3621 does not directly apply. Instead, look for PAS 24 door sets or TS007 3-star cylinder locks with anti-snap, anti-bump, and anti-pick features. Many Birmingham locksmiths carry these in stock for same-day fitting.',
          ],
        },
      ],
      faqs: [
        { question: 'Is BS3621 a legal requirement in the UK?', answer: 'No, BS3621 is not a legal requirement. However, most home insurance policies require BS3621-compliant locks on external doors as a condition of cover. Failing to meet this requirement could invalidate your policy in the event of a break-in claim.' },
        { question: 'Do UPVC doors need BS3621 locks?', answer: 'UPVC doors use multipoint locking systems rather than traditional mortice locks, so BS3621 does not directly apply. Instead, look for PAS 24 certification on the door set or TS007 3-star rated cylinders for equivalent security levels.' },
        { question: 'How much does a BS3621 lock upgrade cost in Birmingham?', answer: 'A standard BS3621 mortice deadlock upgrade in Birmingham typically costs between 80 and 150 pounds including supply and fitting. Heritage properties or non-standard doors may cost more due to specialist hardware requirements.' },
      ],
    },
  },
  {
    slug: 'anti-snap-cylinder-locks',
    title: 'Anti-Snap Cylinder Locks: Protecting Your Birmingham Home from Lock Snapping',
    excerpt: 'Lock snapping is the most common break-in method for UPVC and composite doors. Here is how anti-snap cylinders prevent it.',
    metaDescription: 'Lock snapping is the UK top burglary method for UPVC doors. Learn how anti-snap cylinder locks work and why Birmingham homeowners should upgrade.',
    relatedServices: ['lock-replacement', 'security-upgrades', 'upvc-door-repair'],
    content: {
      intro: [
        'Lock snapping is the single most common method used by burglars to defeat euro cylinder locks on UPVC and composite doors across the UK. The technique exploits a design weakness in standard cylinders, allowing them to be broken in half with minimal force and no specialist tools.',
        'Birmingham has seen consistent reports of lock snapping burglaries, particularly in suburban areas with large numbers of 1990s and 2000s housing developments. Properties in areas like Kings Heath, Northfield, and Erdington with original euro cylinders are especially vulnerable if the locks have never been upgraded.',
      ],
      sections: [
        {
          heading: 'How Lock Snapping Works',
          paragraphs: [
            'A standard euro cylinder protrudes slightly beyond the door furniture (the handle and escutcheon plate). A burglar grips this exposed section with pliers or a wrench and applies force to snap the cylinder at its weakest point, which is a moulded line in the centre of the barrel. Once snapped, the remaining half can be pulled out or pushed through, giving direct access to the multipoint locking mechanism.',
            'The entire process takes under 30 seconds on an unprotected cylinder and makes very little noise, which is why it has become the preferred entry method over more destructive techniques.',
          ],
        },
        {
          heading: 'What Makes a Cylinder Anti-Snap',
          paragraphs: [
            'Anti-snap cylinders are engineered with a sacrificial section that breaks away under attack, but leaves the main locking mechanism intact and engaged. The door remains locked even after the exposed section has been snapped off. Higher-rated cylinders also include anti-drill pins, anti-bump chambers, and anti-pick features.',
            'Look for cylinders rated to TS007 3-star or those carrying the Sold Secure Diamond standard. The SS312 certification specifically tests against snapping attacks. Brands commonly available through Birmingham locksmiths include Ultion, ABS, Avocet ATC, and Brisant Secure.',
          ],
        },
        {
          heading: 'Choosing the Right Cylinder for Your Birmingham Property',
          paragraphs: [
            'The correct cylinder size depends on your door thickness and the position of the lock within the door. A locksmith will measure the existing cylinder (or the door profile if starting fresh) to determine the correct length. An incorrectly sized cylinder can actually increase vulnerability by protruding too far beyond the door furniture.',
            'For Birmingham properties with multipoint UPVC door locks, the cylinder must be compatible with the specific gearbox mechanism. Not all cylinders fit all gearboxes, which is one reason professional fitting is recommended over DIY replacement.',
          ],
        },
      ],
      faqs: [
        { question: 'How do I know if my locks are vulnerable to snapping?', answer: 'If you have a UPVC or composite door with a euro cylinder lock (the type you insert a key into from outside), and the cylinder protrudes even slightly beyond the handle or escutcheon, it is likely vulnerable. A locksmith can assess this in minutes.' },
        { question: 'How much do anti-snap locks cost to fit in Birmingham?', answer: 'A quality anti-snap cylinder with professional fitting in Birmingham typically costs between 80 and 150 pounds per door. Premium brands like Ultion may cost slightly more but offer additional features including a break-in guarantee.' },
        { question: 'Can I fit anti-snap locks myself?', answer: 'While it is physically possible to replace a euro cylinder yourself, incorrect sizing is the most common DIY mistake and can leave the door more vulnerable than before. Professional fitting ensures the correct measurements and compatibility with your specific door mechanism.' },
      ],
    },
  },
  {
    slug: 'multipoint-locking-systems',
    title: 'Multipoint Locking Systems: How Your UPVC Door Lock Actually Works',
    excerpt: 'Understanding the gearbox, hooks, rollers, and deadbolts inside your UPVC door locking mechanism.',
    metaDescription: 'A complete guide to multipoint locking systems in UPVC doors. Learn how they work, common failure points, and when Birmingham homeowners should repair or replace.',
    relatedServices: ['upvc-door-repair', 'lock-repair', 'lock-replacement'],
    content: {
      intro: [
        'A multipoint locking system is the mechanism inside your UPVC or composite door that engages multiple locking points when you lift the handle and turn the key. Unlike a traditional single-point lock, a multipoint system secures the door at three or more positions along its height, making it significantly harder to force open.',
        'Most Birmingham homes built or renovated from the 1990s onwards have UPVC doors with multipoint locks. Understanding how these systems work helps you recognise early signs of failure and communicate effectively with a locksmith when something goes wrong.',
      ],
      sections: [
        {
          heading: 'Components of a Multipoint Lock',
          paragraphs: [
            'The central component is the gearbox (also called the lock case), which sits in the middle of the door at handle height. When you lift the handle, the gearbox drives connecting rods up and down the door, engaging hooks, rollers, or deadbolts at the top and bottom. Turning the key then locks the deadbolt in the gearbox itself.',
            'The euro cylinder (the part you put the key into) sits within the gearbox and operates the deadbolt mechanism. The handle operates the latch and drives the connecting rods. All these components must work in precise alignment for the system to function smoothly.',
          ],
        },
        {
          heading: 'Common Multipoint Lock Failures in Birmingham Properties',
          paragraphs: [
            'The most frequent issue Birmingham locksmiths encounter is a failed gearbox. This typically presents as the handle lifting but the door not locking, or the key turning without engaging the deadbolt. Gearbox failure is often caused by wear, forced operation on a misaligned door, or corrosion from moisture ingress.',
            'Door drop is another extremely common problem, particularly in Birmingham properties built on clay soil where gradual subsidence can shift door frames. When the door drops, the locking points no longer align with their keeps (the receiving plates in the frame), putting strain on the gearbox and accelerating wear.',
          ],
        },
        {
          heading: 'Repair vs Replacement: What a Locksmith Will Assess',
          paragraphs: [
            'A competent locksmith will check four things: gearbox condition, cylinder condition, door alignment, and the state of the hooks and rollers. If the gearbox has failed, it needs replacing. If the door has dropped, realignment may be all that is needed. Sometimes a combination of adjustments and part replacements resolves the issue without a full lock change.',
            'Full multipoint lock replacement involves removing the connecting rods and all locking points as a single cassette, then fitting the new system. This is more involved than a simple cylinder change and typically takes one to two hours. Your locksmith should confirm the replacement is compatible with your specific door profile before ordering parts.',
          ],
        },
      ],
      faqs: [
        { question: 'Why does my UPVC door lock stick in cold weather?', answer: 'Temperature changes cause UPVC to expand and contract. In cold weather, the door may shrink slightly, changing the alignment of the locking points with their keeps. Lubricating the mechanism with a PTFE-based spray and adjusting the hinges to improve alignment usually resolves seasonal sticking.' },
        { question: 'How long do multipoint locks last?', answer: 'A quality multipoint lock should last 10 to 15 years with normal use. However, doors that are slammed, forced when misaligned, or exposed to moisture ingress may fail sooner. Regular lubrication and prompt attention to alignment issues can extend the lifespan significantly.' },
        { question: 'Can any locksmith fix a multipoint lock?', answer: 'Multipoint lock repair requires specific knowledge of door mechanisms and access to compatible parts. Not all general locksmiths carry multipoint gearboxes in stock. It is worth confirming that your locksmith has UPVC door experience before booking.' },
      ],
    },
  },
  {
    slug: 'smart-locks-guide',
    title: 'Smart Locks for Birmingham Homes: What Works, What Does Not',
    excerpt: 'A practical guide to smart lock options for UK properties, covering compatibility, insurance implications, and installation considerations.',
    metaDescription: 'Considering a smart lock for your Birmingham home? Learn which smart locks work with UK doors, insurance requirements, and professional installation advice.',
    relatedServices: ['security-upgrades', 'lock-replacement'],
    content: {
      intro: [
        'Smart locks offer keyless convenience and remote access control, but choosing the right one for a Birmingham property requires careful consideration of door type, insurance requirements, and practical reliability. Not every smart lock on the market is suitable for UK door configurations.',
        'The most important factor is whether the smart lock meets your insurance policy requirements. Many smart locks do not carry BS3621 or equivalent certification, which could leave you uninsured. A locksmith experienced with smart lock installations can advise which products maintain your cover.',
      ],
      sections: [
        {
          heading: 'Smart Lock Types That Work with UK Doors',
          paragraphs: [
            'For timber doors with mortice locks, smart lock options are limited compared to the US market where tubular latches are standard. The Yale Conexis L2 and Nuki Smart Lock are among the few that work with UK multipoint and mortice configurations. Both offer Bluetooth and optional Wi-Fi connectivity.',
            'For UPVC and composite doors, smart cylinders that replace the existing euro cylinder are the most practical option. These maintain the existing multipoint mechanism while adding smart features to the cylinder. The Ultion Nuki and Yale Linus are popular choices available through Birmingham locksmiths.',
          ],
        },
        {
          heading: 'Insurance and Security Considerations',
          paragraphs: [
            'Check your insurance policy wording before purchasing a smart lock. Some policies specifically require a physical key override, which rules out purely keypad or phone-operated locks. Others require specific security certifications. A locksmith can cross-reference your policy requirements with available products.',
            'Battery failure is a genuine concern. Most smart locks use standard batteries lasting six to twelve months, but a dead battery can lock you out of your own home. Always choose a model with a physical key backup or external emergency power option.',
          ],
        },
      ],
      faqs: [
        { question: 'Will a smart lock void my home insurance?', answer: 'It depends on the specific lock and your policy wording. Smart locks that carry Sold Secure or equivalent certification and include a physical key override are generally accepted. Always check with your insurer before installation.' },
        { question: 'Can smart locks be hacked?', answer: 'While theoretical vulnerabilities exist, reputable smart locks use encrypted communication (AES-256) that is extremely difficult to compromise in practice. Physical attack remains a far greater risk than digital exploitation for residential properties.' },
      ],
    },
  },
  {
    slug: 'insurance-approved-locks',
    title: 'Insurance-Approved Locks: What Your Birmingham Home Policy Actually Requires',
    excerpt: 'Decoding insurance lock requirements so you know exactly what standard your doors need to meet.',
    metaDescription: 'Most Birmingham home insurance policies require specific lock standards. Learn what BS3621, TS007, and PAS 24 mean and how to check your locks comply.',
    relatedServices: ['lock-replacement', 'security-upgrades'],
    content: {
      intro: [
        'Home insurance policies routinely include clauses about minimum lock standards, but the language is often vague or references technical standards without explanation. For Birmingham homeowners, understanding these requirements is essential because non-compliance can result in a claim being rejected, even if the lock type had nothing to do with the break-in.',
        'The three standards most commonly referenced in UK insurance policies are BS3621 for mortice locks on timber doors, TS007 for euro cylinders on UPVC and composite doors, and PAS 24 for complete door sets. Each addresses a different type of door and locking mechanism.',
      ],
      sections: [
        {
          heading: 'What Your Policy Probably Says',
          paragraphs: [
            'Most standard policies require BS3621 locks on all external timber doors and "suitable security" on UPVC doors. Some policies are more specific, requiring TS007 3-star cylinders or PAS 24 certified door sets. The exact wording varies between insurers, so checking your policy document or calling your provider is the only way to know for certain.',
            'Some policies also specify requirements for windows, French doors, and patio doors. Sliding patio doors typically need multi-point locks with anti-lift features. French doors need shoot bolts at top and bottom in addition to the main locking mechanism.',
          ],
        },
        {
          heading: 'Getting a Lock Compliance Certificate',
          paragraphs: [
            'A qualified locksmith can issue a certificate confirming that your locks meet the required standards. This document is valuable evidence if you ever need to make a claim. Some insurers specifically request this certificate during the application or renewal process.',
            'In Birmingham, locksmiths familiar with insurance requirements can assess your entire property and provide a single report covering all entry points. This typically costs less than having individual locks assessed separately and gives you a complete picture of your security compliance.',
          ],
        },
      ],
      faqs: [
        { question: 'What happens if my locks do not meet insurance standards?', answer: 'If your locks do not meet the standards specified in your policy, your insurer may reduce the payout on a claim or reject it entirely. This applies even if the burglar did not enter through the non-compliant door. Upgrading locks is almost always cheaper than the potential claim reduction.' },
        { question: 'Do I need to inform my insurer after upgrading locks?', answer: 'While not always required, informing your insurer of security upgrades can sometimes reduce your premium. Keep the locksmith receipt and any compliance certificates as evidence of the upgrade.' },
      ],
    },
  },
  {
    slug: 'euro-cylinder-lock-guide',
    title: 'Euro Cylinder Locks: Types, Ratings, and Replacement Guide',
    excerpt: 'Everything Birmingham homeowners need to know about the euro cylinder locks in UPVC and composite doors.',
    metaDescription: 'A complete guide to euro cylinder locks for Birmingham homeowners. Learn about types, security ratings, sizing, and when to replace your cylinders.',
    relatedServices: ['lock-replacement', 'upvc-door-repair', 'security-upgrades'],
    content: {
      intro: [
        'Euro cylinders are the most common lock type in UK homes, found in virtually every UPVC and composite door installed since the 1990s. They are the oval-shaped lock barrel that accepts the key and operates the deadbolt mechanism within the multipoint locking system.',
        'Despite their prevalence, many Birmingham homeowners do not realise that euro cylinders vary enormously in quality and security rating. A basic unrated cylinder offers minimal resistance to attack, while a high-security rated cylinder can withstand sustained attempts at snapping, drilling, picking, and bumping.',
      ],
      sections: [
        {
          heading: 'Euro Cylinder Types',
          paragraphs: [
            'Single cylinders have a key operation on one side and a thumb turn on the other. Double cylinders require a key on both sides. Thumb turn models are more common in residential settings because they allow quick exit without a key, which is important for fire safety.',
            'Half cylinders (also called single-sided cylinders) only extend to one side of the door and are used where key access is only needed from the outside, such as some garage doors or where the inside is not accessible.',
          ],
        },
        {
          heading: 'Security Ratings Explained',
          paragraphs: [
            'The TS007 standard rates cylinders from 1 to 3 stars based on resistance to attack. A 3-star cylinder alone, or a 1-star cylinder combined with a 2-star door handle set, achieves the highest TS007 rating. The Sold Secure Diamond standard (SS312) specifically tests against lock snapping and is the certification to look for if snapping resistance is your priority.',
            'For Birmingham properties, a minimum of TS007 3-star or SS312 certification is recommended. Brands meeting these standards and commonly stocked by Birmingham locksmiths include Ultion, ABS, Avocet ATC, and Brisant Secure.',
          ],
        },
        {
          heading: 'Sizing a Replacement Euro Cylinder',
          paragraphs: [
            'Euro cylinders are measured from the centre of the screw hole to each end. The measurement on each side must match your door profile. An external measurement that is too long creates a protruding section vulnerable to snapping. An internal measurement that is too short prevents proper thumb turn or key operation.',
            'To measure your existing cylinder, remove it from the door by unscrewing the fixing bolt on the door edge, then measure each side from the centre screw hole. If you do not want to remove the lock, a locksmith can measure through the door furniture.',
          ],
        },
      ],
      faqs: [
        { question: 'How often should euro cylinders be replaced?', answer: 'Replace immediately if your cylinder lacks anti-snap certification, shows signs of wear, or if you have moved into a new property and do not know who has keys. Otherwise, a quality cylinder should last 10 years or more with occasional lubrication.' },
        { question: 'Are all euro cylinders the same size?', answer: 'No. Euro cylinders come in many sizes to suit different door thicknesses and lock positions. The wrong size can compromise security or prevent proper operation. Always measure before ordering, or have a locksmith measure for you.' },
      ],
    },
  },
  {
    slug: 'birmingham-conservation-area-locks',
    title: 'Lock Requirements for Birmingham Conservation Areas',
    excerpt: 'Balancing heritage requirements with modern security in the Jewellery Quarter, Edgbaston, and other Birmingham conservation zones.',
    metaDescription: 'Birmingham conservation areas have specific requirements for door hardware. Learn how to meet security standards while respecting heritage restrictions in the Jewellery Quarter and Edgbaston.',
    relatedServices: ['lock-replacement', 'lock-repair', 'security-upgrades'],
    content: {
      intro: [
        'Birmingham has over 30 conservation areas where property modifications, including changes to external door hardware, may require planning consideration. The Jewellery Quarter, Edgbaston, and Bournville are among the most well-known, but smaller conservation zones exist across the city from Moseley to Sutton Coldfield.',
        'For homeowners in these areas, upgrading locks is not simply a matter of fitting the most secure product available. The replacement hardware must respect the architectural character of the property and, in some cases, match the original style and materials.',
      ],
      sections: [
        {
          heading: 'What Conservation Status Means for Your Door Locks',
          paragraphs: [
            'Conservation area status does not automatically prevent you from changing locks. However, if the change alters the external appearance of a listed or locally listed building, you may need planning permission or listed building consent. Replacing a Victorian rim lock with a modern cylinder lock on a listed front door, for example, would likely require consent.',
            'For most properties that are within a conservation area but not individually listed, changing the lock mechanism itself is generally permitted provided the external appearance of the door is not materially altered. This means fitting a modern mortice lock behind an existing keyhole escutcheon, or replacing a euro cylinder in an existing UPVC door, is usually fine.',
          ],
        },
        {
          heading: 'Period-Appropriate Hardware That Meets Modern Standards',
          paragraphs: [
            'Several manufacturers produce mortice locks with traditional aesthetics that carry BS3621 certification. Brands like ERA, Union, and Chubb offer period-style options. A locksmith experienced with heritage properties can source hardware that looks appropriate to the building age while providing modern security.',
            'For the Jewellery Quarter specifically, where many properties are converted workshops and warehouses, the industrial aesthetic actually pairs well with some modern high-security hardware. The key is choosing products that complement rather than clash with the building character.',
          ],
        },
      ],
      faqs: [
        { question: 'Do I need planning permission to change locks in a conservation area?', answer: 'For most properties in a conservation area that are not individually listed, changing the internal lock mechanism does not require planning permission. If the external appearance of the door hardware changes on a listed building, you may need listed building consent. Check with Birmingham City Council planning department if unsure.' },
        { question: 'Can I get insurance-approved locks that look period-appropriate?', answer: 'Yes. Several manufacturers produce BS3621-certified mortice locks with traditional styling. A locksmith familiar with heritage properties can source options that meet insurance requirements while respecting the architectural character of your Birmingham conservation area property.' },
      ],
    },
  },
  {
    slug: 'landlord-lock-requirements',
    title: 'Landlord Lock Requirements in Birmingham: Legal Obligations and Best Practice',
    excerpt: 'What Birmingham landlords must provide in terms of door locks, key management, and tenant security.',
    metaDescription: 'Birmingham landlords have legal and practical obligations regarding property locks. Learn about requirements, best practice, and how to manage lock changes between tenancies.',
    relatedServices: ['lock-replacement', 'security-upgrades'],
    content: {
      intro: [
        'Birmingham landlords have both legal obligations and practical responsibilities when it comes to the locks on their rental properties. Getting this wrong can result in insurance claim rejections, tenant disputes, and potential enforcement action.',
        'The rental market in Birmingham is substantial, with areas like Selly Oak (student lets), the city centre (young professionals), and Erdington (family homes) each presenting different lock management challenges. Understanding the requirements across property types helps landlords protect both their tenants and their investment.',
      ],
      sections: [
        {
          heading: 'Legal Requirements for Rental Property Locks',
          paragraphs: [
            'Under the Homes (Fitness for Human Habitation) Act 2018, rental properties must have adequate means of securing the property. This includes functioning locks on all external doors and accessible windows. Failure to maintain locks in working order can result in a tenant claiming the property is unfit for habitation.',
            'While there is no specific law mandating a particular lock standard, insurance policies on rental properties typically require BS3621 locks on timber doors and TS007-rated cylinders on UPVC doors. If your insurance requires it, failing to provide it could void your landlord insurance.',
          ],
        },
        {
          heading: 'Changing Locks Between Tenancies',
          paragraphs: [
            'Best practice is to change or re-key locks between every tenancy. You have no guarantee that outgoing tenants have returned all copies of their keys, and the cost of a lock change is minimal compared to the liability of a break-in using a retained key.',
            'For Birmingham landlords with multiple properties, establishing a relationship with a local locksmith for scheduled lock changes between tenancies is the most cost-effective approach. Many Birmingham locksmiths offer landlord rates for regular work.',
          ],
        },
      ],
      faqs: [
        { question: 'Can a tenant change the locks without permission?', answer: 'Tenants can change locks, but they should inform the landlord and provide a key. The tenancy agreement may specify requirements. At the end of the tenancy, original locks should be reinstated or keys for new locks provided. Open communication prevents disputes.' },
        { question: 'Do I need to change locks when I buy a rental property?', answer: 'It is strongly recommended. You do not know how many keys the previous owner distributed. Changing locks when acquiring a property is a standard security measure that also demonstrates due diligence to insurers.' },
      ],
    },
  },
  {
    slug: 'night-latch-vs-deadlock',
    title: 'Night Latch vs Deadlock: Which Lock Does Your Birmingham Door Need?',
    excerpt: 'Understanding the difference between night latches and deadlocks and why most Birmingham front doors need both.',
    metaDescription: 'Night latches and deadlocks serve different security purposes. Learn which lock types your Birmingham property needs and why most front doors require both.',
    relatedServices: ['lock-replacement', 'lock-repair', 'security-upgrades'],
    content: {
      intro: [
        'Most Birmingham front doors on Victorian, Edwardian, and mid-century properties have two locks: a night latch (the Yale-type lock with a snib) and a mortice deadlock. Each serves a distinct purpose, and understanding the difference helps you make informed decisions about your home security.',
        'A common mistake is relying solely on the night latch. While convenient for everyday use, a night latch alone does not provide adequate security and will not meet most insurance policy requirements. The deadlock is the lock that provides genuine resistance to forced entry.',
      ],
      sections: [
        {
          heading: 'How Night Latches Work',
          paragraphs: [
            'A night latch (commonly called a Yale lock regardless of brand) uses a spring-loaded latch bolt that retracts when you turn the handle from inside or use a key from outside. The latch automatically engages when the door closes, providing convenience but limited security.',
            'The main weakness of a night latch is that the latch bolt can be pushed back with a credit card or similar flexible tool inserted between the door and frame (known as loiding). While anti-loid features exist on some models, the fundamental design prioritises convenience over resistance to attack.',
          ],
        },
        {
          heading: 'How Deadlocks Work',
          paragraphs: [
            'A mortice deadlock throws a solid bolt into the door frame when turned with a key. Unlike a night latch, the bolt cannot be retracted without the key, and it cannot be pushed or slid back by external tools. The bolt sits within a mortice (a rectangular pocket cut into the door), making it very difficult to attack from outside.',
            'BS3621-certified deadlocks include anti-pick, anti-drill, and anti-saw features. The key has a complex profile that cannot be easily duplicated, and the mechanism resists manipulation techniques used by burglars.',
          ],
        },
        {
          heading: 'Why Most Birmingham Doors Need Both',
          paragraphs: [
            'The night latch provides everyday convenience. You can leave and the door locks behind you. The deadlock provides the serious security and insurance compliance. Together they cover both convenience and protection.',
            'Insurance policies typically require the deadlock to be engaged when the property is unoccupied. Simply pulling the door closed on the night latch is not sufficient. Many Birmingham locksmiths recommend making deadlock engagement a habit every time you leave, even for short trips.',
          ],
        },
      ],
      faqs: [
        { question: 'Can I replace my night latch with a deadlock?', answer: 'You can, but most locksmiths recommend having both. A deadlock alone means you always need a key to leave the house, which is a fire safety concern. Having both a night latch for convenience and a deadlock for security is the standard approach for UK front doors.' },
        { question: 'Is my night latch BS3621 certified?', answer: 'Most standard night latches are not BS3621 certified because the spring latch mechanism does not meet the security requirements of the standard. Some high-security night latches exist (like the BS3621 rated ERA Nightlatch) but these are less common. Your deadlock is the lock that should carry BS3621 certification.' },
      ],
    },
  },
  {
    slug: 'lock-snapping-prevention',
    title: 'Lock Snapping Prevention: Securing Birmingham Homes Against the UK Top Burglary Method',
    excerpt: 'Practical steps to protect your doors from lock snapping, the technique responsible for most UPVC door break-ins in the UK.',
    metaDescription: 'Lock snapping is the most common burglary technique for UPVC doors in Birmingham. Learn how to check vulnerability, choose replacements, and secure your property.',
    relatedServices: ['lock-replacement', 'security-upgrades', 'upvc-door-repair'],
    content: {
      intro: [
        'West Midlands Police have consistently identified lock snapping as a primary method of entry in residential burglaries involving UPVC and composite doors. The technique is so quick and quiet that it often occurs in broad daylight with neighbours unaware.',
        'For Birmingham homeowners, the good news is that lock snapping is entirely preventable with the right hardware. Replacing a vulnerable euro cylinder with an anti-snap rated alternative is one of the most cost-effective security upgrades available, typically costing less than 150 pounds installed.',
      ],
      sections: [
        {
          heading: 'Is Your Birmingham Home Vulnerable?',
          paragraphs: [
            'If your home has UPVC or composite doors with euro cylinder locks (the standard key-operated locks in these doors), and the cylinders have never been upgraded, they are almost certainly vulnerable to snapping. This applies to the vast majority of Birmingham properties built or renovated from the mid-1990s onwards.',
            'Visual check: look at the lock from outside your front door. If the cylinder barrel is visible and protrudes even slightly beyond the door handle or escutcheon plate, it can be gripped and snapped. Even recessed cylinders without anti-snap internals can be attacked with slightly more effort.',
          ],
        },
        {
          heading: 'The Three Lines of Defence',
          paragraphs: [
            'First, fit anti-snap cylinders rated to TS007 3-star or SS312 Diamond standard. These are designed with sacrificial break points that protect the main locking mechanism. Second, ensure the cylinder is the correct length so it sits flush with or slightly recessed behind the door furniture. Third, fit anti-snap escutcheon plates that prevent tools from gripping the cylinder.',
            'A locksmith can implement all three measures in under an hour per door. For properties with multiple external doors (common in Birmingham terraces with front and back doors plus a side return), ask for a multi-door quote as most locksmiths will offer a reduced rate.',
          ],
        },
      ],
      faqs: [
        { question: 'How quickly can lock snapping be done?', answer: 'On an unprotected standard euro cylinder, lock snapping can be completed in under 30 seconds using basic hand tools. The technique requires no specialist knowledge or equipment, which is why it has become the most common burglary method for UPVC doors.' },
        { question: 'Does home insurance cover lock snapping break-ins?', answer: 'Most policies cover break-ins regardless of method, but if your policy requires specific lock standards (such as TS007 3-star cylinders) and your locks did not meet that standard, the insurer could reduce or refuse the claim. Upgrading to compliant locks removes this risk.' },
      ],
    },
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find(g => g.slug === slug);
}

export function getRelatedGuides(serviceId: string): Guide[] {
  return guides.filter(g => g.relatedServices.includes(serviceId)).slice(0, 4);
}

export function getAllGuideSlugs(): string[] {
  return guides.map(g => g.slug);
}
