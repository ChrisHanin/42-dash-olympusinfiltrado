# `> SIGNAL INTERCEPTED` — The Aggregator Arena

```text
╔══════════════════════════════════════════════════════════════════════╗
║  TRANSMISSION ORIGIN: Sector 42, Subnet Ω-7                          ║
║  ENCRYPTION: HMAC-SHA256 (obviously)                                 ║
║  PRIORITY: ABSOLUTE IMPROBABILITY                                    ║
║  STATUS: DON'T PANIC                                                 ║
╚══════════════════════════════════════════════════════════════════════╝
```

Somewhere in the vast, sprawling, neon-drenched wreckage of a
cosmos that runs on distributed systems and cold brew, an
Operator is waiting.

They do not know precisely what they want. This is standard
for beings who manage casino platforms at the edge of known
cyberspace.

They do know it must:

- List thousands of casino games across fragmented data-realms
- Filter them with the elegance of a neural net parsing static
- Launch them without crashing the local spacetime continuum
- Look presentable to carbon-based humanoids who still use mice
- Perform admirably when 50 concurrent connections hit like a
  DDoS from a parallel dimension

And they need it in three hours.

This, of course, is perfectly reasonable in the same way that
building a hyperspace bypass through someone's home planet is
*perfectly reasonable*.

You and your crew have been jacked into the Arena to construct
a **Game Aggregator and Operator Portal** — a task roughly
equivalent to recompiling the fabric of reality while the
kernel is still booting, the firewall is sentient, and someone
keeps `rm -rf`-ing the config files.

**Don't panic.** You may panic later. Right now, flush your
buffer and focus.

---

## `> cat /sys/arena/situation.log`

Across the neon-scorched datascape of the digital underground
lie scattered nodes of games:

- **Providers** of Slots and Tables, each running proprietary
  protocols that haven't been updated since the Great Format
  Wars of '09,
- **Domains** of RTP and Volatility, where percentages are
  sometimes decimals, sometimes strings, and occasionally
  expressed as vibes,
- **Artifacts** both Enabled and Dormant, their status bits
  flickering like dying LEDs in an abandoned server rack.

These realms are disconnected, chaotic, and deeply resentful
of standardization.

The High Council of Root Access has issued a decree,
transmitted on all frequencies:

> ```text
> FROM: root@high-council.arena.net
> TO: *
> SUBJECT: UNIFY OR BE DEPRECATED
>
> Unify the providers. Impose order on the chaos.
> Make the interface usable by mortals.
> And for the love of all that is concurrent,
> make the Launch Ritual work properly this time.
>
> You have 2–3 hours.
>
> Tea is optional. Uptime is not.
> ```

---

## `> whoami` — The Fellowship of the Terminal

You are a crew of 3–5 engineers, which in cosmic hacker terms
is either a highly efficient zero-day strike force or a
politely coordinated merge conflict — depending entirely on
whether you defined your interfaces before writing code.

Each of you must assume a role. Choose wisely. Or don't. The
compiler doesn't care about your feelings.

### `> sudo -u backend_warden` — The Backend Warden

*Keeper of Contracts. Guardian of Validation Logic. The One
Who Returns Proper Status Codes.*

```text
 ╔═══╗
 ║ B ║  "A 500 is not an answer. It's a confession."
 ║ W ║
 ╚═══╝
```

Behind every elegant UI lies a backend that either behaves
impeccably or collapses under scrutiny like a stack overflow
on a recursive Tuesday.

The Backend Warden must:

- Define strict OpenAPI contracts (because chaos is not an
  architecture pattern, no matter what your last startup
  claimed).
- Validate all incoming payloads (because users are
  adversarial by nature and creative by accident).
- Enforce business rules (especially the sacred doctrine:
  *"disabled games shall not launch in real mode"*).
- Generate session tokens that look convincingly
  cryptographic.
- Respond consistently, with dignity and proper HTTP status
  codes.

The Arena's automated Judges are cold, deterministic
processes. They are not impressed by almost-correct. They do
not accept `200 OK` when they expected `404 Not Found`.

> They will simply fail the test. And they will not feel bad
> about it.

### `> sudo -u frontend_illusionist` — The Frontend Illusionist

