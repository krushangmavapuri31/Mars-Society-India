# Mars Society India — Website

Website for the India Chapter of The Mars Society. Built with Next.js (App Router)
and Tailwind CSS, with a small backend that writes contact and membership-application
submissions to a Google Sheet.

## What's here

```
app/                 Pages and API routes
  page.js            Home
  about/              About
  pillars/            Pillars index + /pillars/[slug] (research, analog-missions, community)
  projects/           Projects & Publications
  contact/            Contact page
  join/               Membership application page
  api/contact/         POST endpoint -> "Contact Submissions" sheet tab
  api/join/            POST endpoint -> "Join Applications" sheet tab
components/          Reusable UI (nav, footer, forms, video background, pillar band)
data/content.js      All site copy in one place — pillar text, vision, emails, nav
lib/googleSheets.js  Google Sheets append helper (service account auth)
lib/validate.js      Shared server-side validation + basic spam guard
public/videos/       Compressed source videos (web-sized, no audio)
public/posters/      Poster frames used as video fallback + thumbnail images
```

Editing `data/content.js` is the easiest way to update pillar text, the vision
statement, contact emails, or navigation — nothing else needs to change.

## 1. Install dependencies

```bash
npm install
```

## 2. Set up Google Sheets storage

Form submissions (contact messages and membership applications) are stored in a
Google Sheet, written to by a service account — no credentials ever touch the
browser.

1. In the Google Cloud Console (console.cloud.google.com), create a project
   (or use an existing one) and enable the **Google Sheets API**.
2. Create a **Service Account** (IAM & Admin -> Service Accounts), then create a
   JSON key for it and download it.
3. Create a new Google Sheet. Add two tabs, named exactly:
   - `Contact Submissions`
   - `Join Applications`
4. Click **Share** on the Sheet and share it with the service account's email
   address (it looks like `something@your-project.iam.gserviceaccount.com`),
   giving it **Editor** access.
5. Copy `.env.example` to `.env.local`:

   ```bash
   cp .env.example .env.local
   ```

6. Fill in the three values from the downloaded JSON key:
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL` — the `client_email` field
   - `GOOGLE_PRIVATE_KEY` — the `private_key` field, kept as one line with `\n`
     for line breaks (exactly as it appears in the JSON file, in quotes)
   - `GOOGLE_SHEET_ID` — the long ID in the Sheet's URL, between `/d/` and `/edit`

No row headers are written automatically — add a header row to each tab yourself
if you'd like one (Timestamp, Name, Email, Subject, Message, Status for Contact
Submissions; Timestamp, Name, Email, Phone, City, Status, Institution, Interests,
Message, Status for Join Applications).

## 3. Run it locally

```bash
npm run dev
```

Visit `http://localhost:3000`.

## 4. Deploy to Vercel

1. Push this project to a GitHub repository.
2. In Vercel, import the repository as a new project.
3. Under **Environment Variables**, add the same three variables from
   `.env.local` (`GOOGLE_SERVICE_ACCOUNT_EMAIL`, `GOOGLE_PRIVATE_KEY`,
   `GOOGLE_SHEET_ID`). Optionally add `NEXT_PUBLIC_SITE_URL` set to your
   production URL once you know it.
4. Deploy. Vercel builds and hosts both the frontend and the `/api` routes
   automatically — no separate backend to run.
5. Once you have a custom domain, add it in Vercel's project settings and
   update `NEXT_PUBLIC_SITE_URL`.

## Notes

- Videos are already compressed for the web (resized, no audio track) and live
  in `public/videos`. If you replace any of them, keep them reasonably small —
  large autoplaying video is the single biggest thing that can slow the site down.
- Both forms include a hidden honeypot field and a submission-timing check as a
  basic spam guard. This is not a CAPTCHA — if spam becomes a real problem,
  consider adding one (e.g. Cloudflare Turnstile) to the two form components.
- Content that hasn't been supplied yet (team bios, published projects) is left
  as clearly-labeled placeholders in `about/page.js` and `projects/page.js`
  rather than invented — fill those in as the information becomes available.
