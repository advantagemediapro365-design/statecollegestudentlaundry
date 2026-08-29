import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import CTASection from '@/components/CTASection';
import { IMAGES } from '@/lib/siteData';

const HOUSING_AREAS = [
    { slug: 'east-halls', name: 'East Halls', details: 'Bigler, Brumbaugh, Curtin, Earle, Geary, Hastings, Martin, McKean, Packer, Pennypacker, Pinchot, Snyder, Sproul, Stone, Stuart, and Tener Halls.' },
    { slug: 'pollock-halls', name: 'Pollock Halls', details: 'Student laundry pickup for Pollock-area residents, subject to building access and route confirmation.' },
    { slug: 'south-halls', name: 'South Halls', details: 'Pickup arrangements for South Halls are confirmed for each residence and current route.' },
    { slug: 'eastview-terrace', name: 'Eastview Terrace', details: 'Laundry pickup and return for eligible Eastview Terrace locations.' },
    { slug: 'north-halls', name: 'North Halls', details: 'North Halls service is confirmed by residence and available pickup window.' },
    { slug: 'west-halls', name: 'West Halls', details: 'Ask us to confirm the current pickup point for your West Halls residence.' },
    { slug: 'nittany-apartments', name: 'Nittany Apartments', details: 'Apartment pickup and delivery for eligible Nittany locations.' },
    { slug: 'white-course-apartments', name: 'White Course Apartments', details: 'Pickup availability depends on the specific building and route schedule.' },
];

function CampusPage() {
    return (
        <>
            <Helmet>
                <title>Penn State Student Laundry Pickup & Delivery in University Park</title>
                <meta name="description" content="State College Student Laundry provides scheduled pickup, wash, dry, fold and return service for eligible Penn State University Park students in dorms and apartments." />
            </Helmet>
            <Seo title="Penn State Student Laundry Pickup & Delivery in University Park" description="Student laundry pickup, wash, dry, fold and delivery for eligible Penn State University Park students." image={IMAGES.dorm} siteName="StateCollegeStudentLaundry.com" />

            <section className="relative overflow-hidden bg-gradient-to-b from-secondary/80 via-background to-background px-4 py-16 sm:px-6 sm:py-24">
                <div className="mx-auto max-w-6xl">
                    <Reveal className="max-w-3xl">
                        <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent-foreground"><MapPin className="h-3.5 w-3.5" /> Penn State campus hub</span>
                        <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">Penn State Student Laundry Pickup &amp; Delivery in University Park</h1>
                        <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">State College Student Laundry provides scheduled laundry pickup, wash, dry, fold and return service for eligible Penn State University Park students in State College, Pennsylvania. Students meet the driver at the confirmed residence-hall entrance or pickup point.</p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Link to="/book" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25">Check My Address <ArrowRight className="h-4 w-4" /></Link>
                            <Link to="/routes/route-calendar" className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-white px-7 text-sm font-semibold">View Route Calendar</Link>
                        </div>
                    </Reveal>
                </div>
            </section>

            <section className="px-4 py-16 sm:px-6 sm:py-20">
                <div className="mx-auto max-w-6xl">
                    <Reveal className="max-w-2xl"><h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">University Park housing areas</h2><p className="mt-4 text-base leading-relaxed text-muted-foreground">Choose your residence area for the closest service details. Individual residence halls are listed as anchors where they belong, so the site stays useful without creating thin duplicate pages.</p></Reveal>
                    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {HOUSING_AREAS.map((area, index) => <Reveal key={area.slug} delay={index * 0.04}><article id={area.slug} className="h-full rounded-3xl border border-border bg-card p-5"><h3 className="font-display text-lg font-semibold">{area.name}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{area.details}</p><a href={`#${area.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">Area details <ArrowRight className="h-4 w-4" /></a></article></Reveal>)}
                    </div>
                </div>
            </section>

            <section className="bg-secondary/50 px-4 py-16 sm:px-6 sm:py-20"><div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3"><Reveal><h2 className="font-display text-2xl font-bold">Current service status</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">University Park availability is confirmed by exact building, pickup point, and current route capacity.</p></Reveal>{['Pickup from the agreed location','Wash, dry, fold and return','Approximately 48-hour turnaround'].map((item) => <Reveal key={item}><div className="flex gap-3"><CheckCircle2 className="h-5 w-5 shrink-0 text-primary" /><p className="text-sm leading-relaxed">{item}</p></div></Reveal>)}</div></section>
            <CTASection title="Set Up Penn State Laundry Pickup" subtitle="Send your University Park residence and we will confirm eligibility, pickup details, and the best plan for your routine." />
        </>
    );
}

export default CampusPage;