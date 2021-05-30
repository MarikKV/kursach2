const admin = JSON.parse( localStorage.getItem('admin') );

if( admin == true ){
    window.location = "admin-edit.html";
}

function adminLogin(){
    const adminPassword = document.getElementById('adminPassword').value;

    if( adminPassword == "qwerty" ){
        displayMessage('message-success', 'Admin', 'Успішний вхід', 4000);

        localStorage.setItem('admin', true)

        setTimeout(function(){
            window.location = "admin-edit.html";
        }, 4500)

    } else {
        displayMessage('message-error', 'Admin', 'Пароль невірний', 4000);
    }
}