*Architect of Order in an Infinite Stream of JSON. The One Who
Makes `undefined` Look Like a Feature.*

```text
 ╔═══╗
 ║ F ║  "If it's loading, show a spinner. If it's broken,
 ║ I ║   show a message. If it's blank, you've failed."
 ╚═══╝
```

The Illusionist transforms raw JSON into something operators
can parse without existential dread.

You must craft:

- A catalog view that lists games without overwhelming mortals
  or crashing their browser tabs.
- Filters to narrow the infinite into the manageable.
- Sorting mechanisms to impose hierarchy on entropy.
- A details view that reveals each artifact's properties with
  the precision of a hex dump and the beauty of a
  well-designed terminal theme.
- A launch flow that does not feel like a ritual sacrifice
  to the gods of `window.location`.
- Loading states that inform rather than abandon the user
  in a void of blank whitespace.
- Error handling that guides rather than gaslights.

Errors must be clear. Loading states must exist. Nothing
should flicker like a haunted framebuffer.

**Data source:** Crews that skip the backend can jack their UI
directly into the **reference evaluator** running on port
`3000` (via Docker Compose). It serves the full API with CORS
enabled. No backend work required — your entire score comes
from the quality of your interface.

If the Illusionist falters, the Operator will assume the
entire system has segfaulted.

### `> sudo -u fullstack_battlemage` — The Full-Stack Battlemage

*Translator Between Realms. Walker of Both Stacks. The One
Whose `git log` Tells the Real Story.*

```text
 ╔═══╗
 ║ F ║  "The frontend says the API changed.
 ║ B ║   The backend says it didn't.
 ╚═══╝   Both are wrong. I checked."
```

Some engineers specialize. Others prevent the specialists
from accidentally redefining the contract mid-implementation
and deploying incompatible schemas to production at 2 AM.

The Battlemage:

- Establishes API agreements early, before hope becomes
  technical debt.
- Ensures frontend and backend speak the same dialect of
  JSON.
- Prevents blocking standoffs where both sides wait for the
  other to merge first.
- Sees the system as a single organism rather than two
  microservices arguing over content types in a Slack thread.

Without this role, integration becomes… *educational*.

---

## `> ./run_trials --mode=arena` — The Trials of the Arena

The Arena is not conquered in one dramatic `git push`.

It unfolds in **10 Trials**, organized into three tiers —
each one a node in the skill tree of distributed-systems
mastery:

- **Shared Trials (I–IV):** Both backend and frontend
  contribute independently. Each side earns its own points.
  Parallel execution recommended.
- **Backend-Only Trials (V–VII):** Pure API and systems
  engineering. Where `mutex` meets reality.
- **Frontend-Only Trials (VIII–X):** Pure UI engineering, UX
  discipline, and the art of making `data-testid` attributes
  actually mean something.

Every crew archetype — backend, frontend, or full-stack —
can reach roughly **95 points** by maxing out their natural
path.

---

## `> cat /sys/arena/scoreboard.dat`

```text
┌─────┬────────────────────────────────┬────────┬────────┬───────┐
│  #  │ Trial                          │ BE pts │ FE pts │ Total │
├─────┼────────────────────────────────┼────────┼────────┼───────┤
│  I  │ The Awakening                  │    5   │    5   │   10  │
│ II  │ The Catalog of Infinite Chaos  │   15   │   15   │   30  │
│ III │ The Artifact Inspection        │   10   │   10   │   20  │
│ IV  │ The Launch Ritual              │   15   │   15   │   30  │
│  V  │ The Normalization Gauntlet     │   15   │    —   │   15  │
│ VI  │ The Vault of Infinite Txns     │   20   │    —   │   20  │
│ VII │ The Seal of Authentication     │   15   │    —   │   15  │
│VIII │ State Mgmt & Loading UX        │    —   │   20   │   20  │
│ IX  │ Accessibility & Performance    │    —   │   15   │   15  │
│  X  │ The Wallet Dashboard           │    —   │   15   │   15  │
├─────┼────────────────────────────────┼────────┼────────┼───────┤
│     │ COLUMN TOTALS                  │   95   │   95   │  190  │
└─────┴────────────────────────────────┴────────┴────────┴───────┘
```

### Boss Encounters (Bonus XP)

