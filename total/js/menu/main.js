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

var contas = [];

class account {
  constructor(id, balance) {
    this.id = id;
    this.balance = balance;
  }
}


console.log("id "+id)

function arranque(id) {
    console.log("id "+id)
  contas = []
  this.id = id
  $.ajax({
    type: "GET",
    url: `http://localhost:8080/ATM/api/account/getall${id}`,
    success: function (response) {
      console.log("response : " + response);
      console.log(response);
      console.log('sucesso');
      fazcontas(response);
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
}
function fazcontas(response) {
  for (let index = 0; index < response.length; index++) {
    this.id = response[index].id;
    this.balance = response[index].balance;
    this.conta = new account(id, balance);
    contas.push(conta);
    console.log(contas)
  }
  console.log("contas : " + contas)
}

// getMethod();
function executeScriptMenu(response, id) {
    arranque(id);
    var cliente = response;
    var idx= id;

 $('#sair,#logout').click(function () {
        console.log("sair");
        $('#main-container').html(getLogInPage());
        executeScriptLogin();
        $.ajax({
            type: "POST",
            url: `http://localhost:8080/ATM/api/login/logout`,

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



    $('#levantamentos').click(function () {
        console.log("levantamentos");
        $('#main-container').html(getLevantamentosPage());
        executeScriptLevantamentos(cliente,idx);
        // $(".wrapper").prepend("<h1>ola "+mail+"</h1>");
    });



    $('#consultas').click(function () {
        console.log("consultas");
        $('#main-container').html(getConsultasPage());
        executeScriptConsultas(cliente,idx);
        // $(".wrapper").prepend("<h1>ola "+mail+"</h1>");
    });



    $('#transferencias').click(function () {
        console.log("transferencias");
        $('#main-container').html(getTransferenciasPage());
        executeScriptTransferencias(cliente,idx);
        // $(".wrapper").prepend("<h1>ola "+mail+"</h1>");
    });
    $('#pin').click(function () {
        console.log("pin");
        $('#main-container').html(getPinPage());
        executeScriptPin(cliente,idx);
        // $(".wrapper").prepend("<h1>ola "+mail+"</h1>");
    });

    $('#depositos').click(function () {
        console.log("depositos");
        $('#main-container').html(getDepositosPage());
        executeScriptDepositos(cliente,idx);
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
}
