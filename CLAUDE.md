# Aelia Kos Website — aeliakos.com

## Project
Marketing website for Aelia Kos — conscious business mentor, founder of Universe Club. Luxury aesthetic with warm beige + burnt orange palette.

## Stack
- Next.js 16 + Tailwind 4 + Framer Motion
- Supabase (shared with app.aeliakos.com for contact writes)
- Resend (notification emails)
- Stripe (payment links, currently inactive — doors closed)

## Key Pages & Flow
Portal page → What's Inside (explanation) → Register (interest form)

- `/portal` — membership landing with sky.jpg arch hero
- `/whats-inside` — intermediary page explaining value prop, time commitment, trial terms
- `/register` — interest form (name, email, phone) → saves to Supabase, notifies aelia@aeliakos.com
- `/book-a-universe-connection-session` — embedded Cal.com booking

### Doors Open/Closed
When Aelia says "open doors": What's Inside CTA → Stripe payment link
When Aelia says "close doors": What's Inside CTA → /register interest form
Currently: **doors closed** (interest form active)

## Design System
- Fonts: Cormorant Garamond (serif, headings) + Jost (sans, body)
- Colors: beige #e8e4df, burnt orange #A9540F, ink #1a1510, dust #7a7068
- sky.jpg used as background in commitment strip, CTA buttons, and portal arch
- AnimatedSection component for scroll-triggered animations

## API Routes
- `/api/register-interest` — POST: saves contact to Supabase (type: lead, source: website, tags: Portal Membership + Interested), sends Resend notification
- `/api/checkout` — POST: Stripe checkout session (kept for when doors reopen)

## Deployment
- Vercel project: aelia-kos-website (airful-labs)
- Domain: aeliakos.com (Cloudflare DNS)
- Env vars: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, RESEND_API_KEY, STRIPE_SECRET_KEY

## Conventions
- Keep Aelia Kos logo in nav (not "Universe Club" text)
- All body text should use ink (#1a1510) for readability, not dust gray
- Stripe payment link: https://buy.stripe.com/bJe9AV2qAf6qfaC6R493y05
