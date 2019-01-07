$("#nome").click(function(){
    var nome= document.getElementById("nome").value;
    var nomeConfirm= document.getElementById("nomeConfirm").value;

    $("#divNome").remove();
    $("#divNome").append(`<div id="divNome">
                             <input  id="nome" class="fadeInLeft animated" type="text" placeholder="`+nome+`">
                             <input id="nomeConfirm" class="fadeInRight animated" type="text" placeholder="Confirmar Nome">
                         </div>`)
});


$(document).ready(function(){
    $('.pass_show').append('<span class="ptxt">Show</span>');  
    });
      
    
    $(document).on('click','.pass_show .ptxt', function(){ 
    
    $(this).text($(this).text() == "Show" ? "Hide" : "Show"); 
    
    $(this).prev().attr('type', function(index, attr){return attr == 'password' ? 'text' : 'password'; }); 
    
    });  