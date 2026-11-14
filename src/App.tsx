import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { getSavedLanguage, LanguageProvider } from './context/LanguageContext';
import { ContactPage } from './pages/ContactPage';
import { CVPage } from './pages/CVPage';
import { HomePage } from './pages/HomePage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const RootRedirect: React.FC = () => {
  const savedLang = getSavedLanguage();
  return <Navigate to={`/${savedLang}`} replace />;
};

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<RootRedirect />} />

          {/* Spanish routes (default) */}
          <Route path="/es" element={<HomePage />} />
          <Route path="/es/works" element={<HomePage />} />
          <Route path="/es/works/:slug" element={<ProjectDetailPage />} />
          <Route path="/es/cv" element={<CVPage />} />
          <Route path="/es/contact" element={<ContactPage />} />

          {/* English routes */}
          <Route path="/en" element={<HomePage />} />
          <Route path="/en/works" element={<HomePage />} />
          <Route path="/en/works/:slug" element={<ProjectDetailPage />} />
          <Route path="/en/cv" element={<CVPage />} />
          <Route path="/en/contact" element={<ContactPage />} />

          {/* Fallback */}
          <Route path="*" element={<RootRedirect />} />
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  );
}
