import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowRight, CheckCircle2, MapPin, Shirt, Truck } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import CTASection from '@/components/CTASection';
import PricingPlans from '@/components/PricingPlans';
import PricingComparison from '@/components/PricingComparison';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { BENEFITS, STEPS, SERVICES, FAQS, IMAGES, MARQUEE_WORDS } from '@/lib/siteData';

function HomePage() {
    return (
        <>
            <Helmet>
                <title>Student Laundry Pickup & Delivery in State College | StateCollegeStudentLaundry.com</title>
                <meta
                    name="description"
                    content="State College Student Laundry provides student laundry pickup, wash, dry & fold, and delivery in the State College area — serving Penn State students in dorms and off-campus apartments. Schedule a pickup today."
                />
            </Helmet>
            <Seo
                title="Student Laundry Pickup & Delivery in State College"
                description="Convenient laundry pickup, wash, dry & fold, and delivery for students in the State College area from State College Student Laundry."
                image={IMAGES.hero}
                siteName="StateCollegeStudentLaundry.com"
            />

            {/* Hero */}
            <section className="relative overflow-hidden bg-gradient-to-b from-secondary/80 via-background to-background">
                <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-2 lg:pb-24 lg:pt-20">
                    <Reveal>
                        <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
                            <Shirt className="h-3.5 w-3.5" />
                            Student laundry service in State College
                        </span>
                        <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
                            Student Laundry Pickup &amp; Delivery in{' '}
                            <span className="text-primary">State College</span>
                        </h1>
                        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                            Spend less time doing laundry and more time focusing on school, work and life. State College
                            Student Laundry provides convenient laundry pickup, wash, dry, fold and delivery services for
                            students in the State College area.
                        </p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Link
                                to="/contact"
                                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-[1.02] active:scale-[0.98]"
                            >
                                Schedule a Pickup <ArrowRight className="h-4 w-4" />
                            </Link>
                            <Link
                                to="/how-it-works"
                                className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-white px-7 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                            >
                                How It Works
                            </Link>
                        </div>
                        <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                            Serving students in eligible State College and surrounding service areas.
                        </p>
                    </Reveal>

                    <Reveal delay={0.15}>
                        <div className="relative">
                            <img
                                src={IMAGES.hero}
                                alt="Neatly folded clean laundry in a canvas laundry bag"
                                className="aspect-[3/2] w-full rounded-[2rem] object-cover shadow-2xl shadow-primary/10"
                                loading="eager"
                            />
                            <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl border border-border bg-white px-4 py-3 shadow-xl sm:-left-6">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
                                    <Truck className="h-5 w-5" strokeWidth={1.8} />
                                </span>
                                <div>
                                    <p className="text-sm font-semibold">Pickup &amp; Delivery</p>
                                    <p className="text-xs text-muted-foreground">Right from your door</p>
                                </div>
                            </div>
                            <div className="absolute -top-5 right-4 flex items-center gap-3 rounded-2xl border border-border bg-white px-4 py-3 shadow-xl">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
                                    <Shirt className="h-5 w-5" strokeWidth={1.8} />
                                </span>
                                <div>
                                    <p className="text-sm font-semibold">Wash, Dry &amp; Fold</p>
                                    <p className="text-xs text-muted-foreground">Neatly finished</p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>

                {/* Marquee strip */}
                <div className="border-y border-border bg-primary py-3" aria-hidden="true">
                    <div className="flex overflow-hidden">
                        <div className="animate-marquee flex shrink-0 items-center gap-8 pr-8">
                            {[...MARQUEE_WORDS, ...MARQUEE_WORDS, ...MARQUEE_WORDS, ...MARQUEE_WORDS].map((word, i) => (
                                <span
                                    key={i}
                                    className="flex items-center gap-8 whitespace-nowrap font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/90"
                                >
                                    {word}
                                    <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground/50" />
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Students Choose Us */}
            <section className="px-4 py-16 sm:px-6 sm:py-24">
                <div className="mx-auto max-w-6xl">
                    <Reveal className="mx-auto max-w-2xl text-center">
                        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                            Why Students Choose Us
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                            A laundry service built around real student life in State College — simple, reliable, and
                            designed to give you your time back.
                        </p>
                    </Reveal>
                    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {BENEFITS.map((benefit, i) => (
                            <Reveal key={benefit.title} delay={i * 0.06}>
                                <div className="h-full rounded-3xl border border-border bg-card p-6 transition-shadow hover:shadow-lg hover:shadow-primary/5">
                                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-primary">
                                        <benefit.icon className="h-5 w-5" strokeWidth={1.8} />
                                    </span>
                                    <h3 className="mt-4 font-display text-lg font-semibold">{benefit.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{benefit.text}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="bg-secondary/50 px-4 py-16 sm:px-6 sm:py-24">
                <div className="mx-auto max-w-6xl">
                    <Reveal className="mx-auto max-w-2xl text-center">
                        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">How It Works</h2>
                        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                            Four simple steps between you and a closet full of clean, folded laundry.
                        </p>
                    </Reveal>
                    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {STEPS.map((step, i) => (
                            <Reveal key={step.title} delay={i * 0.08}>
                                <div className="relative h-full rounded-3xl border border-border bg-white p-6">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-display text-base font-bold text-primary-foreground">
                                        {i + 1}
                                    </span>
                                    <h3 className="mt-4 font-display text-lg font-semibold">{step.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                    <Reveal className="mt-10 text-center">
                        <Link
                            to="/contact"
                            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-[1.02] active:scale-[0.98]"
                        >
                            Schedule Your Laundry Pickup <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Reveal>
                </div>
            </section>

            {/* Services */}
            <section className="px-4 py-16 sm:px-6 sm:py-24">
                <div className="mx-auto max-w-6xl">
                    <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
                        <div className="max-w-2xl">
                            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                                Student Laundry Services
                            </h2>
                            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                                From dorm rooms to off-campus apartments — pickup, wash, dry &amp; fold, and delivery
                                options for student life.
                            </p>
                        </div>
                        <Link
                            to="/services"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                        >
                            View all services <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Reveal>
                    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {SERVICES.map((service, i) => (
                            <Reveal key={service.title} delay={i * 0.06}>
                                <div className="h-full rounded-3xl border border-border bg-card p-6 transition-shadow hover:shadow-lg hover:shadow-primary/5">
                                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-primary">
                                        <service.icon className="h-5 w-5" strokeWidth={1.8} />
                                    </span>
                                    <h3 className="mt-4 font-display text-lg font-semibold">{service.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.text}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing & Plans */}
            <section className="bg-secondary/50 px-4 py-16 sm:px-6 sm:py-24">
                <div className="mx-auto max-w-6xl">
                    <Reveal className="mx-auto max-w-2xl text-center">
                        <span className="inline-flex items-center rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
                            Pricing &amp; Plans
                        </span>
                        <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                            Simple, Transparent Per-Pound Pricing
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                            Three tiers built around student life — pay less per pound the more you commit. Every plan
                            includes pickup, wash, dry, fold, and delivery.
                        </p>
                    </Reveal>
                    <div className="mt-12">
                        <PricingPlans />
                    </div>
                    <Reveal className="mt-12 text-center">
                        <Link
                            to="/services"
                            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-white px-7 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                        >
                            View Pricing &amp; Plans <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Reveal>
                </div>
            </section>

            {/* How State College Student Laundry Compares */}
            <section className="px-4 py-16 sm:px-6 sm:py-24">
                <div className="mx-auto max-w-6xl">
                    <Reveal className="mx-auto max-w-2xl text-center">
                        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                            How We Compare in Central PA
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                            Our pickup &amp; delivery service is priced competitively against regional drop-off
                            cleaners and national laundry apps — and we come to you.
                        </p>
                    </Reveal>
                    <div className="mt-12">
                        <PricingComparison />
                    </div>
                </div>
            </section>

            {/* For Penn State Students */}
            <section className="bg-secondary/50 px-4 py-16 sm:px-6 sm:py-24">
                <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
                    <Reveal>
                        <img
                            src={IMAGES.dorm}
                            alt="College dorm room with a laundry bag ready for pickup"
                            className="aspect-[3/2] w-full rounded-[2rem] object-cover shadow-xl shadow-primary/10"
                            loading="lazy"
                        />
                    </Reveal>
                    <Reveal delay={0.1}>
                        <span className="inline-flex items-center rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
                            Serving Penn State students
                        </span>
                        <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                            Laundry Made Easier for Students in State College
                        </h2>
                        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                            State College Student Laundry is a student laundry service designed to take laundry
                            off your plate — whether you live in a dorm or an off-campus apartment. We are an
                            independent local service, not affiliated with the university, and we focus on making
                            laundry one less thing to worry about during the semester.
                        </p>
                        <ul className="mt-6 space-y-3">
                            {[
                                'Dorm laundry pickup where pickup arrangements are supported',
                                'Convenient pickup for off-campus apartments and student housing',
                                'Service-area eligibility confirmed before your first pickup',
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed">
                                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Link
                            to="/student-laundry"
                            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                        >
                            More for students <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Reveal>
                </div>
            </section>

            {/* For Parents */}
            <section className="px-4 py-16 sm:px-6 sm:py-24">
                <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
                    <Reveal className="order-2 lg:order-1">
                        <span className="inline-flex items-center rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
                            For parents
                        </span>
                        <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                            Help Your Student Stay on Top of Laundry
                        </h2>
                        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                            Between classes, studying, work, and activities, laundry is often the first chore to slip.
                            Parents can help students stay on top of it by setting them up with convenient laundry
                            pickup and delivery — wash, dry &amp; fold handled, clean clothes returned.
                        </p>
                        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                            Reach out with your student&apos;s State College location and we will confirm service-area
                            eligibility and the pickup arrangements that work for their dorm or apartment.
                        </p>
                        <Link
                            to="/for-parents"
                            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                        >
                            More for parents <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Reveal>
                    <Reveal delay={0.1} className="order-1 lg:order-2">
                        <img
                            src={IMAGES.parents}
                            alt="Basket of freshly folded laundry on a bed"
                            className="aspect-[3/2] w-full rounded-[2rem] object-cover shadow-xl shadow-primary/10"
                            loading="lazy"
                        />
                    </Reveal>
                </div>
            </section>

            {/* Service Area */}
            <section className="px-4 pb-16 sm:px-6 sm:pb-24">
                <Reveal>
                    <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 rounded-[2rem] border border-border bg-card p-8 sm:p-10 md:flex-row md:items-center">
                        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
                            <MapPin className="h-7 w-7" strokeWidth={1.8} />
                        </span>
                        <div className="flex-1">
                            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                                Service Area &amp; Eligibility
                            </h2>
                            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                                We serve students in eligible State College and surrounding service areas. Pickup
                                arrangements and availability vary by location and building, so please confirm your
                                address with us before counting on a pickup.
                            </p>
                        </div>
                        <Link
                            to="/service-area"
                            className="inline-flex h-12 shrink-0 items-center justify-center rounded-full border border-border bg-white px-6 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                        >
                            Check Your Area
                        </Link>
                    </div>
                </Reveal>
            </section>

            {/* FAQ */}
            <section className="bg-secondary/50 px-4 py-16 sm:px-6 sm:py-24">
                <div className="mx-auto max-w-3xl">
                    <Reveal className="text-center">
                        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                            Frequently Asked Questions
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                            Quick answers about pickup, wash dry &amp; fold, plans, and eligibility.
                        </p>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <Accordion type="single" collapsible className="mt-10 space-y-3">
                            {FAQS.slice(0, 6).map((faq, i) => (
                                <AccordionItem
                                    key={faq.q}
                                    value={`faq-${i}`}
                                    className="rounded-2xl border border-border bg-white px-5"
                                >
                                    <AccordionTrigger className="py-5 text-left font-display text-base font-semibold hover:no-underline">
                                        {faq.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                                        {faq.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </Reveal>
                    <Reveal className="mt-8 text-center">
                        <Link
                            to="/faq"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                        >
                            See all FAQs <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Reveal>
                </div>
            </section>

            <CTASection />
        </>
    );
}

export default HomePage;
