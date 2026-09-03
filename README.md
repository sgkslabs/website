# sgkslabs.in

Static landing site for SGKS Labs, showcasing three Android apps:
**CalorieLogger**, **AutoPulse**, and **ExpenseDiary**.

Plain HTML/CSS/JS — no build step, no framework, no dependencies.

## Structure

```
.
├── index.html                  # single-page site
├── styles.css
├── script.js
├── assets/
│   ├── favicon.svg
│   └── logos/
│       ├── calorielogger.png
│       ├── autopulse.png
│       └── expensediary.png
├── CNAME                       # custom domain: sgkslabs.in
├── .nojekyll                   # tells GitHub Pages to skip Jekyll processing
└── .github/workflows/deploy.yml
```

## Deploying to GitHub Pages

### 1. Push this repo to GitHub

```bash
cd sgkslabs-site
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

### 2. Enable GitHub Pages (Actions-based deploy)

In the GitHub repo: **Settings → Pages → Build and deployment → Source →
GitHub Actions**.

That's it — the workflow in `.github/workflows/deploy.yml` runs on every
push to `main` and publishes the site automatically. No manual "gh-pages
branch" step needed.

### 3. Point the custom domain (sgkslabs.in) at GitHub Pages

The `CNAME` file already contains `sgkslabs.in`, so GitHub Pages will serve
the site on that domain once DNS is configured. At your domain registrar /
DNS provider, add:

**If serving from the apex domain (`sgkslabs.in`):**

| Type | Host | Value               |
|------|------|----------------------|
| A    | @    | 185.199.108.153      |
| A    | @    | 185.199.109.153      |
| A    | @    | 185.199.110.153      |
| A    | @    | 185.199.111.153      |

**If also serving `www.sgkslabs.in`:**

| Type  | Host | Value                        |
|-------|------|-------------------------------|
| CNAME | www  | `<your-username>.github.io`  |

After DNS propagates (can take up to a few hours), go back to
**Settings → Pages** and:
- confirm the custom domain shows a green check
- tick **Enforce HTTPS** once the certificate is issued (usually automatic
  within minutes to a couple of hours after DNS verifies)

### 4. Verify

Visit `https://sgkslabs.in` — the site should load over HTTPS with the
padlock, and all three app cards should render with their logos and
privacy-policy links working.

## Updating content later

- **Add/remove an app card**: edit the `<article class="app-card">` blocks
  in `index.html`.
- **Swap a logo**: replace the corresponding PNG in `assets/logos/` (keep
  it square, ~512×512, and reuse the same filename to avoid touching
  `index.html`).
- **Add a Play Store link**: add another `<a class="btn btn-ghost">` inside
  that app's `.app-links` block.

Every push to `main` redeploys automatically via GitHub Actions.
