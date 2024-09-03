document.getElementById('input_box').addEventListener('input', convert);
document.getElementById('inputCategory').addEventListener('change', convert);
document.getElementById('resultCategory').addEventListener('change', convert);
document.getElementById('clearButton').addEventListener('click', clearAll);

function convert() {
    const input = parseFloat(document.getElementById('input_box').value);
    const inputUnit = document.getElementById('inputCategory').value;
    const resultUnit = document.getElementById('resultCategory').value;

    
    if (isNaN(input)) {
        document.getElementById('result_box').value = '';
        return;
    }

    let result;

    
    if (inputUnit === 'millimeter' && resultUnit === 'inches') {
        result = input / 25.4;
    } else if (inputUnit === 'inches' && resultUnit === 'millimeter') {
        result = input * 25.4;
    } else {
        
        result = input;
    }

    
    document.getElementById('result_box').value = result.toFixed(4);
}


function clearAll() {
    document.getElementById('input_box').value = '';
    document.getElementById('result_box').value = '';
    document.getElementById('inputCategory').selectedIndex = 0;
    document.getElementById('resultCategory').selectedIndex = 0;
}
