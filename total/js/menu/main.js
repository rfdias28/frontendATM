// function getName(id) {
//     console.log('arranque inicio')
//     $.ajax({
//         url: `http://localhost:8080/ATM/api/client/${id}`,
//         method: 'get',
//         success: function (response) {
//             console.log('nome');
//             console.log(response);


//             return response.name
//         },
//         error: function (err) {
//             console.log(err);
//         }
//     });
//     console.log('arranque fim')
// };





// getMethod();
function executeScriptMenu(mail) {
    $('#sair').click(function () {
        console.log("sair")
 $('#main-container').html(getLogInPage());
        executeScriptLogin();
    });

    $(".wrapper").prepend("<h1>ola "+mail+"</h1>");
}



