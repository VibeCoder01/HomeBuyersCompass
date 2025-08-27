import { Compass, FileText, Landmark, Scale, ShieldCheck, Users } from 'lucide-react';

export const timelineData = [
  {
    phase: 'Phase 0: Prepare',
    duration: '≈2–6+ weeks',
    description:
      'Lay the financial groundwork. Work out your budget, get a mortgage Decision in Principle (DIP), and instruct a conveyancer.',
    details: [
      'Work out budget (deposit, fees, searches, survey, removals, SDLT).',
      'Get a Decision/Affirmation in Principle (AIP/DIP) from a lender/broker.',
      'Pick and instruct your conveyancer early; complete ID/AML and source-of-funds checks.',
      'Line up a RICS surveyor and understand survey vs mortgage valuation.',
    ],
  },
  {
    phase: 'Phase 1: Offer',
    duration: 'days',
    description: 'Find a property and make an offer.',
    details: [
      'Make your offer via the estate agent, supply AIP and your solicitor’s details.',
      'Offers in England aren’t binding until exchange of contracts.',
      'If any gifted deposit is involved, your solicitor/lender will need a gift letter, donor ID and proof of funds.',
    ],
  },
  {
    phase: 'Phase 2: Offer Accepted to Exchange',
    duration: '≈6–12+ weeks',
    description:
      'The legal and financial processes get serious. Your solicitor performs searches and you finalize your mortgage.',
    details: [
      'Seller’s solicitor sends your solicitor a draft contract pack.',
      'Your solicitor orders searches and raises enquiries.',
      'You apply for the mortgage; lender arranges valuation.',
      'You instruct your RICS Level 2/3 survey.',
      'Agree on inclusions (TA10), set a completion date, and arrange buildings insurance.',
    ],
  },
  {
    phase: 'Phase 3: Exchange of Contracts',
    duration: '1 day',
    description: 'This is the point of no return! The deal becomes legally binding.',
    details: [
      'You sign the contract and mortgage deed.',
      'Send the exchange deposit (often 10%) to your solicitor.',
      'Solicitors exchange contracts.',
      'Your buildings insurance must be active from this point.',
    ],
  },
  {
    phase: 'Phase 4: Between Exchange & Completion',
    duration: 'typically 1–28 days',
    description: 'Final preparations for moving day.',
    details: [
      'Your solicitor runs final pre-completion searches (OS1, K16).',
      'Send the remaining funds to your solicitor.',
      'Book removals and set up utilities.',
    ],
  },
  {
    phase: 'Phase 5: Completion',
    duration: 'the keys day!',
    description: 'The property is officially yours. Time to move in!',
    details: [
      'Your solicitor sends funds to the seller’s solicitor.',
      'The estate agent releases the keys to you.',
      'Take meter readings and move in.',
    ],
  },
  {
    phase: 'Phase 6: Post-Completion',
    duration: 'months',
    description: 'The final admin tasks to register your ownership.',
    details: [
      'Your solicitor pays Stamp Duty Land Tax (SDLT) for you.',
      'They register you as the new owner with HM Land Registry.',
      'You receive the updated title documents.',
    ],
  },
];

