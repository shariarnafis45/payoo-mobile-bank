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