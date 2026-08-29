import React from 'react';
import Reveal from '@/components/Reveal';

function PageHero({ eyebrow, title, description }) {
    return (
        <section className="border-b border-border bg-gradient-to-b from-secondary/70 to-background px-4 py-14 sm:px-6 sm:py-20">
            <div className="mx-auto max-w-3xl text-center">
                <Reveal>
                    {eyebrow && (
                        <span className="inline-flex items-center rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
                            {eyebrow}
                        </span>
                    )}
                    <h1 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
                        {title}
                    </h1>
                    {description && (
                        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                            {description}
                        </p>
                    )}
                </Reveal>
            </div>
        </section>
    );
}

export default PageHero;
