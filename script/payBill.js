document.getElementById('pay-bill-btn').addEventListener('click',  function(){
    
    // get the bill Type and verify 
    const billType = getInputValueFromId('select-pay');
    if(billType === 'Select to Pay'){
        alert('Please Select bill type');
        return;
    }
    // get the Biller acc no and verify
    const billerAccNum = getInputValueFromId('biller-account');
    if(billerAccNum.length !== 11){
        alert('Invalid Biller Account Number');
        return;
    }
    // get the Pay amount and check 
    const payAmount = getInputValueFromId('bill-amount');
    if(payAmount.length === 0){
        alert('Please enter pay amount');
        return;
    }
    // get the pin and verify 
    const pin = getInputValueFromId('bill-pin');
    if(pin === '7575'){
        // get the current balance, calculate new balance 
        const currentBalance = getBalance();
        const newBalance = currentBalance - Number(payAmount);
        // set the new balance and success alert
        alert(`${billType} Bill of ${payAmount} tk pay Successful at ${new Date()}`); 
        setBalance(newBalance);

        // transaction history      
        const historyContainer = document.getElementById('history-container');
        const history = document.createElement("div");
        history.innerHTML = `
        <div class="history-card bg-primary rounded-sm p-3 text-white">
            ${billType} Bill of ${payAmount} tk pay Successful at ${new Date()}; 
        </div> 
        ` ;
        historyContainer.appendChild(history);
        
        
    }
    else{
        alert('Invalid Pin')
    }
})