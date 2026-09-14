# Zeeshan Arshad — Portfolio (Astro)

SEO-optimized portfolio built with Astro. Zero JS by default = fast Core Web Vitals.

## Run locally
    npm install
    npm run dev        # http://localhost:4321
    npm run build      # outputs to dist/

## Add a new project (the easy part)
Create ONE file in `src/content/projects/` — e.g. `my-new-site.md`:

    ---
    title: "My New Site"
    order: 20
    group: "WordPress"          # AI Automation | WordPress | SaaS / App
    label: "WordPress · SEO"
    live: "https://example.com"  # optional — omit if none
    image: "/projects/my-new-site.jpg"
    tags: ["WordPress", "SEO", "Performance"]
    featured: false
    ---
    One or two sentences describing the project.

Drop the image in `public/projects/`. Commit + push. Done — it appears automatically.

## Add an SEO case study
Same idea, in `src/content/seoWins/`.

## Deploy
Push to GitHub → Vercel auto-builds. Framework preset: Astro (auto-detected).

## Add screenshots / gallery to ANY project
Every project supports a main image plus a gallery of extra snaps (GSC, SERP, AI chat).
All images are click-to-enlarge automatically.

In any file in `src/content/projects/`:
    image: "/projects/main.jpg"                 # main thumbnail
    gallery: ["/seo/snap-1.png", "/seo/snap-2.png"]   # extra snaps (optional)

Filter tabs: group must be one of  AI Automation | WordPress | SaaS / App | SEO
Put images in `public/projects/` or `public/seo/`.

PRIVACY: before publishing GSC/SERP/AI screenshots, blur the client domain, URLs, and brand name.
