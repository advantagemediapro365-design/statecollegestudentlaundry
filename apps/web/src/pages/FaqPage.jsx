import React from 'react';
import { Helmet } from 'react-helmet';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FAQS } from '@/lib/siteData';

function FaqPage() {
    return (
        <>
            <Helmet>
                <title>FAQ | Student Laundry Pickup & Delivery in State College</title>
                <meta
                    name="description"
                    content="Answers about student laundry pickup and delivery in State College: how pickup works, dorm and apartment arrangements, wash dry fold, recurring plans, turnaround, and service area eligibility."
                />
            </Helmet>
            <Seo
                title="FAQ — State College Student Laundry Pickup & Delivery"
                description="Common questions about laundry pickup, wash dry fold, dorm and apartment arrangements, plans, and eligibility."
                siteName="StateCollegeStudentLaundry.com"
            />

            <PageHero
                eyebrow="FAQ"
                title="Frequently Asked Questions"
                description="Everything students and parents ask about laundry pickup and delivery in the State College area. Don't see your question? Contact the team and we will help."
            />

            <section className="px-4 py-16 sm:px-6 sm:py-20">
                <div className="mx-auto max-w-3xl">
                    <Reveal>
                        <Accordion type="single" collapsible className="space-y-3">
                            {FAQS.map((faq, i) => (
                                <AccordionItem
                                    key={faq.q}
                                    value={`faq-${i}`}
                                    className="rounded-2xl border border-border bg-card px-5"
                                >
                                    <AccordionTrigger className="py-5 text-left font-display text-base font-semibold hover:no-underline">
                                        {faq.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                                        {faq.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </Reveal>
                </div>
            </section>

            <CTASection
                title="Still Have a Question?"
                subtitle="Send us a message through the contact form — or go ahead and request a pickup, and we will confirm the details with you."
            />
        </>
    );
}

export default FaqPage;
