function getMenuPage() {
    $('link[title="mystyle"]').attr('href', 'css/menu/main.css');
    $('script[title="myscript"]').attr('href', 'js/menu/main.js');

    return ` <div class="wrapper">
    <div class="container">
    <ul class="bg-bubbles ">
      <li>£</li>
      <li>$</li>
      <li>₿</li>
      <li>¥</li>
      <li>£</li>
      <li>$</li>
      <li>€</li>
      <li>¥</li>
      <li>£</li>
      <li>.|.</li>
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
      <div class="row align-middle">
        <div class="text-center col-sm-6">
          <div class="menu animated fadeInLeft shadow-left" onclick="">
            <button class="btn btn-outline-primary button"><strong>1</strong></button>
            <h3>
              Levantamentos
            </h3>
          </div>
          <div class="menu animated fadeInLeft shadow-left" onclick="">
            <button class="btn btn-outline-primary button"><strong>3</strong></button>
            <h3> Transferências</h3>
          </div>
          <div class="menu animated fadeInLeft shadow-left" onclick="">
            <button class="btn btn-outline-primary button"><strong>5</strong></button></strong>
            <h3>Alterar Pin</h3>
          </div>

        </div>
        <div class="text-center col-sm-6 ">
          <div class="menu1 animated fadeInRight shadow-right" onclick="">
            <button class="btn btn-outline-primary button1"><strong>2</strong></button>
            <h3><strong> </strong>Depósitos</h3>
          </div>
          <div class="menu1 animated fadeInRight shadow-right" onclick="">
            <strong> <button class="btn btn-outline-primary button1"><strong>4</strong></button></strong>
            <h3>Consultas</h3>
          </div>
          <div id="sair" class="menu1 animated fadeInRight shadow-right">
            <strong> <button  class="btn btn-outline-primary button1"><strong>6</strong></button></strong>
            <h3>Sair</h3>
           
          </div>

        </div>

      </div>
    </div>
  </div> `}