```text
┌──────────────────────────┬────────┬──────────────────────────┐
│ Boss                     │ Points │ Trigger Condition        │
├──────────────────────────┼────────┼──────────────────────────┤
│ The Lighthouse Sentinel  │  +10   │ Lighthouse perf ≥ 90     │
│ The Load Warden          │  +10   │ p95 < 200ms, 50 conc.   │
└──────────────────────────┴────────┴──────────────────────────┘
```

### Scoring by Crew Archetype

| Crew Type  | Trials                                      | Max Score         |
|------------|---------------------------------------------|-------------------|
| Backend    | I(BE), II(BE), III(BE), IV(BE), V, VI, VII  | 95 (+10 boss)     |
| Frontend   | I(FE), II(FE), III(FE), IV(FE), VIII, IX, X | 95 (+10 boss)     |
| Full-Stack | All trials, both sides                      | 190 (theoretical) |

In 2–3 hours, a full-stack crew realistically completes
~105–115 points. The effective target for all crew types is
**~95 points** as a perfect score for your archetype.

---

## `[TIER 0]` SHARED FOUNDATION — *"First, Prove You Exist"*

## Trial I — The Awakening `[10 pts: 5 BE + 5 FE]`

> *"In the beginning there was `localhost`, and it was without
> form, and void; and darkness was upon the face of the port.
> And the engineer said, Let there be a health check: and
> there was `{"status":"ok"}`."*

Before you can unite realms, your system must simply *exist*.
This is a lower bar than it sounds. Many have failed here.

### Backend Component — Trial I (5 pts)

- `/healthz` must respond with `{"status":"ok"}` and HTTP
  `200`.
- The API server starts on the configured port without
  crashing, panicking, or entering an infinite loop of
  existential doubt.
- The README documents how to run the project.

**Evaluation:** HTTP request to `/healthz`, check `200` +
JSON shape. Binary. Merciless. Beautiful.

### Frontend Component — Trial I (5 pts)

- The frontend loads at the configured URL without JavaScript
  errors.
- A visible heading or branding element confirms the app
  identity.
- The browser console has zero uncaught exceptions on initial
  load.

**Evaluation:** Playwright navigates to root URL, asserts no
console errors, asserts `document.title` or `h1` is
non-empty, screenshots confirm something rendered.

If your project cannot start, the Arena will quietly
`kill -9` your score and move on without you.

---

## `[TIER 1]` SHARED TRIALS (II–IV) — *"The Gauntlet Begins"*

Each of these trials has **independent** backend and frontend
components. Crews earn points for whichever side(s) they
build.

## Trial II — The Catalog of Infinite Chaos `[30 pts: 15 BE + 15 FE]`

> *"The answer to 'how many games are there?' is, of course,
> 42 pages of them. Give or take a few hundred, depending on
> your `pageSize` and your relationship with the concept of
> pagination."*

Hundreds of games await in the datastream. Operators insist
on order. The games insist on entropy. You are the middleware
caught between.

### Backend Component — Trial II (15 pts)

`GET /api/games` with:

- Search by name (query param `search` or `name`)
- Filter by `provider`, `category`, `enabled`
- Sort by `name` or `rtp`, ascending/descending
- Pagination with `page` and `pageSize`, returning `meta`
  object with `total`, `page`, `pageSize`, `totalPages`
- Default: `enabled=true`, `page=1`, `pageSize=20`

**Evaluation:** HTTP assertions — compare filtered counts,
sort order, pagination math against the reference
implementation. The Judges have a reference. Your
implementation either matches it or it doesn't. There is no
partial credit for creative interpretation.

### Frontend Component — Trial II (15 pts)

| Sub-criterion                                                 | Pts | How It's Evaluated                                                                   |
|---------------------------------------------------------------|-----|--------------------------------------------------------------------------------------|
| Game grid/list renders with name, provider, category per card | 3   | DOM: `[data-testid="game-card"]` count > 0, each has text for name/provider/category |
| Search input filters games by name                            | 3   | Type into search, visible card count decreases, names contain search term            |
| Category filter works (dropdown, tabs, or chips)              | 3   | Activate category, all visible cards show that category                              |
| Provider filter works                                         | 3   | Activate provider filter, results match                                              |
| Pagination or infinite scroll handles the full dataset        | 3   | Initial render is not all games; navigate/scroll for new content                     |

