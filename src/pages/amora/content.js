export const projectDetails = [
  { label: 'Role', value: 'UI/UX Designer' },
  { label: 'Project type', value: 'Self-initiated concept project' },
  { label: 'Platform', value: 'Mobile app (iOS-first concept)' },
  { label: 'Focus', value: 'Healthcare management, family caregiving, AI-assisted document management' },
  { label: 'Tools', value: 'Figma' },
]

export const challenges = [
  { title: 'Scattered records', text: 'Medical documents are stored across different platforms and physical locations.' },
  { title: 'Disconnected care tasks', text: 'Medications, appointments and follow-ups are tracked separately.' },
  { title: 'Multiple family members', text: 'Managing different health profiles makes information harder to organise.' },
  { title: 'Manual effort', text: 'Finding and entering information from medical documents takes time.' },
]

export const findings = [
  {
    title: 'Health information is fragmented',
    text: 'Users rely on a combination of hospital applications, digital documents and physical records to access medical information.',
  },
  {
    title: 'Care activities are tracked separately',
    text: 'Appointments, medication schedules and vaccination dates often require separate tracking or manual reminders.',
  },
  {
    title: 'Family healthcare adds complexity',
    text: 'Managing information for multiple family members makes it harder to keep everything organised and accessible.',
  },
  {
    title: 'Manual entry creates friction',
    text: 'Users spend time locating documents and manually entering information into different tools.',
  },
]

export const platforms = [
  { title: 'ABHA', text: 'Digital health identity and health record exchange in India.' },
  { title: 'Practo', text: 'Healthcare services, appointments and personal health records.' },
  { title: 'MyChart', text: 'Patient health information, care management and provider communication.' },
  { title: 'Apple Health', text: 'Personal health information, medications and health data.' },
]

export const matrixColumns = ['ABHA', 'PRACTO', 'MYCHART', 'APPLE HEALTH', 'AMORA']

export const matrixRows = [
  ['Centralised health records', 'YYYYY'],
  ['Manual health record entry', 'PPPYY'],
  ['Medical document upload', 'PYPPY'],
  ['AI-assisted data extraction', 'NQQNY'],
  ['Multiple family member profiles', 'PPPPY'],
  ['Medication tracking and reminders', 'NYYYY'],
  ['Vaccination tracking', 'PPPPY'],
  ['Appointment management', 'NYYNY'],
  ['Follow-up reminders', 'NYYPY'],
  ['Health readings and trends', 'PPPYY'],
  ['Family access permissions', 'PQYYY'],
  ['Original document retention', 'PYPNY'],
  ['Dedicated family care planner', 'NNPNY'],
]

export const matrixLegend = {
  Y: 'Available',
  P: 'Partial, limited or provider-dependent',
  N: 'Not a core documented feature',
  Q: 'Not clearly established',
}

export const opportunities = [
  {
    title: 'Family-first organisation',
    text: 'Organise healthcare information around individual family members while keeping it accessible from one shared space.',
  },
  {
    title: 'Connected healthcare management',
    text: 'Bring records, medications, appointments and follow-ups into one experience.',
  },
  {
    title: 'Reduced manual entry',
    text: 'Use AI-assisted extraction to capture information from uploaded documents, with user review and confirmation.',
  },
  {
    title: 'Shared caregiving',
    text: 'Give family members controlled access to relevant health information.',
  },
]

export const destinations = [
  { title: 'Home', text: 'A consolidated overview of family health information and upcoming care activities.' },
  { title: 'Family', text: 'Individual health profiles and shared family information.' },
  { title: 'Records', text: 'Organised access to medical documents and health history.' },
  { title: 'Planner', text: 'A central place for medications, appointments, vaccinations and follow-ups.' },
]

export const sitemap = [
  {
    title: 'Home',
    tag: 'TAB 01',
    items: [
      'Family health overview',
      'Upcoming care tasks',
      'Overdue reminders',
      'Recent health activity',
      'Quick member access',
    ],
  },
  {
    title: 'Family',
    tag: 'TAB 02',
    items: [
      'Family member list',
      'Add / edit member',
      'Member health profile',
      'Medical timeline',
      'Allergies and conditions',
      'Medications and vaccinations',
    ],
  },
  {
    title: 'Health Records',
    tag: 'TAB 03',
    items: [
      'All records',
      'Search and filters',
      'Record categories',
      'Document viewer',
      'Record details / editing',
      'Original uploaded files',
    ],
  },
  {
    title: 'Care Planner',
    tag: 'TAB 04',
    items: [
      'Upcoming tasks',
      'Calendar / list view',
      'Appointments',
      'Medication reminders',
      'Vaccination tracking',
      'Follow-ups',
      'Completed and overdue tasks',
    ],
  },
  {
    title: 'Global + action',
    tag: 'ACROSS THE APP',
    key: true,
    items: [
      'Scan or upload a document',
      'Enter information manually',
      'Select family member',
      'Review and confirm information',
      'Save record and optionally create a reminder',
    ],
  },
  {
    title: 'Account and settings',
    tag: 'ACROSS THE APP',
    items: [
      'Personal account',
      'Family access and permissions',
      'Notification preferences',
      'Privacy and security',
      'Help and support',
    ],
  },
]

