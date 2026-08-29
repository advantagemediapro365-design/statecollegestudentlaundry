import React from 'react';
import { Navigate, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import StickyMobileCTA from './components/StickyMobileCTA';
import HomePage from './pages/HomePage';
import HowItWorksPage from './pages/HowItWorksPage';
import ServicesPage from './pages/ServicesPage';
import StudentLaundryPage from './pages/StudentLaundryPage';
import ForParentsPage from './pages/ForParentsPage';
import ServiceAreaPage from './pages/ServiceAreaPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import CampusPage from './pages/CampusPage';
import CollegeRoutesPage from './pages/CollegeRoutesPage';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
                <SiteHeader />
                <main className="flex-1 pb-20 md:pb-0">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/how-it-works" element={<HowItWorksPage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/student-laundry" element={<StudentLaundryPage />} />
                        <Route path="/for-parents" element={<ForParentsPage />} />
                        <Route path="/parents" element={<ForParentsPage />} />
                        <Route path="/pricing" element={<ServicesPage />} />
                        <Route path="/book" element={<ContactPage />} />
                        <Route path="/penn-state" element={<Navigate to="/penn-state/university-park" replace />} />
                        <Route path="/penn-state/university-park" element={<CampusPage />} />
                        <Route path="/college-laundry-routes" element={<CollegeRoutesPage />} />
                        <Route path="/routes/route-calendar" element={<CollegeRoutesPage />} />
                        <Route path="/service-area" element={<ServiceAreaPage />} />
                        <Route path="/faq" element={<FaqPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="*" element={<HomePage />} />
                    </Routes>
                </main>
                <SiteFooter />
                <StickyMobileCTA />
            </div>
        </Router>
    );
}

export default App;
