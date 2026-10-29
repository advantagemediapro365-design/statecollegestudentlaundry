import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { IMAGES } from '@/lib/siteData';

function ForParentsPage() {
    return (
        <>
            <Helmet>
                <title>For Parents | Student Laundry Pickup & Delivery in State College</title>
                <meta
                    name="description"
                    content="Parents: help your student stay on top of laundry with convenient pickup, wash dry fold, and delivery in the State College area. Learn how to get them set up."
                />
            </Helmet>
            <Seo
                title="For Parents — Student Laundry Pickup in State College"
                description="Help your student stay on top of laundry with convenient pickup and delivery in the State College area."
                image={IMAGES.parents}
                siteName="StateCollegeStudentLaundry.com"
            />

            <PageHero
                eyebrow="For parents"
                title="One Less Thing for Your Student to Worry About"
                description="College life is busy, and laundry is often the first chore to pile up. State College Student Laundry helps parents keep students stocked with clean clothes through convenient pickup and delivery in the State College area."
            />

            <section className="px-4 py-16 sm:px-6 sm:py-20">
                <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
                    <Reveal>
                        <img
                            src={IMAGES.parents}
                            alt="Freshly folded laundry in a basket on a bed"
                            className="aspect-[3/2] w-full rounded-[2rem] object-cover shadow-xl shadow-primary/10"
                            loading="lazy"
                        />
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                            How Parents Can Help
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                            Whether your student is in a dorm or an off-campus apartment, you can help them stay on top
                            of laundry by connecting them with a pickup and delivery service that handles the washing,
                            drying, and folding for them.
                        </p>
                        <ul className="mt-6 space-y-3">
                            {[
                                'Send a scheduling request on your student\u2019s behalf, or have them reach out directly',
                                'Share their State College pickup location or area so we can confirm eligibility',
                                'Call to set up a weekly or monthly plan for your student',
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed sm:text-base">
                                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                </div>
            </section>

            <section className="bg-secondary/50 px-4 py-16 sm:px-6 sm:py-20">
                <div className="mx-auto max-w-3xl">
                    <Reveal>
                        <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                            What to Expect
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                            We keep things straightforward: your student&apos;s laundry is collected from the agreed
                            pickup location, professionally washed, dried, and neatly folded, then returned to them.
                            Pickup arrangements, timing, and plan availability are confirmed directly — we would rather
                            set clear expectations than make promises we cannot keep.
                        </p>
                        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                            Service is available in eligible State College and surrounding service areas. The quickest
                            way to find out whether your student&apos;s dorm or apartment qualifies is to send a
                            scheduling request with their location.
                        </p>
                        <Link
                            to="/contact"
                            className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-[1.02] active:scale-[0.98]"
                        >
                            Get Started <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Reveal>
                </div>
            </section>

            <CTASection
                title="Set Your Student Up With Laundry Pickup"
                subtitle="Send a scheduling request with your student's State College location and we will confirm eligibility and the options that fit their routine."
                primaryAction="call"
            />
        </>
    );
}

export default ForParentsPage;
