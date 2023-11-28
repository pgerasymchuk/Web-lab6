<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $itemName = $_POST['itemName'];
    $keyValuePairs = json_decode($_POST['keyValuePairs'], true);

    $data = [
        'name' => $itemName,
        'keyValuePairs' => $keyValuePairs
    ];

    file_put_contents('data.json', json_encode($data));
    echo 'Form submitted successfully!';
} else {
    echo 'Invalid request!';
}
?>