document.getElementById('cashout-btn').addEventListener('click', function(){
    // get the input agent number and validate
    const cashoutAgentNum = getInputValueFromId('cashout-agent');
    if(cashoutAgentNum.length != 11){
        alert('Invalid Agent Number');
        return;
    }
    // get the input Amount and main balance
    
    const cashoutAmount = getInputValueFromId('cashout-amount');
    const mainBalance = document.getElementById('balance');
    const balance = mainBalance.innerText;

    // new balance and validate
    const newBalance =  Number(balance) - Number(cashoutAmount);
    if(newBalance < 0 || cashoutAmount.length === 0){
        alert('Invalid Amount');
        return;
    }

    // get the pin 
    const cashoutPin = getInputValueFromId('cashout-pin');
    // pin Validation and Set new balance
    if(cashoutPin === '7575'){
        alert('Cashout Withdraw Complete');
        mainBalance.innerText = newBalance;
        return;
    }else{
        alert('Invalid Pin');
        return;
    }
})







// document.getElementById('cashout-btn').addEventListener('click', function(){
//     // get the input agent number and validate
//     const cashoutAgentInput = document.getElementById('cashout-agent');
//     const cashoutAgentNum = cashoutAgentInput.value;
//     if(cashoutAgentNum.length !== 11){
//         alert('Invalid Number');
//         return;
//     }

//     // get the input Amount and main balance
//     const cashoutAmountInput = document.getElementById('cashout-amount');
//     const cashoutAmount = cashoutAmountInput.value;
//     const mainBalance = document.getElementById('balance');
//     const balance = mainBalance.innerText;

//     // new balance and validate
//     const newBalance =  Number(balance) - Number(cashoutAmount);
//     if(newBalance < 0 || cashoutAmountInput.length === 0){
//         alert('Invalid Amount');
//         return;
//     }
//     // get the pin 
//     const cashoutPinInput = document.getElementById('cashout-pin');
//     const cashoutPin = cashoutPinInput.value;
//     // pin Validation and Set new balance
//     if(cashoutPin === '7575'){
//         alert('Cashout Withdraw Complete');
//         mainBalance.innerText = newBalance;
//         return;
//     }else{
//         alert('Invalid Pin');
//         return;
//     }

// })