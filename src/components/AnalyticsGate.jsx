import { Analytics } from '@vercel/analytics/react';
import { useCookieConsent } from '../context/CookieConsentContext';

/** Load Vercel Analytics only after explicit cookie consent (RODO / ePrivacy). */
export default function AnalyticsGate() {
  const { ready, analytics } = useCookieConsent();
  if (!ready || !analytics) return null;
  return <Analytics />;
}