export const checklistData = [
  {
    phase: 'Phase 0: Prepare',
    items: [
      'Work out your budget (deposit, fees, searches, survey, removals, Stamp Duty).',
      'Get a Decision/Affirmation in Principle (AIP/DIP) from a lender or mortgage broker.',
      'Choose and instruct a conveyancer/solicitor.',
      "Complete your solicitor's initial ID, anti-money laundering (AML), and source-of-funds checks.",
      'Research and shortlist RICS surveyors.',
    ],
  },
  {
    phase: 'Phase 1: Offer',
    items: [
      'Make your offer to the estate agent (subject to survey, finance, and searches).',
      'Provide your AIP/DIP to the estate agent to show you are a serious buyer.',
      'Provide your solicitor’s details to the estate agent.',
      'If using a gifted deposit, ensure the gift letter, donor ID, and proof of funds are ready.',
    ],
  },
  {
    phase: 'Phase 2: From Offer Accepted to Exchange',
    items: [
      'Formally apply for your mortgage.',
      'Book your chosen RICS Level 2 or Level 3 survey.',
      'Review the draft contract pack from the seller’s solicitor.',
      'Review all search results (Local Authority, Water, Environmental) with your solicitor.',
      "Review your solicitor's report on title and enquiries.",
      'Review your mortgage offer and its conditions.',
      'Review and agree on the TA10 (Fittings & Contents) form.',
      'Agree on a completion date with the seller through the solicitors.',
      'Arrange buildings insurance to start from the exchange date.',
    ],
  },
  {
    phase: 'Phase 3: Exchange',
    items: [
      'Sign the final contract.',
      'Sign the mortgage deed.',
      'Transfer your exchange deposit (typically 10%) to your solicitor’s account in cleared funds.',
      'Confirm with your solicitor that they have exchanged contracts.',
    ],
  },
  {
    phase: 'Phase 4: Between Exchange & Completion',
    items: [
      'Confirm your moving date and book removals.',
      'Arrange to transfer the final balance (plus fees and SDLT) to your solicitor.',
      'Set up mail redirection.',
      'Contact utility providers (gas, electricity, water, council tax, broadband) with your moving date.',
    ],
  },
  {
    phase: 'Phase 5: Completion',
    items: [
      'Wait for the call from your solicitor or estate agent confirming completion.',
      'Collect the keys from the estate agent.',
      'Take meter readings for all utilities as soon as you get in.',
      'Check that all fittings and contents agreed in the TA10 are present.',
      'Celebrate!',
    ],
  },
  {
    phase: 'Phase 6: Post-Completion',
    items: [
      'Wait for confirmation from your solicitor that Stamp Duty has been paid.',
      'Wait for a copy of the updated title information from HM Land Registry (can take months).',
      'Keep all your documents in a safe place.',
    ],
  },
];

export const documentsData = [
  {
    title: 'AIP/DIP (Decision/Agreement in Principle)',
    description: 'A statement from a lender saying they will likely lend you a certain amount, based on initial checks. Not a formal mortgage offer, but strengthens your position as a buyer.',
  },
  {
    title: 'TA6 - Property Information Form',
    description:
      'A detailed form completed by the seller, covering everything from boundaries and disputes to planning permissions and guarantees for work done.',
  },
  {
    title: 'TA10 - Fittings and Contents Form',
    description: 'A list completed by the seller, specifying what is included in the sale, from curtains and carpets to white goods and garden sheds. Check this carefully.',
  },
  {
    title: 'Draft Contract',
    description: 'The initial version of the legal agreement to buy the property. Your solicitor will review this and negotiate terms on your behalf.',
  },
  {
    title: 'Search Results (LLC1, CON29, CON29DW, etc.)',
    description:
      'Reports from local authorities and other providers about the property, revealing planning history, restrictions, and information on local roads, drainage, and environmental risks.',
  },
  {
    title: 'Mortgage Offer',
    description: 'The formal, legally-binding offer of a loan from your lender. It will detail the terms and any special conditions you must meet.',
  },
  {
    title: 'Mortgage Deed',
    description: "The legal document you sign to create the mortgage on the property. It is sent to the Land Registry to register the lender's interest.",
  },
  {
    title: 'TR1 - Transfer Deed',
    description: 'The document that legally transfers ownership of the property from the seller to you. The seller signs this before completion.',
  },
  {
    title: 'SDLT5 - Stamp Duty Land Tax Certificate',
    description: 'Proof from HMRC that the Stamp Duty on your purchase has been filed and paid. Your solicitor cannot register you as the owner without this.',
  },
  {
    title: 'Title Information Document',
    description: "The official proof of your ownership from HM Land Registry, received months after completion. It shows your name and the lender's mortgage charge.",
  },
  {
    title: 'EPC - Energy Performance Certificate',
    description: 'Rates the energy efficiency of the property and gives recommendations for improvement. Sellers must provide this.',
  },
];

