const submitBtn = document.querySelector('.submit-btn');
const regex = /^[a-zA-Z0-9.-_]+@[a-zA-Z.-]+\.[a-zA-Z]{2,4}$/;

submitBtn.addEventListener('click', (e)=>{
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if(firstName === '' || lastName === '' || email === '' || password === '') {
        console.log('Error: fill all inputs!!');
    } else if(!email.match(regex)) {
        console.log('Error: Wrong Email Format!!');
    } else {
        document.getElementById('first-name').value = '';
        document.getElementById('last-name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
    }
    e.preventDefault();
})
