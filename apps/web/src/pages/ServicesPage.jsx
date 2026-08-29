import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import PricingPlans from '@/components/PricingPlans';
import PricingComparison from '@/components/PricingComparison';
import { SERVICES, IMAGES, PRICING_NOTE } from '@/lib/siteData';

function ServicesPage() {
    return (
        <>
            <Helmet>
                <title>Student Laundry Services & Pricing in State College | Wash Dry Fold, Dorm & Apartment Pickup</title>
                <meta
                    name="description"
                    content="Transparent per-pound pricing for student laundry in State College — wash dry fold, dorm and apartment pickup, and recurring or semester plans. Standard $1.95/lb, Recurring $1.75/lb, Semester $1.65/lb, all with pickup and delivery included."
                />
            </Helmet>
            <Seo
                title="Student Laundry Services & Pricing in State College"
                description="Transparent per-pound pricing for dorm and apartment laundry pickup, wash dry & fold, and recurring or semester plans — pickup and delivery included."
                image={IMAGES.facility}
                siteName="StateCollegeStudentLaundry.com"
            />

            <PageHero
                eyebrow="Services & Pricing"
                title="Laundry Services Built for Student Life"
                description="Pickup, wash, dry & fold, and delivery for dorms, apartments, and student housing in eligible State College and surrounding service areas — with transparent per-pound pricing."
            />

            {/* Pricing tiers */}
            <section className="px-4 py-16 sm:px-6 sm:py-20">
                <div className="mx-auto max-w-6xl">
                    <Reveal className="mx-auto max-w-2xl text-center">
                        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                            Pricing &amp; Plans
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                            Three simple tiers — pay less per pound the more you commit. Every plan includes pickup,
                            wash, dry, fold, and delivery.
                        </p>
                    </Reveal>
                    <div className="mt-12">
                        <PricingPlans />
                    </div>
                </div>
            </section>

            {/* Per-service pricing */}
            <section className="bg-secondary/50 px-4 py-16 sm:px-6 sm:py-20">
                <div className="mx-auto max-w-6xl">
                    <Reveal className="mx-auto max-w-2xl text-center">
                        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                            Services &amp; Per-Pound Rates
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                            The same competitive rate applies whether you live in a dorm or an off-campus apartment.
                        </p>
                    </Reveal>
                    <div className="mt-12 space-y-6">
                        {SERVICES.map((service, i) => (
                            <Reveal key={service.title} delay={i * 0.04}>
                                <div className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-6 transition-shadow hover:shadow-lg hover:shadow-primary/5 sm:flex-row sm:items-start sm:p-8">
                                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
                                        <service.icon className="h-7 w-7" strokeWidth={1.8} />
                                    </span>
                                    <div className="flex-1">
                                        <h3 className="font-display text-xl font-semibold">{service.title}</h3>
                                        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                                            {service.text}
                                        </p>
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {service.pricing.map((p) => (
                                                <span
                                                    key={p}
                                                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-semibold text-foreground"
                                                >
                                                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                                                    {p}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <Link
                                        to="/contact"
                                        className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-border bg-white px-5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                                    >
                                        Ask About This <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                    <Reveal className="mx-auto mt-10 max-w-3xl text-center">
                        <p className="text-sm leading-relaxed text-muted-foreground">{PRICING_NOTE}</p>
                    </Reveal>
                </div>
            </section>

            {/* Comparison */}
            <section className="px-4 py-16 sm:px-6 sm:py-20">
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

            <CTASection
                title="Get Started with Pricing"
                subtitle="Pick the tier that fits your semester and send a scheduling request — we will confirm eligibility, pickup arrangements, and your per-pound rate."
            />
        </>
    );
}

export default ServicesPage;
