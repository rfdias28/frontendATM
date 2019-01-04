




  $("#voltar-button").click(function(event){

    event.preventDefault();
  
  $('form').fadeOut(500);

  $('.wrapper').addClass('form-success');

  $('#main-container').html(getLogInPage())
  executeScriptLogin();
  });
  
  console.log('cenas')



function noNEED(id) {

  var idx="#"+ toString(id)
  $(idx).replaceWith("<p>No need for this</p>")
}

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
