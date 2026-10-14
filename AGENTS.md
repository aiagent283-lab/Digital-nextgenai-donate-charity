<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## App architecture
- Keep the landing page at `/` in TanStack Start, with reusable presentation components and Framer Motion for animation; preserve the template runtime instead of replacing the framework.
- Build payment and webhook logic with TanStack server functions and server routes when approved, rather than Supabase Edge Functions, to preserve supported server boundaries.
- Keep QR donation presentation in a reusable DonationPayment component, with page-level reveal state so every donation CTA exposes the same QR.
