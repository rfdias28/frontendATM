function getLogInPage() {
 
      $('link[title="mystyle"]').attr('href', 'css/login/main.css');
    return `<div class="wrapper">
    <div class="container">
      <h1 class="fadeInUP animated"> BANK</h1>
      <div class="container">
      <form class="form">
      <input id="user" class="fadeInLeft animated" type="text"  placeholder="Número de Utilizador">
      <!--colocar numero como username-->
      <input id="pass" class="fadeInRight animated" type="text" placeholder="Password" >
      <!--colocar numero como password-->
      <button type="submit" class="fadeInDown animated" id="login-button">LOGIN</button>
      <p class="fadeInDown animated" id="registerButton">Register here</p>


    </form>
      </div>

      <ul class="bg-bubbles ">
         <li ><img src="C:/Users/filip/Desktop/ATM_interface/v-14-512.png" style="width:100px;height:100px;"></li>
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
      
    </div>
  </div>`
  
  }

  // function executeChangeScriptLogin(){

  //   $('script[title="myscript"]').attr('href', 'js/login/main.js');
  // }