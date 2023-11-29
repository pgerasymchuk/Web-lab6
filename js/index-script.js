function addDropdown(){
    const dropdowns = document.getElementById('dropdowns');
    const newDropdown = document.createElement('div');
    newDropdown.innerHTML =
          '<input type="text" class="dropdownName" placeholder="Dropdown Name">' +
          '<div class="item">' +
              '<input type="text" class="itemName" placeholder="Item Name">' +
              '<input type="text" class="itemLink" placeholder="Item Link">' +
          '</div>';
    newDropdown.className = 'dropdown';
    dropdowns.appendChild(newDropdown);
}

function addItem() {
    const currentDropdown = document.querySelector('#dropdowns .dropdown:last-child');
    const newItem = document.createElement('div');
    newItem.innerHTML =
        '<input type="text" class="itemName" placeholder="Item Name">' +
        '<input type="text" class="itemLink" placeholder="Item Link">';
    newItem.className = 'item';
    currentDropdown.appendChild(newItem);
}

function submitForm() {
    const dropdowns = [];
    const dropdownElements = document.querySelectorAll('.dropdown');
    dropdownElements.forEach((element) => {
        const dropdownName = element.querySelector('.dropdownName').value;

        const dropdownItems = [];
        const itemElements = element.querySelectorAll('.item');
        itemElements.forEach((item) => {
            const itemName = item.querySelector('.itemName').value;
            const itemLink = item.querySelector('.itemLink').value;
            if (itemName && itemName){
                dropdownItems.push({ itemName: itemName, itemLink: itemLink });
            }
        });

        dropdowns.push({dropdownName: dropdownName, dropdownItems: dropdownItems});

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'saveData.php', true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send('dropdowns=' + JSON.stringify(dropdowns));
    });

    /*var itemName = document.getElementById('itemName').value;
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
    xhr.send(params);*/
}