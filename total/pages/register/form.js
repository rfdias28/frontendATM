function getFormPage() {
  $('link[title="mystyle"]').attr('href', 'css/register/main.css');
  $('script[title="myscript"]').attr('href', 'js/register/main.js');

  return `  <div class="container center wrapper bg-bubbles ">
    <div class="row">
      <div class="col-sm-3"></div>
      <div class=" col-sm-6 ">
        <form id="formulario"> Registo
          <div class="form-group center-block fadeInUP animated">
            <label id="aa" for="inputName">Nome</label>
            <input  type="text"  class="form-control contact-input" id="inputName" placeholder="Nome" name="nome">
          </div>
          <div class="form-group center-block fadeInLeft animated">
            <label for="inputEmail">Email</label>
            <input type="email" class="form-control contact-input" id="inputEmail" placeholder="Email" name="email">
          </div>
          <div class="form-group center-block fadeInRight animated">
            <label for="inputPin">PIN</label>
            <input type="password" class="form-control contact-input" id="inputPin" placeholder="Pin" name="pin">
          </div>
          <div class="form-group center-block fadeInLeft animated">
            <label for="inputConfirmPin">Confime o PIN</label>
            <input type="password"   class="form-control contact-input" id="inputConfirmPin" placeholder="Pin" name="pin">
          </div>
          <div class="form-group center-block fadeInRight animated">
            <label for="inputTelefone">Telefone</label>
            <input type="number"   class="form-control contact-input" id="inputTelefone" placeholder="telefone" name="telefone">
          </div>
          <br>
          <div class="text-center">
            <button class="fadeInDown animated btn btn-outline-info btn btn-primary btn-lg btn-block" type="submit"   id="Enviar" value="Enviar">
              Enviar
            </button>
          </div>
          <div class="form-group center-block fadeInRight animated">
          <button id="voltar-button" class="fadeInUP animated btn btn-outline-info btn btn-primary btn-lg btn-block">Voltar</button>
          </div>
          <span></span>
        </form>
        
    
      </div>
      <div class="col-sm-3"></div>
    </div>
    
     <ul class="bg-bubbles">
     <!--<li ><img src="https://i.gifer.com/origin/c3/c371c22070cf90e5f6f1d61ad304f9d2_w200.webp"></li>            
    <li ><img src="https://i.gifer.com/origin/37/37ce95803145efdc21854ee7d2951a09_w200.webp"></li>          
    <li ><img src="https://ya-webdesign.com/images/transparent-finger-old.gif"></li>            
    <li ><img src="https://i.gifer.com/origin/5e/5e63e910c9a04e7728c114b58542d72a_w200.webp"></li>           
    <li ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9T_PPWl1XOMOC3PZOt9S_N4CTLoh9HLklHm57xOHj3IQ2GEoJPg" onclick="window.location.href='https://www.9gag.com'"></li>         
    <li ><img src="https://i.gifer.com/origin/40/40f4094e83493449b379f6f70e87bfbe_w200.webp"></li>            
    <li ><img src="https://i.gifer.com/origin/0d/0dea0c59cbf084d981fc5b55643cb6e6_w200.webp"></li>          
    <li ><img src="https://i.gifer.com/origin/72/72efba9510c092712f495ada8a92f0e9_w200.webp"></li>            
    <li><img src="https://ya-webdesign.com/images250_/marijuana-clipart-9.png" style="width:100px;height:100px;"></li>
    <li><img src="https://i.gifer.com/origin/d8/d8c2c87772378b7e00deeefd8c843a12_w200.webp" style="width:100px;height:100px;"></li>           
    <li><img src="https://i.gifer.com/origin/40/408fefc1a632831d9b390464afc8b944_w200.webp" style="width:100px;height:100px;"></li> -->
    <li>£</li>
      <li>$</li>
      <li>₿</li>
      <li>¥</li>
      <li>£</li>
      <li>$</li>
      <li>€</li>
      <li>¥</li>
      <li>£</li>
      <li>€</li>
      <li>€</li>
      <li>¥</li>
      <li>£</li>
      <li>$</li>
      <li>€</li>
      <li>¥</li>
      <li>£</li>
      <li>₿</li>
      <li>€</li>
      <li>¥</li>
      <li>£</li>
      <li>$</li>
      <li>€</li>
      <li>¥</li>
      <li>£</li>
      <li>₿</li>
      <li>£</li>
      <li>$</li>
      <li>€</li>
      <li>¥</li>
      <li>£</li>
      
          </ul>
          
    </div>
`;
}

function executarTemporario() {
  function name(event) {
    return false
  }
  function noNEED1() {
    $("#user").replaceWith("<p>No need for this</p>")
  }
  function noNEED2() {
    $("#pass").replaceWith("<p>No need for that </p>")
  }
  function noNEED(id) {

    var idx = "#" + id
    $(idx).replaceWith("<p>No need for this</p>")
  }
  // $("#Enviar, #aa").click(function (event) {
  $("#formulario").submit(function (e) {
    e.preventDefault();
    console.log('shit');

    postCliente();



  });

  function postCliente() {

    console.log('postCliente inicio')
    var name = document.getElementById("inputName").value;
    var email = document.getElementById("inputEmail").value;
    var password = document.getElementById("inputPin").value;
    var tel = document.getElementById("inputTelefone").value;
    // var _accountlist = document.getElementById("accountlist").value;

    class Clientex {
      constructor(name, email, password, tel, espechial) {

        this.name = name;
        this.email = email;
        this.password = password;
        this.tel = tel;
        this.espechial = espechial;
      }

    }

    var clienteOUT = new Clientex(name, email, password, tel, 0);

    console.log(clienteOUT);
    $.ajax({
      type: "POST",
      url: `http://localhost:8080/ATM/api/client/newentity`,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(clienteOUT),
      success: function (response) {
        console.log(response);
        console.log('sucesso');
        // $('#main-container').html(getLogInPage())
        // executeScriptLogin();
      },
      error: function (err) {
        console.log(err);
        console.log('ERRO');
      }
    });
  //   class account {
  //     constructor(user, balance) {
  //         this.user = user;
  //         this.balance = balance;
  //     }
  // }var contaOUT= new account (clienteOUT, 69)
  //   $.ajax({
  //     type: "POST",
  //     url: `http://localhost:8080/ATM/api/account/newentity`,
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     data: JSON.stringify(contaOUT),
  //     success: function (response) {
  //       console.log(response);
  //       console.log('sucesso');
  //       // $('#main-container').html(getLogInPage())
  //       // executeScriptLogin();
  //     },
  //     error: function (err) {
  //       console.log(err);
  //       console.log('ERRO');
  //     }
  //   });
  //   var contaOUT1= new account (clienteOUT, -69)
  //   $.ajax({
  //     type: "POST",
  //     url: `http://localhost:8080/ATM/api/account/newentity`,
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     data: JSON.stringify(contaOUT1),
  //     success: function (response) {
  //       console.log(response);
  //       console.log('sucesso');
  //       // $('#main-container').html(getLogInPage())
  //       // executeScriptLogin();
  //     },
  //     error: function (err) {
  //       console.log(err);
  //       console.log('ERRO');
  //     }
  //   });
    $('#main-container').html(getLogInPage())
    executeScriptLogin();

  }

  $("#voltar-button").click(function (event) {

    event.preventDefault();

    $('form').fadeOut(500);

    $('.wrapper').addClass('form-success');

    $('#main-container').html(getLogInPage())
    executeScriptLogin();
  });
}