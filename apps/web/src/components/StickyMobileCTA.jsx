import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarCheck, Phone } from 'lucide-react';
import { PHONE, PHONE_TEL } from '@/lib/siteData';

function StickyMobileCTA() {
    return (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white/95 px-4 py-3 backdrop-blur-md md:hidden">
            <div className="flex items-center gap-3">
                <Link
                    to="/contact"
                    className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform active:scale-[0.98]"
                >
                    <CalendarCheck className="h-4 w-4" />
                    Schedule a Pickup
                </Link>
                <a
                    href={`tel:${PHONE_TEL}`}
                    className="flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-white px-5 text-sm font-semibold text-primary transition-transform active:scale-[0.98]"
                    aria-label={`Call or text ${PHONE}`}
                >
                    <Phone className="h-4 w-4" />
                    Call
                </a>
            </div>
        </div>
    );
}

export default StickyMobileCTA;
