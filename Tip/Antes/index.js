document.getElementById('botao').onclick = tipCalculator;

function tipCalculator() {
    const tipPercentage = Number(document.getElementById('tipInput').value);
    const bill = Number(document.getElementById('yourBill').value);

    console.log(tipPercentage);
    console.log(bill);

    const totalTip = tipPercentage / 100 * bill;

    document.getElementById('tipValue').innerHTML = totalTip.toFixed(2);

    document.getElementById('totalWithTip').innerHTML = (totalTip + bill).toFixed(2);


    console.log(totalTip);
}