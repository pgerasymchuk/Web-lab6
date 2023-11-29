<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $dropdowns = json_decode($_POST['dropdowns'], true);
    file_put_contents('data.json', json_encode($dropdowns));
}

?>