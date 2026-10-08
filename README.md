# SevaSetu Salon — Marketing Website

Next.js 14 (App Router) + Tailwind CSS. Fully responsive, static (SSG) — kisi bhi host pe deploy ho jayega.

## Run karo

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production
```

## Pages

| Route | Kya hai |
|---|---|
| `/` | Hero, stats, problem/solution, **interactive live queue demo**, features, 5 steps, rate card, download |
| `/how-it-works` | Queue token vs appointment vs walk-in, Rahul ki journey, status flow, late/skip rules |
| `/for-salons` | Salon App features, "Salon ka ek din" timeline, roles, onboarding + register form |
| `/pricing` | Free vs 8% plan, ₹150 ledger example, payout, FAQ |
| `/contact` | Call/WhatsApp/Email cards, contact form, FAQ |

## Brand colours (`tailwind.config.js`)

| Token | Hex | Use |
|---|---|---|
| `forest` | `#014D40` | success, salon CTAs |
| `navy` | `#1B227E` | primary, hero backgrounds |
| `ink` | `#222222` | text, borders, footer |
| `white` | `#FFFFFF` | surfaces |
| `cyan` | `#00ACC5` | accents, ETA, links |
| `sun` | `#FFD500` | primary CTA, highlights |

Colour badalna ho to sirf `tailwind.config.js` me hex badlo — poori site update.

## Kahan kya badlna hai

- **Saara text / features / FAQ / menu** → `lib/content.js`
- **Phone, email, address** → `components/Footer.js` aur `app/contact/page.js` (abhi placeholder `+91 99999 99999`, `hello@sevasetu.in`)
- **Play Store / App Store links** → `app/page.js` me `#download` section (`href="#"`)
- **Form submit** → `components/LeadForm.js` me `// TODO` wali line pe apni API call daalo (abhi sirf success screen dikhata hai)
- **Live demo logic** → `components/LiveQueueDemo.js` (PRD 11.4 ETA formula ka simplified version)

## Fonts

Bricolage Grotesque (headings) + DM Sans (body), `@fontsource` se self-hosted — Google Fonts network call nahi.

## Deploy

Vercel: repo import karo → done. Ya EC2/Nginx pe `npm run build && npm start` (port 3000).
