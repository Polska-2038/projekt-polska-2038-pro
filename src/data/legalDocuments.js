/** Legal copy — PL/EN. Not legal advice; align with your entity details if incorporated. */

export const LEGAL_DOCS = {
  pl: {
    privacy: {
      title: 'Polityka prywatności',
      updated: '3 czerwca 2026',
      intro:
        'Niniejsza polityka opisuje zasady przetwarzania danych osobowych użytkowników serwisu polska2038.pl (dalej: „Serwis”), prowadzonego w ramach niekomercyjnej inicjatywy obywatelskiej #Polska2038 (pro bono). Serwis nie świadczy płatnych usług online.',
      sections: [
        {
          h: '1. Administrator danych',
          p: [
            'Administratorem danych osobowych jest inicjatywa #Polska2038.',
            'Kontakt w sprawach ochrony danych: polska2038@proton.me',
            'Serwis ma charakter informacyjno-prezentacyjny (koncepcja programu, materiały, formularz kontaktowy).',
          ],
        },
        {
          h: '2. Jakie dane przetwarzamy',
          p: [
            'Dane podawane dobrowolnie w formularzu kontaktowym: imię i nazwisko, organizacja, adres e-mail, rola, temat i treść wiadomości.',
            'Dane techniczne: adres IP, nagłówek User-Agent, język i ścieżka strony — w celach bezpieczeństwa i ograniczenia nadużyć formularza.',
            'Dane z plików cookies — zgodnie z Polityką cookies (np. zapis zgody, opcjonalna analityka).',
            'W panelu demonstracyjnym (po zalogowaniu): dane konta użytkownika testowego oraz dane zastępcze (demo) talentów — bez powiązania z realnymi osobami fizycznymi w wersji demonstracyjnej.',
          ],
        },
        {
          h: '3. Cele i podstawy prawne (RODO)',
          p: [
            'Obsługa zapytań z formularza — art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes: korespondencja i rozwój inicjatywy) lub art. 6 ust. 1 lit. a (zgoda — jeśli wyraźnie oznaczysz zgodę w formularzu).',
            'Bezpieczeństwo Serwisu (rate limiting, logi techniczne) — art. 6 ust. 1 lit. f RODO.',
            'Analityka odwiedzin (tylko po Twojej zgodzie w banerze cookies) — art. 6 ust. 1 lit. a RODO.',
            'Prowadzenie konta w panelu demo — art. 6 ust. 1 lit. b RODO (świadczenie usługi konta testowego).',
          ],
        },
        {
          h: '4. Odbiorcy danych',
          p: [
            'Hosting i infrastruktura: Vercel Inc. (USA/UE — w zależności od regionu; standardowe klauzule umowne).',
            'Wysyłka powiadomień z formularza: Resend (dostawca poczty transakcyjnej).',
            'Dane nie są sprzedawane podmiotom trzecim w celach marketingowych.',
          ],
        },
        {
          h: '5. Okres przechowywania',
          p: [
            'Wiadomości z formularza: przez czas niezbędny do obsługi korespondencji i archiwizacji zgłoszeń programu, nie dłużej niż 24 miesiące od ostatniego kontaktu, chyba że przepisy wymagają dłużej.',
            'Logi techniczne: do 12 miesięcy.',
            'Zgoda cookies: do 12 miesięcy lub do wycofania.',
          ],
        },
        {
          h: '6. Twoje prawa',
          p: [
            'Masz prawo: dostępu, sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia danych, sprzeciwu oraz wycofania zgody (bez wpływu na zgodność z prawem przetwarzania przed wycofaniem).',
            'Skargę możesz wnieść do Prezesa UODO (uodo.gov.pl).',
            'Wnioski realizujemy pod adresem: polska2038@proton.me',
          ],
        },
        {
          h: '7. Przekazywanie poza EOG',
          p: [
            'Część dostawców (np. Vercel) może przetwarzać dane poza EOG. Stosujemy mechanizmy zgodne z RODO (m.in. standardowe klauzule umowne) oferowane przez dostawców.',
          ],
        },
        {
          h: '8. Zmiany polityki',
          p: [
            'Politykę możemy zaktualizować. Data obowiązywania będzie widoczna na górze dokumentu. Istotne zmiany podamy w Serwisie.',
          ],
        },
      ],
    },
    cookies: {
      title: 'Polityka cookies',
      updated: '3 czerwca 2026',
      intro:
        'Serwis polska2038.pl używa plików cookies i podobnych technologii (localStorage) zgodnie z Prawem telekomunikacyjnym i RODO.',
      sections: [
        {
          h: '1. Czym są cookies',
          p: [
            'Cookies to małe pliki zapisywane w przeglądarce. localStorage służy u nas m.in. do zapisu preferencji języka i zgody na cookies.',
          ],
        },
        {
          h: '2. Kategorie',
          p: [
            'Niezbędne — wymagane do działania Serwisu (np. zapis decyzji o cookies, preferencja języka). Nie wymagają zgody.',
            'Analityczne — pomagają zrozumieć ruch na stronie (Vercel Web Analytics). Włączane tylko po Twojej zgodzie.',
          ],
        },
        {
          h: '3. Lista',
          items: [
            { name: 'polska2038_cookie_consent', type: 'localStorage', purpose: 'Zapis zgody na cookies (niezbędne)', duration: '12 miesięcy' },
            { name: 'preferredLang', type: 'localStorage', purpose: 'Zapamiętanie wyboru języka (niezbędne)', duration: 'do wyczyszczenia' },
            { name: 'Vercel Analytics', type: 'analityka', purpose: 'Statystyki odwiedzin (opcjonalne)', duration: 'zgodnie z Vercel' },
          ],
        },
        {
          h: '4. Zarządzanie zgodą',
          p: [
            'Przy pierwszej wizycie wyświetlamy baner. Możesz zaakceptować wszystkie, odrzucić opcjonalne lub zmienić wybór później linkiem „Ustawienia cookies” w stopce.',
            'Odrzucenie analityki nie blokuje korzystania z Serwisu.',
            'Cookies możesz też usunąć w ustawieniach przeglądarki.',
          ],
        },
        {
          h: '5. Kontakt',
          p: ['Pytania: polska2038@proton.me'],
        },
      ],
    },
    terms: {
      title: 'Regulamin serwisu',
      updated: '3 czerwca 2026',
      intro:
        'Regulamin określa zasady korzystania z serwisu polska2038.pl. Korzystając z Serwisu, akceptujesz poniższe postanowienia.',
      sections: [
        {
          h: '1. Serwis i charakter treści',
          p: [
            'Serwis prezentuje koncepcję programu #Polska2038 — inicjatywy obywatelskiej pro bono w zakresie identyfikacji talentów sportowych. Udostępnianie jest nieodpłatne.',
            'Treści (w tym dane liczbowe, mapy, profile „talentów”, cytaty prasowe, posty w mediach społecznościowych i logotypy partnerów) mają charakter demonstracyjny, scenariuszowy i informacyjny — nie stanowią oficjalnych komunikatów PZPN, Ministerstwa Sportu, FIFA, UEFA ani wymienionych podmiotów komercyjnych, o ile nie zaznaczono inaczej na piśmie.',
            'Serwis nie stanowi oferty handlowej w rozumieniu Kodeksu cywilnego ani decyzji administracyjnej. Nie jest oficjalną stroną państwową ani federacji.',
          ],
        },
        {
          h: '1a. Open source (MIT)',
          p: [
            'Kod źródłowy części projektu jest udostępniany na licencji MIT w repozytorium GitHub (Polska-2038/projekt-polska-2038-pro). Możesz kopiować, modyfikować i wykorzystywać kod zgodnie z warunkami licencji, pod warunkiem zachowania informacji o prawach autorskich.',
            'Materiały graficzne, teksty koncepcyjne i znaki mogą podlegać odrębnym ograniczeniom — sprawdź README repozytorium.',
          ],
        },
        {
          h: '2. Użytkownik',
          p: [
            'Użytkownikiem może być każda osoba korzystająca z Serwisu. Panel skauta (/panel) jest kontem demonstracyjnym — nie należy wpisywać prawdziwych danych wrażliwych osób trzecich bez podstawy prawnej.',
          ],
        },
        {
          h: '3. Zasady korzystania',
          p: [
            'Zakazane jest: dostarczanie treści bezprawnych, próby włamania, automatyczne scrapingowanie obciążające infrastrukturę, wysyłanie spamu przez formularz.',
            'Zastrzegamy prawo do czasowego ograniczenia dostępu przy nadużyciach (rate limiting).',
          ],
        },
        {
          h: '4. Własność intelektualna',
          p: [
            'Materiały Serwisu (teksty, layout, grafika, kod) są chronione prawem autorskim. Kod źródłowy części projektu udostępniany jest na licencji MIT — szczegóły w repozytorium GitHub.',
            'Znak #Polska2038 używany jest w kontekście prezentacji programu.',
          ],
        },
        {
          h: '5. Odpowiedzialność',
          p: [
            'Serwis udostępniany jest „tak jak jest” (as is). Dokładamy starań o poprawność merytoryczną, jednak nie gwarantujemy nieprzerwanego działania ani kompletności danych demo.',
            'Nie ponosimy odpowiedzialności za decyzje podjęte wyłącznie na podstawie treści Serwisu bez weryfikacji w kanałach urzędowych.',
          ],
        },
        {
          h: '6. Linki zewnętrzne',
          p: [
            'Serwis może zawierać odnośniki do stron trzecich (GitHub, X itd.). Nie odpowiadamy za ich treść i polityki prywatności.',
          ],
        },
        {
          h: '7. Postanowienia końcowe',
          p: [
            'Prawem właściwym jest prawo polskie. Spory w pierwszej kolejności prosimy kierować na polska2038@proton.me.',
            'Regulamin może ulec zmianie — aktualna wersja zawsze w Serwisie.',
          ],
        },
      ],
    },
  },
  en: {
    privacy: {
      title: 'Privacy Policy',
      updated: '3 June 2026',
      intro:
        'This policy describes how personal data is processed when you use polska2038.pl (the “Site”), operated as a non-commercial, pro bono #Polska2038 civic initiative. The Site does not sell online services.',
      sections: [
        {
          h: '1. Data controller',
          p: [
            'Controller: #Polska2038 initiative.',
            'Privacy contact: polska2038@proton.me',
            'The Site is informational (program concept, materials, contact form).',
          ],
        },
        {
          h: '2. Data we process',
          p: [
            'Contact form (voluntary): name, organisation, email, role, subject, message.',
            'Technical data: IP address, User-Agent, language and page path — security and abuse prevention.',
            'Cookies — see Cookie Policy (consent storage, optional analytics).',
            'Demo scout panel: test account and synthetic talent data — not linked to real individuals in the public demo.',
          ],
        },
        {
          h: '3. Purposes and legal bases (GDPR)',
          p: [
            'Contact enquiries — Art. 6(1)(f) GDPR (legitimate interest) or Art. 6(1)(a) where consent is explicitly given.',
            'Security (rate limits, technical logs) — Art. 6(1)(f) GDPR.',
            'Analytics (only after cookie consent) — Art. 6(1)(a) GDPR.',
            'Demo account — Art. 6(1)(b) GDPR.',
          ],
        },
        {
          h: '4. Recipients',
          p: [
            'Hosting: Vercel Inc.',
            'Contact notifications: Resend (transactional email).',
            'We do not sell personal data for marketing.',
          ],
        },
        {
          h: '5. Retention',
          p: [
            'Contact messages: as long as needed for correspondence, up to 24 months unless law requires longer.',
            'Technical logs: up to 12 months.',
            'Cookie consent: up to 12 months or until withdrawn.',
          ],
        },
        {
          h: '6. Your rights',
          p: [
            'Access, rectification, erasure, restriction, portability, objection, withdraw consent.',
            'Complaint to your supervisory authority (in Poland: UODO).',
            'Requests: polska2038@proton.me',
          ],
        },
        {
          h: '7. Transfers outside the EEA',
          p: ['Some providers may process data outside the EEA using GDPR-compliant safeguards (e.g. SCCs).'],
        },
        {
          h: '8. Changes',
          p: ['We may update this policy. The effective date is shown at the top.'],
        },
      ],
    },
    cookies: {
      title: 'Cookie Policy',
      updated: '3 June 2026',
      intro:
        'polska2038.pl uses cookies and similar technologies (localStorage) under EU ePrivacy rules and the GDPR.',
      sections: [
        {
          h: '1. What are cookies',
          p: [
            'Small files stored in your browser. We use localStorage for language preference and cookie consent.',
          ],
        },
        {
          h: '2. Categories',
          p: [
            'Essential — required for the Site (consent record, language). No consent required.',
            'Analytics — Vercel Web Analytics. Only enabled with your consent.',
          ],
        },
        {
          h: '3. List',
          items: [
            { name: 'polska2038_cookie_consent', type: 'localStorage', purpose: 'Cookie consent (essential)', duration: '12 months' },
            { name: 'preferredLang', type: 'localStorage', purpose: 'Language preference (essential)', duration: 'until cleared' },
            { name: 'Vercel Analytics', type: 'analytics', purpose: 'Visit statistics (optional)', duration: 'per Vercel' },
          ],
        },
        {
          h: '4. Managing consent',
          p: [
            'A banner appears on first visit. You can accept all, reject optional cookies, or change your choice via “Cookie settings” in the footer.',
            'Rejecting analytics does not block use of the Site.',
          ],
        },
        {
          h: '5. Contact',
          p: ['polska2038@proton.me'],
        },
      ],
    },
    terms: {
      title: 'Terms of Use',
      updated: '3 June 2026',
      intro:
        'These terms govern use of polska2038.pl. By using the Site you accept them.',
      sections: [
        {
          h: '1. Nature of the Site',
          p: [
            'The Site presents the #Polska2038 program concept — a pro bono civic initiative on sports talent identification, provided free of charge.',
            'Content (figures, maps, talent profiles, press quotes, social posts, partner logos) is illustrative and scenario-based — not official communications from the FA, Ministry, FIFA, UEFA or listed brands unless explicitly agreed in writing.',
            'This is not a commercial offer, government site or official federation website.',
          ],
        },
        {
          h: '1a. Open source (MIT)',
          p: [
            'Source code is published under the MIT License on GitHub (Polska-2038/projekt-polska-2038-pro). You may use and modify the code under that license.',
          ],
        },
        {
          h: '2. Users',
          p: [
            'The scout panel is a demo account — do not submit real third-party sensitive data without a legal basis.',
          ],
        },
        {
          h: '3. Acceptable use',
          p: [
            'No unlawful content, hacking attempts, abusive scraping, or form spam. We may rate-limit abusive IPs.',
          ],
        },
        {
          h: '4. Intellectual property',
          p: [
            'Site materials are protected by copyright. Source code is MIT-licensed on GitHub where indicated.',
          ],
        },
        {
          h: '5. Liability',
          p: [
            'The Site is provided “as is”. We do not guarantee uninterrupted service or completeness of demo data.',
          ],
        },
        {
          h: '6. External links',
          p: ['We are not responsible for third-party sites linked from the Site.'],
        },
        {
          h: '7. Governing law',
          p: [
            'Polish law applies. Contact polska2038@proton.me before disputes.',
            'Terms may change — current version is always on the Site.',
          ],
        },
      ],
    },
  },
};

export const LEGAL_PATHS = {
  privacy: { pl: '/polityka-prywatnosci', en: '/polityka-prywatnosci' },
  cookies: { pl: '/polityka-cookies', en: '/polityka-cookies' },
  terms: { pl: '/regulamin', en: '/regulamin' },
};
