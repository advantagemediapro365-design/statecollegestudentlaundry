<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed.']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);
if (!is_array($input)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid request.']);
    exit;
}

if (!empty($input['website'])) {
    echo json_encode(['ok' => true]);
    exit;
}

$name = trim((string) ($input['name'] ?? ''));
$email = trim((string) ($input['email'] ?? ''));
$location = trim((string) ($input['location'] ?? ''));
$phone = trim((string) ($input['phone'] ?? ''));
$context = trim((string) ($input['context'] ?? ''));
$timing = trim((string) ($input['timing'] ?? ''));
$service = trim((string) ($input['service'] ?? ''));
$message = trim((string) ($input['message'] ?? ''));

if ($name === '' || $location === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Please provide a name, valid email, and pickup location.']);
    exit;
}

$cleanHeaderValue = static function (string $value): string {
    return str_replace(["\r", "\n"], '', $value);
};

$subject = 'Laundry pickup request from ' . $cleanHeaderValue($name);
$body = implode("\n", [
    'Name: ' . $name,
    'Email: ' . $email,
    'Phone: ' . ($phone !== '' ? $phone : 'Not provided'),
    'Pickup location: ' . $location,
    'I am a: ' . ($context !== '' ? $context : 'Not provided'),
    'Preferred timing: ' . ($timing !== '' ? $timing : 'Not provided'),
    'Service: ' . ($service !== '' ? $service : 'Not provided'),
    'Message: ' . ($message !== '' ? $message : 'None'),
]);
$headers = implode("\r\n", [
    'From: info@freshfoldaltoona.com',
    'Reply-To: ' . $cleanHeaderValue($email),
    'Content-Type: text/plain; charset=UTF-8',
]);

if (!mail('info@freshfoldaltoona.com', $subject, $body, $headers)) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'We could not send your request. Please call or text us instead.']);
    exit;
}

echo json_encode(['ok' => true]);
