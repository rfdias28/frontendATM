

executeScriptLogin();

class logIN {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}

function executeScriptLogin() {
    $("#login-button").click(function (event) {

        event.preventDefault();
        var pass = document.getElementById("pass").value;
        var mail = document.getElementById("user").value;
        var data = new logIN(mail, pass)
        $.ajax({
            type: "POST",
            url: `http://localhost:8080/ATM/api/login/`,
            data: JSON.stringify(data),
            success: function (response) {
                console.log(response);
                console.log('sucesso');
                $('form').fadeOut(500);
                $('.wrapper').addClass('form-success');
                $('#main-container').html(getMenuPage());
                executeScriptMenu(mail);
            },
            error: function (err) {
                console.log(err);
                console.log('ERRO');
                alert("credenciais invalidas");
            },
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });



    });

    executeScriptRegister();

    function executeScriptRegister() {
        $('#registerButton').click(function () {

            $('#main-container').html(getFormPage());
        });
    }
}
function arranque(){
    var pass = document.getElementById("pass").value;
    var mail = document.getElementById("user").value;
    var data = new logIN(mail, pass)
    $.ajax({
        type: "POST",
        url: `http://localhost:8080/ATM/api/login/`,
        data: JSON.stringify(data),
        success: function (response) {
            console.log(response);
            console.log('sucesso');
         
           
        },
        error: function (err) {
            console.log(err);
            console.log('ERRO');
            alert("credenciais invalidas");
        },
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
}