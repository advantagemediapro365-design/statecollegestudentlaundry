import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import PricingPlans from '@/components/PricingPlans';
import { IMAGES, PRICING_NOTE } from '@/lib/siteData';

function StudentLaundryPage() {
    return (
        <>
            <Helmet>
                <title>Laundry Service for Penn State Students | State College Student Laundry</title>
                <meta
                    name="description"
                    content="A student laundry service in State College serving Penn State students — dorm laundry pickup where supported, apartment pickup, and wash dry fold delivery. Confirm your eligibility today."
                />
            </Helmet>
            <Seo
                title="Laundry Service for Penn State Students in State College"
                description="Student laundry pickup and delivery serving Penn State students in dorms and off-campus apartments across eligible State College areas."
                image={IMAGES.students}
                siteName="StateCollegeStudentLaundry.com"
            />

            <PageHero
                eyebrow="Student laundry"
                title="A Laundry Service Designed Around State College Students"
                description="State College Student Laundry serves Penn State students and other State College area students with convenient laundry pickup, wash, dry & fold, and delivery — so laundry never gets in the way of the semester."
            />

            <section className="px-4 py-16 sm:px-6 sm:py-20">
                <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
                    <Reveal>
                        <img
                            src={IMAGES.dorm}
                            alt="Dorm room with a laundry bag ready for pickup"
                            className="aspect-[3/2] w-full rounded-[2rem] object-cover shadow-xl shadow-primary/10"
                            loading="lazy"
                        />
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                            Dorm Laundry Pickup
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                            Living in a dorm often means shared machines, busy laundry rooms, and hauling bags across
                            the building. Where pickup arrangements are supported, we collect your laundry and return
                            it washed, dried, and folded — no waiting for a machine to open up.
                        </p>
                        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                            Every residence hall is different, so contact us with your dorm details and we will confirm
                            whether pickup can be arranged for your building.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-2">
                            {['Weekly: 10 lb for $70/month', 'Monthly: 20 lb for $80/month', 'One-time pickup from $15'].map((p) => (
                                <span
                                    key={p}
                                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-semibold text-foreground"
                                >
                                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                                    {p}
                                </span>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Student pricing tiers */}
            <section className="px-4 py-16 sm:px-6 sm:py-20">
                <div className="mx-auto max-w-6xl">
                    <Reveal className="mx-auto max-w-2xl text-center">
                        <span className="inline-flex items-center rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
                            Student pricing
                        </span>
                        <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                            Laundry Plans for Students
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                            Choose a weekly plan, monthly plan, or one-time pickup on a scheduled route. Call to confirm
                            your pickup details.
                        </p>
                    </Reveal>
                    <div className="mt-12">
                        <PricingPlans />
                    </div>
                </div>
            </section>

            <section className="bg-secondary/50 px-4 py-16 sm:px-6 sm:py-20">
                <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
                    <Reveal className="order-2 lg:order-1">
                        <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                            Off-Campus Apartment Pickup
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                            In an off-campus apartment without easy laundry access — or just without the time? We pick
                            up from eligible apartment locations across the State College area and deliver your clean,
                            folded laundry back to you.
                        </p>
                        <ul className="mt-6 space-y-3">
                            {[
                                'Pickup from the agreed location at your building',
                                'Professional wash, dry & fold processing',
                                'Delivery back to you when your laundry is ready',
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed sm:text-base">
                                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                    <Reveal delay={0.1} className="order-1 lg:order-2">
                        <img
                            src={IMAGES.students}
                            alt="Students carrying laundry bags outside an off-campus apartment"
                            className="aspect-[3/2] w-full rounded-[2rem] object-cover shadow-xl shadow-primary/10"
                            loading="lazy"
                        />
                    </Reveal>
                </div>
            </section>

            <section className="px-4 py-16 sm:px-6 sm:py-20">
                <div className="mx-auto max-w-3xl">
                    <Reveal>
                        <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                            Weekly &amp; Monthly Plans
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                            Choose 10 lb per week for $70/month or 20 lb per month for $80/month. One-time scheduled
                            route pickup starts at $15. Call to confirm the service and pickup schedule that works for
                            your location.
                        </p>
                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                            {[
                                { label: 'Weekly plan · 10 lb per week', price: '$70/month' },
                                { label: 'Monthly plan · 20 lb per month', price: '$80/month' },
                                { label: 'One-time scheduled pickup', price: 'From $15' },
                            ].map((row) => (
                                <div
                                    key={row.label}
                                    className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-white p-4"
                                >
                                    <span className="text-sm font-medium text-foreground">{row.label}</span>
                                    <span className="font-display text-base font-bold text-primary">{row.price}</span>
                                </div>
                            ))}
                        </div>
                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                            Before your first pickup, we always confirm that your location is within an eligible State
                            College or surrounding service area and that pickup arrangements work for your building.
                        </p>
                        <p className="mt-6 rounded-2xl border border-border bg-secondary/60 p-5 text-sm leading-relaxed text-muted-foreground">
                            State College Student Laundry is an independent local laundry service serving Penn State students. We
                            are not affiliated with, endorsed by, or sponsored by Penn State University.
                        </p>
                        <Link
                            to="/contact"
                            className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-[1.02] active:scale-[0.98]"
                        >
                            Schedule a Pickup <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Reveal>
                </div>
            </section>

            <CTASection />
        </>
    );
}

export default StudentLaundryPage;
