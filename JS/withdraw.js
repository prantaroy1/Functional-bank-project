document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputByID('withdraw-field');
    const priviouWithdrawTotal = getTextElementValueByID('withdraw-total');
    const newWithdrawTotal = priviouWithdrawTotal + newWithdrawAmount;
    setTextElementValueByID('withdraw-total', newWithdrawTotal);

    const priviouBalanceTotal = getTextElementValueByID('balance-total');
    const newBalanceTotal = priviouBalanceTotal - newWithdrawAmount;
    setTextElementValueByID('balance-total', newBalanceTotal);
})