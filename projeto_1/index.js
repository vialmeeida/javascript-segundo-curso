function makeTheOperation() {
    let num1 = Number(document.getElementById('number-one').value);
    let num2 = Number(document.getElementById('number-two').value);
    let total = 0;
    console.log(num1)
    console.log(num2)

    if (document.getElementById('sum').checked) {
        total = num1 + num2;
    } 
    else if (document.getElementById('sub').checked) {
        total = num1 - num2;
    }
    else if (document.getElementById('mult').checked) {
        total = num1 * num2;
    }
    else {
        total = num1 / num2;
    }

    document.getElementById('result').innerHTML = "O resultado é " + total;
}