If filtering lies, the Judges will know. If pagination
miscounts, the Judges will know. If your search returns
results that don't match the query — believe it — *the Judges
will know*.

They are running headless Chromium at 3 AM and they have
infinite patience and zero empathy.

---

## Trial III — The Artifact Inspection `[20 pts: 10 BE + 10 FE]`

> *"Every game in the catalog is an artifact — a digital relic
> with properties, metadata, and occasionally an RTP that
> seems suspiciously generous. Click on one. Learn its
> secrets. Try not to get a `404`."*

When a game is selected, it must reveal its nature.

### Backend Component — Trial III (10 pts)

`GET /api/games/:id` returning the full game object with:

- ID, provider, category, RTP, enabled status, additional
  traits

If an artifact does not exist, return `404` with:

```json
{ "code": "NOT_FOUND", "message": "...", "details": [] }
```

Not a `500`. Not silence. Not interpretive error poetry. Not
a stack trace that reveals your directory structure.
**Structure. Always structure.**

**Evaluation:** HTTP requests with known valid IDs and
invalid IDs, check response shapes and status codes.

### Frontend Component — Trial III (10 pts)

| Sub-criterion                                                                    | Pts | How It's Evaluated                                                   |
|----------------------------------------------------------------------------------|-----|----------------------------------------------------------------------|
| Clicking a game card opens a detail view                                         | 2   | Click first card, detail view appears (URL change or modal)          |
| Detail view shows: name, provider, category, RTP, volatility, enabled, thumbnail | 4   | DOM assertions for each field in the detail view                     |
| Back navigation returns to catalog without losing filter/scroll state            | 2   | Apply filter, click game, go back, filter still applied              |
| Non-existent game shows user-friendly error (not blank page or crash)            | 2   | Navigate to `/games/nonexistent-id`, error visible, no JS exceptions |

---

## Trial IV — The Launch Ritual `[30 pts: 15 BE + 15 FE]`

> *"This is it. The moment where `POST` meets consequence.
> Where session tokens are forged in the fires of validation
> and launch URLs are constructed with the precision of a
> cryptographic handshake. Do NOT let disabled games through
> in real mode. The last engineer who did that was reassigned
> to maintaining legacy COBOL."*

This is the moment of consequence.

### Backend Component — Trial IV (15 pts)

`POST /api/launch`

The system must:

- Validate required fields (`gameId`, `mode`).
- Enforce the "no real-mode on disabled games" doctrine.
  This is non-negotiable. This is the law.
- Generate a session token.
- Define an expiry timestamp.
- Construct a launch URL that looks purposeful and isn't
  just a `console.log` you forgot to remove.

**Evaluation:** HTTP requests with valid/invalid payloads,
check business rule enforcement and response shape.

### Frontend Component — Trial IV (15 pts)

| Sub-criterion                                                       | Pts | How It's Evaluated                                                      |
|---------------------------------------------------------------------|-----|-------------------------------------------------------------------------|
| Launch button visible on game detail or game card                   | 2   | DOM: button matching `/launch/i` or `[data-testid="launch-button"]`     |
| Launch triggers a request and shows a loading state                 | 3   | Click launch, loading indicator appears, resolves                       |
| Success state shows session info (session ID, URL, or confirmation) | 3   | After launch, success message or session data visible                   |
| Error state for invalid launch shows clear error message            | 3   | Launch disabled game, error message displayed                           |
| Mode selector (demo/real) is present and functional                 | 2   | Radio buttons, toggle, or dropdown for mode selection                   |
| Disabled games have visual indication and restricted launch         | 2   | Disabled games show badge/greyed state; launch restricted for real mode |

If invalid input is accepted, entropy wins. If valid input is
rejected, entropy wins differently. Precision is the only
weapon.

---

## `[TIER 2]` BACKEND-ONLY TRIALS (V–VII) — *"Where `mutex` Meets Reality"*

These trials are exclusively for crews building backend
services. Frontend crews skip these entirely and should spend
their cycles on Tier 3.

## Trial V — The Normalization Gauntlet `[15 pts]`

