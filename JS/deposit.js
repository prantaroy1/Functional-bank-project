function getInputByID(inputFieldID){
    const inputField = document.getElementById(inputFieldID);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}
 
function getTextElementValueByID(elementID){
      const textElement = document.getElementById(elementID);
      const textElementValueString = textElement.innerText;
      const textElementValue = parseFloat(textElementValueString);
      return textElementValue;
}

function setTextElementValueByID(elementID, newValue){
    const textElement = document.getElementById(elementID);
    textElement.innerText = newValue;
}


document.getElementById('btn-deposit').addEventListener('click', function(){

    const newDepositAmount = getInputByID('deposit-field');

    const priviouDepositTotal = getTextElementValueByID('deposit-total');
    const newDepositTotal = priviouDepositTotal +  newDepositAmount;
    
    setTextElementValueByID('deposit-total', newDepositTotal);

    const priviouBalanceTotal = getTextElementValueByID('balance-total');
    const newBalanceTotal = priviouBalanceTotal + newDepositTotal;
    setTextElementValueByID('balance-total',newBalanceTotal);


})