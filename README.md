# Zondi Horizon Farms — Flock Tracker

Eggs, feed, sales, weights, health and water for the Lawley layer operation. One Google Sheet
behind it, so the whole team records into one set of books.

**No app store.** It installs from a link onto the home screen — own icon, full screen, works
offline. Staff create their own account; the CEO gives them a role.

## 👉 Read `SETUP.md`. It is the whole job, start to finish.

Short version: paste `backend/Code.gs` into a Google Sheet's Apps Script and deploy it → paste the
`/exec` link into the one `FARM_URL = ""` line in `index.html` → drag this folder onto
app.netlify.com/drop → **Olwethu signs up first** → send the link and invite codes to the team.

---

## What it tracks

| Screen | What it holds |
|---|---|
| **Home** | Weekly target progress, lay rate against breed standard, feed days remaining, both batches' condition, alerts, last 7 days, what to do now |
| **Record** | Today (eggs, broken, feed, water) · Sales (trays, loose, customer) · Weights (tag by tag, judged against Hy-Line Brown) · Health (deaths, culls, treatments, withdrawal) · Feed & water |
| **Money** | Break-even tray price today and at full lay, the price ladder with payback months, this month's takings |
| **Team** | Approvals, roles, invite codes |
| **Setup** | Batches, prices, costs, install, backup |

## Built for the flock as it actually is

Two batches at different ages, so the lay curve is right for both:

- **Batch 1** — 50 birds, point-of-lay 22 July 2026, at peak (~95%)
- **Batch 2** — 140 birds, point-of-lay 15 September 2026, still coming into lay

The Money screen separates **today** from **full lay** for exactly this reason: feed and wages run
for all 190 birds from the day they land, but the eggs do not arrive until Batch 2 matures. Judging
the price on today's ratio would be wrong.

## Files

```
index.html               the whole app — one file. Set FARM_URL near the top of its script.
manifest.webmanifest     name, icons, colours for install
sw.js                    offline cache; never caches farm data
icons/                   app icons generated from the farm logo
logo.png                 the logo, cropped, for labels and invoices
backend/Code.gs          accounts, roles, validation and the 9-tab data store
SETUP.md                 START HERE
.github/workflows/       optional auto-deploy to GitHub Pages
```

## Brand

Sampled from the farm logo.

| | Hex | Used for |
|---|---|---|
| Bush green | `#3F6B3A` | primary actions, healthy states |
| Deep green | `#2F5C33` | header, hero |
| Terracotta | `#EC9F53` | warnings, feed, accents |
| Sage | `#A8B98C` | secondary |
| Ink | `#1F170B` | text |
| Cream | `#FAF7F1` | background |
