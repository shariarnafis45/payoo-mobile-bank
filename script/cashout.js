document.getElementById('cashout-btn').addEventListener('click', function(){
    // get the input agent number and validate
    const cashoutAgentNum = getInputValueFromId('cashout-agent');
    if(cashoutAgentNum.length != 11){
        alert('Invalid Agent Number');
        return;
    }
    // get the input Amount and main balance
    
    const cashoutAmount = getInputValueFromId('cashout-amount');
    const balanace = getBalance();

    // new balance and validate
    const newBalance =  balanace - Number(cashoutAmount);
    if(newBalance < 0 || cashoutAmount.length === 0){
        alert('Invalid Amount');
        return;
    }

    // get the pin 
    const cashoutPin = getInputValueFromId('cashout-pin');
    // pin Validation and Set new balance
    if(cashoutPin === '7575'){
        alert('Cashout Withdraw Complete');
        setBalance(newBalance);
        // transaction history      
        const historyContainer = document.getElementById('history-container');
        const history = document.createElement("div");
        history.innerHTML = `
        <div class="history-card bg-primary rounded-sm p-3 text-white">
            cashout withdraw of ${cashoutAmount} taka Successfully completed , Agent Account No. ${cashoutAgentNum}, 
            at ${new Date};
        </div> 
        ` ;
        historyContainer.appendChild(history);
        return;
    }else{
        alert('Invalid Pin');
        return;
    }
})