// Coordinates come from the 1278 wide Figma canvas; the diagram scales them as one unit.
export const flowLegend = [
  { type: 'start', x: 339, label: 'Start / end' },
  { type: 'action', x: 489, label: 'User action' },
  { type: 'decision', x: 641, label: 'Decision' },
  { type: 'key', x: 789, label: 'Key step' },
]

export const flowHeadings = [
  { tag: 'FLOW A', title: 'Add a medical record', y: 191 },
  { tag: 'FLOW B', title: 'Find a medical report', y: 475 },
  { tag: 'FLOW C', title: 'Manage an upcoming appointment', y: 759 },
]

export const flowDividers = [451, 735]

export const flowNodes = [
  { type: 'start', x: 50, y: 307, w: 110, h: 52, title: 'Tap central +' },
  { type: 'action', x: 184, y: 301, w: 130, h: 64, title: 'Select family member' },
  { type: 'decision', x: 338, y: 278, w: 110, h: 110, title: 'How to add?' },
  { type: 'action', x: 472, y: 241, w: 150, h: 80, title: 'Scan / Upload', sub: 'Prescription, report, card or slip' },
  { type: 'action', x: 472, y: 345, w: 150, h: 80, title: 'Enter manually', sub: 'Fill in the relevant fields' },
  { type: 'action', x: 646, y: 301, w: 130, h: 64, title: 'Review details and correct errors' },
  { type: 'key', x: 800, y: 301, w: 140, h: 64, title: "Save to the member's health profile" },
  { type: 'decision', x: 964, y: 278, w: 110, h: 110, title: 'Date or follow-up?' },
  { type: 'action', x: 1098, y: 255, w: 130, h: 52, title: 'Offer a reminder' },
  { type: 'action', x: 1098, y: 359, w: 130, h: 52, title: 'Record saved' },

  { type: 'start', x: 134, y: 591, w: 130, h: 52, title: 'Health Records' },
  { type: 'action', x: 288, y: 585, w: 170, h: 64, title: 'Search, filter by member or category' },
  { type: 'action', x: 482, y: 585, w: 170, h: 64, title: 'Open record details and original document' },
  { type: 'decision', x: 676, y: 557, w: 120, h: 120, title: 'What next?' },
  { type: 'action', x: 820, y: 539, w: 170, h: 52, title: 'Edit record' },
  { type: 'action', x: 820, y: 643, w: 170, h: 52, title: "View member's timeline" },
  { type: 'start', x: 1014, y: 591, w: 130, h: 52, title: 'Done' },

  { type: 'start', x: 206, y: 875, w: 150, h: 52, title: 'Home or Care Planner' },
  { type: 'action', x: 380, y: 869, w: 170, h: 64, title: 'Open appointment details' },
  { type: 'decision', x: 574, y: 841, w: 120, h: 120, title: 'Change or close?' },
  { type: 'action', x: 718, y: 823, w: 180, h: 52, title: 'Edit date or reminder' },
  { type: 'action', x: 718, y: 927, w: 180, h: 52, title: 'Mark completed or cancel' },
  { type: 'start', x: 922, y: 875, w: 150, h: 52, title: 'Planner updated' },
]

export const flowBranchLabels = [
  { text: 'YES', x: 1080, y: 257.5 },
  { text: 'NO', x: 1080, y: 393.5 },
]

export const workflow = [
  { label: 'Select member' },
  { label: 'Upload or scan' },
  { label: 'Read & classify' },
  { label: 'Review', active: true },
  { label: 'Correct' },
  { label: 'Confirm & save' },
]

export const visualDirection = [
  {
    title: 'Colour',
    text: 'A lavender-led colour palette establishes a distinctive visual identity, supported by neutral backgrounds and carefully selected status colours.',
  },
  {
    title: 'Typography',
    text: 'Clear typography and a consistent hierarchy improve readability across information-dense screens.',
  },
  {
    title: 'Components',
    text: 'Reusable components, consistent spacing and predictable interaction patterns create a cohesive experience.',
  },
  {
    title: 'Accessibility',
    text: 'Clear labels, readable contrast, consistent controls and meaningful status indicators support usability across the application.',
  },
]

export const palette = [
  { name: 'Lavender', hex: '#7C6BD6' },
  { name: 'Soft lavender', hex: '#B9AEF0' },
  { name: 'Lavender tint', hex: '#EEEBFB' },
  { name: 'Neutral', hex: '#F7F7F9' },
  { name: 'Ink', hex: '#1F1B2E' },
]

export const considerations = [
  {
    title: 'User confirmation',
    text: 'AI-extracted information must be reviewed and confirmed before it becomes a verified record.',
  },
  {
    title: 'Original document access',
    text: 'Uploaded documents remain available for reference alongside extracted information.',
  },
  {
    title: 'Controlled family access',
    text: 'Users can manage who has access to family health information and what they can do with it.',
  },
  {
    title: 'Private notes',
    text: 'Personal notes remain visible only to the person who created them.',
  },
  {
    title: 'Reliable care reminders',
    text: 'Reminders are based on user-confirmed information rather than unverified AI extraction.',
  },
]

export const futureCapabilities = [
  'Side-by-side comparison of medical reports.',
  'Bulk document organisation.',
  'Advanced search and filtering.',
  'Family health summaries and trends.',
  'Printable medical summaries.',
  'More detailed access and permission management.',
]
