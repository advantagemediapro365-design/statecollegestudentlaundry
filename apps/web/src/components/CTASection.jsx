import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Phone } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { PHONE, PHONE_TEL } from '@/lib/siteData';

function CTASection({
    title = 'Ready to Spend Less Time Doing Laundry?',
    subtitle = 'Request a pickup and we will confirm service-area eligibility, pickup arrangements, and availability with you directly.',
    primaryAction = 'schedule',
}) {
    return (
        <section className="px-4 py-16 sm:px-6 sm:py-20">
            <Reveal>
                <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary via-[hsl(216,72%,34%)] to-[hsl(222,75%,20%)] px-6 py-14 text-center text-primary-foreground sm:px-12 sm:py-16">
                    <div
                        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10"
                        aria-hidden="true"
                    />
                    <div
                        className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-white/10"
                        aria-hidden="true"
                    />
                    <h2 className="relative mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
                        {title}
                    </h2>
                    <p className="relative mx-auto mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/85">
                        {subtitle}
                    </p>
                    <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        {primaryAction === 'call' ? (
                            <a
                                href={`tel:${PHONE_TEL}`}
                                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-primary transition-transform hover:scale-[1.02] active:scale-[0.98] sm:w-auto"
                            >
                                <Phone className="h-4 w-4" /> Call Us
                            </a>
                        ) : (
                            <Link
                                to="/contact"
                                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-primary transition-transform hover:scale-[1.02] active:scale-[0.98] sm:w-auto"
                            >
                                Schedule a Pickup <ArrowRight className="h-4 w-4" />
                            </Link>
                        )}
                        <Link
                            to="/contact"
                            className="inline-flex h-12 w-full items-center justify-center rounded-full border border-white/40 px-7 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
                        >
                            Get Started
                        </Link>
                    </div>
                    <p className="relative mt-6 inline-flex items-center gap-2 text-sm text-primary-foreground/80">
                        <MessageSquare className="h-4 w-4" />
                        Have a question first?{' '}
                        <Link to="/contact" className="font-semibold underline underline-offset-4">
                            Contact the team
                        </Link>
                    </p>
                    <p className="relative mt-3 inline-flex items-center gap-2 text-sm text-primary-foreground/80">
                        <Phone className="h-4 w-4" />
                        Or call or text{' '}
                        <a href={`tel:${PHONE_TEL}`} className="font-semibold underline underline-offset-4">
                            {PHONE}
                        </a>
                    </p>
                </div>
            </Reveal>
        </section>
    );
}

export default CTASection;
