fetch('/api/users').
then(response => response.json())
.then(
    users=>{
        const usersElement =document.querySelector('#users');
        users.forEach(user => {
            const element=document.createElement('div');
            console.log(user);
            element.innerHTML=user.email;
            usersElement.appendChild(element);


            
        });

    
});