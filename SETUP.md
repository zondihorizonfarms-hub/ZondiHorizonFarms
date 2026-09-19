# Zondi Horizon Flock Tracker — Go Live

Everything is built. This is the whole job, start to finish: about **25 minutes on a laptop**,
then five minutes on each phone.

**Roles:** CEO (Olwethu) · Manager · Operations · Auditor.

---

## Step 0 — Be signed in as Olwethu, and only as Olwethu

Everything below is created under whichever Google account is signed in, so do all of it on
**her account**. The farm's data should belong to the company, not to a person.

If the laptop has other Google accounts signed in, open a clean window first:
**Chrome → profile icon → Guest**, sign in as Olwethu there, and do every step in that one window.
Mixed accounts are the most common way this setup goes wrong — the sheet ends up under one account
and the deployment under another, and nothing connects.

What ends up under her account:

| Thing | Why it matters |
|---|---|
| The Google Sheet | Every record lives here — she can open, correct and export it any time |
| The Apps Script deployment | The farm address the app talks to |
| Account-request emails | Sent to whichever account ran the setup |
| The Netlify site | The app link itself |
| The CEO account in the app | Her name, her number, her PIN |

---

## Step 1 — Build the farm sheet (10 min)

1. Go to **sheets.new**. Name it **Zondi Horizon Farm Data**.
2. **Extensions → Apps Script**. Delete everything in the editor.
3. Paste the whole of **`backend/Code.gs`**. Save (💾).
4. In the function dropdown choose **`setup`**, click **Run**.
   - Google asks for permission: **Review permissions → Olwethu's account → Advanced →
     Go to (project) → Allow**. Check the account on that screen is hers before allowing.
   - Back in the sheet you now have nine tabs: **Records, Sales, Weights, Health, Feed, Water,
     Customers, Users, Settings**.
5. **Deploy → New deployment**:
   - type ⚙️ → **Web app**
   - **Execute as: Me**
   - **Who has access: Anyone** ← required, or the phones get blocked
   - **Deploy**, authorise if asked.
6. Copy the **Web app URL**. It ends in `/exec`. That is the **farm address**.

---

## Step 2 — Put the farm address into the app (1 min)

Open **`index.html`** in any text editor (Notepad, TextEdit, VS Code). Near the top of the script
section find:

```js
const FARM_URL = "";
```

Paste the `/exec` link between the quotes:

```js
const FARM_URL = "https://script.google.com/macros/s/AKfy..../exec";
```

Save. **That is the only edit anyone ever makes to the code.**

---

## Step 3 — Put it online (2 min)

1. Go to **app.netlify.com** and **sign up with Google — Olwethu's account**.
2. Signed in, go to **app.netlify.com/drop** and drag the whole app folder onto the page.
3. You get an HTTPS link in about 30 seconds.
4. **Site configuration → Change site name** → `zondi-horizon`, so the link reads
   `https://zondi-horizon.netlify.app`.

> Sign in **before** dropping the folder. Dropped while logged out, Netlify makes a temporary site
> that has to be claimed within about an hour — and it would not be under her account anyway.

GitHub Pages works too: push the folder to a repo under her GitHub, then
**Settings → Pages → Source: GitHub Actions**. The workflow in `.github/workflows/` deploys on push.

---

## Step 4 — Olwethu creates the company account (on her phone, first)

**She opens the link and creates her account before anybody else gets it.**

The first account created becomes the **CEO** automatically. Her account is just her name, her
phone number and a PIN — nothing to do with Gmail.

> If somebody else signs up first, they become CEO. Recovery: open the Apps Script editor, put her
> number into `makeMeCeo()` and press Run.

---

## Step 5 — Check the opening numbers (5 min, Setup tab)

The app ships loaded with the farm as at **18 September 2026**. Go through **Setup** and correct
anything that has moved:

