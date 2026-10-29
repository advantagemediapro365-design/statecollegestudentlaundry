import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import PricingPlans from '@/components/PricingPlans';
import { STEPS, IMAGES, PRICING_NOTE } from '@/lib/siteData';

function HowItWorksPage() {
    return (
        <>
            <Helmet>
                <title>How It Works | Student Laundry Pickup in State College</title>
                <meta
                    name="description"
                    content="See how student laundry pickup and delivery works in State College: schedule, pickup, wash dry & fold, and delivery from State College Student Laundry."
                />
            </Helmet>
            <Seo
                title="How It Works — Student Laundry Pickup & Delivery"
                description="Schedule, pickup, wash dry & fold, delivery. Four simple steps for students in the State College area."
                image={IMAGES.pickup}
                siteName="StateCollegeStudentLaundry.com"
            />

            <PageHero
                eyebrow="How it works"
                title="From Laundry Bag to Clean & Folded — in Four Steps"
                description="Our pickup and delivery process is built to be simple for busy students. Here is exactly what happens when you schedule a laundry pickup."
            />

            <section className="px-4 py-16 sm:px-6 sm:py-20">
                <div className="mx-auto max-w-4xl space-y-6">
                    {STEPS.map((step, i) => (
                        <Reveal key={step.title} delay={i * 0.05}>
                            <div className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:p-8">
                                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary font-display text-xl font-bold text-primary-foreground">
                                    {i + 1}
                                </span>
                                <div>
                                    <h2 className="font-display text-xl font-semibold">{step.title}</h2>
                                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                                        {step.text}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            <section className="bg-secondary/50 px-4 py-16 sm:px-6 sm:py-20">
                <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
                    <Reveal>
                        <img
                            src={IMAGES.pickup}
                            alt="Laundry pickup handoff at a student apartment"
                            className="aspect-[3/2] w-full rounded-[2rem] object-cover shadow-xl shadow-primary/10"
                            loading="lazy"
                        />
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                            What to Include in Your Pickup Request
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                            The more detail you share up front, the faster we can confirm your pickup. When you
                            schedule, be ready to provide:
                        </p>
                        <ul className="mt-6 space-y-3">
                            {[
                                'Your name, email, and phone number',
                                'Your pickup location or area in State College',
                                'Whether you are in a dorm, apartment, or other student housing',
                                'Your preferred pickup timing',
                                'The laundry service you need — weekly, monthly, or one-time',
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed sm:text-base">
                                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Link
                            to="/contact"
                            className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-[1.02] active:scale-[0.98]"
                        >
                            Schedule Your Laundry Pickup <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Reveal>
                </div>
            </section>

            <section className="px-4 py-16 sm:px-6 sm:py-20">
                <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
                    <Reveal className="order-2 lg:order-1">
                        <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                            What to Expect
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                            Every pickup is confirmed directly with you before we collect anything. Turnaround and
                            timing depend on scheduling, volume, and your pickup arrangement, so we set expectations
                            with you individually rather than promising a one-size-fits-all timeframe.
                        </p>
                        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                            Your laundry is professionally washed, dried, and neatly folded, then returned to the
                            agreed delivery arrangement. If anything about your location or building needs a special
                            arrangement, we will work it out with you when confirming eligibility.
                        </p>
                    </Reveal>
                    <Reveal delay={0.1} className="order-1 lg:order-2">
                        <img
                            src={IMAGES.facility}
                            alt="Professionally folded laundry at a laundry facility"
                            className="aspect-[3/2] w-full rounded-[2rem] object-cover shadow-xl shadow-primary/10"
                            loading="lazy"
                        />
                    </Reveal>
                </div>
            </section>

            {/* Pricing */}
            <section className="bg-secondary/50 px-4 py-16 sm:px-6 sm:py-20">
                <div className="mx-auto max-w-6xl">
                    <Reveal className="mx-auto max-w-2xl text-center">
                        <span className="inline-flex items-center rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
                            Pricing &amp; Plans
                        </span>
                        <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                            What It Costs
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                            Choose 10 lb per week for $70/month, 20 lb per month for $80/month, or one-time pickup on a
                            scheduled route from $15.
                        </p>
                    </Reveal>
                    <div className="mt-12">
                        <PricingPlans />
                    </div>
                    <Reveal className="mx-auto mt-8 max-w-3xl text-center">
                        <p className="text-sm leading-relaxed text-muted-foreground">{PRICING_NOTE}</p>
                    </Reveal>
                </div>
            </section>

            <CTASection />
        </>
    );
}

export default HowItWorksPage;
