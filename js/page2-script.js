function fetchData() {
    var url = 'getData.php';
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            displayDropdownMenu(data);
        }
    };

    xhr.open('GET', url, true);
    xhr.send();
}

function displayDropdownMenu(dropdowns){

    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.innerHTML = '';

    for (let dropdown of dropdowns){

        const dropdownElem = document.createElement('div');
        dropdownElem.className = 'dropdown';
        dropdownElem.textContent = dropdown.dropdownName;
        dropdownMenu.appendChild(dropdownElem);

        for (let item of dropdown.dropdownItems){
            const itemElem = document.createElement('a');
            itemElem.className = 'itemDiv';
            itemElem.textContent = item.itemName;
            itemElem.href = item.itemLink;
            dropdownElem.appendChild(itemElem);
        }

    }
}

/*function displayDropdown(data) {
    var dropdownList = document.getElementById('dropdownList');
    dropdownList.innerHTML = '<h2>' + data.name + '</h2>';

    var keyValuePairs = data.keyValuePairs;
    for (var i = 0; i < keyValuePairs.length; i++) {
        var pair = keyValuePairs[i];
        dropdownList.innerHTML += '<p><strong>' + pair.key + ':</strong> ' + pair.value + '</p>';
    }
}*/

setInterval(fetchData, 1000000);

fetchData();