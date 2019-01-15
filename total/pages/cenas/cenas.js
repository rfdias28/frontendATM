var id = -1;


class logIN {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}

// $(document).ready(function () {
//     $('.pass_show').append('<span class="ptxt">Show</span>');
// });


// $(document).on('click', '.pass_show .ptxt', function () {

//     $(this).text($(this).text() == "Show" ? "Hide" : "Show");

//     $(this).prev().attr('type', function (index, attr) { return attr == 'password' ? 'text' : 'password'; });

// });

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
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (response) {
            console.log(response);
            console.log('sucesso');
            $('form').fadeOut(500);
            // executeScriptMovimentos()
            setTimeout( "paginaMenu()",500);
            // id=response.id
            console.log("id " + id)
        },
        error: function (err) {
            console.log(err);
            console.log('ERRO');

            alert("credenciais invalidas");
        },

    });



});

   /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
   function openNav() {
    document.getElementById("mySidenav").style.width = "300px";

    // document.getElementById("main-container").style.marginLeft = "250px";
}
/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    // document.getElementById("main-container").style.marginLeft = "0";
}