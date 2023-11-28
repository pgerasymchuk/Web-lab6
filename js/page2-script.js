function fetchData() {
    var url = 'getData.php';
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            displayDropdown(data);
        }
    };

    xhr.open('GET', url, true);
    xhr.send();
}

function displayDropdown(data) {
    var dropdownList = document.getElementById('dropdownList');
    dropdownList.innerHTML = '<h2>' + data.name + '</h2>';

    var keyValuePairs = data.keyValuePairs;
    for (var i = 0; i < keyValuePairs.length; i++) {
        var pair = keyValuePairs[i];
        dropdownList.innerHTML += '<p><strong>' + pair.key + ':</strong> ' + pair.value + '</p>';
    }
}

setInterval(fetchData, 1000);

fetchData();