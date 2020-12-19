fetch('/user/ars').then(res => res.json()).then(data => displayUser(data)).catch(err => console.error(err));

const userName = document.querySelector('.user-name');

function displayUser(data) {
    console.log(data);
    if(data.success){
        const userData = data.user_data;
        userName.innerText = `user name: ${userData}`;
        console.log(userData);
        console.log('waaaaw');
    }
}