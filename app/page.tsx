import Image from 'next/image';
import heroIllustration from '../public/hero-illustration.png';
import Reveal from '../components/Reveal';
import LiveTimer from '../components/LiveTimer';
import CountUp from '../components/CountUp';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Hourly',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: 'https://hourly.no/',
  description:
    'Timeføringsapp for frilansere og små team. Før timer, send kontrakter og hold oversikt over kundene dine.',
  offers: {
    '@type': 'Offer',
    price: '299',
    priceCurrency: 'NOK',
    priceValidUntil: '2027-12-31',
    url: 'https://hourly.no/#priser',
  },
  inLanguage: 'nb-NO',
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Koster det noe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, Hourly koster kr 299,- i måneden. Ingen bindingstid, og du kan si opp når du vil.',
      },
    },
    {
      '@type': 'Question',
      name: 'Må jeg installere noe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nei. Alt kjører i nettleseren, og dataene dine synkroniseres automatisk mellom enhetene dine.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan jeg lage kontrakter for kundene mine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Fyll inn detaljene, og du får en ferdig, juridisk ryddig kontrakt du kan laste ned som PDF og sende rett til kunden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Fungerer det for team, eller bare for meg selv?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Begge deler. Start alene, og inviter kolleger inn i arbeidsplassen din når du trenger det. Hvert medlem koster kr 299,- ekstra i måneden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan jeg prøve appen uten å opprette konto?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Demoen er åpen for alle, uten pålogging, og viser hvordan appen fungerer med eksempeldata.',
      },
    },
  ],
};

