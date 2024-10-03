document.getElementById('fileInput').addEventListener('change', function(e) {
    let file = e.target.files[0];
    
    // Check if file is either .txt or .csv
    if (!file.name.endsWith('.txt') && !file.name.endsWith('.csv')) {
        alert('Please upload a .txt or .csv file');
        return;
    }
    
    let reader = new FileReader();
    
    reader.onload = function(e) {
        localStorage.setItem('items', e.target.result);
        window.location.href = 'display.html';
    };
    
    reader.readAsText(file);
});