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
        pricing: ['Weekly plans available', 'Monthly plans available', 'Call to confirm details'],
    },
    {
        icon: Home,
        title: 'Apartment Laundry Pickup',
        text: 'Pickup and delivery for off-campus apartments and student housing in eligible State College area locations.',
        pricing: ['Weekly plans available', 'Monthly plans available', 'Call to confirm details'],
    },
    {
        icon: Shirt,
        title: 'Wash, Dry & Fold',
        text: 'Everyday laundry professionally washed, dried, and neatly folded — the core of what we do for students.',
        pricing: ['Pickup, wash, dry & fold', 'Scheduled delivery', 'Call to confirm details'],
    },
    {
        icon: Repeat,
        title: 'Recurring Laundry Plans',
        text: 'Choose a weekly plan with 10 lb per week for $70/month, or a monthly plan with 20 lb per month for $80/month.',
        pricing: ['Weekly plan: $70/month', 'Monthly plan: $80/month', 'Call to discuss options'],
    },
    {
        icon: CalendarRange,
        title: 'One-Time Laundry Pickup',
        text: 'One-time pickup on a scheduled route starts at $15. Call to confirm your price and schedule.',
        pricing: ['One-time pickup from $15', 'Scheduled route service', 'Call to discuss options'],
    },
    {
        icon: Shirt,
        title: 'Blankets, Comforters & More',
        text: 'Affordable bedding care for blankets, comforters, and other bulky items. Call with the item details for a price and pickup schedule.',
        pricing: ['Call for your price', 'Pickup scheduling by phone'],
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
        a: 'Our weekly plan includes 10 lb per week for $70/month. The monthly plan includes 20 lb per month for $80/month. One-time pickup on a scheduled route starts at $15. Call to confirm your service, price, and schedule.',
    },
    {
        q: 'Are weekly and monthly laundry plans available?',
        a: 'Our available plans include 10 lb per week for $70/month and 20 lb per month for $80/month. Call to discuss your needs and confirm a pickup schedule.',
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

export const MARQUEE_WORDS = ['Pickup', 'Wash', 'Dry', 'Fold', 'Delivery', 'Monday', 'Thursday'];

export const PRICING_TIERS = [
    {
        name: 'Weekly Plan',
        price: '$70',
        unit: '/month',
        tagline: '10 lb per week',
        featured: false,
        features: [
            '10 lb of laundry each week',
            'Scheduled pickup and delivery',
            'Wash, dry and fold included',
        ],
        cta: 'Call to Sign Up',
    },
    {
        name: 'Monthly Plan',
        price: '$80',
        unit: '/month',
        tagline: '20 lb per month',
        featured: true,
        features: [
            '20 lb of laundry each month',
            'Scheduled pickup and delivery',
            'Wash, dry and fold included',
        ],
        cta: 'Call to Sign Up',
    },
    {
        name: 'One-Time Pickup',
        price: 'From $15',
        unit: '',
        tagline: 'Scheduled route service',
        featured: false,
        features: [
            'Book on a scheduled route',
            'Wash, dry, fold and delivery',
            'Call to confirm your price',
        ],
        cta: 'Call to Sign Up',
    },
];

export const PRICING_NOTE =
    'Plan prices include scheduled pickup, washing, drying, folding and delivery. Call to confirm your service and pickup schedule.';
