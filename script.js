function resultConvert() {
    let m = document.getElementById('money').value;
    let fromCurrent = document.getElementById('fromCurrent').value;
    let toCurrent = document.getElementById('toCurrent').value;
    let a;
    let result = document.querySelector('#result');


    if(fromCurrent==='VND' && toCurrent==='VND') {
        result.innerHTML = 'Result VND to VND: ' + m*1000;
        result.style.color= 'green';
    }

    if(fromCurrent==='USD' && toCurrent==='USD') {
        result.innerHTML = 'Result USD to USD: ' + m;
        result.style.color= 'pink';
    }

    if(fromCurrent==='USD' && toCurrent==='VND') {
        a = m * 24000;
        result.innerHTML = 'Result USD to VND: ' + a;
        result.style.color= 'red';
    }

    if(fromCurrent==='VND' && toCurrent==='USD') {
        a = m / 24000;
        result.innerHTML = 'Result VND to USD: ' +a;
        result.style.color= 'blue';
    }
}