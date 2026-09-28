# Dating Cam landing page

Production-ready PHP 8.1+ landing page with a password-protected content dashboard.

## Production deployment

1. Use PHP 8.1 or newer with the `fileinfo` extension and Apache 2.4 (`mod_headers` and `mod_expires` recommended).
2. Upload this directory as the domain's document root. Include the `.htaccess` files.
3. Set `LEXXIS_ADMIN_PASSWORD` in the hosting control panel or PHP-FPM/Apache environment to a unique password of at least 12 characters. Never commit the real password.
4. Give the PHP process write access to `data/` and `uploads/`; keep all other files read-only.
5. Enable a valid TLS certificate and force HTTPS in the hosting control panel or reverse proxy.
6. Open `/admin.php`, sign in, upload the final authorized content, and test `/api.php`.
7. Back up `data/site.json` and `uploads/` regularly.

The included Apache rules deny access to private data and application internals, block script execution in uploads, disable directory listings, add security headers, and configure static caching. On Nginx, reproduce those restrictions in the server configuration because `.htaccess` is ignored.

## Nginx requirements

Add these rules to the HTTPS server block:

```nginx
location ~ ^/(data|inc)/ { deny all; }
location ~ ^/uploads/.*\.(php|phtml|phar|cgi|pl|py|sh)$ { deny all; }
location ~ /\. { deny all; }
location ~ \.php$ { include fastcgi_params; fastcgi_pass unix:/run/php/php-fpm.sock; fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name; }
```

Also add the same response headers defined in the root `.htaccess`.

## Local test

```powershell
$env:LEXXIS_ADMIN_PASSWORD='choose-a-strong-password'
php -S 127.0.0.1:4173
```

- Public page: `http://127.0.0.1:4173/`
- Dashboard: `http://127.0.0.1:4173/admin.php`

## Before publishing

Confirm that you own or have permission to use every photo, name, logo, font, and destination link. Replace placeholder privacy/terms actions with real legal pages, verify the DMCA contact, and comply with the laws and age-verification rules that apply to your audience and hosting jurisdiction.
