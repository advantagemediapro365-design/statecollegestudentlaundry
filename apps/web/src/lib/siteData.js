import {
    Truck,
    Shirt,
    Clock,
    GraduationCap,
    Repeat,
    CalendarCheck,
    Building2,
    Home,
    Sparkles,
    CalendarRange,
} from 'lucide-react';

export const PHONE = '570-494-7523';
export const PHONE_TEL = '+15704947523';

export const IMAGES = {
    logo: '/images/state_college_student_laundry_logo.png',
    hero: '/images/state_college_student_laundry_hero.png',
    pickup: '/images/state_college_student_laundry_pickup.png',
    dorm: '/images/state_college_students_launadry.png',
    facility: '/images/state_college_student_laundry_facility.png',
    parents: '/images/state_college_student_laundry_parents.png',
    students: '/images/state_college_student_laundry_students.png',
};

export const BENEFITS = [
    {
        icon: Truck,
        title: 'Convenient Pickup & Delivery',
        text: 'We collect your laundry from the agreed pickup location and bring it back clean — no laundromat trips required.',
    },
    {
        icon: Shirt,
        title: 'Wash, Dry & Fold',
        text: 'Your laundry is professionally washed, dried, and neatly folded, ready to go straight back into your drawers.',
    },
    {
        icon: Clock,
        title: 'Save Time',
        text: 'Reclaim the hours you would spend sorting, washing, and folding — and put them toward classes, work, or rest.',
    },
    {
        icon: GraduationCap,
        title: 'Student-Friendly Service',
        text: 'Built around student life in State College — dorms, apartments, busy weeks, and unpredictable schedules.',
    },
    {
        icon: Repeat,
        title: 'Recurring Laundry Options',
        text: 'Ask about recurring pickup options that keep laundry handled week after week, subject to available plans.',
    },
    {
        icon: CalendarCheck,
        title: 'Simple Scheduling',
        text: 'Request a pickup in minutes with our scheduling form — we confirm the details and eligibility with you directly.',
    },
];

export const STEPS = [
    {
        title: 'Schedule',
        text: 'Choose your pickup and provide the required details through our scheduling form.',
    },
    {
        title: 'Pickup',
        text: 'We collect your laundry from the agreed pickup location.',
    },
    {
        title: 'Wash, Dry & Fold',
        text: 'Your laundry is professionally processed and neatly folded.',
    },
    {
        title: 'Delivery',
        text: 'Your clean laundry is returned to you.',
    },
];

export const SERVICES = [
    {
        icon: Building2,
        title: 'Dorm Laundry Pickup',
        text: 'Laundry pickup for students living in dorms, where pickup arrangements are supported. Contact us to confirm what is possible for your building.',
        pricing: ['Standard $1.95/lb', 'Recurring $1.75/lb', 'Semester $1.65/lb'],
    },
    {
        icon: Home,
        title: 'Apartment Laundry Pickup',
        text: 'Pickup and delivery for off-campus apartments and student housing in eligible State College area locations.',
        pricing: ['Standard $1.95/lb', 'Recurring $1.75/lb', 'Semester $1.65/lb'],
    },
    {
        icon: Shirt,
        title: 'Wash, Dry & Fold',
        text: 'Everyday laundry professionally washed, dried, and neatly folded — the core of what we do for students.',
        pricing: ['Standard $1.95/lb', 'Recurring $1.75/lb', 'Semester $1.65/lb'],
    },
    {
        icon: Repeat,
        title: 'Recurring Laundry Plans',
        text: 'Ongoing weekly, bi-weekly or monthly pickup options, subject to available plans. Reach out to discuss what fits your routine.',
        pricing: ['Weekly $1.75/lb', 'Bi-weekly $1.75/lb', 'Monthly $1.75/lb'],
    },
    {
        icon: CalendarRange,
        title: 'Semester Laundry Plans',
        text: 'Semester-length laundry arrangements, where available. Contact us for current plan options and details.',
        pricing: ['Full semester $1.65/lb', 'Flexible scheduling within semester'],
    },
];

