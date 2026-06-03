import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'polska2038_cookie_consent';

const defaultConsent = {
  ready: true,
  showBanner: false,
  analytics: false,
  acceptAll: () => {},
  rejectOptional: () => {},
  openSettings: () => {},
  setShowBanner: () => {},
};

const CookieConsentContext = createContext(defaultConsent);

function readStored() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (typeof parsed?.analytics !== 'boolean') return null;
    return { analytics: parsed.analytics, decidedAt: parsed.decidedAt ?? null };
  } catch {
    return null;
  }
}

function writeStored(analytics) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ analytics: !!analytics, decidedAt: new Date().toISOString() }),
  );
}

export function CookieConsentProvider({ children }) {
  const [ready, setReady] = useState(false);
  /** Domyślnie true — baner widoczny do odczytu localStorage (unika „braku” banera przy hydracji). */
  const [showBanner, setShowBanner] = useState(true);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const stored = readStored();
    if (stored) {
      setAnalytics(stored.analytics);
      setShowBanner(false);
    }
    setReady(true);
  }, []);

  const acceptAll = useCallback(() => {
    writeStored(true);
    setAnalytics(true);
    setShowBanner(false);
  }, []);

  const rejectOptional = useCallback(() => {
    writeStored(false);
    setAnalytics(false);
    setShowBanner(false);
  }, []);

  const openSettings = useCallback(() => {
    setShowBanner(true);
  }, []);

  const value = useMemo(
    () => ({
      ready,
      showBanner,
      analytics,
      acceptAll,
      rejectOptional,
      openSettings,
      setShowBanner,
    }),
    [ready, showBanner, analytics, acceptAll, rejectOptional, openSettings],
  );

  return (
    <CookieConsentContext.Provider value={value}>{children}</CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  return useContext(CookieConsentContext);
}
