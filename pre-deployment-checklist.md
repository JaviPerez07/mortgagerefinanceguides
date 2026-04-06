# Pre-Deployment Checklist

## Domain and hosting

- Point the production domain to Cloudflare Pages.
- Confirm the canonical domain is non-www unless you intentionally change it.
- Verify HTTPS is active and mixed content warnings are absent.

## SEO and indexing

- Check that every production page resolves successfully without redirect chains.
- Confirm `robots.txt` is reachable and references the production sitemap.
- Confirm `sitemap.xml` lists clean absolute URLs with no `.html` endings.
- Test several page sources and verify canonical tags match the final live URL.
- Validate JSON-LD on the homepage, an article, a FAQ page, and a calculator page.
- Submit the sitemap in Google Search Console after launch.

## Content quality

- Review the homepage hero, featured cards, and trust sections for final brand wording.
- Confirm contact email and legal copy are correct for your final business setup.
- Spot-check at least 10 pages for formatting, tables, FAQ accordions, and author box visibility.
- Verify there is no lorem ipsum, duplicate page title, or duplicate meta description.

## AdSense readiness

- Replace the placeholder AdSense publisher ID in `main.js`.
- Replace the placeholder `ads.txt` line with your real publisher ID.
- Keep the site free of empty ad containers until approval is complete.
- Review Google AdSense policies for financial content and disclosures.

## Search Console and analytics

- Add the property in Google Search Console.
- Submit `https://mortgagerefinanceguides.com/sitemap.xml`.
- Check coverage for redirects, duplicates, alternate canonical conflicts, and soft 404 issues.
- Add your analytics or tag manager only after confirming the core site renders correctly.

## Final QA

- Test desktop and mobile layouts.
- Test local preview navigation and production navigation.
- Run a crawl for broken internal links.
- Reconfirm no internal links expose `index.html` in the rendered markup.
- Confirm footer legal links and category links work on every page.
