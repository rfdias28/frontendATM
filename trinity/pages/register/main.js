

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
// // ------------------
// $(document).ready(function () {


//   $('#formulario').submit(function (event) {
//     console.log('Submetido');
//     event.preventDefault();
//     var nome = document.getElementById('inputNome').value;
//     var email = document.getElementById('inputEmail').value;
//     var pin = document.getElementById('pin');

//     if (name.value == '' || email.value == ''|| pin.value == '') {
//       alert('Verifique os seus campos')
//       return false;
//     }
//     else {

//       var data = {
//         'service_id': 'atmupacademy',
//         'template_id': 'template_upkGFoFm',
//        'user_id': 'user_90pQzh9BSQnJmmXExn0fv',
        
//         'template_params': {
//             'to_name': nome,
//             'from_name':'Equipa ATM',
//             'message_html':'treta a ser enviada',
//             'reply_to':'atmupacademy@gmail.com',
//             'mail_to':email
//         }
//     };
//       $.ajax({
//         url: "https://api.emailjs.com/api/v1.0/email/send",
//         type: "POST",
//         contentType: "application/json",
//         data: JSON.stringify(data),
//         success: function (data) {
//           alert('Mensagem enviada')
//         }, error: function (err) {
//           console.log(err);
          
//           alert('Erro no envio');
//         }
//       });
//     }
//   });
// });
