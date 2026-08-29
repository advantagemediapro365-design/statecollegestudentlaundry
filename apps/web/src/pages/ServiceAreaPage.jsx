import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { IMAGES } from '@/lib/siteData';

function ServiceAreaPage() {
    return (
        <>
            <Helmet>
                <title>Service Area & Eligibility | Student Laundry Pickup in State College</title>
                <meta
                    name="description"
                    content="Fresh Fold Altoona serves students in eligible State College and surrounding service areas. Learn how pickup arrangements and eligibility are confirmed for your dorm or apartment."
                />
            </Helmet>
            <Seo
                title="Service Area & Eligibility — State College Student Laundry"
                description="Student laundry pickup and delivery for eligible State College and surrounding service areas."
                image={IMAGES.pickup}
                siteName="StateCollegeStudentLaundry.com"
            />

            <PageHero
                eyebrow="Service area"
                title="Serving Eligible State College & Surrounding Areas"
                description="Our student laundry pickup and delivery service covers eligible locations in State College and surrounding service areas. Here is how eligibility and pickup arrangements work."
            />

            <section className="px-4 py-16 sm:px-6 sm:py-20">
                <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
                    <Reveal>
                        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary">
                            <MapPin className="h-7 w-7" strokeWidth={1.8} />
                        </span>
                        <h2 className="mt-5 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                            Where We Serve
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                            Fresh Fold Altoona provides student laundry pickup and delivery for eligible State College
                            and surrounding service areas — including dorms where pickup arrangements are supported,
                            off-campus apartments, and student housing.
                        </p>
                        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                            Because eligibility depends on your exact location and building, we confirm every new
                            customer&apos;s address before the first pickup. If you are unsure whether your area
                            qualifies, just ask — it takes a minute.
                        </p>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <img
                            src={IMAGES.pickup}
                            alt="Laundry pickup at a student apartment entrance"
                            className="aspect-[3/2] w-full rounded-[2rem] object-cover shadow-xl shadow-primary/10"
                            loading="lazy"
                        />
                    </Reveal>
                </div>
            </section>

            <section className="bg-secondary/50 px-4 py-16 sm:px-6 sm:py-20">
                <div className="mx-auto max-w-3xl">
                    <Reveal>
                        <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                            What Affects Eligibility
                        </h2>
                        <ul className="mt-6 space-y-3">
                            {[
                                'Your exact pickup location or area within State College and surrounding areas',
                                'Building access and pickup arrangements — dorms, apartments, and student housing can differ',
                                'Current scheduling availability for your area',
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed sm:text-base">
                                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                            The fastest way to confirm is to send a scheduling request with your pickup location or
                            area. We will follow up to let you know whether service is available and how pickup would
                            work for your building.
                        </p>
                        <Link
                            to="/contact"
                            className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-[1.02] active:scale-[0.98]"
                        >
                            Confirm Your Eligibility <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Reveal>
                </div>
            </section>

            <CTASection
                title="Not Sure If You're in Our Service Area?"
                subtitle="Send your pickup location or area through the scheduling form and we will confirm eligibility and availability for you."
            />
        </>
    );
}

export default ServiceAreaPage;
