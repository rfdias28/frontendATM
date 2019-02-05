function getLogInPage() {
 console.log("loginpage")
      $('link[title="mystyle"]').attr('href', './pages/login/main.css');
    return `<div class="wrapper">
    <div class="container">
      <h1 class="fadeInUP animated"> 🜛Trinity </h1>
      <div class="container">
      <form class="form">
      <input id="user" class="fadeInLeft animated" type="text"  placeholder="Número de Utilizador">
      <!--colocar numero como username-->
      <input id="pass" class="fadeInRight animated .pass_show" type="text" placeholder="Password" >
      <!--colocar numero como password-->
      <button type="submit" class="fadeInDown animated" id="login-button">LOGIN</button>
      <p class="fadeInDown animated"  id="registerButton">Register here</p>
      <input class="fadeInDown animated" type="checkbox" onclick="myFunction()">


    </form>
      </div>

      <ul class="bg-bubbles ">
         <li >$</li>
         <li>£</li>
         <li>$</li>
         <li>₿</li>
         <li>¥</li>
         <li>£</li>
         <li>$</li>
         <li>€</li>
         <li>¥</li>
         <li>£</li>
         <li>€</li>
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
  </div>
`
  
  }

