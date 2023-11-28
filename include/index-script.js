function addKeyValuePair() {
    var keyValuePairs = document.getElementById('keyValuePairs');
    var newKeyValuePair = document.createElement('div');
    newKeyValuePair.innerHTML = '<input type="text" class="key" placeholder="Key"> ' +
        '<input type="text" class="value" placeholder="Value">';
    keyValuePairs.appendChild(newKeyValuePair);
}

function submitForm() {
    var itemName = document.getElementById('itemName').value;

    var keyValuePairs = [];
    var keyValueElements = document.querySelectorAll('.keyValue');
    keyValueElements.forEach(function(element) {
        var key = element.querySelector('.key').value;
        var value = element.querySelector('.value').value;
        if (key && value) {
            keyValuePairs.push({ key: key, value: value });
        }
    });

    var url = 'saveData.php';
    var params = 'itemName=' + itemName + '&keyValuePairs=' + JSON.stringify(keyValuePairs);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText);
        }
    };

    xhr.send(params);
}