> *"The galaxy's game providers agreed on exactly one thing:
> that they would never agree on anything. Not field names.
> Not date formats. Not whether RTP is a float, a string,
> a percentage, or a decimal that needs to be multiplied by
> 100. Welcome to the Gauntlet. Your parser will weep."*

You will receive game data from **three providers**, each with
their own JSON schema, naming conventions, date formats, and
general disdain for interoperability:

### Provider Alpha `// Modern. Clean. Almost suspiciously reasonable.`

```json
{
  "gameId": "game-00001-netent",
  "title": "Golden Nebula",
  "studio": "NetEnt",
  "type": "slots",
  "returnToPlayer": 95.42,
  "variance": "medium",
  "active": true,
  "launchDate": "2022-03-15T00:00:00Z",
  "thumbnail": "https://cdn.alpha.example.com/games/game-00001-netent.png",
  "features": ["megaways", "free-spins"]
}
```

### Provider Beta `// Legacy. Flat. Aggressively abbreviated.`

```json
{
  "game_code": "NETENT_00002",
  "game_name": "Golden Nebula",
  "provider_name": "NetEnt",
  "game_category": "SL",
  "rtp_value": "95.42",
  "risk_level": "MED",
  "is_enabled": 1,
  "release_date": "15/03/2022",
  "image_url": "https://assets.beta.example.com/NETENT_00002.jpg",
  "tag_list": "megaways,free-spins"
}
```

Category codes: `SL` (slots), `LV` (live), `TB` (table),
`IN` (instant), `JP` (jackpot).
Volatility codes: `LOW`, `MED`, `HIGH`.
Enabled: `1` or `0`. RTP: string. Date: `DD/MM/YYYY`. Tags:
comma-separated.

### Provider Gamma `// Nested. Verbose. Written by a committee.`

```json
{
  "data": {
    "id": "gm_00001",
    "attributes": {
      "display_name": "Golden Nebula",
      "provider": {
        "code": "netent",
        "label": "NetEnt"
      },
      "classification": {
        "category": "slots",
        "volatility": "medium"
      },
      "metrics": { "rtp": 0.9542 },
      "status": {
        "enabled": true,
        "released": "2022-03-15"
      },
      "media": {
        "thumbnail_url": "https://media.gamma.example.com/gm_00001/thumb.webp"
      },
      "tags": [
        { "slug": "megaways" },
        { "slug": "free-spins" }
      ]
    }
  }
}
```

RTP as decimal (`0.9542` = `95.42%`). Tags as array of
objects. Provider as nested object. Because why use one level
of nesting when seven will do.

Your system must ingest all three feeds and expose them
through a **single unified API** with the canonical schema
from Trials II–IV.

If you cannot normalize, you cannot aggregate.
And if you cannot aggregate, you are merely hosting static
JSON and calling it a platform.

**Evaluation:** Compare game counts, spot-check specific
games from each provider for field correctness.

---

## Trial VI — The Vault of Infinite Transactions `[20 pts]`

> *"Credits flow like packets through a router — fast,
> concurrent, and catastrophically wrong if you forget to
> lock. Fifty workers are about to hit your wallet endpoint
> simultaneously. Your `mutex` is the only thing standing
> between order and a negative balance that violates the
> laws of financial physics."*

Money moves. Sometimes simultaneously. Sometimes maliciously.
Always concurrently.

Each operator begins with a balance of **10,000 credits**.

### Endpoints

- `GET /api/wallet/balance` — current balance
- `POST /api/bet` — deduct from balance
- `POST /api/settle` — add winnings (must reference a bet)
- `POST /api/rollback` — reverse a bet (must reference an
  unsettled bet)

### Bet Request

```json
{
  "transactionId": "bet-abc-001",
  "amount": 10.00
}
```

### Settle Request

```json
{
  "transactionId": "settle-abc-001",
  "betTransactionId": "bet-abc-001",
  "amount": 15.00
}
```

### Rollback Request

```json
{
  "transactionId": "rollback-abc-001",
  "betTransactionId": "bet-abc-001"
}
```

### The Laws of the Vault

