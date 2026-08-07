# PostHog tracking plan

This site uses PostHog for public-site analytics only.

## Traffic exclusion rules

The site code now suppresses analytics when any of the following is true:

- The page is on the review copy path: `/review-071026/`
- The page is running on a local host such as `localhost` or `127.0.0.1`
- The browser appears to be automated or bot-like
- The browser has opted out with `localStorage.cts_analytics_opt_out = "1"`
- The browser sends `Do Not Track`

Helpful local toggles:

- `?analytics=off` sets the opt-out flag for that browser
- `?analytics=on` clears the opt-out flag for that browser

## Events

The JavaScript now captures the site actions that matter most:

- `CTS Navigation Click`
- `CTS CTA Click`
- `CTS Service Click`
- `CTS Segment Click`
- `CTS Article Click`
- `CTS Phone Click`
- `CTS Email Click`
- `CTS Contact Form Submitted`

Each event includes the current page path and URL, plus a `review_preview` flag so internal review traffic can be filtered easily if it ever reaches PostHog.

## Dashboard to build

### 1. Executive overview

- Unique visitors
- Total pageviews
- Contact form submissions
- Request-service CTA clicks

### 2. Conversion funnel

Suggested funnel:

1. Homepage or landing page view
2. Request service or contact CTA click
3. Contact form submission

### 3. Contact intent

- Phone clicks
- Email clicks
- Contact form submissions

### 4. Service interest

- Monthly Inspections clicks
- Testing clicks
- Service & Repair clicks
- Operator Training clicks

### 5. Audience interest

- Independent Owners clicks
- Growing Portfolios clicks
- Critical Fueling Operations clicks

### 6. Content interest

- Article card clicks
- Top article by clicks
- Latest article engagement

## Recommended filters

Use these filters on the dashboard where possible:

- `review_preview = false`
- `page_path` does not start with `/review-071026/`
- `hostname` is not `localhost`
- `hostname` is not `127.0.0.1`

## Notes

- Session recording is disabled in the site snippet for now to reduce noise and keep the data focused on traffic and conversion intent.
- If we later want richer analysis, the next step would be to add explicit event names for each major button/card instead of relying only on the shared click listener.
