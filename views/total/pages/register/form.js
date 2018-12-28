function getFormPage() {
    // $('link[title="mystyle"]').attr('href', 'css/register/main.css');
    $('script[title="myscript"]').attr('href', 'js/register/main.js');

    return ` 
 <div class="container wrapper bg-bubbles ">
<div class="row">
  <div class="col-sm-3"></div>
  <div class="col-sm-6">
    <form id="formulario">
      <div class="form-group center-block">
        <label for="inputName">Nome</label>
        <input type="text" class="form-control contact-input" id="inputName" placeholder="Nome" name="nome">
      </div>
      <div class="form-group center-block">
        <label for="inputEmail">Email</label>
        <input type="email" class="form-control contact-input" id="inputEmail" placeholder="Email" name="email">
      </div>
      <div class="form-group center-block">
        <label for="inputPin">PIN</label>
        <input type="password" class="form-control contact-input" id="inputPin" placeholder="Pin" name="pin">
      </div>
      <div class="form-group center-block">
        <label for="inputConfirmPin">Confime o PIN</label>
        <input type="password" class="form-control contact-input" id="inputConfirmPin" placeholder="Pin" name="pin">
      </div>
      <div class="form-group center-block">
        <label for="inputTelefone">Telefone</label>
        <input type="email" class="form-control contact-input" id="inputTelefone" placeholder="Email" name="email">
      </div>
      <br>
      <div class="text-center">
        <button class="btn btn-outline-info btn btn-primary btn-lg btn-block" type="submit" id="Enviar" value="Enviar">
          Enviar
        </button>
      </div>
      <span></span>
    </form>
  </div>
  <div class="col-sm-3"></div>
</div>
<ul class="bg-bubbles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
</div>`;
}