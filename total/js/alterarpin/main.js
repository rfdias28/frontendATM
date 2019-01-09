executeScriptPin()

function executeScriptPin(){

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
    
}}