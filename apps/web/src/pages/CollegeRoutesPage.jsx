import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowRight, MapPin } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import CTASection from '@/components/CTASection';

const ROUTES = [
    ['State College, PA', 'Active route', 'state-college-pa'],
    ['University Park, PA', 'Active route', 'university-park-pa'],
    ['Altoona, PA', 'Limited / on-demand', 'altoona-pa'],
    ['Lock Haven, PA', 'Route forming', 'lock-haven-pa'],
    ['Huntingdon, PA', 'Route forming', 'huntingdon-pa'],
    ['Loretto, PA', 'Route forming', 'loretto-pa'],
    ['Williamsport, PA', 'Route forming', 'williamsport-pa'],
    ['Lewisburg, PA', 'Route forming', 'lewisburg-pa'],
    ['Selinsgrove, PA', 'Route forming', 'selinsgrove-pa'],
    ['Bloomsburg, PA', 'Route forming', 'bloomsburg-pa'],
];

function CollegeRoutesPage() {
    return <>
        <Helmet><title>College Laundry Routes in Central Pennsylvania | Request a Campus Route</title><meta name="description" content="See active, limited and route-forming college laundry pickup areas across Central Pennsylvania. Request a route for your campus." /></Helmet>
        <Seo title="College Laundry Routes in Central Pennsylvania" description="Active, limited and route-forming student laundry pickup routes across Central Pennsylvania." siteName="StateCollegeStudentLaundry.com" />
        <section className="bg-secondary/60 px-4 py-16 sm:px-6 sm:py-24"><div className="mx-auto max-w-3xl"><Reveal><span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent-foreground"><MapPin className="h-3.5 w-3.5" /> Route coverage</span><h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">College laundry routes across Central Pennsylvania</h1><p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">Route status tells you what you can book today and where we are collecting demand. We publish pickup days only after the route and pickup point are confirmed.</p></Reveal></div></section>
        <section className="px-4 py-16 sm:px-6 sm:py-20"><div className="mx-auto max-w-4xl"><div className="grid gap-4 sm:grid-cols-2">{ROUTES.map(([name, status, slug], index) => <Reveal key={slug} delay={index * 0.03}><article className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-5"><div><h2 className="font-display text-lg font-semibold">{name}</h2><p className={`mt-1 text-sm font-semibold ${status === 'Active route' ? 'text-primary' : 'text-muted-foreground'}`}>{status}</p></div><Link to={status === 'Active route' ? '/book' : '/contact'} aria-label={`Request service for ${name}`} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary"><ArrowRight className="h-4 w-4" /></Link></article></Reveal>)}</div></div></section>
        <CTASection title="Need a route at your college?" subtitle="Tell us your campus and pickup area. When sufficient recurring demand is established, scheduled pickup and return days will be published." />
    </>;
}

export default CollegeRoutesPage;