import { Link } from 'react-router-dom';
import { Info } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

/** Site-wide notice: pro bono civic demo — not official endorsements. */
export default function DemoDisclaimer({ compact = false }) {
  const { t, localePath } = useLanguage();
  const d = t?.demoDisclaimer;
  if (!d) return null;

  if (compact) {
    return (
      <p className="text-gray-600 text-[10px] sm:text-[11px] font-mono leading-relaxed text-center px-4">
        {d.compact}{' '}
        <Link to={localePath('/regulamin')} className="text-brand-neon/80 hover:text-brand-neon underline">
          {d.learnMore}
        </Link>
      </p>
    );
  }

  return (
    <div
      role="note"
      aria-label={d.ariaLabel}
      className="border-b border-amber-500/25 bg-amber-950/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
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
        <span className="text-amber-500/70 text-[10px] font-mono uppercase tracking-widest whitespace-nowrap">
          {d.proBono}
        </span>
      </div>
    </div>
  );
}
