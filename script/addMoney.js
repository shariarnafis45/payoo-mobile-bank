document.getElementById('add-money-btn').addEventListener('click',  function(){
    // get the bank and verify 
    const bank = getInputValueFromId('add-money-bank');
    if(bank === 'Select bank'){
        alert('Please Select a bank');
        return;
    }
    // get the bank acc no and verify
    const accountNo = getInputValueFromId('add-money-account');
    if(accountNo.length !== 11){
        alert('Invalid Account Number');
        return;
    }
    // get the amount and check 
    const addAmount = getInputValueFromId('add-money-amount');
    if(addAmount.length === 0){
        alert('Please enter add amount');
        return;
    }
    // get the pin and verify 
    const pin = getInputValueFromId('add-money-pin');
    if(pin === '7575'){
        // get the current balance, calculate new balance 
        const currentBalance = getBalance();
        const newBalance = currentBalance + Number(addAmount);
        // set the new balance and success alert
        alert(`Add Money Successful 
               from ${bank} 
               at ${new Date()}`) 
        setBalance(newBalance);

        // transaction history      
        const historyContainer = document.getElementById('history-container');
        const history = document.createElement("div");
        history.innerHTML = `
        <div class="history-card bg-primary rounded-sm p-3 text-white">
            Add Money of ${addAmount} taka Successfully added from ${bank} , Account No. ${accountNo}, 
            at ${new Date};
        </div> 
        ` ;
        historyContainer.appendChild(history);
        
    }
    else{
        alert('Invalid Pin')
    }
})