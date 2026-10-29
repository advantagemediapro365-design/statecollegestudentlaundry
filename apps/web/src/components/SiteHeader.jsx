import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CalendarDays, Gift, MapPin, Menu, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { IMAGES, PHONE, PHONE_TEL } from '@/lib/siteData';

const NAV = [
    { to: '/#plans', label: 'Plans' },
    { to: '/how-it-works', label: 'How It Works' },
    { to: '/parents', label: 'Parents' },
    { to: '/services', label: 'Services' },
    { to: '/college-laundry-routes', label: 'Routes' },
    { to: '/faq', label: 'FAQ' },
];

function SiteHeader() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-40 border-b border-border/70 bg-white/90 backdrop-blur-md">
            <div className="bg-[#071b3d] text-white">
                <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-1 px-4 py-2 text-center text-[10px] font-semibold uppercase tracking-wide text-blue-100 sm:grid-cols-3 sm:px-6 sm:text-[11px]">
                    <span className="flex items-center justify-center gap-1.5">
                        <CalendarDays className="h-3.5 w-3.5 text-blue-300" /> Monday &amp; Thursday pickup routes
                    </span>
                    <span className="hidden items-center justify-center gap-1.5 sm:flex">
                        <Gift className="h-3.5 w-3.5 text-blue-300" /> Weekly &amp; monthly plans available
                    </span>
                    <span className="hidden items-center justify-center gap-1.5 sm:flex">
                        <MapPin className="h-3.5 w-3.5 text-blue-300" /> Serving State College &amp; University Park
                    </span>
                </div>
            </div>
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
                <Link to="/" className="flex items-center gap-2.5" aria-label="State College Student Laundry — home">
                    <img
                        src={IMAGES.logo}
                        alt=""
                        className="h-14 w-14 rounded-xl bg-white object-contain"
                        aria-hidden="true"
                    />
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
                    <Button asChild className="hidden rounded-lg bg-[#0b2147] px-5 hover:bg-[#163668] sm:inline-flex">
                        <a href={`tel:${PHONE_TEL}`}>Call to Sign Up</a>
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
                                    <a href={`tel:${PHONE_TEL}`} onClick={() => setOpen(false)}>
                                        Call to Sign Up
                                    </a>
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