| Setting | Shipped as | Check |
|---|---|---|
| Batch 1 | 50 birds, arrived 22 Jul 2026 at 18 weeks | Confirm the arrival date — it drives the whole lay curve |
| Batch 2 | 140 birds, **expected 1 Oct 2026** at 18 weeks | Placeholder. **Change it to the real day they land** |
| Tray | 30 eggs at R60 | The price actually being charged today |
| Target tray | R70 | The price you are moving to |
| Loose egg | R2.50 | |
| Feed | 50 kg at R390, 125 g/bird/day | Invoice 158 rate |
| Payroll | R2,700/month | 3 × R900 |
| Water | R0/month | The R400 was a once-off, not a monthly bill. The tank is capital, already in the R78,564 |
| Other | R1,000/month | Health, transport, consumables |
| Weekly target | R2,436 | Was calculated with water at R1,000/month. Without it the real number is about **R2,137** — the Money screen flags this |
| Capital in | R78,564 | Build + both cages + 190 birds + feed |

The August opening balances (513 eggs sold, R1,066.50 taken) are already loaded so the totals carry
forward rather than starting from zero.

### Batch 2 is set as *not here yet*

A batch dated in the future is excluded from bird count, feed burn and expected lay — so the app
does not pretend 140 birds are eating before they arrive. It shows instead:

- **Batch 2 · 140 birds · not here yet** on the Home screen with a countdown
- a standing warning that the burn rate jumps from **6.25 to 23.75 kg a day** the moment they land,
  turning today's feed stock from 17 days of cover into about 4
- an arrival-day checklist in *What to do now*

**On the day they actually arrive, open Setup and set the real date.** Everything — lay curve, feed,
break-even, the weekly target — recalculates from that one field.

---

## Step 6 — Get the team on

Two ways, both fine:

**Invite code (they go straight in).** Team → pick the role → **Make a code** → send the code with
the link. They sign up with it and land in the app with that role already set.

**Request and approve.** Send the link only. They sign up, land on *"You're waiting for approval
from Zondi Horizon Farms"*, Olwethu gets an email, and she gives them a role under **Team**.

WhatsApp message to send:

> Zondi Horizon app: https://zondi-horizon.netlify.app — open it, tap Install, then create your
> account with code ZH-XXXXX. Any problem, phone the office.

On the phone: **Android** shows an *Install app* banner — tap it, and it lands in the app drawer
like any other app. **iPhone**: share button → *Add to Home Screen*.

---

## What each role can do

| | CEO | Manager | Operations | Auditor |
|---|---|---|---|---|
| See everything | ✅ | ✅ | ✅ | ✅ |
| Record eggs, sales, weights, health, feed, water | ✅ | ✅ | ✅ | ❌ |
| Change prices, costs, flock setup | ✅ | ✅ | ❌ | ❌ |
| Approve people, assign Operations/Auditor | ✅ | ✅ | ❌ | ❌ |
| Appoint a Manager or CEO | ✅ | ❌ | ❌ | ❌ |

The backend enforces this, not just the screens — an Auditor's write is refused at the server.
The farm can never be left without an active CEO, and the CEO cannot be removed.

---

## What the app refuses to record

These came out of the real paper records, and they are deliberate:

- **A weight over 10 kg.** The 2 September sheet had `170` written for 1.70 kg. The app catches it
  and asks whether you meant 1.70.
- **"Walk in customer" as a name.** August had 21 sales to that name — 21 customers the farm cannot
  phone. A standing order starts with a name and a number.
- **More eggs than the flock can lay.** Anything above 120% of bird count is refused as a typo.
- **Selling inside a withdrawal period.** Enter a treatment with withdrawal days and the Home screen
  carries a blocking red banner until the date passes.

---

## Day to day

- Syncs every 2 minutes while open, and immediately after every save.
- **Works with no signal.** Records save on the phone and push themselves when data returns; the top
  bar turns red and says how many are waiting.
- Every record is stamped with who entered it.
- Two people recording the same **date** overwrite each other, newest wins. Sales, weights and health
  are append-only and unaffected — so agree one person owns the daily egg count.
- The data is an ordinary Google Sheet. Open it any time.

---

## Housekeeping

- Once a month: **File → Make a copy** of the sheet.
- `closeJoining()` in the script editor stops new sign-ups once everyone is on; `openJoining()`
  turns it back on.
- `resetPin()` is the forgotten-PIN path.
- Never rename or delete the nine tabs.

---

## Two honest limitations

1. **PINs, not passwords.** Anyone with the link can *request* an account, but they see nothing
   until a role is given. The real gate is Olwethu. Good enough for a farm team; not bank-grade.
2. **The sheet is a single point of failure.** Hence the monthly copy.
