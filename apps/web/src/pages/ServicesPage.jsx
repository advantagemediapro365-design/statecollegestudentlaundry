import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import PricingPlans from '@/components/PricingPlans';
import { SERVICES, IMAGES, PRICING_NOTE } from '@/lib/siteData';

function ServicesPage() {
    return (
        <>
            <Helmet>
                <title>Student Laundry Services & Pricing in State College | Wash Dry Fold, Dorm & Apartment Pickup</title>
                <meta
                    name="description"
                    content="Laundry plans for State College students: 10 lb weekly for $70/month, 20 lb monthly for $80/month, or one-time scheduled-route pickup from $15. Call to sign up."
                />
            </Helmet>
            <Seo
                title="Student Laundry Services & Pricing in State College"
                description="Weekly and monthly laundry plans, one-time scheduled pickups, same-day service, and bedding care. Call to confirm your price and schedule."
                image={IMAGES.facility}
                siteName="StateCollegeStudentLaundry.com"
            />

            <PageHero
                eyebrow="Services & Pricing"
                title="Laundry Services Built for Student Life"
                description="Pickup, wash, dry, fold and delivery for students and parents in State College and University Park."
            />

            {/* Pricing tiers */}
            <section className="px-4 py-16 sm:px-6 sm:py-20">
                <div className="mx-auto max-w-6xl">
                    <Reveal className="mx-auto max-w-2xl text-center">
                        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                            Pricing &amp; Plans
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                            Choose a weekly plan, monthly plan, or one-time pickup on a scheduled route.
                        </p>
                    </Reveal>
                    <div className="mt-12">
                        <PricingPlans />
                    </div>
                </div>
            </section>

            <section className="bg-secondary/50 px-4 py-16 sm:px-6 sm:py-20">
                <div className="mx-auto max-w-6xl">
                    <Reveal className="mx-auto max-w-2xl text-center">
                        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                            Laundry Services
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                            Call to confirm service availability, your price, and a pickup schedule.
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

            <CTASection
                title="One Call Gets You Started"
                subtitle="Choose your service, confirm your price and schedule your pickup. We handle the washing, drying, folding and return."
                primaryAction="call"
            />
        </>
    );
}

export default ServicesPage;
