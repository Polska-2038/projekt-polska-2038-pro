import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { applySeoToDocument } from '../seo/routes';

/** Utrzymuje title i meta przy nawigacji SPA (po pierwszym SSR/HTML). */
export default function SeoManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    applySeoToDocument(pathname);
  }, [pathname]);

  useEffect(() => {
    const token = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION;
    if (!token) return;
    let el = document.querySelector('meta[name="google-site-verification"]');
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('name', 'google-site-verification');
      document.head.appendChild(el);
    }
    el.setAttribute('content', token);
  }, []);

  return null;
}
