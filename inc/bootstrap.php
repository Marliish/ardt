<?php
declare(strict_types=1);

const DATA_DIR = __DIR__ . '/../data';
const UPLOAD_DIR = __DIR__ . '/../uploads';
const SETTINGS_FILE = DATA_DIR . '/site.json';

$https = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off')
    || (($_SERVER['HTTP_X_FORWARDED_PROTO'] ?? '') === 'https');
ini_set('session.use_strict_mode', '1');
ini_set('session.use_only_cookies', '1');
session_name('model_admin');
session_set_cookie_params(['lifetime'=>0, 'path'=>'/', 'secure'=>$https, 'httponly'=>true, 'samesite'=>'Strict']);

if (session_status() !== PHP_SESSION_ACTIVE) session_start();
foreach ([DATA_DIR, UPLOAD_DIR] as $dir) {
    if (!is_dir($dir) && !mkdir($dir, 0755, true) && !is_dir($dir)) throw new RuntimeException('Required storage directory is unavailable.');
}

function defaults(): array {
    return [
        'name' => 'Lexis Wilson',
        'profilePhoto' => 'media/upload-01.jpg',
        'storyPhoto' => 'media/upload-02.jpg',
        'bannerPhoto' => 'media/upload-03.jpg',
        'gallery' => array_map(fn($n) => sprintf('media/upload-%02d.jpg', $n), range(4, 13)),
    ];
}

function load_settings(): array {
    if (!is_file(SETTINGS_FILE)) return defaults();
    $data = json_decode((string) file_get_contents(SETTINGS_FILE), true);
    if (!is_array($data)) return defaults();
    return array_replace(defaults(), array_intersect_key($data, defaults()));
}

function save_settings(array $settings): void {
    $json = json_encode($settings, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
    if ($json === false || file_put_contents(SETTINGS_FILE, $json, LOCK_EX) === false) {
        throw new RuntimeException('Could not save the site settings.');
    }
}

function admin_password(): string {
    $value = getenv('LEXXIS_ADMIN_PASSWORD');
    return is_string($value) ? $value : '';
}
function admin_configured(): bool { return strlen(admin_password()) >= 12; }
function is_admin(): bool { return ($_SESSION['lexxis_admin'] ?? false) === true; }
function csrf_token(): string { return $_SESSION['csrf'] ??= bin2hex(random_bytes(32)); }
function verify_csrf(): void {
    if (!hash_equals($_SESSION['csrf'] ?? '', (string) ($_POST['csrf'] ?? ''))) throw new RuntimeException('Session expired. Refresh and try again.');
}
function redirect_admin(string $message = '', string $type = 'success'): never {
    if ($message !== '') $_SESSION['flash'] = compact('message', 'type');
    header('Location: admin.php'); exit;
}
function image_slots(): array {
    $slots = ['profilePhoto' => 'Profile photo', 'storyPhoto' => 'Story photo'];
    for ($i = 0; $i < 10; $i++) $slots['gallery.' . $i] = 'Gallery photo ' . ($i + 1);
    return $slots;
}
function slot_value(array $settings, string $slot): string {
    if (str_starts_with($slot, 'gallery.')) return (string) ($settings['gallery'][(int) substr($slot, 8)] ?? '');
    return (string) ($settings[$slot] ?? '');
}
function set_slot(array &$settings, string $slot, string $value): void {
    if (str_starts_with($slot, 'gallery.')) $settings['gallery'][(int) substr($slot, 8)] = $value;
    else $settings[$slot] = $value;
}
function remove_managed_upload(string $path): void {
    if (!str_starts_with($path, 'uploads/')) return;
    $file = UPLOAD_DIR . '/' . basename($path);
    if (is_file($file)) unlink($file);
}
function store_upload(array $file): string {
    if (($file['error'] ?? UPLOAD_ERR_NO_FILE) !== UPLOAD_ERR_OK) throw new RuntimeException('Choose an image to upload.');
    if (($file['size'] ?? 0) > 10 * 1024 * 1024) throw new RuntimeException('Images must be 10 MB or smaller.');
    if (!is_uploaded_file((string) ($file['tmp_name'] ?? ''))) throw new RuntimeException('Invalid upload.');
    $mime = (new finfo(FILEINFO_MIME_TYPE))->file($file['tmp_name']);
    $extensions = ['image/jpeg'=>'jpg', 'image/png'=>'png', 'image/webp'=>'webp', 'image/gif'=>'gif'];
    if (!isset($extensions[$mime]) || @getimagesize($file['tmp_name']) === false) throw new RuntimeException('Upload a valid JPG, PNG, WEBP, or GIF image.');
    $name = bin2hex(random_bytes(16)) . '.' . $extensions[$mime];
    $destination = UPLOAD_DIR . '/' . $name;
    if (!move_uploaded_file($file['tmp_name'], $destination)) throw new RuntimeException('The uploaded image could not be saved.');
    chmod($destination, 0644);
    return 'uploads/' . $name;
}
