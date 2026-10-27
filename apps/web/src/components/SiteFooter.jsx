import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { IMAGES, PHONE, PHONE_TEL } from '@/lib/siteData';

function SiteFooter() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-border bg-secondary/50">
            <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
                <div>
                    <div className="flex items-center gap-2.5">
                        <img
                            src={IMAGES.logo}
                            alt=""
                            className="h-14 w-14 rounded-xl bg-white object-contain"
                            aria-hidden="true"
                        />
                        <span className="font-display text-base font-bold tracking-tight">State College Student Laundry</span>
                    </div>
                    <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                        Student laundry pickup and delivery service in State College —
                        serving Penn State students and State College area students with convenient wash, dry & fold service.
                    </p>
                    <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                        State College Student Laundry is not affiliated with, endorsed by, or sponsored by Penn State University.
                    </p>
                    <a
                        href={`tel:${PHONE_TEL}`}
                        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                        aria-label={`Call or text ${PHONE}`}
                    >
                        <Phone className="h-4 w-4" strokeWidth={1.8} />
                        {PHONE}
                    </a>
                </div>

                <nav aria-label="Footer">
                    <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-foreground">Explore</h3>
                    <ul className="mt-4 grid grid-cols-1 gap-2.5 text-sm">
                        {[
                            ['/', 'Home'],
                            ['/student-laundry', 'Student Plans'],
                            ['/pricing', 'Pricing'],
                            ['/penn-state', 'Penn State University Park'],
                            ['/college-laundry-routes', 'College Routes'],
                            ['/parents', 'Parents'],
                            ['/how-it-works', 'How It Works'],
                            ['/service-area', 'Service Area'],
                            ['/faq', 'FAQ'],
                        ].map(([to, label]) => (
                            <li key={to}>
                                <Link to={to} className="text-muted-foreground transition-colors hover:text-primary">
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div>
                    <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-foreground">Get Started</h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                        Ready to hand off your laundry? Send a scheduling request and we will confirm eligibility and
                        availability for your area.
                    </p>
                    <Link
                        to="/contact"
                        className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                        Start My Plan <ArrowRight className="h-4 w-4" />
                    </Link>
                    <p className="mt-4 text-sm">
                        <Link to="/contact" className="font-medium text-primary underline-offset-4 hover:underline">
                            Contact & scheduling
                        </Link>
                    </p>
                    <a
                        href={`tel:${PHONE_TEL}`}
                        className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                        aria-label={`Call or text ${PHONE}`}
                    >
                        <Phone className="h-4 w-4" strokeWidth={1.8} />
                        Call or Text {PHONE}
                    </a>
                </div>
            </div>

            <div className="border-t border-border">
                <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
                    <span>© {year} State College Student Laundry · StateCollegeStudentLaundry.com</span>
                    <span>Serving students in eligible State College and surrounding service areas.</span>
                </div>
            </div>
        </footer>
    );
}

export default SiteFooter;
