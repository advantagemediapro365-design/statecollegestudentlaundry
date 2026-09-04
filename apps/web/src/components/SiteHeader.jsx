import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, Phone, WashingMachine } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { PHONE, PHONE_TEL } from '@/lib/siteData';

const NAV = [
    { to: '/student-laundry', label: 'Plans' },
    { to: '/parents', label: 'Parents' },
    { to: '/penn-state', label: 'Penn State' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/faq', label: 'FAQ' },
];

function SiteHeader() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-40 border-b border-border/70 bg-white/90 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
                <Link to="/" className="flex items-center gap-2.5" aria-label="State College Student Laundry — home">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                        <WashingMachine className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <span className="leading-tight">
                        <span className="block font-display text-[15px] font-bold tracking-tight">State College Student Laundry</span>
                        <span className="block text-[11px] font-medium text-muted-foreground">StateCollegeStudentLaundry.com</span>
                    </span>
                </Link>

                <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
                    {NAV.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            className={({ isActive }) =>
                                cn(
                                    'rounded-full px-3.5 py-2 text-sm font-medium transition-colors',
                                    isActive
                                        ? 'bg-secondary text-primary'
                                        : 'text-muted-foreground hover:bg-secondary/70 hover:text-foreground',
                                )
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <a
                        href={`tel:${PHONE_TEL}`}
                        className="hidden items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold text-primary transition-colors hover:bg-secondary xl:inline-flex"
                        aria-label={`Call or text ${PHONE}`}
                    >
                        <Phone className="h-4 w-4" strokeWidth={1.8} />
                        {PHONE}
                    </a>
                    <Button asChild className="hidden rounded-full px-5 sm:inline-flex">
                        <Link to="/book">Start My Plan</Link>
                    </Button>
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon" className="rounded-full lg:hidden" aria-label="Open menu">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-80">
                            <div className="mt-8 flex flex-col gap-1">
                                {NAV.map((item) => (
                                    <Link
                                        key={item.to}
                                        to={item.to}
                                        onClick={() => setOpen(false)}
                                        className="rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                                <a
                                    href={`tel:${PHONE_TEL}`}
                                    onClick={() => setOpen(false)}
                                    className="mt-2 flex items-center gap-2 rounded-xl px-4 py-3 text-base font-semibold text-primary transition-colors hover:bg-secondary"
                                >
                                    <Phone className="h-5 w-5" strokeWidth={1.8} />
                                    Call or Text {PHONE}
                                </a>
                                <Button asChild className="mt-4 h-12 rounded-xl text-base">
                                    <Link to="/contact" onClick={() => setOpen(false)}>
                                        Start My Plan
                                    </Link>
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}

export default SiteHeader;
