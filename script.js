document.querySelector('button').addEventListener('click', calculate );

function calculate() {
    const amount = Number(document.querySelector('#bill').value);
    const tipPercentage = Number(document.querySelector('#tip').value);

    const total = amount + (tipPercentage*amount)/100;

    document.querySelector('#total').innerHTML = total;
};