export default function HomePage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero */}
      <section className="hero">
        <div className="wrap">
          <span className="eyebrow">
            <span className="dot"></span> Bygget for frilansere og team
          </span>
          <h1>
            Få kontroll på timene <span className="highlight">uten ekstra styr</span>
          </h1>
          <p className="lead">
            Før timer, send kontrakter og hold oversikt over kundene dine — alt på ett sted. Jobb
            alene, eller inviter teamet ditt inn. Ingen regneark, ingen kaos.
          </p>
          <div className="hero-actions">
            <a href="https://app.hourly.no/login" className="btn btn-primary btn-lg">
              Start i dag
            </a>
            <a href="https://app.hourly.no/demo" className="btn btn-ghost btn-lg">
              Prøv demoen — ingen pålogging
            </a>
          </div>
          <p className="hero-note">Fra kr 299,- i måneden · Klar på under 2 minutter</p>

          <div className="preview-wrap">
            <Image
              className="hero-illustration"
              src={heroIllustration}
              alt="Illustrasjon av en fornøyd timeglass-figur som mediterer"
              width={480}
              height={567}
              priority
            />
            <div className="preview">
              <div className="preview-bar">
                <span></span>
                <span></span>
                <span></span>
                <LiveTimer />
              </div>
              <div className="preview-body">
                <div className="preview-card">
                  <div className="num">
                    <CountUp value={32} />
                  </div>
                  <div className="label">Timer denne måneden</div>
                </div>
                <div className="preview-card">
                  <div className="num">
                    <CountUp value={48400} prefix="kr " />
                  </div>
                  <div className="label">Fakturert verdi</div>
                </div>
                <div className="preview-card">
                  <div className="num">
                    <CountUp value={6} />
                  </div>
                  <div className="label">Aktive kunder</div>
                </div>
                <div className="preview-card">
                  <div className="num">4,5t</div>
                  <div className="label">Timer i dag</div>
                </div>

                <div className="preview-table">
                  <table>
                    <thead>
                      <tr>
                        <th>Dato</th>
                        <th>Kunde / Aktivitet</th>
                        <th className="num">Timer</th>
                        <th className="num">Sum</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>06.07</td>
                        <td>
                          Acme AS <span className="muted">— Nettside redesign</span>
                        </td>
                        <td className="num">3,5t</td>
                        <td className="num">kr 4 375</td>
                      </tr>
                      <tr>
                        <td>05.07</td>
                        <td>
                          Nordly Design <span className="muted">— Merkevareprofil</span>
                        </td>
                        <td className="num">2t</td>
                        <td className="num">kr 2 500</td>
                      </tr>
                      <tr>
                        <td>04.07</td>
                        <td>
                          Fjellstad Regnskap <span className="muted">— Konsultasjon</span>{' '}
                          <span className="pill">Fakturert</span>
                        </td>
                        <td className="num">1,5t</td>
                        <td className="num">kr 1 875</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="strip">
        <div className="wrap">
          <p>Laget for konsulenter, designere og utviklere som fakturerer på timer</p>
        </div>
      </div>

      {/* Features */}
      <section id="funksjoner">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">
                <span className="dot"></span> Funksjoner
              </span>
              <h2>Alt du trenger, ingenting du ikke gjør</h2>
              <p>Fem verktøy som jobber sammen, ikke fem apper du må bytte mellom.</p>
            </div>
          </Reveal>
          <Reveal delay={1} className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <polyline points="12 7 12 12 15 14" />
                </svg>
              </div>
              <h3>Timer på sekunder</h3>
              <p>
                Start stoppeklokka når du begynner å jobbe, eller før timene manuelt etterpå. Begge
                deler tar under et minutt.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3>Kunder og prosjekter</h3>
              <p>
                Søk opp kunden i Brønnøysundregisteret og få org.nr og adresse automatisk.
                Prosjekter gir deg riktige rapporter uten ekstra jobb.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </div>
              <h3>Kontrakter på minutter</h3>
              <p>
                Fyll inn detaljene dine, så lager vi en ferdig, juridisk ryddig kontrakt du kan
                sende til kunden — og laste ned som PDF.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <h3>Smarte maler</h3>
              <p>
                Fører du samme jobb ofte? Appen kjenner det igjen og foreslår en mal, så slipper du
                å skrive det samme på nytt hver gang.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18" />
                  <path d="M18.7 8l-5.1 5.2-3-3L7 14" />
                </svg>
              </div>
              <h3>Rapporter og fakturering</h3>
              <p>
                Se hvor mye du har jobbet og for hvem, eksporter til CSV, og merk timer som
                fakturert med ett klikk.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <h3>Full oversikt</h3>
              <p>
                Følg med på timer, inntekt og aktive kunder i sanntid — på tvers av alle enhetene
                dine.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Team */}
      <section id="team">
        <div className="wrap">
          <div className="team-grid">
            <Reveal className="team-copy">
              <span className="eyebrow">
                <span className="dot"></span> Nytt: Team
              </span>
              <h2>Jobb alene i dag, ta med teamet i morgen</h2>
              <p>
                Inviter kolleger inn i arbeidsplassen din med ett klikk. De ser samme kunder,
                prosjekter og timer som deg — ingenting å sette opp på nytt.
              </p>
              <ul className="team-points">
                <li>
                  <span className="team-check">✓</span> Del kunder, prosjekter og timeføring med
                  teamet
                </li>
                <li>
                  <span className="team-check">✓</span> Inviter med e-post — ferdig på under et
                  minutt
                </li>
                <li>
                  <span className="team-check">✓</span> Fjern medlemmer når som helst, ingen
                  bindingstid
                </li>
              </ul>
              <p className="team-price-note">
                kr 299,- i måneden per medlem — legges kun til når de faktisk takker ja til
                invitasjonen.
              </p>
              <a href="https://app.hourly.no/demo/team" className="btn btn-primary">
                Se team-siden i demoen
              </a>
            </Reveal>
            <Reveal delay={1} className="team-mock">
              <div className="team-mock-header">
                <span>Kostnad for teamet</span>
                <strong>kr 299,- × 3 = kr 897,- / mnd</strong>
              </div>
              <div className="team-mock-row">
                <span className="team-avatar">DE</span>
                <div className="team-mock-info">
                  <strong>deg@firma.no</strong>
                  <span>
                    Eier · <span className="team-pill team-pill-active">Aktiv</span>
                  </span>
                </div>
              </div>
              <div className="team-mock-row">
                <span className="team-avatar">KA</span>
                <div className="team-mock-info">
                  <strong>kari@firma.no</strong>
                  <span>
                    Medlem · <span className="team-pill team-pill-active">Aktiv</span>
                  </span>
                </div>
              </div>
              <div className="team-mock-row">
                <span className="team-avatar">NY</span>
                <div className="team-mock-info">
                  <strong>nyansatt@firma.no</strong>
                  <span>
                    Medlem · <span className="team-pill team-pill-pending">Venter</span>
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="slik-fungerer-det">
        <div className="wrap how-it-works">
          <div className="section-head" style={{ marginBottom: 40 }}>
            <span className="eyebrow">
              <span className="dot"></span> Slik fungerer det
            </span>
            <h2>I gang på tre steg</h2>
          </div>
          <Reveal className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <h3>Legg til en kunde</h3>
              <p>Skriv inn navnet, eller søk det opp i Brønnøysundregisteret. Ferdig på 30 sekunder.</p>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <h3>Før timene dine</h3>
              <p>Start stoppeklokka, eller skriv inn tidspunktene manuelt. Du velger selv.</p>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <h3>Send og fakturer</h3>
              <p>
                Eksporter rapporten, send en kontrakt, eller merk timer som fakturert. Du
                bestemmer neste steg.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pricing / CTA */}
      <section id="priser">
        <div className="wrap">
          <Reveal className="pricing-card">
            <div className="price-tag">
              <span className="amount">kr 299,-</span>
              <span className="period">/ måneden</span>
            </div>
            <h2>Klar til å slutte å lete etter regnearket?</h2>
            <p className="lead">
              Kom i gang på under to minutter. Ingen skjulte kostnader, ingen bindingstid. Inviter
              teamet for kr 299,- per ekstra medlem.
            </p>
            <div className="hero-actions" style={{ marginBottom: 0 }}>
              <a href="https://app.hourly.no/login" className="btn btn-primary btn-lg">
                Start i dag
              </a>
              <a href="https://app.hourly.no/demo" className="btn btn-ghost btn-lg" style={{ color: '#fff' }}>
                Prøv demoen først
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="ofte-stilt">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">
              <span className="dot"></span> Spørsmål og svar
            </span>
            <h2>Lurer du på noe?</h2>
          </div>
          <div className="faq">
            <div className="faq-item">
              <h3>Koster det noe?</h3>
              <p>Ja, Hourly koster kr 299,- i måneden. Ingen bindingstid, og du kan si opp når du vil.</p>
            </div>
            <div className="faq-item">
              <h3>Må jeg installere noe?</h3>
              <p>
                Nei. Alt kjører i nettleseren, og dataene dine synkroniseres automatisk mellom
                enhetene dine.
              </p>
            </div>
            <div className="faq-item">
              <h3>Kan jeg lage kontrakter for kundene mine?</h3>
              <p>
                Ja. Fyll inn detaljene, og du får en ferdig, juridisk ryddig kontrakt du kan laste
                ned som PDF og sende rett til kunden.
              </p>
            </div>
            <div className="faq-item">
              <h3>Fungerer det for team, eller bare for meg selv?</h3>
              <p>
                Begge deler. Start alene, og inviter kolleger inn i arbeidsplassen din når du
                trenger det — de ser samme kunder og timer som deg. Hvert medlem koster kr 299,-
                ekstra i måneden, og legges kun til når de faktisk takker ja til invitasjonen.
              </p>
            </div>
            <div className="faq-item">
              <h3>Kan jeg prøve appen uten å opprette konto?</h3>
              <p>
                Ja.{' '}
                <a
                  href="https://app.hourly.no/demo"
                  style={{ textDecoration: 'underline', color: 'var(--brand-700)' }}
                >
                  Demoen
                </a>{' '}
                er åpen for alle, uten pålogging, og viser hvordan appen fungerer med eksempeldata
                — inkludert team-siden.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
