window.onload = function() {
    let items = localStorage.getItem('items');
    let itemsList = document.getElementById('itemsList');
    
    // table with headers
    let table = document.createElement('table');
    let headerRow = table.insertRow();
    ['Item Name', 'Quantity', 'Price', 'Total'].forEach(headerText => {
        let header = document.createElement('th');
        header.textContent = headerText;
        headerRow.appendChild(header);
    });
    
    let grandTotal = 0;
    
    // Adding items to table
    items.split('\n').forEach(line => {
        if(line.trim()) {
            let [item, quantity, price] = line.split(',').map(item => item.trim());
            
            // Remove $ from price if present
            price = price ? price.replace('$', '') : '0';
            
            // Calculate total for row
            let total = parseFloat(price) * parseInt(quantity);
            grandTotal += total;
            
            let row = table.insertRow();
            row.insertCell().textContent = item || '';
            row.insertCell().textContent = quantity || '';
            row.insertCell().textContent = '$' + parseFloat(price).toFixed(2);
            row.insertCell().textContent = '$' + total.toFixed(2);
        }
    });
    
    itemsList.appendChild(table);
    
    // Add grand total
    let totalDiv = document.createElement('div');
    totalDiv.className = 'total';
    totalDiv.textContent = `Grand Total: $${grandTotal.toFixed(2)}`;
    itemsList.appendChild(totalDiv);
};