export const FAQS = [
    {
        q: 'How does laundry pickup work?',
        a: 'You request a pickup through our scheduling form and provide the required details, including your pickup location. We confirm the arrangement with you, collect your laundry from the agreed pickup location, professionally wash, dry, and fold it, and return it to you.',
    },
    {
        q: 'Where can my laundry be collected?',
        a: 'Pickup arrangements depend on your location and building. Off-campus apartments and student housing in eligible areas are typical pickup points, and dorm pickups may be possible where arrangements are supported. Contact us to confirm what works for your address.',
    },
    {
        q: 'What is wash, dry & fold service?',
        a: 'It is exactly what it sounds like: we wash your laundry, dry it, and fold it neatly so it comes back to you clean and ready to put away. It is the simplest way to hand off a time-consuming chore.',
    },
    {
        q: 'Do you offer dorm laundry pickup?',
        a: 'We serve students in dorms where pickup arrangements are supported. Because every building is different, please contact us with your dorm details so we can confirm eligibility and arrange the specifics.',
    },
    {
        q: 'Do you offer apartment laundry pickup?',
        a: 'Yes — apartment laundry pickup is available for off-campus students in eligible State College and surrounding service areas. Share your address or area through the scheduling form and we will confirm availability.',
    },
    {
        q: 'How much does laundry service cost?',
        a: 'Pricing is per pound of laundry and includes pickup, wash, dry, fold, and delivery. Standard service is $1.95/lb, recurring plans (weekly, bi-weekly, or monthly) are $1.75/lb, and a full semester commitment is $1.65/lb — our best value. The same rate applies whether you live in a dorm or an off-campus apartment.',
    },
    {
        q: 'Are recurring or semester laundry plans available?',
        a: 'Yes. Recurring plans (weekly, bi-weekly, or monthly) are $1.75/lb with pickup & delivery included, and semester-length plans are $1.65/lb for a full semester commitment with flexible scheduling within the semester. Availability depends on current plans and service-area eligibility — contact us to confirm what fits your routine.',
    },
    {
        q: 'How long does turnaround take?',
        a: 'Turnaround can vary depending on scheduling, volume, and your pickup arrangement. We confirm expected timing with you directly when your pickup is scheduled, so you always know what to expect.',
    },
    {
        q: 'What areas do you serve?',
        a: 'State College Student Laundry serves students in eligible State College and surrounding service areas. Eligibility depends on your exact location and pickup arrangements, so the fastest way to confirm is to send a scheduling request or contact the team.',
    },
    {
        q: 'How do I contact the team?',
        a: 'The easiest way is through the contact and scheduling form on this website, or you can call or text us at 570-494-7523. Send your name, email, pickup location or area, and what you need, and we will follow up to confirm eligibility and next steps.',
    },
];

export const MARQUEE_WORDS = ['Pickup', 'Wash', 'Dry', 'Fold', 'Delivery', 'Schedule', 'Repeat'];

// --- Pricing (Central PA Regional Laundry Market Analysis) ---
// All prices are per pound of laundry and include pickup, wash, dry, fold, and delivery.
export const PRICING_TIERS = [
    {
        name: 'Standard',
        price: '$1.95',
        unit: '/lb',
        tagline: 'One-time pickup & delivery',
        featured: false,
        features: [
            'Pickup from your dorm or apartment',
            'Professional wash, dry & fold',
            'Delivery back to you',
            'No commitment — schedule as needed',
        ],
        cta: 'Schedule a Pickup',
    },
    {
        name: 'Recurring',
        price: '$1.75',
        unit: '/lb',
        tagline: 'Weekly, bi-weekly or monthly',
        featured: true,
        features: [
            'Save $0.20/lb vs. standard pricing',
            'Weekly, bi-weekly or monthly pickup',
            'Pickup & delivery included',
            'Laundry handled week after week',
        ],
        cta: 'Start a Recurring Plan',
    },
    {
        name: 'Semester',
        price: '$1.65',
        unit: '/lb',
        tagline: 'Best value — full semester',
        featured: false,
        features: [
            'Lowest per-pound rate — save $0.30/lb',
            'Full semester commitment',
            'Flexible scheduling within the semester',
            'Pickup & delivery included',
        ],
        cta: 'Lock In Semester Pricing',
    },
];

export const PRICING_NOTE =
    'All pricing is per pound of laundry and includes pickup, wash, dry, fold, and delivery. No laundromat trips — we come to your dorm or apartment.';

export const COMPETITORS = [
    {
        name: 'State College Student Laundry',
        service: 'Pickup, wash/dry/fold & delivery',
        price: '$1.65–$1.95/lb',
        pickup: true,
        highlight: true,
        note: 'We pick up and deliver to your dorm or apartment',
    },
    {
        name: 'Balfurd Cleaners',
        service: 'Drop-off wash/dry/fold',
        price: '$1.85–$2.25/lb',
        pickup: false,
        note: 'Regional drop-off cleaner — you transport it',
    },
    {
        name: 'Regional drop-off laundromats',
        service: 'Drop-off wash/dry/fold',
        price: '$1.25–$2.25/lb',
        pickup: false,
        note: 'Lower base rate, but no pickup or delivery',
    },
    {
        name: 'Hamperapp (recurring)',
        service: 'Pickup & delivery (app-based)',
        price: '$1.85–$2.10/lb',
        pickup: true,
        note: 'National app service — our recurring rate beats it',
    },
];

export const CONVENIENCE_MESSAGE =
    'Pay slightly more than drop-off, but we pick up and deliver to your dorm or apartment — no trips to the laundromat.';

export const RECURRING_PLANS = [
    { name: 'Weekly Pickup', price: '$1.75', unit: '/lb', detail: 'Pickup & delivery included' },
    { name: 'Bi-Weekly Pickup', price: '$1.75', unit: '/lb', detail: 'Pickup & delivery included' },
    { name: 'Monthly Pickup', price: '$1.75', unit: '/lb', detail: 'Pickup & delivery included' },
];

export const SEMESTER_PLANS = [
    { name: 'Full Semester Commitment', price: '$1.65', unit: '/lb', detail: 'Includes pickup & delivery' },
    { name: 'Flexible Scheduling Within Semester', price: '$1.65', unit: '/lb', detail: 'Lowest per-pound rate' },
];
