function login() {
    const username = document.querySelector('[name="username"]')
    const password = document.querySelector('[name="password"]')
    if(username.value.toLowerCase() == 'administrator' && password.value.toLowerCase() == 'drewbyte') {
        alert('PWNEU{!nform@t!0n-d!scl0sur3}')
    } else {
        username.value = ''
        password.value = ''
        document.querySelector('#login-msg').innerHTML = 'Try Again'
    }
}

function viewSourceCode() {
    var source = "<html>";
    source += document.getElementsByTagName('html')[0].innerHTML;
    source += "</html>";
    source = source.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    source = "<pre>"+source+"</pre>";
    sourceWindow = window.open('','Source of page','height=800,width=800,scrollbars=1,resizable=1');
    sourceWindow.document.write(source);
    sourceWindow.document.close(); 
    if(window.focus) sourceWindow.focus();
}