import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { CheckCircle2, ClipboardList, Loader2, MapPin, MessageSquare, Phone } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import PageHero from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PHONE, PHONE_TEL } from '@/lib/siteData';

const CONTACT_EMAIL = 'info@freshfoldaltoona.com';
const FORM_ENDPOINT = 'https://formspree.io/f/xzebzald';

const INITIAL = {
    name: '',
    email: '',
    phone: '',
    location: '',
    context: '',
    timing: '',
    service: '',
    message: '',
};

function ContactPage() {
    const [form, setForm] = useState(INITIAL);
    const [status, setStatus] = useState('idle'); // idle | sending | success | error

    const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));
    const setSelect = (key) => (value) => setForm((f) => ({ ...f, [key]: value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            const response = await fetch(FORM_ENDPOINT, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...form,
                    _subject: `Laundry pickup request from ${form.name}`,
                    _replyto: form.email,
                }),
            });
            const result = await response.json();
            if (!response.ok || result.errors) throw new Error('Formspree submission failed');
            setStatus('success');
        } catch {
            setStatus('error');
        }
    };

    return (
        <>
            <Helmet>
                <title>Schedule a Pickup | Contact State College Student Laundry</title>
                <meta
                    name="description"
                    content="Request a student laundry pickup in State College or confirm service-area eligibility. Send your details and Fresh Fold Altoona will follow up to schedule."
                />
            </Helmet>
            <Seo
                title="Schedule a Laundry Pickup in State College"
                description="Request laundry pickup and delivery or confirm eligibility for your State College area location."
                siteName="StateCollegeStudentLaundry.com"
            />

            <PageHero
                eyebrow="Contact & scheduling"
                title="Schedule a Pickup"
                description="Send a request to schedule a laundry pickup or confirm eligibility for your area. This form is a request — not a guaranteed booking — and we will follow up to confirm the details with you."
            />

            <section className="px-4 py-16 sm:px-6 sm:py-20">
                <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_380px]">
                    <Reveal>
                        <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
                            {status === 'success' ? (
                                <div className="flex flex-col items-center py-10 text-center">
                                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-primary">
                                        <CheckCircle2 className="h-8 w-8" />
                                    </span>
                                    <h2 className="mt-6 font-display text-2xl font-bold tracking-tight">
                                        Request Received
                                    </h2>
                                    <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                                        Thanks, {form.name.split(' ')[0] || 'there'} — your request was sent to our team.
                                        We will follow up to confirm service-area eligibility, pickup arrangements, and
                                        scheduling.
                                    </p>
                                    <Button
                                        variant="outline"
                                        className="mt-8 rounded-full"
                                        onClick={() => {
                                            setForm(INITIAL);
                                            setStatus('idle');
                                        }}
                                    >
                                        Send Another Request
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid gap-5 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Name *</Label>
                                            <Input
                                                id="name"
                                                required
                                                value={form.name}
                                                onChange={set('name')}
                                                placeholder="Your full name"
                                                className="h-11 rounded-xl"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email *</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                required
                                                value={form.email}
                                                onChange={set('email')}
                                                placeholder="you@example.com"
                                                className="h-11 rounded-xl"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid gap-5 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Phone</Label>
                                            <Input
                                                id="phone"
                                                type="tel"
                                                value={form.phone}
                                                onChange={set('phone')}
                                                placeholder="Best number to reach you"
                                                className="h-11 rounded-xl"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="location">Pickup Location or Area *</Label>
                                            <Input
                                                id="location"
                                                required
                                                value={form.location}
                                                onChange={set('location')}
                                                placeholder="Dorm, apartment, or area in State College"
                                                className="h-11 rounded-xl"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid gap-5 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <Label>I am a…</Label>
                                            <Select value={form.context} onValueChange={setSelect('context')}>
                                                <SelectTrigger className="h-11 rounded-xl">
                                                    <SelectValue placeholder="Select one" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="student-dorm">Student living in a dorm</SelectItem>
                                                    <SelectItem value="student-apartment">
                                                        Student in an off-campus apartment
                                                    </SelectItem>
                                                    <SelectItem value="student-other">Student — other housing</SelectItem>
                                                    <SelectItem value="parent">Parent of a student</SelectItem>
                                                    <SelectItem value="housing">Student housing resident / manager</SelectItem>
                                                    <SelectItem value="other">Other</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Preferred Pickup Timing</Label>
                                            <Select value={form.timing} onValueChange={setSelect('timing')}>
                                                <SelectTrigger className="h-11 rounded-xl">
                                                    <SelectValue placeholder="Select a time window" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="morning">Morning</SelectItem>
                                                    <SelectItem value="afternoon">Afternoon</SelectItem>
                                                    <SelectItem value="evening">Evening</SelectItem>
                                                    <SelectItem value="flexible">Flexible</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label>Laundry Service Needed</Label>
                                        <Select value={form.service} onValueChange={setSelect('service')}>
                                            <SelectTrigger className="h-11 rounded-xl">
                                                <SelectValue placeholder="Select a service" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="one-time">One-time wash, dry & fold pickup</SelectItem>
                                                <SelectItem value="recurring">Recurring laundry plan</SelectItem>
                                                <SelectItem value="semester">Semester laundry plan</SelectItem>
                                                <SelectItem value="not-sure">Not sure yet — help me decide</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea
                                            id="message"
                                            value={form.message}
                                            onChange={set('message')}
                                            placeholder="Anything else we should know — building access, questions about plans, etc."
                                            className="min-h-28 rounded-xl"
                                        />
                                    </div>

                                    {status === 'error' && <p className="text-sm font-medium text-destructive">We could not send your request. Please try again or call/text us directly.</p>}
                                    <Button
                                        type="submit"
                                        disabled={status === 'sending'}
                                        className="h-12 w-full rounded-full text-sm font-semibold sm:w-auto sm:px-8"
                                    >
                                        {status === 'sending' ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending…</> : 'Send Request'}
                                    </Button>
                                    <p className="text-xs leading-relaxed text-muted-foreground">
                                        Your request is sent securely to {CONTACT_EMAIL}. We do not store submissions in a database.
                                    </p>
                                </form>
                            )}
                        </div>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <aside className="space-y-5">
                            <div className="rounded-3xl border border-border bg-secondary/60 p-6">
                                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-primary">
                                    <Phone className="h-5 w-5" strokeWidth={1.8} />
                                </span>
                                <h2 className="mt-4 font-display text-lg font-semibold">Prefer to Call or Text?</h2>
                                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                    Reach the Fresh Fold Altoona team directly — we are happy to answer questions or
                                    help you schedule a pickup.
                                </p>
                                <a
                                    href={`tel:${PHONE_TEL}`}
                                    className="mt-4 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
                                    aria-label={`Call or text ${PHONE}`}
                                >
                                    <Phone className="h-4 w-4" />
                                    {PHONE}
                                </a>
                            </div>
                            <div className="rounded-3xl border border-border bg-secondary/60 p-6">
                                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-primary">
                                    <ClipboardList className="h-5 w-5" strokeWidth={1.8} />
                                </span>
                                <h2 className="mt-4 font-display text-lg font-semibold">What Happens Next</h2>
                                <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                                    <li>We review your request and pickup location.</li>
                                    <li>We confirm service-area eligibility and pickup arrangements.</li>
                                    <li>We follow up to schedule your pickup and answer any questions.</li>
                                </ol>
                            </div>
                            <div className="rounded-3xl border border-border bg-secondary/60 p-6">
                                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-primary">
                                    <MapPin className="h-5 w-5" strokeWidth={1.8} />
                                </span>
                                <h2 className="mt-4 font-display text-lg font-semibold">Service Area</h2>
                                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                    We serve students in eligible State College and surrounding service areas. Include
                                    your dorm, apartment, or area in the form and we will confirm whether pickup is
                                    available for you.
                                </p>
                            </div>
                            <div className="rounded-3xl border border-border bg-secondary/60 p-6">
                                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-primary">
                                    <MessageSquare className="h-5 w-5" strokeWidth={1.8} />
                                </span>
                                <h2 className="mt-4 font-display text-lg font-semibold">Questions First?</h2>
                                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                    Not ready to schedule? Use the same form to ask about plans, turnaround, or pickup
                                    arrangements — just leave your question in the message field.
                                </p>
                            </div>
                        </aside>
                    </Reveal>
                </div>
            </section>
        </>
    );
}

export default ContactPage;