```text
1. NO NEGATIVE BALANCES     — A bet must fail if
                              insufficient funds.
                              Overdrafts are not a feature.
2. SETTLE REQUIRES A BET    — You cannot settle what has
                              not been wagered. This is
                              accounting, not magic.
3. ROLLBACK REQUIRES A BET  — Unsettled and unrolled-back
                              only. You cannot undo what is
                              already resolved.
4. SETTLED = IMMUTABLE      — Settled bets cannot be rolled
                              back. Time flows forward. So
                              does your ledger.
5. IDEMPOTENCY IS SACRED    — Same transactionId + same
                              payload = same response. No
                              double-processing. Different
                              amount on same ID = 409
                              Conflict.
```

### The Real Test

The stress-test daemon will spawn **50 concurrent
goroutines**, each firing rapid bet/settle sequences at your
wallet endpoint. If your implementation allows overdrawing,
double-deducts, or produces an inconsistent final balance —
the Judges will surface the discrepancy with the cold
precision of a forensic auditor.

This is not a theoretical exercise. This is where concurrency
primitives earn their reputation.

**Evaluation:** The `stress-test/main.go` tool — phases
covering health, balance, concurrent storm, idempotency,
rollback, and final balance integrity.

---

## Trial VII — The Seal of Authentication `[15 pts]`

> *"Any sufficiently advanced launch URL is indistinguishable
> from a signed cryptographic token. Any insufficiently
> advanced one is indistinguishable from a security
> vulnerability."*

Launch URLs must be signed. Unsigned URLs are unsigned checks.
The Arena does not accept unsigned checks.

When `POST /api/launch` succeeds, the response must include:

```json
{
  "sessionId": "sess-abc123",
  "launchUrl": "https://play.example.com/game-00001?session=sess-abc123&expires=1710600000&sig=<hmac>",
  "expiresAt": "2026-03-16T15:00:00Z"
}
```

The signature is **HMAC-SHA256** over
`gameId|sessionId|expiresAt` using the secret provided via
the `LAUNCH_SECRET` environment variable.

### Verification Matrix

`GET /api/verify-launch?token=<sessionId>&sig=<signature>`

```text
┌──────────────────────┬────────┬─────────────────────┐
│ Condition            │ Status │ Code                │
├──────────────────────┼────────┼─────────────────────┤
│ Valid + not expired  │  200   │ —                   │
│ Tampered signature   │  403   │ INVALID_SIGNATURE   │
│ Expired session      │  410   │ SESSION_EXPIRED     │
│ Unknown session      │  404   │ SESSION_NOT_FOUND   │
└──────────────────────┴────────┴─────────────────────┘
```

If your launch URLs can be forged, you have no security.
If they cannot be verified, you have no trust.
If they expire incorrectly, you have no time management.

**Evaluation:** Launch a game, extract signature, verify it.
Tamper with signature → `403`. Expired session → `410`.
Unknown session → `404`.

---

## `[TIER 3]` FRONTEND-ONLY TRIALS (VIII–X) — *"The UI Is a Lie (Make It Convincing)"*

These trials are exclusively for crews building frontend
interfaces. Backend crews skip these entirely.

## Trial VIII — State Management & Loading UX `[20 pts]`

> *"The difference between a product and a prototype is what
> happens during the loading state. A blank white page is not
> a loading state. It is an admission of defeat rendered at
> 60 frames per second."*

This is the highest-value frontend-only trial. It tests the
engineering discipline that separates a shipped product from
a hackathon demo that only works on the presenter's machine.

| Sub-criterion                                                            | Pts | How It's Evaluated                                                                                            |
|--------------------------------------------------------------------------|-----|---------------------------------------------------------------------------------------------------------------|
| Loading indicators during data fetch (not a blank white page)            | 4   | Throttle network, navigate to catalog, `[data-testid="loading"]` or `[aria-busy="true"]` appears within 500ms |
| Error boundary: API 500 or network fail shows retry button/error message | 4   | Intercept API, abort requests, error UI appears, click retry, data loads                                      |
| Empty state: filters with zero results show "no results" message         | 4   | Search nonsense string, "no games found" message (not blank grid)                                             |
| URL-driven state: filters/search/page in URL, refresh preserves state    | 4   | Apply filters, check URL params, reload, filters still applied                                                |
| Debounced search: typing does not fire request per keystroke             | 4   | Type 6 chars rapidly, assert 2 or fewer network requests (initial + debounced)                                |

