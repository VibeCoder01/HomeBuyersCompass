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
      'Complete your solicitor\'s initial ID, anti-money laundering (AML), and source-of-funds checks.',
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
      'Review your solicitor\'s report on title and enquiries.',
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
    description: 'The legal document you sign to create the mortgage on the property. It is sent to the Land Registry to register the lender\'s interest.',
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
    description: 'The official proof of your ownership from HM Land Registry, received months after completion. It shows your name and the lender\'s mortgage charge.',
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
      'Conducts an independent, in-depth survey of the property\'s condition (Level 2 or 3).',
      'Provides a detailed report on any defects or issues, which is separate from the lender\'s valuation.',
      'You instruct them directly.',
    ],
  },
  {
    role: 'Seller\'s Solicitor',
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
    definition: 'Outright ownership of the property and the land it stands on for an unlimited period.',
  },
  {
    term: 'Conveyancing',
    definition: 'The legal process of transferring property ownership from the seller to the buyer, handled by a solicitor or licensed conveyancer.',
  },
  {
    term: 'Decision in Principle (DIP)',
    definition: 'A preliminary confirmation from a lender of how much they might be willing to lend you. Also known as an Agreement in Principle (AIP).',
  },
  {
    term: 'Searches',
    definition: 'Enquiries made by your solicitor to various authorities (e.g., Local Council, Water Authority) to check for any issues affecting the property.',
  },
  {
    term: 'Enquiries',
    definition:
      'Questions raised by your solicitor to the seller\'s solicitor to clarify information in the draft contract, TA6 form, or search results.',
  },
  {
    term: 'Exchange of Contracts',
    definition:
      'The point at which signed contracts are exchanged between solicitors, making the deal legally binding. You pay a deposit and the completion date is fixed.',
  },
  {
    term: 'Completion',
    definition:
      'The final stage where the seller receives the money, ownership is transferred to you, and you get the keys.',
  },
  {
    term: 'Stamp Duty Land Tax (SDLT)',
    definition: 'A tax paid to the government on property purchases over a certain value. Your solicitor calculates and pays this for you.',
  },
  {
    term: 'Mortgage Valuation',
    definition:
      'A basic survey conducted by the lender to confirm the property is worth the amount you want to borrow. It is for the lender\'s benefit, not yours, and is not a detailed condition survey.',
  },
  {
    term: 'RICS Survey (Level 2 or 3)',
    definition:
      'A detailed inspection of the property’s condition, which you commission for your own peace of mind. A Level 2 (HomeBuyer Report) is for conventional properties in reasonable condition; a Level 3 (Building Survey) is for older, larger, or more complex properties.',
  },
  {
    term: 'Indemnity Insurance',
    definition:
      'An insurance policy taken out to protect against a specific potential legal problem with a property, such as a lack of planning permission for an extension. Often paid for by the seller.',
  },
  {
    term: 'Gazumping',
    definition: 'When a seller accepts your offer but then accepts a higher offer from another buyer before contracts are exchanged.',
  },
  {
    term: 'Title Deeds',
    definition:
      'Legal documents proving ownership of a property. Nowadays, this information is stored electronically at HM Land Registry.',
  },
  {
    term: 'Memorandum of Sale',
    definition: 'A document prepared by the estate agent that confirms the property sale has been agreed, subject to contract. It includes details of the buyer, seller, their solicitors, and the agreed price.',
  },
];
