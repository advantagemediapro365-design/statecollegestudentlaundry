import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { PRICING_TIERS, PRICING_NOTE } from '@/lib/siteData';
import { cn } from '@/lib/utils';

function PricingPlans({ showNote = true, compact = false }) {
    return (
        <div>
            <div className="grid gap-5 md:grid-cols-3 md:items-stretch">
                {PRICING_TIERS.map((tier, i) => (
                    <Reveal key={tier.name} delay={i * 0.07}>
                        <div
                            className={cn(
                                'flex h-full flex-col rounded-3xl border p-6 transition-shadow sm:p-7',
                                tier.featured
                                    ? 'border-primary bg-primary text-primary-foreground shadow-xl shadow-primary/20 md:-translate-y-3'
                                    : 'border-border bg-card text-card-foreground hover:shadow-lg hover:shadow-primary/5',
                            )}
                        >
                            <div className="flex items-center justify-between">
                                <h3
                                    className={cn(
                                        'font-display text-lg font-semibold',
                                        tier.featured ? 'text-primary-foreground' : 'text-foreground',
                                    )}
                                >
                                    {tier.name}
                                </h3>
                                {tier.featured && (
                                    <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide">
                                        <Sparkles className="h-3 w-3" />
                                        Popular
                                    </span>
                                )}
                            </div>

                            <p
                                className={cn(
                                    'mt-1 text-sm',
                                    tier.featured ? 'text-primary-foreground/80' : 'text-muted-foreground',
                                )}
                            >
                                {tier.tagline}
                            </p>

                            <div className="mt-5 flex items-baseline gap-1">
                                <span className="font-display text-4xl font-bold tracking-tight">{tier.price}</span>
                                <span
                                    className={cn(
                                        'text-sm font-medium',
                                        tier.featured ? 'text-primary-foreground/80' : 'text-muted-foreground',
                                    )}
                                >
                                    {tier.unit}
                                </span>
                            </div>

                            <ul className="mt-6 space-y-3">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-2.5 text-sm leading-relaxed">
                                        <CheckCircle2
                                            className={cn(
                                                'mt-0.5 h-4 w-4 shrink-0',
                                                tier.featured ? 'text-white' : 'text-primary',
                                            )}
                                        />
                                        <span className={tier.featured ? 'text-primary-foreground/90' : ''}>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                to="/contact"
                                className={cn(
                                    'mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition-transform hover:scale-[1.02] active:scale-[0.98]',
                                    tier.featured
                                        ? 'bg-white text-primary'
                                        : 'border border-border bg-white text-foreground hover:bg-secondary',
                                )}
                            >
                                {tier.cta} <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </Reveal>
                ))}
            </div>

            {showNote && (
                <Reveal className="mx-auto mt-8 max-w-3xl text-center">
                    <p className="text-sm leading-relaxed text-muted-foreground">{PRICING_NOTE}</p>
                </Reveal>
            )}

            {compact && (
                <Reveal className="mt-8 text-center">
                    <Link
                        to="/services"
                        className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                        View Pricing &amp; Plans <ArrowRight className="h-4 w-4" />
                    </Link>
                </Reveal>
            )}
        </div>
    );
}

export default PricingPlans;
