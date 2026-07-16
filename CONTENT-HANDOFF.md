# Compliance Testing Services website handoff

## Day-to-day content workflow

The live website is a static export from Webstudio. There is no CMS or database to maintain.

- Use Webstudio for visual content edits.
- Publish the project in Webstudio after reviewing desktop and mobile previews.
- Export the published site and replace the generated files in this repository when GitHub Pages needs to match Webstudio.
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
- Webstudio project IDs or publishing configuration

## Contact form

Requests are sent through FormSubmit to `ctsschedule4@gmail.com`.

After the first submission following deployment, open the FormSubmit activation email in that inbox and approve the form. FormSubmit retains submissions made before activation for a limited period.

The form includes required contact fields, a honeypot field, and FormSubmit's CAPTCHA protection. Do not remove the hidden fields beginning with an underscore.

## Publishing checklist

1. Confirm phone, email, and address details.
2. Test navigation links.
3. Submit one test request using the published site.
4. Confirm the request arrives at `ctsschedule4@gmail.com`.
5. Check the page on desktop and mobile.
6. Confirm the footer year and article dates are current.

## Support boundary

Content staff should not need GitHub, DNS, hosting, or backend access for routine updates. Escalate technical changes to the site owner or developer.
