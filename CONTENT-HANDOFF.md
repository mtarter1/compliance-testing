# Compliance Testing Services website handoff

## Day-to-day content workflow

The live website is a static multi-page site hosted through GitHub Pages. There is no CMS or database to maintain.

- Routine copy can be updated in the relevant HTML page in this repository.
- The homepage is `index.html`; shared design rules are in `site.css`.
- Service pages are in `services/`; customer-segment pages are in `solutions/`.
- Article pages are in `articles/`; complete FAQs are in `faq.html`.
- Existing and remote image references are documented in `ASSET-INVENTORY.md`.
- Review desktop and mobile layouts before merging changes into `main`.
- Ask the site owner or developer for structural, styling, domain, analytics, or form-routing changes.

## Safe content edits

The content manager may update:

- Headings and paragraph copy
- Service names and descriptions
- FAQs
- Articles and dates
- Phone, email, and address details
- Images and meaningful alternative text

Avoid changing:

- Form action URLs or hidden form fields
- DNS, CNAME, or GitHub Pages settings
- Generated JavaScript and CSS files in `assets/`
- Shared styles or scripts unless the change has been reviewed on every page

## Contact form

Requests are sent through FormSubmit to `contact@compliance-testing.com`.

After the first submission following deployment, open the FormSubmit activation email in that inbox and approve the form. FormSubmit retains submissions made before activation for a limited period.

The form includes required contact fields, a honeypot field, and FormSubmit's CAPTCHA protection. Do not remove the hidden fields beginning with an underscore.

## Publishing checklist

1. Confirm phone, email, and address details.
2. Test navigation links.
3. Submit one test request using the published site.
4. Confirm the request arrives at `contact@compliance-testing.com`.
5. Check the page on desktop and mobile.
6. Confirm the footer year and article dates are current.

## Support boundary

Content staff should not need DNS, hosting, or backend access for routine updates. Escalate technical changes to the site owner or developer.
