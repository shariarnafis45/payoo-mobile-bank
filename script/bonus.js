document.getElementById('bonus-btn').addEventListener('click', function(){
    // get the input agent number and validate
    const couponCode = getInputValueFromId('coupon-code');
    const mainBalance = getBalance();
    
    if(couponCode === 'get25'){
        alert('Congrats you get 250 tk');
        const newBalance = mainBalance + 250;
        setBalance(newBalance);
        // transaction history      
        const historyContainer = document.getElementById('history-container');
        const history = document.createElement("div");
        history.innerHTML = `
        <div class="history-card bg-primary rounded-sm p-3 text-white">
            You get bonus of 250 taka by coupon code , 
            at ${new Date};
        </div> 
        ` ;
        historyContainer.appendChild(history);
        return;
    }
    else if(couponCode === 'get50'){
        alert('Congrats you get 500 tk');
        const newBalance = mainBalance + 500;
        setBalance(newBalance);
        // transaction history      
        const historyContainer = document.getElementById('history-container');
        const history = document.createElement("div");
        history.innerHTML = `
        <div class="history-card bg-primary rounded-sm p-3 text-white">
            You get bonus of 500 taka by coupon code , 
            at ${new Date};
        </div> 
        ` ;
        historyContainer.appendChild(history);
        return;
    } else{
        alert('Invalid Coupon Code');
        return;
    }
})