export const contactsData = [
  {
    role: 'Estate Agent',
    icon: Users,
    responsibilities: [
      'The first point of contact for making an offer.',
      'Acts as an intermediary between you and the seller until solicitors are instructed.',
      'Provides the Memorandum of Sale to both parties\' solicitors.',
      'Holds the keys for release on completion day.',
    ],
  },
  {
    role: 'Lender / Mortgage Broker',
    icon: Landmark,
    responsibilities: [
      'Provides your Agreement in Principle (AIP/DIP).',
      'Processes your formal mortgage application.',
      'Arranges the mortgage valuation survey.',
      'Issues the formal mortgage offer.',
    ],
  },
  {
    role: 'Your Solicitor / Conveyancer',
    icon: Scale,
    responsibilities: [
      'Handles all legal aspects of the transfer of ownership.',
      'Conducts searches and raises enquiries with the seller\'s solicitor.',
      'Reviews all documents, including the contract and title deeds.',
      'Manages the exchange of contracts and transfer of funds.',
      'Files your Stamp Duty return and registers your ownership.',
    ],
  },
  {
    role: 'RICS Surveyor',
    icon: Compass,
    responsibilities: [
      "Conducts an independent, in-depth survey of the property's condition (Level 2 or 3).",
      "Provides a detailed report on any defects or issues, which is separate from the lender's valuation.",
      'You instruct them directly.',
    ],
  },
  {
    role: "Seller's Solicitor",
    icon: FileText,
    responsibilities: [
      'Acts for the seller.',
      'Prepares the draft contract pack.',
      'Responds to enquiries raised by your solicitor.',
      'Receives the completion funds on behalf of the seller.',
    ],
  },
  {
    role: 'Buildings Insurer',
    icon: ShieldCheck,
    responsibilities: [
      'Provides a policy to cover the property structure against damage (e.g., fire, flood).',
      'The policy must be in place from the moment of exchange of contracts, as the risk passes to you at that point.',
    ],
  },
];

