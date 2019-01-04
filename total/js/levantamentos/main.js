var contas = [{ "numero": 1, "saldo": 1000 },
{ "numero": 2, "saldo": 100 },
{ "numero": 3, "saldo": 9000 },
{ "numero": 4, "saldo": 10000000 },
{ "numero": 5, "saldo": -10 }
]
//contas a serem enviadas atraves da BD//

$(document).ready(function () {


  for (let i = 0; i < contas.length; i++) {
    const element = contas[i];
    $('#accordionExample').append(getRow(element.numero, element.saldo));
  
  }

  $('#accordionExample').append('<br><button id="btn-sairlevantamento" onclick="" type="button" class="btn btn-outline-info">Voltar</button>');

  function getRow(numeroConta, saldo) {
    if(saldo<0){
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
            <input id="input${numeroConta}" type="number" disabled class="form-control" placeholder="Saldo nāo disponível para levantamento">
              </div>
            <div class="col">
              <button class="btn btn-danger"disabled>Levantar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;

}
else{ 
  
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
        <input id="input${numeroConta}" type="number" class="form-control" placeholder="Quantia a levantar">
          </div>
        <div class="col">
          <button class="btn btn-success">Levantar</button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>`;}
  }


  // function sair(){
  //   return menuincial
  // }
});





