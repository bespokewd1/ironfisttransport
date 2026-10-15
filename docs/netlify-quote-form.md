# Netlify quote form

The homepage, services index and three service pages use `src/components/Home/HomeQuote.astro`.
The services pages include it through `src/layouts/TransportLayout.astro`.

All five pages submit to one Netlify form named `transport-quote`.
Each submission includes `source-page`, the selected service and the delivery details.
The hidden `bot-field` is a spam honeypot.

## Enable submissions

1. In the Netlify project, open **Forms > Form detection** and enable form detection.
2. Deploy this version of the site. Netlify detects the form in the built HTML.
3. Confirm that `transport-quote` appears under **Forms**.
4. Add an email notification for this form to `info@ironfisttransport.ca` in the Netlify project's notification settings.
5. Submit a clearly labelled test request on the deployed site. Check the form's
   verified submissions, spam submissions and notification email. Remove the test afterward.

Form detection and notification settings belong to the Netlify project. They are not
configured by the Astro build. The site must remain hosted on Netlify for this integration
unless another form backend replaces it.

## Submission behavior

With JavaScript, the form sends a URL-encoded POST to `/` and shows an inline success or
error message. It disables repeated clicks while sending and keeps the entered details
if the request fails. A success message does not confirm the requested booking date.

Without JavaScript, the visible form submits a normal POST. Netlify handles the submission
and shows its default success page. The direct phone and email links are still available.

`npm run dev` and `npm run preview` do not provide the Netlify Forms backend. Verify actual
storage and email delivery on the deployed Netlify site. Local mocked browser tests only
verify the interface and request payload.