export const glossaryData = [
    {
    term: 'Freehold',
    definition: `Full ownership of the property and the land it sits on, for an unlimited time. You are responsible for all maintenance. Most houses are freehold. Compare with Leasehold. The government's comprehensive <a href="https://www.gov.uk/government/publications/how-to-buy-a-home/how-to-buy" target="_blank" rel="noopener noreferrer">"How to buy a home" guide</a> is a great starting point.`,
  },
  {
    term: 'Leasehold',
    definition: `You own the property for a fixed period (the term of the lease) but not the land it's on. Common for flats. You'll have a landlord (the freeholder) and likely pay ground rent and service charges. GOTCHA: Check the lease length! Leases under 80 years can be hard to get a mortgage on and expensive to extend.`,
  },
  {
    term: 'Conveyancing',
    definition: `The essential legal work to transfer property ownership. A solicitor or licensed conveyancer does this. They handle contracts, searches, and the movement of money. MUST KNOW: Choose your conveyancer early to avoid delays. You must also provide proof of funds under anti-money-laundering (AML) rules. See the <a href="https://www.sra.org.uk/solicitors/resources/money-laundering/aml-questions-answers/" target="_blank" rel="noopener noreferrer">SRA's guidance</a> and the relevant <a href="https://www.legislation.gov.uk/uksi/2017/692/contents/made" target="_blank" rel="noopener noreferrer">legislation</a>.`,
  },
  {
    term: 'Decision in Principle (DIP/AIP)',
    definition: `A lender's estimate of what they might lend you, based on initial checks. Not a formal mortgage offer. MUST KNOW: Having one makes you a more attractive buyer as it shows you are serious and can likely secure the necessary funds. The <a href="https://www.fca.org.uk/consumers" target="_blank" rel="noopener noreferrer">Financial Conduct Authority (FCA)</a> provides consumer information on mortgages.`,
  },
  {
    term: 'Searches',
    definition: `Checks your solicitor makes with various authorities. They are crucial for uncovering hidden issues. They are split into mandatory and optional searches. Mandatory searches for a mortgage lender usually include: <ul><li class="my-2 ml-4"><strong>Local Authority Search (LLC1, CON29):</strong> Reveals planning permissions, building control history, nearby road schemes, and whether the property is in a conservation area. Some of this data is being centralised on the <a href="https://www.gov.uk/search-local-land-charges" target="_blank" rel="noopener noreferrer">HM Land Registry Local Land Charges service</a>.</li><li class="my-2 ml-4"><strong>Water and Drainage Search (CON29DW):</strong> Shows who owns the sewers and whether the property is connected to public systems. Your water company's responsibilities are outlined by <a href="https://www.ofwat.gov.uk/nonhouseholds/supply-and-standards/public-and-private-sewers/" target="_blank" rel="noopener noreferrer">Ofwat</a>.</li><li class="my-2 ml-4"><strong>Environmental Search:</strong> Checks for contaminated land, flood risk, and ground stability issues. You can do a basic check for flood risk yourself using the <a href="https://www.gov.uk/check-long-term-flood-risk" target="_blank" rel="noopener noreferrer">long-term flood risk checker</a>.</li></ul> Optional searches depend on location and property type: <ul><li class="my-2 ml-4"><strong>Chancel Repair Liability Search:</strong> Checks if you could be liable for church roof repairs. Now rare, but cheap to check.</li><li class="my-2 ml-4"><strong>Mining Search:</strong> Essential in former mining areas to check for subsidence risk. Your solicitor will use a provider like the <a href="https://www.gov.uk/check-if-property-is-affected-by-coal-mining" target="_blank" rel="noopener noreferrer">Coal Authority</a> for this.</li><li class="my-2 ml-4"><strong>Radon Gas Search:</strong> Radon is a radioactive gas that can be a health hazard in certain areas. Check the <a href="https://www.ukradon.org/information/ukmaps" target="_blank" rel="noopener noreferrer">UKHSA maps</a>.</li></ul>`,
  },
  {
    term: 'Enquiries',
    definition: `Specific questions your solicitor asks the seller's solicitor after reviewing the contract, TA6 form, and searches. This is where detail is crucial. Examples: "The boiler service history is missing, please provide it." or "Who is responsible for the boundary fence on the left?"`,
  },
  {
    term: 'Exchange of Contracts',
    definition: `The moment the deal becomes legally binding. Solicitors swap signed contracts based on the <a href="https://www.lawsociety.org.uk/topics/property/standard-conditions-of-sale" target="_blank" rel="noopener noreferrer">Law Society's Standard Conditions of Sale</a>, you pay a deposit (usually 10%), and the completion date is set. GOTCHA: If you pull out after exchange, you lose your deposit and can be sued for other costs. There is no going back!`,
  },
  {
    term: 'Completion',
    definition: `The day the money is transferred, ownership officially passes to you, and you get the keys! MUST KNOW: Completion can happen any time on the day. Don't expect keys at 9am sharp; it depends on the banks.`,
  },
  {
    term: 'Stamp Duty Land Tax (SDLT)',
    definition: `A government tax on property purchases. The amount depends on the price and whether you are a first-time buyer. Your solicitor handles the calculation and payment on your behalf post-completion. The definitive guide is on the <a href="https://www.gov.uk/stamp-duty-land-tax/residential-property-rates" target="_blank" rel="noopener noreferrer">GOV.UK website</a>, including details on <a href="https://www.gov.uk/government/publications/stamp-duty-land-tax-relief-for-first-time-buyers/stamp-duty-land-tax-relief-for-first-time-buyers" target="_blank" rel="noopener noreferrer">first-time buyer relief</a>.`,
  },
  {
    term: 'Mortgage Valuation vs. RICS Survey',
    definition: `These are different! The <strong>Mortgage Valuation</strong> is for the lender to confirm the property is worth what you're borrowing. It is brief and not for you. A <strong>RICS Survey (Level 2 or 3)</strong> is for YOU. You pay for it separately to get a detailed report on the property's condition. MUST KNOW: Never rely on the lender's valuation as a condition survey. Always get your own independent survey. The <a href="https://www.rics.org/consumer-guides/house-surveys-uk-the-costs-types-and-benefits-of-an-rics-home-survey" target="_blank" rel="noopener noreferrer">Royal Institution of Chartered Surveyors (RICS)</a> provides detailed guidance.`,
  },
  {
    term: 'Indemnity Insurance',
    definition: `An insurance policy to protect against a specific legal defect, e.g., lack of building regulations for an old extension. It protects the lender and you from financial loss if the issue causes problems later. GOTCHA: It's a sticking plaster, not a fix. The problem still exists. The seller often pays for this to push the sale through.`,
  },
  {
    term: 'Memorandum of Sale',
    definition: `A document from the estate agent confirming the agreed price and details of the buyer, seller, and their solicitors. It is not legally binding but gets the formal legal process started. If you have issues, you can complain via <a href="https://www.tpos.co.uk/" target="_blank" rel="noopener noreferrer">The Property Ombudsman</a> or the <a href="https://www.theprs.co.uk/" target="_blank" rel="noopener noreferrer">Property Redress Scheme</a>.`,
  },
  {
    term: 'Title Deeds',
    definition: `Legal documents proving ownership. Most are now digital, held by HM Land Registry. The "Title Information Document" and "Title Plan" are the modern equivalent, showing the owner and any mortgage charges.`,
  },
  // From documentsData
  {
    term: 'AIP/DIP (Decision/Agreement in Principle)',
    definition: 'A statement from a lender saying they will likely lend you a certain amount, based on initial checks. Not a formal mortgage offer, but strengthens your position as a buyer.',
  },
  {
    term: 'TA6 - Property Information Form',
    definition:
      'A detailed form completed by the seller, covering everything from boundaries and disputes to planning permissions and guarantees for work done.',
  },
  {
    term: 'TA10 - Fittings and Contents Form',
    definition: 'A list completed by the seller, specifying what is included in the sale, from curtains and carpets to white goods and garden sheds. Check this carefully.',
  },
  {
    term: 'Draft Contract',
    definition: 'The initial version of the legal agreement to buy the property. Your solicitor will review this and negotiate terms on your behalf.',
  },
  {
    term: 'Search Results (LLC1, CON29, CON29DW, etc.)',
    definition:
      'Reports from local authorities and other providers about the property, revealing planning history, restrictions, and information on local roads, drainage, and environmental risks.',
  },
  {
    term: 'Mortgage Offer',
    definition: 'The formal, legally-binding offer of a loan from your lender. It will detail the terms and any special conditions you must meet.',
  },
  {
    term: 'Mortgage Deed',
    definition: "The legal document you sign to create the mortgage on the property. It is sent to the Land Registry to register the lender's interest.",
  },
  {
    term: 'TR1 - Transfer Deed',
    definition: 'The document that legally transfers ownership of the property from the seller to you. The seller signs this before completion.',
  },
  {
    term: 'SDLT5 - Stamp Duty Land Tax Certificate',
    definition: 'Proof from HMRC that the Stamp Duty on your purchase has been filed and paid. Your solicitor cannot register you as the owner without this.',
  },
  {
    term: 'Title Information Document',
    definition: "The official proof of your ownership from HM Land Registry, received months after completion. It shows your name and the lender's mortgage charge.",
  },
  {
    term: 'EPC - Energy Performance Certificate',
    definition: 'Rates the energy efficiency of the property and gives recommendations for improvement. Sellers must provide this.',
  },
  // From contactsData
  {
    term: 'Estate Agent',
    definition: '<ul><li class="my-2 ml-4">The first point of contact for making an offer.</li><li class="my-2 ml-4">Acts as an intermediary between you and the seller until solicitors are instructed.</li><li class="my-2 ml-4">Provides the Memorandum of Sale to both parties\' solicitors.</li><li class="my-2 ml-4">Holds the keys for release on completion day.</li></ul>',
  },
  {
    term: 'Lender / Mortgage Broker',
    definition: '<ul><li class="my-2 ml-4">Provides your Agreement in Principle (AIP/DIP).</li><li class="my-2 ml-4">Processes your formal mortgage application.</li><li class="my-2 ml-4">Arranges the mortgage valuation survey.</li><li class="my-2 ml-4">Issues the formal mortgage offer.</li></ul>',
  },
  {
    term: 'Your Solicitor / Conveyancer',
    definition: '<ul><li class="my-2 ml-4">Handles all legal aspects of the transfer of ownership.</li><li class="my-2 ml-4">Conducts searches and raises enquiries with the seller\'s solicitor.</li><li class="my-2 ml-4">Reviews all documents, including the contract and title deeds.</li><li class="my-2 ml-4">Manages the exchange of contracts and transfer of funds.</li><li class="my-2 ml-4">Files your Stamp Duty return and registers your ownership.</li></ul>',
  },
  {
    term: 'RICS Surveyor',
    definition: "<ul><li class=\"my-2 ml-4\">Conducts an independent, in-depth survey of the property's condition (Level 2 or 3).</li><li class=\"my-2 ml-4\">Provides a detailed report on any defects or issues, which is separate from the lender's valuation.</li><li class=\"my-2 ml-4\">You instruct them directly.</li></ul>",
  },
  {
    term: "Seller's Solicitor",
    definition: '<ul><li class="my-2 ml-4">Acts for the seller.</li><li class="my-2 ml-4">Prepares the draft contract pack.</li><li class="my-2 ml-4">Responds to enquiries raised by your solicitor.</li><li class="my-2 ml-4">Receives the completion funds on behalf of the seller.</li></ul>',
  },
  {
    term: 'Buildings Insurer',
    definition: '<ul><li class="my-2 ml-4">Provides a policy to cover the property structure against damage (e.g., fire, flood).</li><li class="my-2 ml-4">The policy must be in place from the moment of exchange of contracts, as the risk passes to you at that point.</li></ul>',
  },
];
