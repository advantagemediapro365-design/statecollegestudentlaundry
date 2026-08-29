import React from 'react';
import { Link } from 'react-router-dom';
import { Check, X, Truck, ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { COMPETITORS, CONVENIENCE_MESSAGE } from '@/lib/siteData';
import { cn } from '@/lib/utils';

function PricingComparison() {
    return (
        <div className="mx-auto max-w-4xl">
            <Reveal>
                <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
                    {/* Header row */}
                    <div className="grid grid-cols-12 gap-2 border-b border-border bg-secondary/60 px-5 py-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:px-6">
                        <div className="col-span-5 sm:col-span-4">Provider</div>
                        <div className="col-span-7 sm:col-span-5">Service</div>
                        <div className="hidden sm:col-span-2 sm:block text-right">Pickup</div>
                        <div className="col-span-12 sm:col-span-1 text-right sm:text-right">Rate</div>
                    </div>

                    {COMPETITORS.map((row) => (
                        <div
                            key={row.name}
                            className={cn(
                                'grid grid-cols-12 items-center gap-2 border-b border-border px-5 py-4 last:border-b-0 sm:px-6',
                                row.highlight && 'bg-primary/5',
                            )}
                        >
                            <div className="col-span-5 sm:col-span-4">
                                <span
                                    className={cn(
                                        'font-display text-sm font-semibold sm:text-base',
                                        row.highlight ? 'text-primary' : 'text-foreground',
                                    )}
                                >
                                    {row.name}
                                </span>
                                {row.highlight && (
                                    <span className="mt-1 block text-[11px] font-semibold uppercase tracking-wide text-primary">
                                        That&apos;s us
                                    </span>
                                )}
                            </div>
                            <div className="col-span-7 sm:col-span-5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                                {row.service}
                                <span className="mt-0.5 block text-[11px] sm:text-xs">{row.note}</span>
                            </div>
                            <div className="hidden items-center justify-end sm:col-span-2 sm:flex">
                                {row.pickup ? (
                                    <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold text-primary">
                                        <Truck className="h-3.5 w-3.5" /> Yes
                                    </span>
                                ) : (
                                    <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground">
                                        <X className="h-4 w-4" /> No
                                    </span>
                                )}
                            </div>
                            <div className="col-span-12 sm:col-span-1 text-left sm:text-right">
                                <span
                                    className={cn(
                                        'font-display text-sm font-bold sm:text-base',
                                        row.highlight ? 'text-primary' : 'text-foreground',
                                    )}
                                >
                                    {row.price}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </Reveal>

            <Reveal delay={0.1}>
                <div className="mt-6 flex flex-col items-start gap-4 rounded-2xl border border-primary/30 bg-accent p-6 sm:flex-row sm:items-center">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                        <Truck className="h-6 w-6" strokeWidth={1.8} />
                    </span>
                    <p className="flex-1 text-sm font-medium leading-relaxed text-accent-foreground sm:text-base">
                        {CONVENIENCE_MESSAGE}
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                        Get Started <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </Reveal>
        </div>
    );
}

export default PricingComparison;
