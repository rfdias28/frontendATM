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
        console.log("sair");
        $('#main-container').html(getLogInPage());
        executeScriptLogin();

    });
    $('#levantamentos').click(function () {
        console.log("levantamentos");
        $('#main-container').html(getLevantamentosPage());
        executeScriptLevantamentos();
        // $(".wrapper").prepend("<h1>ola "+mail+"</h1>");
    });

    $('#consultas').click(function () {
        console.log("consultas");
        $('#main-container').html(getConsultasPage());
        executeScriptConsultas();
        // $(".wrapper").prepend("<h1>ola "+mail+"</h1>");
    });
    $('#transferencias').click(function () {
        console.log("transferencias");
        $('#main-container').html(getTransferenciasPage());
        executeScriptTransferencias();
        // $(".wrapper").prepend("<h1>ola "+mail+"</h1>");
    });
    $('#pin').click(function () {
        console.log("pin");
        $('#main-container').html(getPinPage());
        executeScriptPin();
        // $(".wrapper").prepend("<h1>ola "+mail+"</h1>");
    });

    $('#depositos').click(function () {
        console.log("depositos");
        $('#main-container').html(getDepositosPage());
        executeScriptDepositos();
        // $(".wrapper").prepend("<h1>ola "+mail+"</h1>");
    });
}
