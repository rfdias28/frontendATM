var id = -1;
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
            // xhrFields: {
            //     withCredentials: true
            //  },
            crossDomain: true,
            url: `http://localhost:8080/ATM/api/login/`,
            data: JSON.stringify(data),
            credentials: 'same-origin',

            success: function (response) {
                console.log(response);
                id = response.id;
                console.log('sucesso');
                $('form').fadeOut(500);
                $('.wrapper').addClass('form-success');
                if (response.client.espechial === 0) {
                   executeScriptClient(response);
                } else {
                    window.location.href = 'pages/user/index2.html'
                }



                // $('#main-container').html(getMenuPage());
                console.log("id " + id)
                // executeScriptMenu(response, id);
            },
            error: function (err) {
                console.log(err);
                console.log('ERRO');

            },
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });


        $(document).ready(function () {
            $('.pass_show').append('<span class="ptxt">Show</span>');
        });


        $(document).on('click', '.pass_show .ptxt', function () {

            $(this).text($(this).text() == "Show" ? "Hide" : "Show");

            $(this).prev().attr('type', function (index, attr) { return attr == 'password' ? 'text' : 'password'; });

        });
    });

    executeScriptRegister();

    function executeScriptRegister() {
        $('#registerButton').click(function () {

            $('#main-container').html(getFormPage());
            executarTemporario();
        });
    }
}
