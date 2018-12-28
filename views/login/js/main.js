
$("#login-button").click(function(event){
    event.preventDefault();
    $.ajax({
        type: "POST",
        url: 'w',
        data: data,
        success: success,
        dataType: dataType
      });

$('form').fadeOut(500);
$('.wrapper').addClass('form-success');
});

