document.getElementById('transfer-btn').addEventListener('click', function(){
    
    // get the input Account number and validate
    const userAccNum = getInputValueFromId("user-account-number");
    if(userAccNum.length !== 11){
        alert('Invalid user Number');
        return;
    }
    // get the input Amount and main balance
    
    const transferAmount = getInputValueFromId('transfer-amount');
    const balanace = getBalance();

    // new balance and validate
    const newBalance =  balanace - Number(transferAmount);
    if(newBalance < 0 || transferAmount.length === 0){
        alert('Invalid Amount');
        return;
    }

    // get the pin 
    const transferPin = getInputValueFromId('transfer-pin');
    // pin Validation and Set new balance
    if(transferPin === '7575'){
        alert('Transfer Completed');
        setBalance(newBalance);
        // transaction history      
        const historyContainer = document.getElementById('history-container');
        const history = document.createElement("div");
        history.innerHTML = `
        <div class="history-card bg-primary rounded-sm p-3 text-white">
            Transfer of ${transferAmount} taka Successfully completed , user Account No. ${userAccNum}, 
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
