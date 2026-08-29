# Hostinger deployment

This project is a static Vite frontend. It does not use a database, PHP, or Hostinger mail for form submissions.

## Build

From the repository root, run:

```sh
npm install
npm run build
```

The deployable files are generated in `dist/apps/web`.

## Hostinger Web Hosting

Upload the contents of `dist/apps/web` to the domain's `public_html` directory. The site can run on Hostinger Web Hosting without Node.js or a long-running server process.

The contact form posts directly to Formspree at `https://formspree.io/f/xzebzald`. In the Formspree dashboard, verify and configure `info@freshfoldaltoona.com` as the notification recipient. Formspree handles delivery and does not require credentials in this frontend.

After changing the Formspree form settings, rebuild and upload the contents of `dist/apps/web`.

## SPA fallback

Because the site uses client-side routes, configure Hostinger to serve `index.html` for unknown application paths. If Apache is used, add this `.htaccess` file alongside `index.html`:

```apache
RewriteEngine On
RewriteBase /
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.html [L]
```

Keep the domain on HTTPS and make sure `robots.txt` and `sitemap.xml` are uploaded with the build output.
