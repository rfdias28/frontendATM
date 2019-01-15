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
var cliente = {};

var contas = [];

class account {
    constructor(id, balance) {
        this.id = id;
        this.balance = balance;
    }
}



console.log("id " + id)

function arranque(id) {
    console.log("id " + id)
    contas = []
    this.id = id
    $.ajax({
        type: "GET",
        // xhrFields: {
        //     withCredentials: true
        //  },
        crossDomain: true,
        url: `http://localhost:8080/ATM/api/client/getallaccountsfromclient/${id}`,
        credentials: 'same-origin',
        success: function (contasCliente) {
            console.log("response : " + contasCliente);
            console.log(contasCliente);
            console.log('sucesso');
            fazcontas(contasCliente);
        },
        error: function (err) {
            console.log(err);
            console.log('ERRO');
        },
        // headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json',
        //     // 'Access- Control - Allow - Origin' :  '127.0.0.1 localhost.com',
        //     // 'Access - Control - Allow - Credentials' : 'true'
        // },
    });
}
function fazcontas(contasCliente) {
    for (let index = 0; index < contasCliente.length; index++) {
        this.id = contasCliente[index].id;
        this.balance = contasCliente[index].balance;
        this.conta = new account(id, balance);
        contas.push(conta);
        console.log(contas)
    }
    console.log("contas : " + contas)
}

// getMethod();
function executeScriptMenu(response, id) {

    // setTimeout(arranque(id), 10000);
    arranque(id);
    cliente = response;
    var idx = id;

    $('#sair,#logout').click(function () {
        console.log("sair");
        $('#main-container').html(getLogInPage());
        executeScriptLogin();
        $.ajax({
            type: "POST",
            url: `http://localhost:8080/ATM/api/login/logout`,
            credentials: 'same-origin',
            success: function (response) {
                console.log(response);
                console.log('logout');



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
    });

    $('#teste').click(function () {
        console.log("teste get accounts");
        arranque(id);

    });

    $('#levantamentos').click(function () {
        console.log("levantamentos");
        $('#main-container').html(getLevantamentosPage());
        executeScriptLevantamentos(cliente, idx);
        // $(".wrapper").prepend("<h1>ola "+mail+"</h1>");
    });



    $('#consultas').click(function () {
        console.log("consultas");
        $('#main-container').html(getConsultasPage());
        executeScriptConsultas(contas, idx);
        // $(".wrapper").prepend("<h1>ola "+mail+"</h1>");
    });



    $('#transferencias').click(function () {
        console.log("transferencias");
        $('#main-container').html(getTransferenciasPage());
        executeScriptTransferencias(cliente, idx);
        // $(".wrapper").prepend("<h1>ola "+mail+"</h1>");
    });
    $('#pin').click(function () {
        console.log("pin");
        $('#main-container').html(getPinPage());
        executeScriptPin(cliente, idx);
        // $(".wrapper").prepend("<h1>ola "+mail+"</h1>");
    });

    $('#depositos').click(function () {
        console.log("depositos");
        $('#main-container').html(getDepositosPage());
        executeScriptDepositos(cliente, idx);
        // $(".wrapper").prepend("<h1>ola "+mail+"</h1>");
    });

    // $('#alterarpin').click(function () {
    //     console.log("alterarpin");
    //     $('#main-container').html(getalterarpinPage());
    //     executeScriptalterapin();

    fazCliente(cliente);

    function fazCliente(cliente) {

        document.getElementById("cnome").innerHTML = cliente.name;
        document.getElementById("cemail").innerHTML = cliente.email;
        document.getElementById("ctel").innerHTML = cliente.tel;


    }
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        }

    });
}
