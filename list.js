window.onload = function() {
    let items = localStorage.getItem('items');
    let itemsList = document.getElementById('itemsList');
    
    // Create table
    let table = document.createElement('table');
    
    // Add items to table
    items.split('\n').forEach(line => {
        if(line.trim()) {
            let [item, quantity] = line.split(',');
            let row = table.insertRow();
            row.insertCell().textContent = item;
            row.insertCell().textContent = quantity;
        }
    });
    
    itemsList.appendChild(table);
};