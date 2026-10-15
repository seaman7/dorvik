export const ACADEMIC_PLANS = [
  { id: 'starter', name: 'Starter', price: 1990, capacity: 200, description: 'A focused start for smaller coaching and training teams.', features: ['Up to 200 active learners', 'Student records & admissions', 'Course registration', 'Student portal', 'Standard onboarding'] },
  { id: 'growth', name: 'Growth', price: 4990, capacity: 1000, description: 'More room for a growing school or learning centre.', features: ['Up to 1,000 active learners', 'Everything in Starter', 'Faculty & staff approval workflows', 'Role-based administration', 'Digital academic records'] },
  { id: 'institution', name: 'Institution', price: 9990, capacity: 3000, description: 'Connected administration for larger institutions.', features: ['Up to 3,000 active learners', 'Everything in Growth', 'Multi-department workflows', 'Digital credential verification', 'Implementation planning'] },
];
export function academicPrice(plan, billing) { return plan.price * (billing === 'annual' ? 10 : 1); }
export function formatBDT(amount) { return `৳${amount.toLocaleString('en-BD')}`; }
