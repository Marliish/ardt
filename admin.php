<?php
declare(strict_types=1);
require __DIR__ . '/inc/bootstrap.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        if (isset($_POST['login'])) {
            if (!admin_configured()) throw new RuntimeException('Admin login is disabled until LEXXIS_ADMIN_PASSWORD is set to at least 12 characters.');
            if ((int) ($_SESSION['login_blocked_until'] ?? 0) > time()) throw new RuntimeException('Too many attempts. Try again in a few minutes.');
            if (!hash_equals(admin_password(), (string) ($_POST['password'] ?? ''))) throw new RuntimeException('Incorrect password.');
            unset($_SESSION['login_attempts'], $_SESSION['login_blocked_until']);
            session_regenerate_id(true); $_SESSION['lexxis_admin'] = true; redirect_admin('Welcome back.');
        }
        if (!is_admin()) throw new RuntimeException('Please sign in.');
        verify_csrf();
        if (isset($_POST['logout'])) {
            $_SESSION = []; session_destroy(); header('Location: admin.php'); exit;
        }
        $settings = load_settings();
        if (isset($_POST['save_name'])) {
            $name = trim((string) ($_POST['name'] ?? ''));
            if ($name === '' || strlen($name) > 80) throw new RuntimeException('Enter a model name up to 80 characters.');
            $settings['name'] = $name; save_settings($settings); redirect_admin('Model name updated.');
        }
        if (isset($_POST['upload'])) {
            $slot = (string) ($_POST['slot'] ?? '');
            if (!array_key_exists($slot, image_slots())) throw new RuntimeException('Invalid photo position.');
            $newPath = store_upload($_FILES['photo'] ?? []);
            $oldPath = slot_value($settings, $slot);
            set_slot($settings, $slot, $newPath);
            try { save_settings($settings); } catch (Throwable $e) { remove_managed_upload($newPath); throw $e; }
            remove_managed_upload($oldPath);
            redirect_admin(image_slots()[$slot] . ' updated.');
        }
    } catch (Throwable $e) {
        if (isset($_POST['login']) && $e->getMessage() === 'Incorrect password.') {
            $attempts = (int) ($_SESSION['login_attempts'] ?? 0) + 1;
            $_SESSION['login_attempts'] = $attempts;
            if ($attempts >= 5) { $_SESSION['login_blocked_until'] = time() + 300; $_SESSION['login_attempts'] = 0; }
        }
        $_SESSION['flash'] = ['message'=>$e->getMessage(), 'type'=>'error'];
    }
}
$flash = $_SESSION['flash'] ?? null; unset($_SESSION['flash']);
$settings = load_settings();
?>
<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Model dashboard</title><link rel="stylesheet" href="admin.css"></head>
<body>
<?php if (!is_admin()): ?>
<main class="login-wrap"><form class="login-card" method="post"><div class="brand">L</div><p class="eyebrow">PRIVATE ADMIN</p><h1>Model dashboard</h1><p>Sign in to update the public profile.</p><?php if ($flash): ?><div class="flash <?= htmlspecialchars($flash['type']) ?>"><?= htmlspecialchars($flash['message']) ?></div><?php endif; ?><?php if (!admin_configured()): ?><div class="flash error">Set <code>LEXXIS_ADMIN_PASSWORD</code> to at least 12 characters before going live.</div><?php endif; ?><label>Password<input name="password" type="password" required autofocus autocomplete="current-password"></label><button name="login" value="1" <?= admin_configured() ? '' : 'disabled' ?>>Sign in</button></form></main>
<?php else: ?>
<header><a class="logo" href="admin.php">LW Dashboard</a><nav><a href="/" target="_blank" rel="noopener">View public page ↗</a><form method="post"><input type="hidden" name="csrf" value="<?= htmlspecialchars(csrf_token()) ?>"><button name="logout" value="1">Sign out</button></form></nav></header>
<main class="dashboard"><section class="intro"><div><p class="eyebrow">CONTENT MANAGER</p><h1>Model profile</h1><p>Changes are saved immediately and appear when the public page is refreshed.</p></div><a class="view" href="/" target="_blank" rel="noopener">Open live page</a></section>
<?php if ($flash): ?><div class="flash <?= htmlspecialchars($flash['type']) ?>"><?= htmlspecialchars($flash['message']) ?></div><?php endif; ?>
<form class="name-card" method="post"><input type="hidden" name="csrf" value="<?= htmlspecialchars(csrf_token()) ?>"><div><label for="name">Model name</label><p>Used in the header, gallery title, story, and popup.</p></div><input id="name" name="name" maxlength="80" value="<?= htmlspecialchars((string) $settings['name']) ?>" required><button name="save_name" value="1">Save name</button></form>
<section><div class="section-title"><div><h2>Photos</h2><p>Click Replace, choose an image, and it will upload automatically.</p></div><span>JPG, PNG, WEBP, GIF · max 10 MB</span></div><div class="photo-grid">
<?php foreach (image_slots() as $slot => $label): $src = slot_value($settings, $slot); ?>
<article class="photo-card"><div class="photo"><img src="<?= htmlspecialchars($src) ?>" alt="<?= htmlspecialchars($label) ?>"></div><div class="photo-info"><div><strong><?= htmlspecialchars($label) ?></strong><small><?= htmlspecialchars($slot) ?></small></div><form method="post" enctype="multipart/form-data"><input type="hidden" name="csrf" value="<?= htmlspecialchars(csrf_token()) ?>"><input type="hidden" name="slot" value="<?= htmlspecialchars($slot) ?>"><input type="hidden" name="upload" value="1"><label class="replace">Replace<input name="photo" type="file" accept="image/jpeg,image/png,image/webp,image/gif" required onchange="this.form.requestSubmit()"></label></form></div></article>
<?php endforeach; ?>
</div></section></main>
<?php endif; ?>
</body></html>
