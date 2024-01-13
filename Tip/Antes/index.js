
document.getElementById('botao').onclick = calcula;

function calcula() {
    const calculo = tipCalculator();
    console.log(calculo);
    splitTip(calculo);
}

function tipCalculator() {
    const tipPercentage = Number(document.getElementById('tipInput').value);
    const bill = Number(document.getElementById('yourBill').value);

    console.log(tipPercentage);
    console.log(bill);

    const totalTip = tipPercentage / 100 * bill;

    const total = totalTip + bill;

    document.getElementById('tipValue').innerHTML = totalTip.toFixed(2);

    document.getElementById('totalWithTip').innerHTML = total.toFixed(2);

    console.log(totalTip);

    return total;
}

function splitTip(totalBill) {
    const numberPeople = Number(document.getElementById('splitInput').value);
    
    const billAfterSplit = totalBill / numberPeople;

    console.log(billAfterSplit);

    document.getElementById('billEach').innerHTML = billAfterSplit.toFixed(2);
}


