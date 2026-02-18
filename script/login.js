document.getElementById('login-btn').addEventListener('click', function(){
    // 1. get number input 

    const numberInput = document.getElementById('number-input');
    const number = numberInput.value;
    // 2. get pin input 

    const pinInput = document.getElementById('pin-input');
    const pin = pinInput.value;
    // 3. match pin & number 
    if(number === '01774907808' && pin === '7575'){
        alert('Login Successful');
        window.location.assign('./home.html')
    }
    else {
        alert('Login failed');
        return;
    }
    
})
