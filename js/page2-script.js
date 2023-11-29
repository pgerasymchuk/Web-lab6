function updateMenu() {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            displayMenu(JSON.parse(xhr.responseText));
        }
    };

    xhr.open('GET', 'getData.php', true);
    xhr.send();
}

function displayMenu(menuData){

    const menu = document.getElementById('menu');
    menu.innerHTML = '';

    for (let dropdownData of menuData){

        const dropdown = document.createElement('div');
        dropdown.className = 'dropdown';

        const dropdownBtn = document.createElement('button');
        dropdownBtn.className = 'dropdown-button'
        dropdownBtn.textContent = dropdownData.dropdownName;
        dropdown.appendChild(dropdownBtn);

        const dropdownItems = document.createElement('div');
        dropdownItems.className = 'dropdown-items';

        for (let itemData of dropdownData.dropdownItems){
            const item = document.createElement('a');
            item.textContent = itemData.itemName;
            item.href = itemData.itemLink;
            dropdownItems.appendChild(item);
        }

        dropdown.appendChild(dropdownItems);
        menu.appendChild(dropdown);

    }
}

setInterval(updateMenu, 1000000);

updateMenu();

/*function displayDropdown(data) {
    var dropdownList = document.getElementById('dropdownList');
    dropdownList.innerHTML = '<h2>' + data.name + '</h2>';

    var keyValuePairs = data.keyValuePairs;
    for (var i = 0; i < keyValuePairs.length; i++) {
        var pair = keyValuePairs[i];
        dropdownList.innerHTML += '<p><strong>' + pair.key + ':</strong> ' + pair.value + '</p>';
    }
}*/

