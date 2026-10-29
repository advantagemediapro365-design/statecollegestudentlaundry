import React from 'react';
import { Helmet } from 'react-helmet';
import { ArrowDown, ArrowRight, Check, Clock3, MapPin, Phone, Shirt, Truck } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import PricingPlans from '@/components/PricingPlans';
import { IMAGES, PHONE, PHONE_TEL } from '@/lib/siteData';

function HomePage() {
    return (
        <>
            <Helmet>
                <title>State College Student Laundry | Pickup, Wash, Dry, Fold &amp; Delivery</title>
                <meta
                    name="description"
                    content="Student laundry, done. Scheduled pickup, wash, dry, fold and delivery for students and parents in State College and University Park. Call to sign up."
                />
            </Helmet>
            <Seo
                title="State College Student Laundry | Student Laundry. Done."
                description="Laundry help for students and parents in State College & University Park. Pickup, wash, dry, fold and delivery."
                image={IMAGES.students}
                siteName="StateCollegeStudentLaundry.com"
            />

            <section className="relative overflow-hidden bg-[#071b3d] text-white">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_35%,rgba(42,112,219,0.28),transparent_52%)]" />
                <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1fr_0.95fr] lg:py-24">
                    <Reveal>
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
                            <MapPin className="h-3.5 w-3.5" />
                            State College &amp; University Park
                        </span>
                        <h1 className="mt-6 max-w-2xl font-display text-5xl font-extrabold uppercase leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
                            Student Laundry.
                            <span className="mt-2 block text-[#4c91f2]">Done.</span>
                        </h1>
                        <p className="mt-5 text-lg font-semibold text-white/90 sm:text-xl">
                            Pickup <span className="text-blue-300">•</span> Wash <span className="text-blue-300">•</span>{' '}
                            Dry <span className="text-blue-300">•</span> Fold <span className="text-blue-300">•</span>{' '}
                            Delivery
                        </p>
                        <p className="mt-4 max-w-xl text-base leading-relaxed text-blue-100/80 sm:text-lg">
                            Laundry help for students and parents in State College &amp; University Park.
                        </p>
                        <a
                            href={`tel:${PHONE_TEL}`}
                            className="mt-8 inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-[#3478e5] px-8 text-base font-bold text-white shadow-lg shadow-blue-950/30 transition-colors hover:bg-[#4b8af0]"
                        >
                            <Phone className="h-5 w-5" />
                            CALL TO SIGN UP
                        </a>
                        <p className="mt-3 text-sm text-blue-100/70">
                            <a className="font-semibold text-white underline decoration-blue-400 underline-offset-4" href={`tel:${PHONE_TEL}`}>
                                {PHONE}
                            </a>
                        </p>
                    </Reveal>

                    <Reveal delay={0.12} className="relative">
                        <img
                            src={IMAGES.students}
                            alt="Students carrying State College Student Laundry bags"
                            className="aspect-[4/3] w-full rounded-[1.75rem] border border-white/15 object-cover shadow-2xl shadow-black/30"
                            loading="eager"
                        />
                        <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-xl sm:left-8">
                            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-[#2467c5]">
                                <Truck className="h-5 w-5" />
                            </span>
                            <span>
                                <span className="block text-sm font-bold">Clean laundry, back to you</span>
                                <span className="block text-xs text-slate-500">A simple student routine</span>
                            </span>
                        </div>
                    </Reveal>
                </div>
                <div className="relative border-t border-white/15 bg-white/[0.06]">
                    <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-5 text-sm font-semibold text-blue-50 sm:px-6 md:grid-cols-4">
                        {[
                            [Truck, 'Scheduled pickup'],
                            [Shirt, 'Wash • dry • fold'],
                            [ArrowRight, 'Delivery included'],
                            [Clock3, 'Same-day option'],
                        ].map(([Icon, label]) => (
                            <div key={label} className="flex items-center justify-center gap-2">
                                <Icon className="h-4 w-4 text-blue-300" />
                                {label}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white px-4 py-16 sm:px-6 sm:py-20" id="plans">
                <div className="mx-auto max-w-6xl">
                    <Reveal className="mx-auto max-w-2xl text-center">
                        <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#3478e5]">Easy options</span>
                        <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-[#0b2147] sm:text-4xl">
                            Choose Your Laundry Plan
                        </h2>
                        <p className="mt-3 text-base text-slate-600 sm:text-lg">
                            Simple plans. Convenient pickup and delivery.
                        </p>
                    </Reveal>
                    <div className="mt-10">
                        <PricingPlans showNote={false} />
                    </div>
                    <Reveal className="mt-5 flex flex-col items-center gap-1 text-center text-sm text-slate-500">
                        <span className="font-semibold text-[#163668]">Blankets, Comforters &amp; More</span>
                        <span>Affordable bedding care. Call for your price and schedule a pickup.</span>
                    </Reveal>
                </div>
            </section>

            <section className="bg-[#f1f6fd] px-4 py-14 sm:px-6 sm:py-16">
                <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
                    <Reveal>
                        <div className="h-full rounded-2xl border border-blue-100 bg-white p-7 shadow-sm sm:p-9">
                            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#2467c5]">
                                <Truck className="h-6 w-6" />
                            </span>
                            <h2 className="mt-5 font-display text-2xl font-extrabold text-[#0b2147]">
                                Scheduled Pickups: Monday &amp; Thursday
                            </h2>
                            <p className="mt-3 leading-relaxed text-slate-600">
                                Two scheduled drop-off days each week. Shared routes help keep your costs down.
                            </p>
                            <a
                                href={`tel:${PHONE_TEL}`}
                                className="mt-5 inline-flex items-center gap-2 font-bold text-[#2467c5] hover:underline"
                            >
                                Call to choose a route <ArrowRight className="h-4 w-4" />
                            </a>
                        </div>
                    </Reveal>
                    <Reveal delay={0.08}>
                        <div className="flex h-full flex-col justify-between rounded-2xl bg-[#0b2147] p-7 text-white shadow-lg sm:p-9">
                            <div>
                                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-blue-200">
                                    <Clock3 className="h-6 w-6" />
                                </span>
                                <h2 className="mt-5 font-display text-2xl font-extrabold">
                                    Need It Back Today?
                                </h2>
                                <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-blue-200">
                                    Same-Day Service — $35 Flat Rate
                                </p>
                                <p className="mt-3 leading-relaxed text-blue-50/80">
                                    Call to confirm availability and book.
                                </p>
                            </div>
                            <a
                                href={`tel:${PHONE_TEL}`}
                                className="mt-6 inline-flex h-12 items-center justify-center gap-2 self-start rounded-xl bg-[#3478e5] px-6 text-sm font-bold text-white transition-colors hover:bg-[#4b8af0]"
                            >
                                <Phone className="h-4 w-4" /> CALL TO BOOK
                            </a>
                        </div>
                    </Reveal>
                </div>
            </section>

            <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
                <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
                    <Reveal>
                        <img
                            src={IMAGES.hero}
                            alt="A bag of freshly washed and folded laundry"
                            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg"
                            loading="lazy"
                        />
                    </Reveal>
                    <Reveal delay={0.08}>
                        <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#3478e5]">
                            Simple from start to finish
                        </span>
                        <h2 className="mt-3 font-display text-3xl font-extrabold text-[#0b2147] sm:text-4xl">
                            One Call Gets You Started
                        </h2>
                        <p className="mt-4 max-w-xl leading-relaxed text-slate-600">
                            Choose your service, confirm your price and schedule your pickup. We handle the washing,
                            drying, folding and return.
                        </p>
                        <div className="mt-6 space-y-3">
                            {['Choose the service you need', 'Confirm your price and pickup schedule', 'We wash, dry, fold and return your laundry'].map(
                                (item) => (
                                    <p key={item} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#3478e5]" />
                                        {item}
                                    </p>
                                ),
                            )}
                        </div>
                        <a
                            href={`tel:${PHONE_TEL}`}
                            className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#3478e5] px-7 text-sm font-bold text-white transition-colors hover:bg-[#2565c9]"
                        >
                            <Phone className="h-4 w-4" /> CALL TO SIGN UP
                        </a>
                    </Reveal>
                </div>
            </section>

            <section className="bg-[#edf4fd] px-4 py-12 sm:px-6 sm:py-14">
                <div className="mx-auto flex max-w-5xl flex-col items-center gap-5 rounded-2xl border border-blue-100 bg-white p-7 text-center shadow-sm sm:p-9">
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#3478e5]">For parents</span>
                    <h2 className="font-display text-2xl font-extrabold text-[#0b2147] sm:text-3xl">
                        Parents: Call to Set Up Your Student’s Service
                    </h2>
                    <p className="max-w-2xl leading-relaxed text-slate-600">
                        Give your student one less thing to worry about. Call to discuss a plan and pickup for their
                        State College or University Park location.
                    </p>
                    <a
                        href={`tel:${PHONE_TEL}`}
                        className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#0b2147] px-7 text-sm font-bold text-white transition-colors hover:bg-[#163668]"
                    >
                        <Phone className="h-4 w-4" /> CALL TO SIGN UP
                    </a>
                </div>
            </section>

            <section className="bg-[#071b3d] px-4 py-14 text-white sm:px-6">
                <Reveal className="mx-auto max-w-3xl text-center">
                    <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
                        Need something else?
                    </h2>
                    <p className="mt-3 text-blue-100/80">
                        Call to learn about our other services.
                    </p>
                    <a
                        href={`tel:${PHONE_TEL}`}
                        className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-7 text-sm font-bold text-[#0b2147] transition-colors hover:bg-blue-50"
                    >
                        <Phone className="h-4 w-4" /> CALL {PHONE}
                    </a>
                    <a href="#plans" className="mt-5 flex items-center justify-center gap-2 text-sm font-semibold text-blue-200 hover:text-white">
                        Back to plans <ArrowDown className="h-4 w-4 rotate-180" />
                    </a>
                </Reveal>
            </section>
        </>
    );
}

export default HomePage;
