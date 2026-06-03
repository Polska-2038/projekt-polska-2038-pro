import { Link } from 'react-router-dom';
import { Info } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

/** Site-wide notice: pro bono civic demo — not official endorsements (footer). */
export default function DemoDisclaimer() {
  const { t, localePath } = useLanguage();
  const d = t?.demoDisclaimer;
  if (!d) return null;

  return (
    <div
      role="note"
      aria-label={d.ariaLabel}
      className="rounded-lg border border-amber-500/25 bg-amber-950/30"
    >
      <div className="px-4 sm:px-5 py-3 sm:py-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
        <div className="flex items-start gap-2 flex-1 min-w-0">
          <Info size={16} className="text-amber-400 flex-shrink-0 mt-0.5" aria-hidden />
          <p className="text-amber-100/90 text-[11px] sm:text-xs font-mono leading-relaxed">
            <span className="font-bold text-amber-300 uppercase tracking-wide">{d.badge}</span>
            {' — '}
            {d.body}{' '}
            <Link to={localePath('/regulamin')} className="text-amber-200 underline hover:text-white whitespace-nowrap">
              {d.learnMore}
            </Link>
          </p>
        </div>
        <span className="hidden md:inline text-amber-500/70 text-[10px] font-mono uppercase tracking-widest whitespace-nowrap">
          {d.proBono}
        </span>
      </div>
    </div>
  );
}
