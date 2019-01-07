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
        <div class="text-center col-6">
          <div id="levantamentos" class="menu animated row fadeInLeft shadow-left" onclick="">
           <div class="col-sm-3 col-0"> <button class="btn btn-outline-primary button"><strong>1</strong></button></div>
            <div class="col-sm-9 col-12"><h3>
              Levantamentos
            </h3></div>
          </div>
          <div  id="transferencias" class="menu animated row fadeInLeft shadow-left" onclick="">
           <div class="col-sm-3 col-0"> <button class="btn btn-outline-primary button"><strong>3</strong></button></div>
            <div class="col-sm-9 col-12"><h3> Transferências</h3></div>
          </div>
          <div  id="pin" class="menu animated row fadeInLeft shadow-left" onclick="">
           <div class="col-sm-3 col-0"> <button class="btn btn-outline-primary button"><strong>5</strong></button></div></strong>
            <div class="col-sm-9 col-12"><h3>Alterar Password</h3></div>
          </div>

        </div>
        <div class="text-center col-6 ">
          <div id="depositos" class="menu1 animated row fadeInRight shadow-right" onclick="">
           <div class="col-sm-3 col-0"> <button class="btn btn-outline-primary button1"><strong>2</strong></button></div>
            <div class="col-sm-9 col-12"><h3><strong> </strong>Depósitos</h3></div>
          </div>
          <div id="consultas" class="menu1 animated row fadeInRight shadow-right" >
            <strong><div class="col-sm-3 col-0"> <button class="btn btn-outline-primary button1"><strong>4</strong></button></div></strong>
            <div class="col-sm-9 col-12"><h3>Consultas</h3></div>
          </div>
          <div id="sair" class="menu1 animated row fadeInRight shadow-right">
            <strong><div class="col-sm-3 col-0"> <button  class="btn btn-outline-primary button1"><strong>6</strong></button></div></strong>
            <div class="col-sm-9 col-12"><h3>Sair</h3></div>
           
          </div>

        </div>

      </div>
    </div>
  </div> `}