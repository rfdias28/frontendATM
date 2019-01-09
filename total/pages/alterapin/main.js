function getPinPage() {
    $('link[title="myscript"]').attr('href', 'js/alterarpin/main.js');
    $('link[title="mystyle"]').attr('href', 'css/alterarPin/main.css');

  return ` <div class="container center wrapper bg-bubbles ">
  <div class="row">
    <div class="col-sm-3"></div>
    <div class=" col-sm-6 ">
      <form id="formulario" > Yay! Bonus Page!

     
        <div class="form-group center-block fadeInRight animated">
          <label for="inputPin">PIN</label>
          <input type="password" class="form-control contact-input" id="inputPin" placeholder="Pin" name="pin">
        </div>
        <div class="form-group center-block fadeInLeft animated">
          <label for="inputConfirmPin">Confime o PIN</label>
          <input type="password"   class="form-control contact-input" id="inputConfirmPin" placeholder="Pin" name="pin">
        </div>
        <br>
        <div class="text-center">
          <button class="fadeInDown animated btn btn-outline-info btn btn-primary btn-lg btn-block" onclick="postCliente()" type="submit" id="Enviar" value="Enviar">
            Enviar
          </button>
        </div>
        <div class="form-group center-block fadeInRight animated">
        <button id="voltar-button" class="fadeInUP animated btn btn-outline-info btn btn-primary btn-lg btn-block">Voltar</button>
        </div>
        <span></span>
      </form>`
    }
