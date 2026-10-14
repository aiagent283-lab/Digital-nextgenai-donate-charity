# Innovation Ai Flow

PROMPT:

Role: Act as a senior full-stack developer and UI designer.

Goal: Build a responsive, production-ready subscription payment landing page for NextGen AI (tagline: "Innovating with Intelligence"), a student AI community. Use the attached logo. Use only the content listed below. Do not add testimonials, FAQs, founder bios, or any WhatsApp/community join buttons or links.

Tech stack

React + Vite (or Next.js), Tailwind CSS, Framer Motion

Supabase (database + edge functions) for the backend

Razorpay Subscriptions for payments

Visual style

Background: charcoal #0B0B14 with a slowly moving gradient mesh

Accent gradient: violet #7C3AED to cyan #22D3EE (headings, buttons, borders, glows)

Text: #E5E7EB

Fonts: Space Grotesk (headings), Inter (body)

Glassmorphism cards with a gradient border that glows on hover

Animations (respect prefers-reduced-motion)

Hero background of floating neural-network nodes and connecting lines that react to the mouse or scroll

"TEAM NEXTGEN AI" with a letter-by-letter reveal and a gradient shimmer on "AI"

"LEARN · BUILD · INNOVATE · IMPACT" appearing word by word with a glowing underline

Cards fade and slide up on scroll, with 3D tilt on hover

Infinite scrolling marquee of technology logos

Pulsing glow and click ripple on the pay button

Page content (in this order)

Navbar: logo and a "Subscribe Now" button

Hero: "TEAM NEXTGEN AI". "A community of passionate learners, developers and innovators working together to build AI-powered solutions and create real-world impact." Learn | Build | Innovate | Impact

What We Do (6 cards): AI & ML Development, Web & App Development, Data Science & Analytics, Innovative Projects, Research & Exploration, Workshops & Skill Building

Join the Movement: "Be a part of a community that believes in learning, building and creating a better future with AI."

Why Join Us? Work on real-world projects; collaborate with passionate peers; learn from industry trends and experts; build your portfolio and grow your network; opportunities for internships and career growth

Technologies We Work With (marquee): Python, TensorFlow, React, Node.js, MongoDB, AWS, Docker, OpenAI

Pricing card: ₹199/month, with the "Why Join Us" points as features and a "Subscribe Now" button that opens checkout

Footer: logo, tagline, and Privacy Policy, Terms, and Refund Policy links

Payment flow (all inside the site)

"Subscribe Now" opens a modal form: Name, Email, Phone, College, plus a consent checkbox for Terms and Refund Policy. Validate on client and server.

The frontend calls a Supabase edge function that creates the Razorpay subscription server-side (₹199 fixed on the server, never taken from the client) and returns the subscription ID.

Open Razorpay Checkout as an in-page modal (UPI AutoPay, cards, net banking). The user never leaves the site.

Verify the payment signature in a second edge function before marking anything as paid.

Add a webhook edge function for payment captured, failed, subscription charged, and cancelled, with signature verification and idempotency.

Save to the database: name, email, phone, college, payment ID, subscription ID, status, renewal date.

Show a success screen with the payment ID and a receipt, and send a confirmation email. Failed payments show a retry button. No WhatsApp or community button anywhere.

Near the Pay button, show "🔒 100% Secure Payment · Powered by Razorpay" with payment method icons.

Security

All keys in environment variables (only the Razorpay key ID is public)

Row Level Security on the database, HTTPS only, rate limiting, input sanitization

No card data stored on our servers

Admin

A password-protected /admin page listing subscribers and payments, with search and CSV export

Deliverables

Full working code, a .env.example file, a test mode toggle, and short go-live steps (Razorpay plan setup, webhook URL, switching to live keys)

Build order: 1) UI and animations, 2) checkout modal and form, 3) backend and payment verification, 4) webhook and admin page. Pause after step 1 for my reviews

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/2ea63593-2c90-4b29-b455-320c901986ea).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
