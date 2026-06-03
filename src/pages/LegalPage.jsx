import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PublicLayout from '../components/PublicLayout';
import { useLanguage } from '../context/LanguageContext';
import { LEGAL_DOCS } from '../data/legalDocuments';

export default function LegalPage({ docKey }) {
  const { lang, localePath } = useLanguage();
  const doc = LEGAL_DOCS[lang]?.[docKey] ?? LEGAL_DOCS.pl[docKey];

  useEffect(() => {
    if (doc?.title) document.title = `${doc.title} | #Polska2038`;
  }, [doc?.title]);

  if (!doc) return null;

  const otherLinks = [
    { key: 'privacy', path: '/polityka-prywatnosci', label: lang === 'en' ? 'Privacy' : 'Prywatność' },
    { key: 'cookies', path: '/polityka-cookies', label: lang === 'en' ? 'Cookies' : 'Cookies' },
    { key: 'terms', path: '/regulamin', label: lang === 'en' ? 'Terms' : 'Regulamin' },
  ].filter((l) => l.key !== docKey);

  return (
    <PublicLayout pageTitle={doc.title} pageSubtitle={`${lang === 'en' ? 'Last updated' : 'Ostatnia aktualizacja'}: ${doc.updated}`}>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-20">
        <p className="text-gray-400 font-mono text-sm leading-relaxed mb-10 border-l-2 border-brand-neon pl-4">
          {doc.intro}
        </p>

        {doc.sections.map((section) => (
          <section key={section.h} className="mb-10">
            <h2 className="text-xl font-display font-bold text-white mb-4">{section.h}</h2>
            {section.p?.map((para, i) => (
              <p key={i} className="text-gray-400 font-mono text-sm leading-relaxed mb-3">
                {para}
              </p>
            ))}
            {section.items && (
              <div className="overflow-x-auto border border-brand-border rounded">
                <table className="w-full text-left text-sm font-mono">
                  <thead>
                    <tr className="border-b border-brand-border text-gray-500">
                      <th className="p-3">ID</th>
                      <th className="p-3">{lang === 'en' ? 'Type' : 'Typ'}</th>
                      <th className="p-3">{lang === 'en' ? 'Purpose' : 'Cel'}</th>
                      <th className="p-3">{lang === 'en' ? 'Duration' : 'Czas'}</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-400">
                    {section.items.map((row) => (
                      <tr key={row.name} className="border-b border-brand-border/50">
                        <td className="p-3 text-brand-neon">{row.name}</td>
                        <td className="p-3">{row.type}</td>
                        <td className="p-3">{row.purpose}</td>
                        <td className="p-3">{row.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        ))}

        <nav className="pt-8 border-t border-brand-border flex flex-wrap gap-4 text-sm font-mono">
          {otherLinks.map((l) => (
            <Link key={l.key} to={localePath(l.path)} className="text-gray-500 hover:text-brand-neon transition-colors">
              → {l.label}
            </Link>
          ))}
          <Link to={localePath('/kontakt')} className="text-gray-500 hover:text-brand-neon transition-colors">
            → {lang === 'en' ? 'Contact' : 'Kontakt'}
          </Link>
        </nav>
      </article>
    </PublicLayout>
  );
}
