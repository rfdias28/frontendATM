
executeScriptConsultas();
function executeScriptConsultas() {
  arranque();
  var contas = []

  function arranque(){
    var contas = []
    $.ajax({
        type: "GET",
        url: `http://localhost:8080/ATM/api/account/getall${id}`,
       
        success: function (response) {
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
  class conta {
    constructor(id, balance) {
        this.id = id;
        this.balance = balance;
    }
}
function fazcontas(response) {
  for (let index = 0; index < response.length; index++) {
    this.id= response[index].id;
    this.balance= response[index].balance;
    this.conta= new conta(id, balance);
    contas.push(conta);
    
    
  }
}


  // BELFODIL
  //contas a serem enviadas atraves da BD//

  $(document).ready(function () {

    for (let i = 0; i < contas.length; i++) {
      const element = contas[i];
      $('#accordionExample').append(getRow(element.numero, element.saldo));
    }

    $('#accordionExample').append('<br><button id="sair"  type="button" class="btn btn-outline-info">Voltar</button>');
    $("#sair").click(function () {
      $('#main-container').html(getMenuPage());
      executeScriptMenu();
    });
    function getRow(numeroConta, saldo) {
      if (saldo < 0) {
        return `        
    <div class="card">
    <div class="card-header" id="heading${numeroConta}">
      <h2 class="mb-0">

        <button class="btn btn-danger" type="button" data-toggle="collapse" data-target="#collapse${numeroConta}" aria-expanded="false" aria-controls="collapse${numeroConta}">
          Conta ${numeroConta} | (${saldo}) €
        </button>
        
      </h2>
    </div>
  
    <div id="collapse${numeroConta}" class="collapse " aria-labelledby="heading${numeroConta}" data-parent="#accordionExample">
      <div class="card-body">
  
  
        <div class="row">
          <div class="col">
            <input id="input${numeroConta}" type="number" class="form-control" disabled placeholder="Saldo nāo disponível para depósito">
              </div>
            <div class="col">
              <button class="btn btn-success">Depositar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;

      }
      else {

        return `        
<div class="card">
<div class="card-header" id="heading${numeroConta}">
  <h2 class="mb-0">

    <button class="btn btn-success" type="button" data-toggle="collapse" data-target="#collapse${numeroConta}" aria-expanded="false" aria-controls="collapse${numeroConta}">
      Conta ${numeroConta} | ${saldo} €
    </button>
  </h2>
</div>

<div id="collapse${numeroConta}" class="collapse " aria-labelledby="heading${numeroConta}" data-parent="#accordionExample">
  <div class="card-body">


    <div class="row">
      <div class="col">
        <input id="input${numeroConta}" type="number" class="form-control" placeholder="Quantia a depositar">
          </div>
        <div class="col">
          <button class="btn btn-success">Depositar</button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>`;
      }
    }
  });



}


