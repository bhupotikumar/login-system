document.getElementById('btn-login')
    .addEventListener('click', function(event){
        event.preventDefault();
        const phoneNumber = document.getElementById('phone-number').value;
        const pinNumber = document.getElementById('pin-number').value;
        
        if (phoneNumber === '017' && pinNumber === '1234'){
            console.log('You are logged in');
            window.location.href = 'https://www.facebook.com/';
        }
        else{
            alert('Please provide valid phone or pin');
        }
})