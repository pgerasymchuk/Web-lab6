<?php
/*if ($_SERVER['REQUEST_METHOD'] === 'POST') {
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
}*/

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $dropdowns = json_decode($_POST['dropdowns'], true);
    file_put_contents('data.json', json_encode($dropdowns));
}
?>