If your catalog shows a blank white page while loading, the
Operator will assume you have disconnected from the Matrix.

If your error state is a white screen of death, the Operator
will assume the Matrix has disconnected from you.

---

## Trial IX — Accessibility & Performance `[15 pts]`

> *"A portal that excludes users is a portal that excludes
> revenue. A portal that loads like it's computing the answer
> to Life, the Universe, and Everything on each request is a
> portal that users will close before it finishes rendering."*

A functioning UI that excludes users or loads like it's
running on a Commodore 64 emulating a Kubernetes cluster is
not yet complete.

| Sub-criterion                                                   | Pts | How It's Evaluated                                                                           |
|-----------------------------------------------------------------|-----|----------------------------------------------------------------------------------------------|
| Lighthouse accessibility score of 80 or higher                  | 4   | Lighthouse CI in headless Chrome                                                             |
| Keyboard navigation: all interactive elements reachable via Tab | 3   | Tab through search, filters, cards, buttons; focus moves logically                           |
| ARIA and semantic HTML: labels, alt text, landmarks             | 3   | axe-core audit: zero critical/serious violations; `<img>` has `alt`, `<input>` has `<label>` |
| Lighthouse performance score of 70 or higher                    | 3   | Lighthouse CI performance audit                                                              |
| Responsive layout: usable at 375px mobile and 1440px desktop    | 2   | Viewport 375px, no horizontal scroll, game cards visible                                     |

---

## Trial X — The Wallet Dashboard `[15 pts]`

> *"Give the Operator a window into the Vault. Let them see
> their credits flow. Let them bet, and watch the balance
> update in real-time. Even if you didn't build the Vault
> yourself, you can build the glass."*

A visual interface for the wallet system. Even if you didn't
build the backend, you can build the UI against the reference
evaluator's wallet API.

| Sub-criterion                                                               | Pts | How It's Evaluated                                                                     |
|-----------------------------------------------------------------------------|-----|----------------------------------------------------------------------------------------|
| Balance displayed prominently, updates after operations                     | 3   | Element with `[data-testid="wallet-balance"]` shows a number; after bet, value changes |
| Bet interaction: amount input + bet button, balance decreases with feedback | 4   | Enter amount, click bet, balance updates, success feedback shown                       |
| Transaction history: list showing type (bet/settle/rollback), amount, ID    | 4   | After placing a bet, list contains entry with type "bet" and the amount                |
| Insufficient funds error: clear message, not silent failure                 | 2   | Bet more than balance, error message visible                                           |
| Responsive: wallet usable at 375px mobile width                             | 2   | Viewport 375px, balance, bet input, history visible, no horizontal scroll              |

---

## `> man arena-codex` — The Codex

*Because the Arena reads your responses more carefully than
you read its documentation.*

The Arena enforces:

- Strict OpenAPI contract validation.
- Consistent error structure:

  ```json
  { "code": "ERROR", "message": "...", "details": [] }
  ```

- Proper HTTP status codes. Every. Single. Time.
- Predictable schemas. No surprises. No creativity in your
  error payloads.

The Judges are automated. They do not admire clever excuses.
They do not accept pull request descriptions as evidence.
They admire conformity to spec. They worship determinism.

## `> grep -r "data-testid" ./evaluator-frontend/`

The frontend evaluator uses `data-testid` attributes as
primary selectors, with semantic fallbacks. Recommended test
IDs:

```text
┌──────────────────────┬─────────────────────┐
│ Element              │ data-testid         │
├──────────────────────┼─────────────────────┤
│ Game card            │ game-card           │
│ Search input         │ search-input        │
│ Category filter      │ category-filter     │
│ Provider filter      │ provider-filter     │
│ Game detail view     │ game-detail         │
│ Launch button        │ launch-button       │
│ Mode selector        │ mode-selector       │
│ Loading indicator    │ loading             │
│ Error message        │ error-message       │
│ Empty state          │ empty-state         │
│ Wallet balance       │ wallet-balance      │
│ Bet amount input     │ bet-amount          │
│ Bet button           │ bet-button          │
│ Transaction list     │ transaction-list    │
│ Transaction item     │ transaction-item    │
└──────────────────────┴─────────────────────┘
```

