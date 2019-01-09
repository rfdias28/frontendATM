function getMenuPage() {
    $('link[title="mystyle"]').attr('href', 'css/menu/main.css');
    $('script[title="myscript"]').attr('href', 'js/menu/main.js');

    return `<div>
    <span style="font-size:30px;cursor:pointer" onclick="openNav()">></span>
    <div id="mySidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
      <h1>Nome: <a id="cnome">nome</a></h1><br>
      <h2>Email:<a id="cemail">email</a><br></h2>
      <h2>Telefone:  <a id="ctel">telefone</a></h2><br><br>
      <span id="logout">logOUt</span>
    </div>

  </div>
     <div class="wrapper">
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
          <div id="levantamentos" class="menu animated fadeInLeft shadow-left" onclick="">
            <button class="btn btn-outline-primary button"><strong>1</strong></button>
            <h3>
              Levantamentos
            </h3>
          </div>
          <div  id="transferencias" class="menu animated fadeInLeft shadow-left" onclick="">
            <button class="btn btn-outline-primary button"><strong>3</strong></button>
            <h3> Transferências</h3>
          </div>
          <div  id="pin" class="menu animated fadeInLeft shadow-left" onclick="">
            <button class="btn btn-outline-primary button"><strong>5</strong></button></strong>
            <h3>Alterar Password</h3>
          </div>

        </div>
        <div class="text-center col-sm-6 ">
          <div id="depositos" class="menu1 animated fadeInRight shadow-right" onclick="">
            <button class="btn btn-outline-primary button1"><strong>2</strong></button>
            <h3><strong> </strong>Depósitos</h3>
          </div>
          <div id="consultas" class="menu1 animated fadeInRight shadow-right" >
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