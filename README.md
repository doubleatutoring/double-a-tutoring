# Double A Tutoring — Website

A responsive one-page website for Double A Tutoring, offering elementary math through Geometry at $15/hour, online or in person.

## Files
- `index.html` — page content and inquiry form
- `styles.css` — design and mobile responsiveness
- `script.js` — mobile navigation and email inquiry behavior

## Setup (required)
1. Unzip the project.
2. Open `script.js` in a text editor.
3. Replace `YOUR_EMAIL@example.com` with the business email address you want inquiries sent to. Save the file.
4. Open `index.html` in your browser to preview.
5. Test the inquiry form on a computer or phone with an email app configured. Fill it in, click **Prepare Inquiry Email**, and confirm your email app opens a prefilled draft addressed to your business email.
6. **Important:** The form does not automatically send, store, or deliver messages. The visitor must press **Send** in their email app. Visitors without an email app configured may not be able to use it.

## Publish for free with GitHub Pages
1. Create a public GitHub repository (for example `double-a-tutoring`).
2. Upload `index.html`, `styles.css`, and `script.js` into the repository root.
3. In repository **Settings → Pages**, select **Deploy from a branch**, choose `main` and `/ (root)`, then save.
4. Wait for GitHub to display your live website link.
5. Test the site on mobile and submit a test inquiry.

## Before launching
- Set up a dedicated business email address.
- Replace the general About Us text with accurate tutor introductions if desired.
- Confirm your tutoring availability and a safe, parent-approved location for in-person sessions.
- Since the site is aimed at families, ask a parent or guardian to help manage inquiries and payments if you're under 18.
- Avoid collecting a child's personal contact information; the form asks for a parent/guardian contact instead.

## Customization
- Change `$15` in `index.html` to update pricing.
- Update subjects and descriptions in `index.html`.
- Change blue colors in `styles.css` under `:root`.
- The font uses Google Fonts, so an internet connection is needed to load it; fallback fonts are provided.

## More reliable form option
For a form that submits directly without requiring a visitor's email app, integrate a reputable hosted form backend (e.g., Formspree) and add a privacy notice. This sample intentionally uses a client-side `mailto:` workflow, so no server or paid service is required.
