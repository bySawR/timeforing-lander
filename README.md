# hourly.no — landingsside

Next.js-side for Hourly, med blogg drevet av Sanity. Hostes på Vercel.

## Kom i gang

```bash
npm install
npm run dev
```

## Miljøvariabler (Vercel → Settings → Environment Variables)

| Navn | Verdi |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | `r7opzp3e` |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` |

Datasettet er offentlig lesbart, så ingen token trengs for visning.

## Blogg (Sanity)

Innhold ligger i Sanity-prosjektet **Hourly** (`r7opzp3e`), dokumenttype `blogPost`.
Nye innlegg dukker opp automatisk på `/blogg` innen 10 minutter (ISR), og legges inn i `sitemap.xml`.

## SEO

- `app/sitemap.ts` → `/sitemap.xml` (inkluderer alle blogginnlegg)
- `app/robots.ts` → `/robots.txt`
- JSON-LD: SoftwareApplication + FAQPage på forsiden, BlogPosting per innlegg
- Open Graph + Twitter cards på alle sider, canonical-URL-er via `metadataBase`
