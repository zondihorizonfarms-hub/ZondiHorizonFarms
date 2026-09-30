/* =====================================================================
   ZONDI HORIZON FLOCK TRACKER — KNOWLEDGE LIBRARY & HELP  (v3.1)
   Loaded once, cached for offline use. Add articles by copying one
   block below — the app picks them up automatically.

   Every figure here comes from a named source (listed under each
   article) or from the farm's own records. Where sources disagree,
   the article says so. Planning aid, not veterinary or legal advice.
   ===================================================================== */
(function(){

/* ---------- small builders ---------- */
function tbl(head, rows){
  return '<div class="tw"><table><thead><tr>' + head.map(function(h){ return '<th>' + h + '</th>'; }).join('') +
    '</tr></thead><tbody>' + rows.map(function(r){
      return '<tr>' + r.map(function(c){ return '<td>' + c + '</td>'; }).join('') + '</tr>';
    }).join('') + '</tbody></table></div>';
}
function ul(items){ return '<ul>' + items.map(function(i){ return '<li>' + i + '</li>'; }).join('') + '</ul>'; }
function ol(items){ return '<ol>' + items.map(function(i){ return '<li>' + i + '</li>'; }).join('') + '</ol>'; }
function box(kind, html){ return '<div class="' + kind + '">' + html + '</div>'; }

/* ---------- sources ---------- */
var HY    = ['Hy-Line Brown Performance Standards Guide, Commercial Layers — December 2025', 'https://www.hyline.com'];
var HYMG  = ['Hy-Line Brown Management Guide — housing, lighting, water, feeding', 'https://www.hyline.com'];
var MERCK = ['Merck Veterinary Manual — Poultry', 'https://www.merckvetmanual.com/poultry'];
var ARC   = ['Agricultural Research Council (ARC) — poultry production guidance', 'https://www.arc.agric.za'];
var HUB   = ['Poultry Hub Australia — layer nutrition and management', 'https://www.poultryhub.org'];
var SAPA  = ['South African Poultry Association (SAPA)', 'https://www.sapoultry.co.za'];
var COP   = ['SAPA Code of Practice — layer housing and welfare', 'https://www.sapoultry.co.za'];
var R345  = ['Regulations regarding the grading, packing and marking of eggs (R345 of 2020) — Agricultural Product Standards Act 119 of 1990', ''];
var ADA   = ['Animal Diseases Act 35 of 1984 and its regulations — controlled and notifiable diseases', ''];
var MSA   = ['Meat Safety Act 40 of 2000', ''];
var R638  = ['R638 of 2018 — hygiene requirements for food premises and the transport of food', ''];
var SARS  = ['SARS — VAT registration threshold', 'https://www.sars.gov.za'];
var OPS   = ['Zondi Horizon Operations Calendar (company document)', ''];
var RB    = ['Zondi Horizon Record Book, Forms 1–9 (company document)', ''];
var BLUE  = ['Zondi Horizon Scaling Blueprint and Structure Capacity notes (company documents)', ''];
var FARM  = ['Zondi Horizon records — invoices 157 and 158, August 2026 sales register', ''];
var FPOL  = ['Zondi Horizon Finance Policy & Procedures (company document, July 2026)', ''];
var LOAN  = ['Zondi Horizon Shareholder Bridge Loan Agreement — template (company document, July 2026)', ''];
var BUYL  = ['Zondi Horizon Equipment & Consumables Buying List (July 2026) and Supplier & Sourcing Guide (16 Aug 2026)', ''];
var HIST  = ['Zondi Horizon project files, July–September 2026', ''];

/* ---------- categories ---------- */
window.KB_CATS = [
  ['company','🏢 Our company'],
  ['flock',  '🐔 Flock'],
  ['feed',   '🌾 Feed & water'],
  ['health', '🩺 Health'],
  ['house',  '🏠 Housing & biosecurity'],
  ['eggs',   '🥚 Eggs & selling'],
  ['money',  '📘 Money & records'],
  ['law',    '⚖️ Law & compliance'],
  ['grow',   '🚜 Growing the farm']
];

/* ---------- Hy-Line Brown reference table (same numbers the app uses) ---------- */
var STD = [
  [18,'6.7','1.41–1.49','—'],[20,'52.5','1.52–1.61','49.0'],[22,'87.0','1.64–1.73','—'],
  [24,'92.4','1.74–1.84','—'],[26,'93.6','1.81–1.91','56.9'],[28,'93.5','1.85–1.95','—'],
  [30,'93.3','1.86–1.97','59.8'],[35,'92.7','1.90–2.00','—'],[40,'91.9','1.92–2.03','62.1'],
  [50,'90.0','1.94–2.05','—'],[60,'87.4','1.95–2.06','62.8'],[70,'83.6','1.95–2.07','—'],
  [80,'79.7','1.96–2.07','63.5']
];

window.KB = [

/* ============================== OUR COMPANY ============================== */
{ id:'company-history', cat:'company', title:'Zondi Horizon from day one',
  summary:'How the farm got here — every step from the first plan to the record book in this app.',
  tags:'history timeline story start founding batch invoice',
  body:
  '<p>The goal set at the start: begin with 50 layers for eggs from July 2026, grow to about 200, and see where the business stands by July 2028. Meat is an option once birds come off lay.</p>' +
  tbl(['When','What happened'], [
    ['2 Jul 2026','First plan: 50 free-range layers on deep litter in Lawley / Ennerdale, budget R25,000–R60,000. The farm later chose cages instead.'],
    ['3 Jul','Company papers drawn up: 200-Layer Master Plan, Finance Policy, Record Book (Forms 1–9), Operations Calendar, Buying List, Bridge Loan template.'],
    ['22 Jul','<b>Batch 1 arrives</b> — 50 point-of-lay Hy-Line Brown hens at 18 weeks. Build and birds: R39,409.85 (no itemised invoice on file).'],
    ['~6–7 Aug','First eggs, recorded on the paper Form 2.'],
    ['11 Aug','Massgrow invoice 157 (cage 2 installed, 3 bags feed — R8,300) and invoice 158 (140 hens, 12 bags feed, delivery — R26,954.58).'],
    ['13 Aug','First recorded sale. August total: 24 sales, 513 eggs, R1,066.50.'],
    ['16 Aug','Supplier &amp; Sourcing Guide — the buying list split into four shop counters. FRD products on site.'],
    ['18 Aug','Flock Tracker app, first version.'],
    ['31 Aug','Spartan lighting quote R31,050 — not accepted.'],
    ['1 Sep','Scaling Blueprint (the 200-bird module). PPE and water tank priced at Cashbuild. Payroll confirmed at R2,700 a month (3 × R900).'],
    ['10 Sep','Invoice 158 balance of R13,477.29 due.'],
    ['15 Sep','House capacity worked out: at most 3 cages, about 288 birds.'],
    ['18 Sep','Water confirmed as a once-off cost. Batch 2 date moved to late September / early October.'],
    ['19 Sep','App live on phones. CEO Olwethu signed in.'],
    ['Sep','Reconciliation found a prepaid order counted twice — the rule since: record the sale the day the eggs leave.'],
    ['30 Sep','The app becomes the full company record book: buying list, suppliers, checklists, visitor register, history from day one.'],
    ['~1 Oct','Batch 2 (140 hens) expected — 190 birds.']
  ]) +
  box('note','Dates come from the company files. Where a file gives no exact date, it says "about". Correct anything here by telling the CEO — the history is only useful if it is right.'),
  related:['finance-policy','buying-rules','records'], src:[HIST, FARM] },

{ id:'finance-policy', cat:'company', title:'Finance Policy — how money is handled',
  summary:'Who may spend what, where profit goes first, how cash is kept, and the pricing and credit rules.',
  tags:'finance policy approval spending matrix funds order cash banking petty cash credit price floor rules constitution',
  body:
  box('law','<b>The rule above all others:</b> the business\'s money is not anyone\'s personal money. Every rand in and out is recorded and visible to all partners.') +
  '<h3>Who must approve spending</h3>' +
  tbl(['Amount','Approval'], [
    ['Up to R500','Any one partner, from petty cash, receipt required'],
    ['R501 – R2,500','Finance and Operations together'],
    ['R2,501 – R10,000','All partners (majority), in writing — a saved WhatsApp counts'],
    ['Above R10,000, or any loan','All partners and the investor, written and signed']
  ]) +
  '<p><b>Feed is the exception:</b> a feed order never waits for approval. Birds are never left without feed. The buying list shows the approval each item needs.</p>' +
  '<h3>Where profit goes first</h3>' +
  ol(['<b>Feed reserve</b> — at least one month of feed money (about R5,900 at 200 birds).',
      '<b>Health reserve</b> — R500 standing.','<b>Next-batch fund</b>.',
      '<b>Replacement fund</b> — from January 2027, about R650 a month so Batch 1\'s replacement is paid for.',
      '<b>Distributions</b> — only when 1–4 are full.']) +
  '<h3>Cash and banking</h3>' +
  ul(['Nedbank business account. No business money through personal accounts, ever.',
      'Sales cash counted against the sales register daily, banked at least weekly. Never more than R1,500 on hand overnight.',
      'Petty cash float R500, held by Finance, topped up only against receipts.',
      'Every payment needs a receipt filed the same week. No receipt — the spender refunds it.',
      'Records kept at least 5 years (SARS).']) +
  '<h3>Salaries</h3>' +
  '<p>Phase 1 (until 200 birds are mature, about February 2027): no salaries, stipends or investor draws. Phase 2: one salary or partner stipends, decided in writing, never more than 60% of average monthly profit.</p>' +
  '<h3>Pricing and credit</h3>' +
  ul(['Policy floor: R3.50 an egg (R105 a tray). Target R4.00 for households and vendors.',
      'Credit: at most 7 days and R500, repeat customers only, no second order while one is unpaid.',
      'Cracked and dirty eggs are never mixed into customer trays.']) +
  box('alarm','<b>The policy and the practice disagree.</b> The policy floor is R3.50 an egg; the farm has been selling at R60 a tray (R2.00 an egg) and R2.50 loose. Payroll of R2,700 a month is also being paid in Phase 1, when the policy says no salaries. The partners need to change either the policy or the practice — in writing.') +
  box('note','The policy has signature lines for Operations, Finance, Marketing and the Director. Check that the signed copy is on file.'),
  related:['bridge-loan','money','buying-rules','records'], src:[FPOL, FARM] },

{ id:'bridge-loan', cat:'company', title:'The shareholder bridge loan',
  summary:'A template for the Director to lend the company working capital for the bird batches. Not recorded as signed.',
  tags:'loan bridge funding shareholder director investor repayment debt',
  body:
  '<p>Drawn up in July to cover the cash gap while batches are bought before egg income catches up. It is a <b>loan, not a share purchase</b>: it does not change anyone\'s shareholding or profit share.</p>' +
  tbl(['Term','Template says'], [
    ['Lender','The Director and majority shareholder'],
    ['Amount','Recommended R15,000 (the funding gap in the July model)'],
    ['Drawdowns','About 1 Sep (Batch 2), 10 Oct (cage + Batch 3), 1 Dec (Batch 4) — into the Nedbank account only'],
    ['Interest','Not decided — interest-free, or a rate to be agreed'],
    ['Repayment','From 31 January 2027, suggested R5,000 a month'],
    ['Ranking','After the feed and health reserves, before any salary or profit share — including the lender\'s'],
    ['Approval','The other partners approve in writing; the lender does not vote on it']
  ]) +
  box('alarm','<b>Status:</b> the files hold the template, not a signed agreement. September\'s cash need was about R24,550 — well over the R15,000 in the template. Resize it, get the written partner approval, have an attorney review it, and record every drawdown in Books → Ledger.') +
  box('note','Ask the accountant how an interest-free shareholder loan is treated for tax. Planning aid, not legal advice.'),
  related:['finance-policy','money'], src:[LOAN, FPOL] },

{ id:'buying-rules', cat:'company', title:'How we buy — the rules',
  summary:'Four shop counters, one rule that never bends, two quotes for big spends, and every receipt recorded.',
  tags:'buying purchase rules suppliers quotes receipts counter vet shop',
  body:
  '<h3>No one shop sells everything</h3>' +
  tbl(['Counter','Covers','Where'], [
    ['A — Poultry equipment','Egg trays, feeders, drinkers, cages, grit, curtains','FRD, Elite Poultry, African Poultry Equipment, Poltek'],
    ['B — Vet / animal health','Vaccine, dewormer, mite dust, wound spray, stress pack, disinfectant','Registered vet shop or co-op counter'],
    ['C — Hardware','Timer, bulbs, footbath tray, buckets, PPE, drums, shade cloth, fan, rat stations','Builders, Cashbuild, Makro'],
    ['D — Online','Thermometer, scales, timer plug, cooler box','Takealot, Amazon.co.za, Makro online']
  ]) +
  '<p>Search for the shop word, not the poultry word: a "luggage scale" not a "poultry scale", a "cement mixing tray" not a "footbath".</p>' +
  box('law','<b>The rule that never bends:</b> anything that goes into a bird or its water comes from a registered counter with a person who can tell you the egg withdrawal period. Never online, never from a trader, never from a market stall.') +
  '<h3>Every purchase</h3>' +
  ol(['Check the buying list first — is it already on it, and what did we expect to pay?',
      'Check who must approve it (Finance Policy). Feed never waits.',
      'Above R2,500: get <b>two comparison quotes</b>. Never be rushed by a quote\'s expiry date.',
      'Read the label before paying: dose, storage, withdrawal period, registration number.',
      'Keep the receipt. Mark the item "Have it" on the buying list with the price and supplier, and record the money in Books → Ledger.',
      'New supplier? Add them to the supplier book with the reason we used them.']),
  related:['finance-policy','company-history','withdrawal'], src:[BUYL, FPOL] },

/* ============================== FLOCK ============================== */
{ id:'lay-cycle', cat:'flock', title:'The laying cycle — what happens week by week',
  summary:'From point of lay at 18 weeks to peak at about 26 weeks, then a slow decline to the end of lay.',
  tags:'lay rate peak point of lay production curve age weeks decline',
  body:
  '<p>A Hy-Line Brown hen arrives at <b>point of lay</b> at about 18 weeks. She lays her first small eggs within days, ' +
  'climbs steeply to <b>peak at around week 26</b>, and then declines very slowly for a year or more.</p>' +
  tbl(['Age','What is happening','What you do'], [
    ['18–20 wks','First eggs, small (about 49 g at week 20). Lay climbs fast.','Quiet settling, full water, full layer feed, light rising to 16 h.'],
    ['20–26 wks','The climb to peak. The hen is still growing while she lays.','Weigh at two weeks and monthly. Underweight hens now = a short, low peak.'],
    ['26–35 wks','Peak — Hy-Line\'s standard band is about 93.6–98.5% lay.','Change nothing. Stable feed, water, light, routine.'],
    ['35–60 wks','Slow decline, eggs get bigger (about 62 g at 40 weeks).','Calcium goes up with age. Start the monthly cull check.'],
    ['60–80 wks','Lay falls towards 80%. Shells get thinner.','Watch shell quality and the break-even. Plan the replacement batch.'],
    ['End of lay','Lay no longer pays for feed.','Sell spent hens live, clean out, rest the house, restock.']
  ]) +
  '<h3>How the app uses this</h3>' +
  '<p>Home compares your lay rate with the standard for each batch\'s age. The app uses the <b>bottom</b> of Hy-Line\'s band, so ' +
  '"on standard" in the app means you are at least at the low end of what the breed should do. Hy-Line\'s guide gives about ' +
  '<b>368–391 eggs per hen housed to 80 weeks</b> and about 95% of birds still alive at 80 weeks.</p>' +
  box('note','<b>Lay rate = eggs ÷ birds on the farm × 100.</b> Use a 7-day average — one day can be off because of a missed collection or a bird laying on the floor.') +
  '<h3>When the lay rate drops suddenly</h3>' +
  ol(['Check water first — a blocked line stops lay within a day.','Then feed: is there feed in the trough all day?',
      'Then light: did a timer fail or a bulb blow?','Then heat, stress (visitors, dogs, noise at night), and disease.',
      'A drop of more than about 5% in a week with sick birds: call the vet.']),
  related:['breed-standards','body-weight','lighting','culling'], src:[HY, HYMG] },

{ id:'breed-standards', cat:'flock', title:'Hy-Line Brown standards at a glance',
  summary:'Lay rate, body weight and egg weight by age — the exact numbers the app judges your birds against.',
  tags:'standard hy-line brown table weight egg weight lay percentage benchmark',
  body:
  '<p>These figures are from Hy-Line\'s December 2025 guide for commercial brown layers in conventional (cage) systems.</p>' +
  tbl(['Week','Lay % (low end)','Body weight kg','Egg weight g'], STD.map(function(r){ return [r[0], r[1], r[2], r[3]]; })) +
  ul(['<b>Peak:</b> about 93.6–98.5% at around week 26.',
      '<b>Feed in lay:</b> about 110–118 g per bird per day from week 28 at comfortable temperatures.',
      '<b>Liveability:</b> about 95% of hens still in the flock at 80 weeks.',
      '<b>Eggs per hen housed to 80 weeks:</b> about 368–391.']) +
  box('note','A "—" means the guide lists a value but the app does not use it. Past 80 weeks the app holds the curve on a gentle decline — that part is an estimate, not a Hy-Line figure.'),
  related:['lay-cycle','body-weight','feed'], src:[HY] },

{ id:'lighting', cat:'flock', title:'Lighting — the switch that controls laying',
  summary:'16 hours of light a day in lay, never shortened. Light is what tells a hen to lay.',
  tags:'light hours day length timer bulb lux lamp 16 hours',
  body:
  '<p>Day length, not food, is the signal that switches a hen\'s ovary on. Increasing day length brings pullets into lay; a ' +
  '<b>shortening day stops or slows laying</b>. That is why the rule never changes once they are laying.</p>' +
  '<h3>The rules</h3>' +
  ul(['<b>Build up to 16 hours</b> of light a day, adding about <b>30 minutes at a time</b>, reaching 16 h by about weeks 24–25.',
      '<b>Never shorten the day</b> during lay, not even by 30 minutes.',
      '<b>Same times every day</b> — use a timer. The app\'s daily list starts with lights on at 05:30.',
      '<b>Intensity:</b> about 20–25 lux at the feed trough — roughly enough to read a newspaper comfortably. Warm-white light suits layers.',
      '<b>Even light</b> across all tiers. The bottom tier is always the darkest; check it.']) +
  box('note','On this farm natural daylight plus lights must add up to 16 hours. In South African winter the natural day is only about 10–11 hours, so the lights carry more of the load. Put lights on in the morning so the birds are not plunged into darkness mid-evening.') +
  '<h3>What goes wrong</h3>' +
  ul(['Timer failure or power cut for several days → lay drops within a week.',
      'Too bright or flickering light → nervous birds, pecking.',
      'Dark bottom tier → lighter birds that lay less. Record the tier when you weigh birds.']),
  related:['lay-cycle','housing','heat-stress'], src:[HYMG, BLUE] },

{ id:'body-weight', cat:'flock', title:'Weighing birds — and what the numbers mean',
  summary:'Weigh 10 birds per batch every month. Underweight hens lay fewer, smaller eggs and burn out early.',
  tags:'weigh weight scale kg underweight overweight uniformity tag tier',
  body:
  '<p>A hen lays out of what she eats <i>and</i> what she has in reserve. A light hen laying hard is running on empty — her ' +
  'peak is short and her lay falls early. Weighing is the only way to see this coming.</p>' +
  '<h3>How to weigh</h3>' +
  ol(['Same day each month, same time of day, <b>before the morning feed</b>.',
      'Pick 10 birds per batch from different cages and <b>all three tiers</b>.',
      'Weigh each one on a hanging or bench scale in kilograms: 1.85, not 185.',
      'Enter each bird under <b>Record → Weights</b> with its tag number. The app marks each bird OK, UNDER or OVER for its age.']) +
  '<h3>If birds are UNDER</h3>' +
  ul(['Is there feed in the trough all day? Are troughs overfilled so birds pick and waste?',
      'Is there enough trough space — about 7–9 cm per bird?',
      'Is water flowing to every cup or nipple? Low water = low feed intake.',
      'Mites (pale combs), worms, or disease?',
      'Bottom-tier birds lighter than the rest → light and manure problem, not a feed problem.']) +
  '<h3>If birds are OVER</h3>' +
  '<p>Less common in cages. Very fat hens risk fatty liver and prolapse. Check the feed is a <b>layer</b> feed and not a broiler or grower ration.</p>' +
  box('note','The farm recorded birds at about 1.69 kg in September 2026 against the standard band while laying at 94–96% — producing out of reserves. Holding feed at the full ration matters more than saving on it.'),
  related:['breed-standards','feed','parasites'], src:[HY, BLUE] },

{ id:'culling', cat:'flock', title:'Culling — finding the hens that have stopped laying',
  summary:'From about 30 weeks, check monthly for non-layers. They eat the same feed and give nothing back.',
  tags:'cull non-layer spent hen pubic bones comb vent pigment',
  body:
  '<p>Every hen eats about the same whether she lays or not. A non-layer costs you roughly <b>her whole feed bill</b>. From ' +
  'about 30 weeks, check every month.</p>' +
  tbl(['Look at','Laying hen','Not laying'], [
    ['Comb and wattles','Large, red, warm, waxy','Small, pale, shrivelled, dry'],
    ['Vent','Large, moist, oval, pale','Small, dry, round, tight, yellowish'],
    ['Pubic bones (either side of the vent)','Two to three fingers apart, thin and flexible','One finger or less apart, stiff'],
    ['Abdomen (between pubic bones and keel)','Soft, deep — three to four fingers','Hard, shallow — two fingers or less'],
    ['Yellow colour (beak, shanks)','Bleached — the pigment went into the yolks','Yellow — she has not been laying for weeks']
  ]) +
  '<h3>What to do with them</h3>' +
  ul(['Take out any bird that is clearly sick and not recovering — for the flock\'s sake as well as hers.',
      'Non-layers in good health can be <b>sold live</b>. Record each one under Record → Health as "cull" so the bird count stays right.',
      'Any hen still inside a medicine withdrawal period may not be sold for food.',
      'Hen <b>meat</b> may only be sold if the bird was slaughtered at a registered abattoir — see "Spent hens".']),
  related:['spent-hens','lay-cycle','withdrawal'], src:[MERCK, ARC, MSA] },

{ id:'new-batch', cat:'flock', title:'Bringing in a new batch',
  summary:'Everything ready before the truck arrives: cages, water, feed for 25 days, and the vaccination record in hand.',
  tags:'new birds arrival pullets batch restock point of lay transport',
  body:
  '<p>The first two weeks decide how the batch lays for the next year. The <b>Tasks → Batch</b> list turns this into ticks for each batch.</p>' +
  '<h3>Before arrival</h3>' +
  ol(['Cages repaired and clean; every drinker and nipple tested.',
      'Feed on site for about 25 days <b>at the new, larger burn rate</b>.',
      'Footbath filled, visitor register ready.',
      'Enter the batch in Setup with the real arrival date and age.']) +
  '<h3>On the day</h3>' +
  ol(['Count the birds yourself and check against the invoice before you sign.',
      'Collect the <b>written vaccination record</b> — which vaccines, when, and the batch numbers.',
      'Look at a sample: bright, alert, clean vents, no sneezing, good feather.',
      'Water first — with electrolytes for days 1–3 — then feed.']) +
  '<h3>The first two weeks</h3>' +
  ul(['No handling, no visitors, no changes to feed or light.',
      'First weigh at two weeks.',
      'Two ages on one site is a disease risk: older birds can carry things the young ones have not met. Work the young batch first each day, then the older one.']),
  related:['biosecurity','vaccination','body-weight','feed'], src:[OPS, HYMG] },

/* ============================== FEED & WATER ============================== */
{ id:'feed', cat:'feed', title:'Feeding layers',
  summary:'About 110–125 g per bird per day of a complete layer feed, in two feeds, with nothing added.',
  tags:'feed ration grams bag layer mash intake trough waste storage temperature',
  body:
  '<p>A laying hen needs a <b>complete layer feed</b> — the right protein, energy and about 4 g of calcium a day. Do not dilute ' +
  'it with maize, bread or scraps: that lowers protein and calcium and the eggs follow.</p>' +
  '<h3>How much</h3>' +
  '<p>Hy-Line gives about <b>110–118 g per bird per day</b> in lay at comfortable temperatures. The farm\'s own record — one 50 kg bag ' +
  'every 8 days for 50 birds — is <b>125 g</b>, and it is the right order. Hens eat more in the cold and less in the heat:</p>' +
  tbl(['Temperature','Typical intake (g/bird/day)'], [['10 °C','132'],['20 °C','120'],['25 °C','114'],['30 °C','108'],['35 °C','102']]) +
  box('alarm','<b>Never cut rations to save money.</b> A 50 g ration is half what a laying hen needs. Lay collapses within weeks and does not come back.') +
  '<h3>How to feed</h3>' +
  ul(['Two feeds: half in the morning, half in the early afternoon. The afternoon feed carries the calcium she uses overnight.',
      'Fill troughs no more than about a third to half full — overfilled troughs are the biggest source of waste.',
      'Level the feed along the whole trough so birds at the ends eat too.',
      'About 7–9 cm of trough per bird.']) +
  '<h3>Storing feed</h3>' +
  ul(['Dry, shaded, on pallets off the floor and away from the wall.',
      'Rat-proof. Sweep spills daily.',
      'Oldest bag first. Mouldy or wet feed is thrown away — mould toxins cut lay and damage livers.']) +
  '<h3>The feed tank on Home</h3>' +
  '<p>The app adds every bag delivered, subtracts what the birds eat each day (your recorded kg, or the Setup rate when blank), and warns you when ' +
  'fewer days are left than your order lead time. A batch that has not arrived yet is not counted until its arrival date.</p>',
  related:['calcium','water','money','rodents'], src:[HY, HUB, BLUE] },

{ id:'calcium', cat:'feed', title:'Calcium and eggshells',
  summary:'Each shell uses about 2 g of calcium. Older hens need more — and coarse particles for the night.',
  tags:'calcium shell limestone grit oyster thin shells particle size',
  body:
  '<p>A hen builds the shell overnight, mostly from calcium in her gut. Fine limestone is used up quickly; <b>coarse particles ' +
  '(2–4 mm)</b> stay in the gizzard and release calcium through the night. Hy-Line\'s calcium targets rise with age:</p>' +
  tbl(['Age (weeks)','Calcium g/bird/day','Fine : coarse'], [
    ['18–33','4.00','40 : 60'],['34–48','4.20','35 : 65'],['49–62','4.40','30 : 70'],['63–76','4.60','25 : 75'],['77+','4.70','25 : 75']
  ]) +
  '<p>Fine = 0–2 mm, coarse = 2–4 mm.</p>' +
  '<h3>On a small farm</h3>' +
  ul(['A good commercial layer feed already contains the calcium. Ask the supplier which age it is formulated for.',
      'From mid-lay, many farms offer extra coarse limestone or crushed oyster shell with the afternoon feed. Ask your feed supplier or vet before adding anything.',
      'Thin or soft shells: check age, heat, feed type, and disease (infectious bronchitis, egg drop syndrome) — see "Egg quality problems".']),
  related:['feed','egg-quality','heat-stress'], src:[HY, HYMG] },

{ id:'water', cat:'feed', title:'Water — the first thing to check, every time',
  summary:'Hens drink about twice what they eat, more in the heat. No water for a day stops lay.',
  tags:'water drinkers nipples cups flow litres tank temperature cleaning',
  body:
  '<p>Water is the cheapest input and the one that fails most dangerously. Hens drink roughly <b>1.5–2 times their feed weight</b> ' +
  'at comfortable temperatures — about <b>15–23 litres per 100 birds a day</b> — and far more in heat. Hy-Line gives the water-to-feed ' +
  'ratio rising from about 2 : 1 at 21 °C to as high as 8 : 1 at 38 °C.</p>' +
  tbl(['Flock','Normal day','Hot day (plan for)'], [['50','8–12 L','20–25 L'],['190','29–44 L','75–90 L'],['288','43–66 L','115–135 L']]) +
  box('note','The hot-day figures are planning estimates from the ratios above, not measured on this farm. Record water in the app and you will soon have your own numbers.') +
  '<h3>Daily</h3>' +
  ul(['Every drinker working. Cups: clean and filling. Nipples: press one — it should drip freely.',
      'Nipple flow: about 60–70 ml a minute. Test by holding a cup under one for a minute.',
      'About one nipple per 12 birds, or two cups per cage section.',
      'Keep water below about 25 °C — shade the tanks and pipes. Hens drink less when water is warm, then eat less, then lay less.']) +
  '<h3>Weekly</h3>' +
  ul(['Scrub drinkers and flush the lines (Thursday on the Tasks list).','Clean and cover the storage tanks.']) +
  box('alarm','<b>A sudden drop in water use is often the first sign of disease</b> — usually a day before feed intake and eggs fall. If the flock drinks much less than usual and nothing is broken, look closely at the birds.') +
  '<h3>Vaccines and medicines in water</h3>' +
  '<p>Never put a live vaccine in chlorinated or disinfected water — it kills the vaccine. Follow the vaccination article.</p>',
  related:['heat-stress','vaccination','healthy-sick'], src:[HYMG, HY, MERCK] },

/* ============================== HEALTH ============================== */
{ id:'healthy-sick', cat:'health', title:'Healthy bird or sick bird — the daily look',
  summary:'What a healthy hen looks like, what a sick one looks like, and what to do the moment you see one.',
  tags:'sick healthy signs symptoms walk-through isolation vet dead',
  body:
  tbl(['','Healthy','Sick'], [
    ['Posture','Upright, alert, moves away from you','Hunched, fluffed up, eyes half closed, sits apart'],
    ['Comb','Red, full (in lay)','Pale, bluish, dark, or shrunken'],
    ['Eyes and nose','Bright, clear, dry','Watery, swollen, crusted, discharge'],
    ['Breathing','Silent, beak closed (unless hot)','Gasping, rattling, sneezing, coughing'],
    ['Feathers','Smooth, clean vent','Ruffled, dirty or pasted vent'],
    ['Droppings','Firm, brown with a white cap','Watery, green, white, bloody, foamy'],
    ['Appetite','Rushes the trough at feeding','Ignores feed and water']
  ]) +
  '<h3>The walk-through (morning and evening)</h3>' +
  ol(['Walk slowly past every cage. Listen before you look — sneezing and rattling carry.',
      'Look at every bird. Any dead bird comes out now, is recorded, and is disposed of properly.',
      'Any sick bird goes into a separate sick cage now — not tomorrow.',
      'Check water and feed are reaching every cage.']) +
  '<h3>When to call for help</h3>' +
  ul(['More than 2–3 birds sick or dying in a week — call your vet.',
      'Feed or water use drops suddenly — look harder, then call.',
      '<b>Several sudden deaths, swollen heads or combs, twisted necks, a sharp drop in lay</b> — stop all movement and call the state vet. See "Notifiable diseases".']),
  related:['diseases','droppings','dead-birds','notifiable'], src:[MERCK, ARC, OPS] },

{ id:'droppings', cat:'health', title:'Reading droppings',
  summary:'Droppings change before birds look sick. Know normal, so you notice abnormal.',
  tags:'droppings manure diarrhoea faeces poo green white bloody watery',
  body:
  tbl(['What you see','Usually means'], [
    ['Firm brown with a white cap','Normal. The white is urine (urates).'],
    ['Soft, dark, sticky, foamy (1 in 8–10)','Normal "caecal" droppings.'],
    ['Watery, flock-wide, hot day','Birds drinking a lot to cool down. Normal in heat — check again when it cools.'],
    ['Watery on a cool day','Too much salt in feed, kidney trouble, or infection. Watch closely.'],
    ['Bright green','Not eating (bile), or disease — Newcastle disease and avian influenza can cause green diarrhoea. Look at the birds now.'],
    ['White, chalky, pasted vents','Kidney damage or infection. Call the vet if more than one bird.'],
    ['Blood or orange mucus','Possible coccidiosis or gut infection — less common in cages but possible.'],
    ['Worms visible','Worm burden — see "Parasites".']
  ]) +
  box('note','One odd dropping means little. A change across many cages, or with sick birds, means act.'),
  related:['healthy-sick','diseases','parasites'], src:[MERCK, ARC] },

{ id:'diseases', cat:'health', title:'Layer diseases — a quick reference',
  summary:'The diseases that matter most in South African layer flocks: signs, and what to do.',
  tags:'disease newcastle avian influenza bronchitis coryza mycoplasma fowl pox marek egg drop coccidiosis prolapse pecking fatty liver cage layer fatigue',
  body:
  '<p>This table helps you recognise trouble and describe it clearly to a vet. <b>It is not a diagnosis.</b> Many diseases look alike; ' +
  'only a vet and a laboratory can tell them apart.</p>' +
  tbl(['Disease','Signs','What to do'], [
    ['<b>Newcastle disease</b> (controlled)','Gasping, twisted necks, paralysis, green diarrhoea, soft or shell-less eggs, sudden deaths','Vaccination is compulsory. Suspected outbreak: stop movement, call the state vet.'],
    ['<b>Avian influenza (HPAI)</b> (controlled)','Sudden deaths, swollen blue head and comb, sharp drop in lay and feed','Stop all movement, isolate, call the state vet at once. See "Notifiable diseases".'],
    ['Infectious bronchitis','Coughing, rattling, drop in lay, thin, wrinkled or pale shells, watery whites','Vaccination; vet diagnosis. Lay may not fully recover.'],
    ['Infectious coryza','Swollen face, smelly nasal discharge, sneezing','Vet — treatable; clean-out between batches.'],
    ['Mycoplasma (MG)','Chronic sneezing, foamy eyes, slow drop in lay','Vet. Buy pullets from tested-free suppliers.'],
    ['Fowl pox','Scabs on comb and wattles, or yellow patches in the mouth','Vaccination; mosquito control.'],
    ['Marek\'s disease','Paralysis (one leg forward, one back), grey eyes, tumours','Vaccinated at the hatchery — check the pullet record.'],
    ['Egg drop syndrome','Flock looks well, but thin-shelled, soft or shell-less eggs, fewer eggs','Vaccination at rearing; vet diagnosis.'],
    ['Coccidiosis','Bloody droppings, huddled birds','Rare in cages. Vet treatment; mind the egg withdrawal.'],
    ['Worms','Weight loss, pale combs, worms in droppings','Faecal test, then a registered treatment. See "Parasites".'],
    ['Red mite / fowl mite / lice','Pale combs, restless birds at night, drop in lay, blackened vent feathers','See "Parasites".'],
    ['Heat stress','Panting, wings held away from body, fewer eggs, thin shells','See "Heat stress".'],
    ['Prolapse / vent pecking','Red tissue at the vent; other birds pecking it','Isolate immediately. Check light intensity and body weight.'],
    ['Feather pecking','Bare backs, blood','Isolate the bleeding bird. Check light, space, feed protein, boredom.'],
    ['Cage layer fatigue','Hen down in the cage, cannot stand, soft bones','Calcium and vitamin D — check the feed; move her to a floor pen.'],
    ['Fatty liver','Overweight hen found dead, pale comb','Check the feed is a layer ration; avoid fattening scraps.']
  ]),
  related:['notifiable','vaccination','healthy-sick','parasites'], src:[MERCK, ARC, ADA] },

{ id:'vaccination', cat:'health', title:'Vaccination',
  summary:'Newcastle disease vaccination is compulsory in South Africa. How often to boost is a vet\'s call.',
  tags:'vaccine vaccinate newcastle booster lasota clone water eye drop spray schedule interval cold chain',
  body:
  box('law','<b>Newcastle disease is a controlled disease in South Africa, and vaccinating against it is compulsory.</b> Keep the written record for every batch.') +
  '<h3>What the pullets already have</h3>' +
  '<p>Point-of-lay pullets come vaccinated from the rearing farm — usually Marek\'s, Newcastle, infectious bronchitis and others. ' +
  '<b>Get the written record at delivery.</b> It tells your vet what is due next.</p>' +
  '<h3>How often to boost Newcastle</h3>' +
  '<p>The published guidance does not agree:</p>' +
  ul(['ARC guidance: roughly every 4–6 weeks with a live vaccine in high-risk areas.',
      'Hy-Line: typically every 30–60 days (6–10 weeks) depending on local challenge.',
      'Merck Veterinary Manual: boosters every 60–90 days are common.',
      'The farm\'s Operations Calendar used about 3 months — the long end of the range.']) +
  '<p><b>Your vet decides.</b> The app defaults to 60 days; change it in Setup → Health programme. Tasks → Health shows when it is next due.</p>' +
  '<h3>Giving a live vaccine in water</h3>' +
  ol(['Check the expiry date. Keep the vaccine cold (2–8 °C) until the moment you use it.',
      'Use clean, cool, <b>unchlorinated</b> water. Many farms add skimmed-milk powder (the label tells you how much) to protect the virus.',
      'Early morning, while it is cool. Birds a little thirsty first so they drink it all in 1–2 hours — ask your vet how long to hold water back in your weather.',
      'Enough drinkers so every bird drinks.',
      'Record it under Record → Health: vaccine name, batch number, how given. Then tick "Done today" in Tasks → Health.']) +
  box('alarm','Never vaccinate visibly sick birds. Never put vaccine in chlorinated or disinfected water. Never use a vaccine that has been left warm.') +
  box('note','Avian influenza vaccination in South Africa is only allowed with state approval. The 2025–26 policy was changing — ask your vet or the state vet for the current position.'),
  related:['diseases','notifiable','water','withdrawal'], src:[ARC, HYMG, MERCK, ADA, OPS] },

{ id:'parasites', cat:'health', title:'Parasites — mites, lice and worms',
  summary:'Red mite hides by day and feeds at night. Check with a torch. Treat only with registered products.',
  tags:'mites red mite northern fowl mite lice worms deworm parasites torch',
  body:
  tbl(['Parasite','Where to look','Signs'], [
    ['<b>Red mite</b>','Cage joints, cracks, under trays — <b>at night with a torch</b>. Wipe a white tissue along a joint: red-brown smears = mites.','Pale combs (blood loss), restless birds at night, drop in lay, blood spots on eggs.'],
    ['<b>Northern fowl mite</b>','On the bird, around the vent','Blackened, dirty vent feathers; scabby skin; lives on the bird all the time.'],
    ['<b>Lice</b>','Part the feathers under the wings and around the vent','Straw-coloured insects moving, egg clusters at feather bases.'],
    ['<b>Worms</b>','Droppings; a faecal test by the vet','Weight loss, pale combs, lower lay. Less common in cages but possible.']
  ]) +
  '<h3>Treatment</h3>' +
  ul(['Only products <b>registered for laying hens</b>, at the label dose. Many products are not allowed with birds in lay.',
      'Every treatment goes in Record → Health with its <b>egg withdrawal days</b>. The app blocks sales until the date passes.',
      'Red mite: treat the <b>cages</b>, not just the birds — they live in the structure. The empty house between batches is the best time to break the cycle.',
      'Deworm only after a faecal test or on your vet\'s advice.']) +
  '<p>Tasks → Health shows when the next check is due (monthly by default).</p>',
  related:['withdrawal','diseases','biosecurity'], src:[MERCK, ARC] },

{ id:'withdrawal', cat:'health', title:'Withdrawal periods — when eggs may not be sold',
  summary:'After many medicines, eggs must be thrown away for a set number of days. The label tells you how many.',
  tags:'withdrawal medicine antibiotic treatment eggs not for sale residue',
  body:
  '<p>Medicines leave residues in eggs. The <b>withdrawal period</b> on the label is how long after the last dose eggs must be ' +
  'destroyed instead of sold or eaten.</p>' +
  ul(['Read the label before you treat. <b>If the label says "not for use in birds producing eggs for human consumption", do not use it</b> without your vet.',
      'Enter the treatment in Record → Health with the withdrawal days. The app shows a red banner and blocks sales until the safe date.',
      'Eggs laid during the withdrawal period go in the broken/discard count — not to customers, not to staff.',
      'Only a vet may prescribe outside the label, and then the vet sets the withdrawal period.',
      'Keep the empty packaging until the withdrawal period is over.']) +
  box('law','Selling eggs with medicine residues is an offence and a real risk to the business\'s name. The discarded eggs cost far less than the damage.'),
  related:['parasites','vaccination','records'], src:[MERCK] },

{ id:'heat-stress', cat:'health', title:'Heat stress',
  summary:'Hens are comfortable at 18–25 °C. Above about 28 °C they struggle; above 33 °C they can die.',
  tags:'heat hot summer temperature panting humidity cooling electrolytes shade',
  body:
  '<p>Hens have no sweat glands. They cool down by panting, which works less well when the air is humid. Comfort is about ' +
  '<b>18–25 °C and 40–60% humidity</b>. Losses become heavy above about <b>33 °C</b>, especially when it is also humid.</p>' +
  '<h3>Signs</h3>' +
  ul(['Panting, beaks open, wings held away from the body.','Less feed eaten, much more water drunk, watery droppings.',
      'Smaller eggs, thinner shells, fewer eggs.','Birds lying flat, then collapsing — an emergency.']) +
  '<h3>On a hot day</h3>' +
  ol(['<b>Cool, clean water, always.</b> Check drinkers every hour. Shade the tanks.',
      'Open curtains fully for airflow. Nothing blocking the mesh sides.',
      'Feed in the cool of the morning and late afternoon, not midday.',
      'Collect eggs more often — heat spoils them fast.',
      'Scrape manure daily — hot wet manure makes ammonia.',
      'No handling, no weighing, no vaccinating in the heat of the day.',
      'Electrolytes in the water on very hot days (follow the label).']) +
  '<h3>Before summer</h3>' +
  ul(['Shade over the roof and west wall; paint roofs white where possible.','Check water capacity for hot-day demand (see "Water").',
      'Do not crowd — every extra bird adds heat.']) +
  box('alarm','Birds collapsing: cool the building immediately, get water to them, and call the vet. Do not spray a fine mist into a house with no airflow in humid weather — it makes panting less effective.'),
  related:['water','housing','feed'], src:[HYMG, MERCK] },

{ id:'dead-birds', cat:'health', title:'Dead birds — what to do',
  summary:'Out the same day, recorded, disposed of safely. Never sold, eaten or given to dogs.',
  tags:'dead mortality carcass disposal burial deaths',
  body:
  ol(['Remove dead birds at every walk-through. Wear gloves.',
      'Record every death under Record → Health (kind "death") — the bird count and lay rate depend on it.',
      'Look at where and how many: one old hen is normal; several in one cage or one day is a warning.',
      'Dispose of them away from the house: a covered pit with lime, well away from water, or incineration. Never to dogs, never sold or eaten.',
      'Wash hands and boots afterwards.']) +
  box('alarm','<b>Several sudden deaths with no obvious cause</b>: do not move birds, eggs or equipment off the farm. Keep a couple of fresh carcasses cool (not frozen) in a sealed bag for the vet, and call the state vet. See "Notifiable diseases".'),
  related:['notifiable','healthy-sick','biosecurity'], src:[MERCK, ADA] },

/* ============================== HOUSING & BIOSECURITY ============================== */
{ id:'biosecurity', cat:'house', title:'Biosecurity — keeping disease out',
  summary:'Disease comes in on boots, hands, crates, trays, vehicles, wild birds and rats. Close every door.',
  tags:'biosecurity footbath visitors disinfect hygiene wild birds trays vehicles',
  body:
  '<p>Most farm outbreaks arrive with something brought in. The cheapest medicine on a poultry farm is a closed gate.</p>' +
  '<h3>People</h3>' +
  ul(['Every visitor signs the register (Record → Visitors — Form 9).',
      'People who keep their own chickens <b>do not enter the house</b>. Serve them at the gate.',
      'Footbath at the door, fresh disinfectant at the label strength, boots in for the full contact time.',
      'Farm boots and overalls stay on the farm. Wash hands before and after.',
      'Staff should ideally not keep backyard poultry at home.']) +
  '<h3>Things</h3>' +
  ul(['Paper egg trays that have been to other farms or shops carry disease — use new trays, or plastic trays washed and disinfected.',
      'Crates, vehicles and equipment clean before they come in.',
      'Buy pullets only from a known supplier with vaccination records.']) +
  '<h3>Animals</h3>' +
  ul(['Wild birds out — mesh intact, no spilled feed outside.','Rats and mice controlled (see "Rodents").',
      'No dogs, cats or other poultry in the house.']) +
  '<h3>Order of work</h3>' +
  '<p>Youngest birds first, then older birds, sick cage last. Never the other way round.</p>',
  related:['rodents','notifiable','dead-birds','new-batch'], src:[MERCK, ARC, RB] },

{ id:'housing', cat:'house', title:'Housing and cages',
  summary:'Space, trough, water, air and light per bird — and the legal cage-space rules to know before building more.',
  tags:'cage space house ventilation ammonia tier structure mesh curtains density',
  body:
  tbl(['What','Standard'], [
    ['Floor space per hen (cage)','Hy-Line about 490 cm². SAPA Code of Practice: cages installed from 2019 — 550 cm²; older cages 450 cm² allowed until 1 January 2039. Enriched cages 750 cm².'],
    ['Trough space','About 7–9 cm per bird'],
    ['Water','About 1 nipple per 12 birds, flow 60–70 ml/min; or 2 cups per cage section'],
    ['Light','16 h in lay, about 20–25 lux, even across all tiers'],
    ['Temperature','Comfort 18–25 °C'],
    ['Air','If ammonia stings your eyes at bird height, it is harming the birds']
  ]) +
  box('law','<b>Before you buy cages for new land:</b> build to 550 cm² per hen or more. Cages bought today at the old 450 cm² will have to be replaced by 2039, and buyers and auditors increasingly check.') +
  '<h3>This farm\'s house</h3>' +
  '<p>10 m × 4.3 m (43 m²), brick to about 1.2 m then open mesh to the roof with reed screening — good natural cross-ventilation. ' +
  'Three-tier A-frame cages with cup drinkers from lidded tanks and a tarpaulin catching manure. The structural ceiling is about ' +
  '<b>three cages (≈288 birds)</b>.</p>' +
  ul(['Ammonia comes from manure, not poor airflow here — scrape three times a week, daily in hot wet weather.',
      'The bottom tier gets least light and most ammonia. Record tier when weighing.']),
  related:['manure','lighting','heat-stress','new-land'], src:[HYMG, COP, BLUE] },

{ id:'manure', cat:'house', title:'Manure',
  summary:'Out three times a week. Wet manure means ammonia, flies and disease — and dry manure is a product.',
  tags:'manure droppings ammonia flies scraping fertiliser compost',
  body:
  ul(['Scrape or pull the tarpaulin three times a week (Monday, Wednesday, Friday on the Tasks list); daily in hot, wet weather.',
      'Store it covered, downwind and away from the house and water — not in a heap next to the cages.',
      'Wet manure = a water leak or a health problem. Find it.',
      'Flies breed in wet manure in about a week in summer. Dry manure breaks the cycle.',
      'Composted, dried manure sells to gardeners and vegetable farmers. At scale it becomes both a duty and an income.']) +
  box('note','A hen produces a lot of manure — roughly as much fresh manure each day as the feed she eats. Plan storage before you plan more birds.'),
  related:['housing','biosecurity','rodents'], src:[MERCK, BLUE] },

{ id:'rodents', cat:'house', title:'Rats and mice',
  summary:'Rats eat feed, chew pipes, stress birds at night and spread salmonella.',
  tags:'rats mice rodents bait poison feed store',
  body:
  '<h3>Signs</h3>' +
  ul(['Droppings along walls, gnaw marks on bags and pipes, burrows near the house, feed use rising while eggs stay flat.']) +
  '<h3>Control</h3>' +
  ol(['Take away food: sweep spilled feed daily, store bags on pallets in a closed store.',
      'Take away shelter: clear long grass, rubble and junk from around the house.',
      'Bait stations <b>outside</b> the house, tamper-proof, checked weekly (Wednesday on the Tasks list). Never loose poison inside cages or near feed.',
      'Record where the stations are, so everyone checks the same ones.']),
  related:['biosecurity','feed','manure'], src:[MERCK, OPS] },

/* ============================== EGGS & SELLING ============================== */
{ id:'egg-handling', cat:'eggs', title:'Collecting and storing eggs',
  summary:'Three collections a day, point-end down, cool and dry. Cracked and dirty eggs never go to customers.',
  tags:'collect collection storage clean wash cracked dirty trays shelf life cool',
  body:
  ol(['<b>Collect three times a day</b> — about 09:30, 12:30 and 16:30. More often in the heat.',
      'Clean, dry hands. Pack <b>point-end down</b> — the air cell stays at the top and the yolk stays centred.',
      'Set cracked and dirty eggs aside straight away. They are recorded as broken and <b>may not be sold</b>.',
      'Store in the coolest, shaded, dry place on the farm, away from strong smells (diesel, chemicals, onions).',
      'Oldest eggs sell first. Mark trays with the date.']) +
  '<h3>Washing</h3>' +
  '<p>Do not wash eggs in a bucket. A laid egg has a natural coating (the cuticle) that keeps bacteria out; washing strips it and ' +
  'dirty water can pull bacteria in. Lightly marked eggs can be dry-cleaned with a clean cloth or fine sandpaper. ' +
  'Heavily soiled eggs are not saleable.</p>' +
  '<h3>Keeping</h3>' +
  ul(['Quality drops fastest when eggs are warm. Cool and steady is best.',
      'Avoid moving eggs from cold to warm — condensation on the shell helps bacteria through.',
      'Unsold stock on Home is cash with a deadline. Sell it before it ages.']),
  related:['egg-grades','selling','egg-quality'], src:[R345, MERCK, OPS] },

{ id:'egg-grades', cat:'eggs', title:'Egg sizes and grades (South Africa)',
  summary:'The legal size bands, the three grades, and why cracked eggs cannot be sold.',
  tags:'grade size jumbo large medium small cracked dirty regulations R345',
  body:
  '<p>South African egg regulations set size by the weight of the individual egg:</p>' +
  tbl(['Size','Weight per egg'], [
    ['Super Jumbo','more than 72 g'],['Jumbo','more than 66 g'],['Extra Large','more than 59 g'],
    ['Large','more than 51 g'],['Medium','more than 43 g'],['Small','more than 33 g']
  ]) +
  ul(['There are three grades (Grade 1, 2 and 3), all of which must be <b>uncracked</b>.',
      '<b>Cracked and dirty eggs are not for human consumption</b> and may not be sold as eggs.',
      'Young hens lay small and medium eggs; by 30 weeks most Hy-Line Brown eggs are large (about 60 g).']) +
  box('law','There is no general exemption for selling at the farm gate. If you pack and sell eggs, the grading, packing and marking rules apply — see "Selling legally".'),
  related:['labelling','egg-handling','selling'], src:[R345] },

{ id:'egg-quality', cat:'eggs', title:'Egg quality problems',
  summary:'Thin shells, blood spots, pale yolks, small or dirty eggs — the usual causes.',
  tags:'shell thin soft shell-less blood spot yolk colour small eggs dirty quality',
  body:
  tbl(['Problem','Usual causes'], [
    ['Thin, soft or no shell','Older hens, heat, too little calcium or coarse limestone, disease (infectious bronchitis, egg drop syndrome, Newcastle)'],
    ['Wrinkled or misshapen','Infectious bronchitis, stress, overcrowding, older hens'],
    ['Blood or meat spots','Stress or fright (night disturbances, dogs), red mite, light problems; more common in brown eggs'],
    ['Pale yolks','Feed low in colour pigments — ask the feed supplier'],
    ['Watery whites','Old eggs, heat in storage, infectious bronchitis'],
    ['Small eggs','Young hens, underweight hens, low feed intake, heat'],
    ['Dirty eggs','Too few collections, dirty cages or trays, diarrhoea in the flock']
  ]) +
  '<p>Track broken and dirty eggs every day in the app. A rising broken count is an early warning.</p>',
  related:['calcium','diseases','egg-handling','heat-stress'], src:[MERCK, HYMG] },

{ id:'selling', cat:'eggs', title:'Selling eggs — the farm\'s rules',
  summary:'Record the sale on the day the eggs leave. A prepayment is a deposit, not a sale. Every customer has a name.',
  tags:'sell sales customer tray price standing order prepaid deposit spaza market',
  body:
  '<h3>The three rules</h3>' +
  ol(['<b>Record the sale on the day the eggs LEAVE</b>, never the day the money arrives. A prepayment is a deposit, not a sale. (September 2026: 157 eggs were counted twice because a prepaid order was recorded on both dates.)',
      '<b>Every sale has a real customer name.</b> "Walk in" is refused. A name and a number is how a standing order starts.',
      '<b>Price by the tray.</b> The tray price in Setup is what the app expects. Discounts are a decision, not a habit.']) +
  '<h3>Building the customer book</h3>' +
  ul(['Standing orders — the same trays every week — are worth more than any one big sale.',
      'Adding birds is a cheque and three weeks. Finding buyers for the extra eggs every day is the hard part: build customers <b>before</b> the birds arrive.',
      'Spaza shops, bakeries, caterers, churches, schools and offices buy weekly. Deliver on the same day each week.']) +
  '<h3>Price</h3>' +
  '<p>Books → Price shows the break-even tray price now and at full lay. Below break-even, every tray loses money. The farm\'s scaling plan shows that below about R2.10 an egg, a financed expansion cannot pay for itself.</p>' +
  box('law','If eggs are sold to shops for resale, the pack must carry the legal markings — see "Selling legally".'),
  related:['labelling','money','egg-grades'], src:[FARM, BLUE, RB] },

/* ============================== MONEY & RECORDS ============================== */
{ id:'records', cat:'money', title:'Records — the company record book',
  summary:'If it is not written down, it did not happen. What to record, when, and how corrections work.',
  tags:'records record book forms daily reconcile audit correction',
  body:
  '<p>The app is the official company record book. Each paper form has a home in it:</p>' +
  tbl(['Paper form','In the app'], [
    ['Daily production (eggs, broken, feed, water, deaths)','Record → Today'],
    ['Sales register','Record → Sale'],
    ['Body weights','Record → Weights'],
    ['Health and medicine log','Record → Health'],
    ['Feed deliveries','Record → Feed'],
    ['Water deliveries and cost','Record → Feed (water section)'],
    ['Money out','Books → Ledger (CEO and manager)'],
    ['Monthly reconciliation','Books → Reconcile (accountant)'],
    ['Visitor register (Form 9)','Record → Visitors'],
    ['Daily, weekly and monthly checklists','Tasks'],
    ['Buying list, quotes and supplier contacts','Buying (under More on a phone)'],
    ['Finance Policy, bridge loan, company history','Knowledge → Our company']
  ]) +
  '<h3>The habits</h3>' +
  ul(['Record the same day. Memory is not a record.','Backdate honestly — every entry keeps the name and time of the person who made it.',
      'A mistake is corrected by the person who made it, and the correction is visible. Nobody quietly changes a number.',
      'Month end: the accountant checks eggs collected, sold, broken and cash banked agree, then signs off — Matched or Query.']),
  related:['money','selling'], src:[RB, OPS] },

{ id:'money', cat:'money', title:'The money side — costs, break-even and capital',
  summary:'Feed is the biggest cost. Know your break-even tray price, and keep capital separate from running costs.',
  tags:'money cost profit break-even capital payroll feed cost weekly target VAT',
  body:
  '<h3>Two kinds of money out</h3>' +
  ul(['<b>Capital</b> — building the farm: cages, structure, water tank, the birds themselves. Recovered over time.',
      '<b>Running costs</b> — keeping the hens laying: feed, wages, water, medicine, transport, packaging.']) +
  '<p>Feed is by far the largest running cost. At 125 g a day and R390 a 50 kg bag, a hen eats about <b>R0.98 of feed a day</b> — ' +
  'about <b>R29 a month</b>.</p>' +
  '<h3>Break-even</h3>' +
  '<p>The tray price at which sales exactly cover every running cost. Books → Price shows it today and once every batch is in full lay. ' +
  'Small flocks carry wages over few birds, so break-even is high; it falls as the flock grows. The farm\'s plan put it at about ' +
  '<b>R2.21 an egg at 190 birds</b> and about R1.45 at 10,000.</p>' +
  '<h3>The weekly target</h3>' +
  '<p>What the farm must bring in each week to cover feed, wages and running costs. Home shows sales since Monday against it.</p>' +
  '<h3>Things that make the numbers lie</h3>' +
  ul(['Payroll not entered in the ledger — every net figure looks better than it is.',
      'Prepaid orders recorded twice.','Capital spent but not entered.','Unsold eggs counted as if they were cash.']) +
  box('note','Eggs are zero-rated for VAT in South Africa while birds and equipment carry VAT. A registered producer may be able to reclaim VAT on purchases — voluntary registration is possible below the compulsory threshold. Ask the accountant.'),
  related:['records','selling','scaling'], src:[FARM, BLUE, SARS] },

/* ============================== LAW & COMPLIANCE ============================== */
{ id:'notifiable', cat:'law', title:'Notifiable diseases — what to do in an outbreak',
  summary:'Avian influenza and Newcastle disease are controlled diseases. Suspect them: stop movement and call the state vet.',
  tags:'avian influenza bird flu HPAI newcastle outbreak state vet report emergency',
  body:
  box('alarm','<b>Suspect avian influenza or Newcastle disease if you see:</b> several sudden deaths, swollen or blue heads and combs, twisted necks or paralysis, gasping, a sharp drop in eggs and feed — often all within a day or two.') +
  '<h3>Do this, in this order</h3>' +
  ol(['<b>Stop all movement</b> — no birds, eggs, manure, trays or equipment leave the farm. No visitors.',
      '<b>Call the state vet.</b> Gauteng: GDARDE Veterinary Services <b>011 240 2500</b>. National Animal Health: <b>+27 12 319 7456</b>.',
      'Call your own vet.','Keep a couple of fresh dead birds cool (not frozen) in sealed bags for testing.',
      'Record everything: numbers dead per day, signs, eggs and feed.','Do not sell eggs until the state vet says you may.']) +
  box('law','Avian influenza and Newcastle disease are controlled diseases under the Animal Diseases Act. Reporting a suspected case is a legal duty. Vaccinating against avian influenza is only allowed with state approval.') +
  box('note','Save the numbers in your phone now, with your own vet\'s number. Confirm them once a year — phone numbers change.'),
  related:['diseases','dead-birds','biosecurity','emergency'], src:[ADA] },

{ id:'labelling', cat:'law', title:'Selling legally — packing, marking and registration',
  summary:'What must be on an egg pack, claims you may not make, and the 2026 SAPA registration.',
  tags:'label labelling pack marking best before registration levy SAPA certificate of acceptability law regulations',
  body:
  '<h3>What must be on a pack of eggs</h3>' +
  ul(['The word "eggs", the <b>size</b> and the <b>grade</b>.','The <b>name and address</b> of the packer.',
      'A best-before date (the regulations set the maximum period).',
      'Eggs sold loose must have a notice at the point of sale giving the same information.']) +
  '<h3>Claims you may not make</h3>' +
  '<p>This is a cage farm. Do not describe the eggs as "free range", "cage free", "barn", "organic" or "antibiotic free" — claims ' +
  'like these are controlled and must be true and provable.</p>' +
  '<h3>SAPA statutory registration (from 1 April 2026)</h3>' +
  '<p>New statutory measures published under the Marketing of Agricultural Products Act (GN R7326–R7328) require egg producers to ' +
  '<b>register</b> and pay a small <b>levy</b> (about 2 cents a dozen) and keep records. Contact SAPA on <b>011 795 9920</b> to confirm ' +
  'whether and how it applies at this farm\'s size.</p>' +
  '<h3>The packing area</h3>' +
  '<p>Premises where food is handled for sale may need a <b>Certificate of Acceptability</b> (R638) from the municipality\'s environmental health office. Ask them.</p>' +
  box('note','These points come from the regulations as researched in September 2026. Rules and thresholds change — confirm the details with SAPA, the Department of Agriculture\'s food safety inspectors, or an adviser before relying on them.'),
  related:['egg-grades','selling','spent-hens'], src:[R345, SAPA, R638] },

{ id:'spent-hens', cat:'law', title:'Spent hens — the end of lay',
  summary:'Sell them live. Hen meat may only be sold if slaughtered at a registered abattoir.',
  tags:'spent hens end of lay meat slaughter abattoir sell live',
  body:
  '<p>When lay falls below what pays for feed, the flock is sold and replaced. The birds still have value.</p>' +
  ul(['<b>Selling live</b> is the usual route for a small farm — informal buyers, traders and households buy spent hens.',
      '<b>Selling meat</b> — slaughtered, plucked or cut birds — is only allowed if they were slaughtered at a <b>registered abattoir</b> (Meat Safety Act).',
      'No bird inside a medicine withdrawal period may be sold for food.',
      'Plan the sale weeks ahead — buyers need notice, and the next batch needs a clean, rested house.',
      'Follow the end-of-lay clean-out list in Tasks → Batch.']) +
  box('note','The farm\'s original plan named meat as an option once birds come off lay. That is a separate, regulated business — a partnership with an abattoir is the practical way in.'),
  related:['culling','labelling','lay-cycle'], src:[MSA, OPS] },

{ id:'emergency', cat:'law', title:'Emergency numbers',
  summary:'Keep these in every team member\'s phone.',
  tags:'emergency phone numbers contacts state vet sapa',
  body:
  tbl(['Who','Number','When'], [
    ['GDARDE Veterinary Services (Gauteng)','011 240 2500','Suspected avian influenza, Newcastle disease, or unexplained deaths'],
    ['National Animal Health (DALRRD)','+27 12 319 7456','Same, if the provincial office cannot be reached'],
    ['SAPA — egg organisation','011 795 9920','Registration, levy, industry advice'],
    ['Your own poultry vet','(add it here in the team WhatsApp)','Anything that worries you'],
    ['Feed supplier','(add it)','Orders — at 5 days of feed left']
  ]) +
  box('note','Numbers researched in September 2026. Check them once a year.'),
  related:['notifiable'], src:[ADA, SAPA] },

/* ============================== GROWING THE FARM ============================== */
{ id:'scaling', cat:'grow', title:'Growing the flock — the module',
  summary:'Every expansion is the same unit: 200 birds. What it costs, what it earns, and what has to be true first.',
  tags:'scale grow expansion module 200 birds 10000 investment payback',
  body:
  '<p>The farm\'s plan grows in <b>modules of 200 birds</b>, costing about <b>R77,000 each (about R387 a bird)</b> with today\'s small-scale building costs.</p>' +
  tbl(['Flock','Housing','Water a day','Feed a month','What has to be in place'], [
    ['288','Current house, 3 cages','~45–65 L','~21 bags','The ceiling of the current structure'],
    ['500','~112 m²','~300 L','~40 bags','More walk-in and shop trade'],
    ['1,000','~224 m²','~600 L','~79 bags','Standing wholesale orders; a full-time worker'],
    ['2,000','~448 m²','~1,200 L','~158 bags','<b>Bigger land.</b> Borehole or municipal water. Bulk feed.'],
    ['5,000','~1,120 m²','~3,000 L','~395 bags','Feed silo, grading and a cold room'],
    ['10,000','~2,240 m²','~6,000 L','~790 bags','A distribution business with a farm attached']
  ]) +
  '<h3>What decides the pace</h3>' +
  ul(['<b>Price.</b> Below about R2.10 an egg a financed module cannot pay for itself.',
      '<b>Customers.</b> Build the buyers before the birds.',
      '<b>Capital.</b> Saving from 190 birds alone is slow; outside capital or credit changes the timeline.',
      '<b>Water.</b> It rules land in or out.']) +
  box('note','These are the farm\'s own planning figures (September 2026) and change with prices. Books → Price shows the live numbers.'),
  related:['new-land','money','housing'], src:[BLUE] },

{ id:'new-land', cat:'grow', title:'Choosing new land',
  summary:'Water first. Then power, road, room to grow, distance to market — and the permits to ask about before building.',
  tags:'land site new farm borehole electricity zoning permit environmental water use',
  body:
  '<h3>Check in this order</h3>' +
  ol(['<b>Water.</b> 2,000 birds need about 1,200 L a day, more in heat. A borehole (with a yield test and a water-quality test) or a municipal connection. Tanker water does not scale.',
      '<b>Electricity</b> — ideally three-phase — for lighting, ventilation, egg handling and a cold room.',
      '<b>Road access</b> a feed truck can use in the rain.',
      '<b>Room for ten more modules</b>, with houses running east–west to keep the sun off the long walls.',
      '<b>Distance</b> from other poultry farms (disease) and from neighbours\' houses (smell and flies).',
      '<b>Distance to market.</b> At hundreds of trays a day you deliver daily.']) +
  '<h3>Ask before you build</h3>' +
  ul(['Zoning — is poultry farming allowed on the land (agricultural use)?',
      'Environmental authorisation — larger poultry operations can trigger an environmental assessment. Ask the provincial environment department at what flock size it applies.',
      'Water use — borehole abstraction may need registration or a licence with the Department of Water and Sanitation.',
      'Building plans for the houses from the municipality.']) +
  box('law','Build new cages to at least 550 cm² per hen (SAPA Code of Practice) — see "Housing and cages".') +
  box('note','Thresholds and permits vary by province and change over time. Confirm with the authorities or an agricultural consultant before buying land.'),
  related:['scaling','housing','biosecurity'], src:[BLUE, COP] },

{ id:'glossary', cat:'grow', title:'Glossary — layer farming words',
  summary:'The words used in this app and in the industry, in plain language.',
  tags:'glossary words meaning definitions terms',
  body:
  tbl(['Word','Meaning'], [
    ['Point of lay (POL)','A pullet about 18 weeks old, about to start laying'],
    ['Pullet','A young female before or just starting lay'],
    ['Spent hen','A hen at the end of her laying life'],
    ['Lay rate / hen-day %','Eggs laid ÷ hens present × 100'],
    ['Hen-housed eggs','Eggs laid ÷ hens originally placed — counts the deaths against you'],
    ['Peak','The highest lay rate, around week 26'],
    ['Burn rate','Feed eaten per day by the whole flock'],
    ['Withdrawal period','Days after a medicine during which eggs may not be sold'],
    ['Biosecurity','Everything done to keep disease out'],
    ['Cull','Remove a bird from the flock (sell or put down)'],
    ['Tier','A level of a stacked cage — top, middle, bottom'],
    ['Cuticle','The natural coating on a fresh egg'],
    ['Break-even','The price at which income exactly covers costs'],
    ['Capital','Money spent building the farm'],
    ['Running costs','Money spent keeping hens laying'],
    ['Reconcile','Check that eggs, sales and cash agree, and sign the month off'],
    ['Module','The farm\'s unit of expansion — 200 birds']
  ]),
  related:['lay-cycle','money'], src:[] }

];

/* =====================================================================
   HELP — how to use the app. roles: only shown to those roles.
   go: "view" or "view:subtab" for the "Take me there" button.
   ===================================================================== */
window.HELP = [
{ id:'buying', icon:'🛒', title:'The buying list', tags:'buy buying list purchase quote supplier bought need',
  body:'<p><b>Buying</b> holds the day-one paper list and everything added since. Tap an item to update it: mark it <b>Have it</b> with the price and supplier, or record a quote. ' +
  'Every change keeps the old line, so the history shows who changed what and when. The blue pill says who must approve the spend under the Finance Policy.</p>' +
  '<p>The CEO or a manager can tick "also add it to the ledger" so the money is recorded in the same step.</p>', go:'buy:list' },
{ id:'suppliers', icon:'🏪', title:'The supplier book', tags:'supplier contact phone who quote',
  body:'<p><b>Buying → Suppliers</b>: everyone we buy from, who quoted us, and other options — with contacts you can tap to call, what we bought there, what we have spent with them, and why we chose them.</p>', go:'buy:sup' },
{ id:'start', icon:'👋', title:'Getting started', tags:'new start first time begin',
  body:'<ol><li>Open the app link the office sent you.</li><li>Tap <b>Create account</b>, choose your country flag, enter your number, name and a 4-digit PIN.</li>' +
  '<li>If you were sent an <b>invite code</b>, enter it — you go straight in. Without one, you wait for the CEO to approve you.</li>' +
  '<li>Install it on your home screen (next card) so it opens like any other app.</li></ol>' },
{ id:'install', icon:'📲', title:'Put the app on your home screen', tags:'install home screen iphone android safari chrome add',
  body:'<p><b>iPhone:</b> open the link in <b>Safari</b> → Share button (square with arrow) → <b>Add to Home Screen</b>.</p>' +
  '<p><b>Android:</b> open in <b>Chrome</b> → menu ⋮ → <b>Install app</b> or <b>Add to Home screen</b>.</p>' +
  '<p>After installing, open it from the home screen and <b>Sign in</b> with the same number and PIN. On iPhone the home-screen app is separate from Safari, so it asks once.</p>', go:'setup' },
{ id:'pin', icon:'🔑', title:'"Wrong PIN" or cannot sign in', tags:'pin wrong sign in login forgot password locked',
  body:'<ul><li>Check the <b>country flag</b> next to your number — a UK or Zimbabwe number needs its own flag.</li>' +
  '<li>Type the number the way you always do; the app handles the leading 0.</li>' +
  '<li>Forgot your PIN? Ask the CEO or a manager — they can reset it from the Google Sheet.</li>' +
  '<li>Already signed up on this phone? Use <b>Sign in</b>, not Create account.</li></ul>' },
{ id:'offline', icon:'📶', title:'No signal on the farm', tags:'offline signal internet data sync queue',
  body:'<p>Record as normal. Everything is saved on the phone and sent the moment there is signal — the bar at the top says how many records are waiting. ' +
  'Do not clear the browser or delete the app while records are waiting.</p>' },
{ id:'today', icon:'🥚', title:'Recording the day', tags:'record eggs today daily broken feed water', roles:['ceo','manager','ops'],
  body:'<p><b>Record → Today</b>: eggs collected, broken (cracked or dirty), feed put out and water. Leave feed blank to use the normal ration. ' +
  'Saving the same date again replaces that day — it never double counts.</p>', go:'rec:today' },
{ id:'sale', icon:'💵', title:'Recording a sale', tags:'sale sell customer tray prepaid deposit walk in', roles:['ceo','manager','ops'],
  body:'<ul><li>Record the sale on the day the eggs <b>leave</b> — not the day the money comes.</li><li>Use the customer\'s real name. "Walk in" is refused.</li>' +
  '<li>Trays and loose eggs are priced automatically; change the amount if a different price was agreed.</li></ul>', go:'rec:sales' },
{ id:'weights', icon:'⚖️', title:'Weighing birds', tags:'weigh weight tag kg', roles:['ceo','manager','ops'],
  body:'<p>10 birds per batch, monthly, before the morning feed. Tag number with three digits (006), weight in kg with a decimal point (1.85). The app says OK, UNDER or OVER straight away.</p>', go:'rec:weights' },
{ id:'health', icon:'🩺', title:'Deaths, treatments and vaccines', tags:'health death medicine treatment vaccine withdrawal', roles:['ceo','manager','ops'],
  body:'<p><b>Record → Health</b>. Deaths and culls keep the bird count right. Every medicine needs its withdrawal days from the label — the app then blocks sales until it is safe. ' +
  'After a vaccination, also tap <b>Done today</b> in Tasks → Health.</p>', go:'rec:health' },
{ id:'visitors', icon:'🚪', title:'Signing in a visitor', tags:'visitor register form 9 biosecurity footbath', roles:['ceo','manager','ops'],
  body:'<p><b>Record → Visitors</b>. Name, reason, whether they keep poultry at home, and footbath. The app warns you if someone should not enter the house.</p>', go:'rec:visitors' },
{ id:'tasks', icon:'✅', title:'The checklists', tags:'tasks checklist tick daily weekly monthly health batch',
  body:'<p><b>Tasks</b> holds the printed Operations Calendar: today\'s routine, this week\'s extra job, the monthly jobs, the health programme and each batch\'s arrival and clean-out lists.</p>' +
  '<ul><li>Tap a job to tick it. Everyone sees the tick, with the name and time — so two people never do the same job twice, or both skip it.</li>' +
  '<li>Tap again to untick if it was a mistake.</li><li>"Record today in the app" ticks itself when the day is recorded.</li>' +
  '<li>A red number on Tasks means a health job is overdue.</li></ul>', go:'tasks' },
{ id:'tips', icon:'ℹ️', title:'The little "i" buttons', tags:'tooltip info explain meaning',
  body:'<p>Tap any small <b>i</b> beside a word to see what it means. <b>Read more</b> opens the full article in Knowledge.</p>' },
{ id:'kb', icon:'📚', title:'The knowledge library', tags:'knowledge articles library learn',
  body:'<p>Everything about keeping layers — flock, feed and water, health, housing, eggs, money, the law and growing the farm. Search by any word. It works offline once opened.</p>', go:'kb' },
{ id:'roles', icon:'👥', title:'Who can do what', tags:'roles ceo manager operations accountant auditor permissions',
  body:'<ul><li><b>CEO and Manager</b> — record everything, money out, prices, approve people.</li><li><b>Operations</b> — record the daily work and tick checklists.</li>' +
  '<li><b>Accountant</b> — sees everything, reconciles and signs off months; cannot change figures.</li><li><b>Auditor</b> — sees everything, changes nothing.</li></ul>' },
{ id:'approve', icon:'✔️', title:'Approving people and invite codes', tags:'approve invite code team new person role', roles:['ceo','manager'],
  body:'<p><b>Team</b> shows anyone waiting. Choose their role and approve. Faster: make an <b>invite code</b> with the role already set, send it with the app link — they go straight in.</p>', go:'team' },
{ id:'ledger', icon:'📘', title:'Money out — the ledger', tags:'expense ledger payroll cost capital invoice', roles:['ceo','manager'],
  body:'<p><b>Books → Ledger</b>. Every rand out, backdated to the day it was spent, with supplier and invoice number. Choose Capital for building the farm, Running cost for everything else. Enter payroll every month.</p>', go:'money:ledger' },
{ id:'recon', icon:'🧮', title:'Reconciling a month', tags:'reconcile sign off month accountant query matched', roles:['ceo','manager','acct'],
  body:'<p><b>Books → Reconcile</b>. Pick the month, read the flags, then sign off <b>Matched</b> or <b>Query</b> with a note. A sign-off never changes a figure — whoever recorded a wrong number corrects it.</p>', go:'money:recon' },
{ id:'settings', icon:'⚙️', title:'Changing prices, costs and batches', tags:'settings prices batch arrival setup intervals', roles:['ceo','manager'],
  body:'<p><b>Setup</b>: tray and egg prices, feed and running costs, the batches with their real arrival dates, and the health programme intervals. Everyone\'s app updates at the next sync.</p>', go:'setup' },
{ id:'screens', icon:'🖥️', title:'Phone, tablet or laptop', tags:'screen desktop laptop tablet size',
  body:'<p>The app fits any screen. On a phone the menu is along the bottom (Knowledge, Help, Team and Setup are under <b>More</b>). On a tablet or laptop the menu moves to the left and screens show side by side.</p>' },
{ id:'update', icon:'🔄', title:'Getting the latest version', tags:'update version new refresh',
  body:'<p>The app updates itself: when a new version is published it reloads once with "Updated — reopening". If something looks old, close the app completely and open it again.</p>' },
{ id:'backup', icon:'⬇️', title:'Downloads and backup', tags:'export csv backup download excel',
  body:'<p><b>Setup → Data</b>: daily and sales records as CSV (opens in Excel or Sheets) and a full backup. The master copy is always the company Google Sheet.</p>', go:'setup' },
{ id:'shared', icon:'📵', title:'Shared or lost phone', tags:'sign out shared phone lost stolen',
  body:'<p>On a shared phone, <b>sign out</b> in Setup when you finish. If a phone is lost, tell the CEO — she can block the account from Team and the phone loses access at once.</p>' }
];

})();
