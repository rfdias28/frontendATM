function getFormPage() {
  $('link[title="mystyle"]').attr('href', 'pages/register/main.css');
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
            <button class="fadeInDown animated btn btn-outline-info btn btn-primary btn-lg btn-block" type="submit"   value="Enviar">
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
`;}

var logInManager = "1580699625/1548768925824/-1179379935";
var tokenExpire = "1580699625/1548768925824"

function quickLogIn() {
    console.log("quickLogin")
    var manager = {
        "email": "manager@mail.com",
        "password": "passwordsupersecreta"
    }
    $.ajax({
        type: "POST",
        crossDomain: true,

        url: `http://localhost:8080/ATM/api/login`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'

        },
        data: JSON.stringify(manager),
        success: function (response) {
            console.log('quickLogIn');
            console.log(response);
            logInManager = response.token + "/" + response.expire + "/" + response.espechial
            tokenExpire = response.token + "/" + response.expire
            

        },
        error: function (err) {
            console.log(err);
            console.log('ERRO');

        }
    });
}
function executeScriptForm() {
  console.log("script Form")
  quickLogIn()

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
    enviarMail(name,email,password,tel)
    class Clientex {
      constructor(name, email, password, tel, espechial) {

        this.name = name;
        this.email = email;
        this.password = password;
        this.tel = tel;
        this.espechial = espechial;
      }

    }

    var clienteOUT = new Clientex(name, email, password, tel, false);

    console.log(clienteOUT);
    $.ajax({
      type: "POST",
      url: `http://localhost:8080/ATM/api/client/newentity/${logInManager}`,
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
  
    $('#main-container').html(getLogInPage())
    executeScriptLogin();

  }
function enviarMail(name,email,password,tel) {
console.log("envia mail")
  var template_params = {
    "inputEmail": email,
    "inputName": name,
    "inputTelefone": tel,
    "inputPin": password
 }
 
 var service_id = "atmupacademy";
 var template_id = "registo";
 emailjs.send(service_id, template_id, template_params);
  
}


  $("#voltar-button").click(function (event) {

    event.preventDefault();

    $('form').fadeOut(500);

    $('.wrapper').addClass('form-success');

    $('#main-container').html(getLogInPage())
    executeScriptLogin();
  });
}