These are **recommended**, not required. The evaluator will
fall back to semantic selectors (`input[type="search"]`,
`button:has-text("Launch")`, etc.) when test IDs are absent.

---

## `> uptime` — The Clock

```text
 ┌────────────────────────────────────────────┐
 │         T - 180 MINUTES AND COUNTING       │
 │                                            │
 │   ██████████████████████░░░░░░░░░░  60%    │
 │                                            │
 │   STATUS: COMPILING                        │
 │   COFFEE: CRITICAL                         │
 │   MERGE CONFLICTS: INEVITABLE              │
 └────────────────────────────────────────────┘
```

You have 2–3 hours.

In that time, you must:

- Agree on contracts early. **Before writing code.** This is
  not optional. This is survival.
- Divide responsibilities. Parallel work or serial suffering.
  Choose wisely.
- Avoid blocking one another. If you're waiting for someone
  else's endpoint, mock it and move on.
- Ship incrementally. A working `/healthz` endpoint is worth
  more than a half-finished wallet system.
- Test continuously. The evaluator is your friend. Run it
  early. Run it often.

Overengineering is a luxury reserved for teams with time
machines. Underthinking is a fast route to
`panic: runtime error`.

---

## `> cat /opt/arena/tooling/README.md`

### Data Generation (`db-seed/`)

Generates game data in 3 provider formats:

```bash
db-seed -n 2000 -seed 42 -format all
```

This produces `provider-alpha.json`, `provider-beta.json`,
and `provider-gamma.json`. Your system must load and normalize
all three.

Use `-format unified` for a single clean file (for debugging
only — the real world is never this kind).

### Reference Implementation (`evaluator/`)

A Go binary that implements the correct behavior for all
backend trials. Use it as a reference — your implementation
must match its responses.

```bash
cd evaluator
LAUNCH_SECRET=my-secret ./evaluator serve --port 3000 \
  --data provider-alpha.json,provider-beta.json,provider-gamma.json
```

Use this to compare your responses against the expected
output.

**Frontend crews:** Jack your UI into
`http://localhost:3000` — the evaluator serves the full API
with CORS enabled. This is your data source. No backend
required.

### Frontend Evaluator (`evaluator-frontend/`)

A Playwright-based test suite that auto-scores frontend
trials:

```bash
cd evaluator-frontend
npm install
FRONTEND_URL=http://localhost:5173 npx playwright test
```

Each test outputs structured `[SCORE]` JSON. The custom
reporter aggregates it into `results.json`. Run it. Read the
failures. They are surprisingly honest.

### Stress Test (`stress-test/`)

Validates wallet concurrency and idempotency:

```bash
cd stress-test
go run main.go -url http://localhost:8080 \
  -concurrency 50 -rounds 100
```

50 concurrent goroutines. Rapid-fire transactions. Your
`mutex` either holds or it doesn't. There is no partial
credit.

### Docker Compose

Normalize provider feeds into the unified file before starting services:

```bash
node scripts/normalize-providers.mjs
```

Optional: keep unified files updated while editing provider files:

```bash
node scripts/normalize-providers.mjs --watch
```

Run everything together:

```bash
docker compose up
```

This starts the evaluator on port `3000`. Point your
implementation at the same game data files.

Run the frontend evaluator:

```bash
docker compose --profile test-frontend up evaluator-frontend
```

---

## `> tail -f /var/log/arena/final_transmission.log`

```text
[2026-03-17T00:00:00Z] [INFO] Final transmission from Sector 42:
```

Don't panic.

Define the API first. Then implement. Then test. In that
order. Not the reverse. Never the reverse.

Keep error structures consistent. The Judges parse your JSON
with the same cold precision you should use writing it.

Make one thing work fully before adding another. A perfect
health check is worth more than a broken wallet.

Read test failures carefully — they are the most honest code
review you will ever receive.

And whatever happens — whatever merge conflicts arise,
whatever race conditions surface, whatever existential crisis
your `Promise.all` triggers at the two-hour mark —

**Always know where your session token is.**

```text
[2026-03-17T00:00:01Z] [INFO] End of transmission.
[2026-03-17T00:00:01Z] [INFO] The Arena awaits.
[2026-03-17T00:00:02Z] [WARN] Don't forget to commit.
```

---

*"So long, and thanks for all the `200 OK`s."*
