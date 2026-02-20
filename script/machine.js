// get input value from id function 
function getInputValueFromId(id) {
    const input = document.getElementById(id);
    const value = input.value;
    return value;
}


// machine -> get the main balance 
function getBalance(){
    const mainBalance = document.getElementById('balance');
    const balance = mainBalance.innerText;
    
    return Number(balance);
}


// machine -> Set new balanace to main balanace 

function setBalance(value) {
    const mainBalance = document.getElementById('balance');
    mainBalance.innerText = value;
}

// machine id -> Show hide
function showOnly(id){
    const addMoney = document.getElementById('add-money');
    const cashOut = document.getElementById('cash-out');
    const transaction = document.getElementById('history');
    // hide all 
    addMoney.classList.add('hidden');
    cashOut.classList.add('hidden');
    transaction.classList.add('hidden');

    // show clicked id
    document.getElementById(id).classList.remove('hidden');
} 




