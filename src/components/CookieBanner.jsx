import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useCookieConsent } from '../context/CookieConsentContext';

export default function CookieBanner() {
  const { t, localePath } = useLanguage();
  const { ready, showBanner, acceptAll, rejectOptional } = useCookieConsent();
  const c = t?.cookieBanner;

  const visible = Boolean(c) && (!ready || showBanner);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.body.classList.toggle('cookie-banner-open', visible);
    return () => document.body.classList.remove('cookie-banner-open');
  }, [visible]);

  if (!visible) return null;

  const banner = (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
      className="fixed bottom-0 left-0 right-0 z-[200] p-4 sm:p-6 pb-[max(1rem,env(safe-area-inset-bottom))]"
    >
      <div className="max-w-3xl mx-auto border border-brand-border bg-brand-dark shadow-2xl rounded-lg p-5 sm:p-6 ring-1 ring-amber-500/20">
        <h2 id="cookie-banner-title" className="text-white font-display font-bold text-lg mb-2">
          {c.title}
        </h2>
        <p id="cookie-banner-desc" className="text-gray-400 text-sm font-mono leading-relaxed mb-4">
          {c.description}{' '}
          <Link to={localePath('/polityka-cookies')} className="text-brand-neon hover:underline">
            {c.policyLink}
          </Link>
          {' · '}
          <Link to={localePath('/polityka-prywatnosci')} className="text-brand-neon hover:underline">
            {c.privacyLink}
          </Link>
        </p>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <button
            type="button"
            onClick={acceptAll}
            className="px-4 py-2.5 bg-brand-red text-white font-mono text-sm font-bold uppercase tracking-wider hover:bg-red-600 transition-colors rounded-sm"
          >
            {c.acceptAll}
          </button>
          <button
            type="button"
            onClick={rejectOptional}
            className="px-4 py-2.5 border border-brand-border text-gray-300 font-mono text-sm hover:border-brand-neon hover:text-brand-neon transition-colors rounded-sm"
          >
            {c.rejectOptional}
          </button>
        </div>
      </div>
    </div>
  );

  if (typeof document === 'undefined') return null;
  return createPortal(banner, document.body);
}
