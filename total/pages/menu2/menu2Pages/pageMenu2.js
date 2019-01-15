function getMenuPage() {
    $('link[title="mystyle"]').attr('href', 'pages/menu2/menu2.css');
    // $('script[title="myscript"]').attr('href', 'pages/menu2/menu2.js');
    $("body").replaceWith(` <nav class="navbar  bg-dark navbar-default">
    <div class="container-fluid  bg-dark">
        <div class="navbar-header">
            <div id="divnome" class="navbar-brand  bg-dark" style="cursor:pointer;" onclick="openNav()"> </div>
        </div>

    </div>
</nav>
<div id="main-container">


    <div class="wrapper">
        <div class="container bg-bubbles">

            <!-- sidenav -->
            <!-- <span style="font-size:30px;cursor:pointer;" onclick="openNav()">CGI BANK</span> -->
            <div id="mySidenav" class="sidenav ">
                <a href="javascript:void(0)" class="closebtn" style="font-size:30px;cursor:pointer;" onclick="closeNav()">&times;</a>

                <!-- <h3 id="teste">teste</h3> -->
                <div class="card" style="position:absolute">
                    <div class="box">
                        <!-- <br onclick="closeNav()">
                        <br onclick="closeNav()">
                        <br onclick="closeNav()">
                        <br onclick="closeNav()">
                        <br onclick="closeNav()">
                        <br onclick="closeNav()">
                        <br onclick="closeNav()"> -->
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <div class="img" style="font-size:30px;cursor:pointer;" onclick="closeNav()">

                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png">
                        </div>
                        <!-- <h1>Nome: -->

                        <div>
                            <h2 id="cnome" style="font-size:1rem;">nome</h2><br>
                            <!-- </h1><br> -->
                            <!-- <h2>Email: -->
                            <h2 id="cemail" style="font-size:1rem;">email</h2><br>
                            <!-- </h2>
                            <h2>Telefone:  -->
                            <h2 id="ctel" style="font-size:1rem;">telefone</h2><br>
                            <!-- </h2><br><br> -->
                            <h2 id="csaldo">&#128176;</h2> <br>
                            <h2>&#128176;</h2>
                        </div>


                    </div>

                </div>
            </div>

            <!-- titulo -->


            <!-- div saldos,
                 grafico com o saldo dividido por banco -->
            <div class="cartao1 row ">
                <!-- <div class="col-5"></div> -->
                <div class="col-12" id="chartContainer" style="height: 100px; width: auto"></div>

            </div>

            <!-- div debito,
                 debitos divididos por tipo -->
            <div class="cartao1 row">
                <!-- <div class="col-5"></div> -->
                <div class="col-12" id="chartContainer1" style="height: 100px; width: auto"></div>

            </div>
            <!-- div credito,
                 debitos divididos por tipo -->
            <div class="cartao1 row">
                <!-- <div class="col-5"></div> -->
                <div class="col-12" id="chartContainer3" style="height: 100px; width: auto"></div>

            </div>
            <!-- div saldo,
                 saldo ao longo do mês-->
            <div class="cartao1 row">
                <!-- <div class="col-5"></div> -->
                <div class="col-12" id="chartContainer2" style="height: 100px; width: auto"></div>

            </div>

            <!-- div movimentos,
                 movimentos de todas as contas,
                  ordenados por data -->
            <div class="cartao1">
                <table class="blueTable">
                    <thead>
                        <tr>
                            <td> hora </td>
                            <td> conta </td>
                            <td>descricao</td>
                            <td> montante </td>
                            <td> saldo </td>
                        </tr>
                    </thead>
                    <tbody id="listaMovimentos">

                    </tbody>
                </table>
            </div>
            <!-- <ul class="bg-bubbles "> -->
            <!-- <li><img src="C:/Users/filip/Desktop/ATM_interface/v-14-512.png" style="width:100px;height:100px;"></li>
                       <li><img src="https://i.gifer.com/origin/9b/9be3cc63d40d8ea231322e87d6aab7ca_w200.webp" style="width:100px;height:100px; opacity: 50%;"></li>
                       <li><img src="https://ya-webdesign.com/images250_/marijuana-clipart-9.png" style="width:100px;height:100px;"></li> -->
            <!-- <li>£</li>
                    <li>$</li>
                    <li>₿</li>
                    <li>¥</li>
                    <li>£</li>
                    <li>$</li>
                    <li>€</li>
                    <li>¥</li>
                    <li>£</li>
                    <li>₿</li>
                    <li>€</li>
                    <li>¥</li>
                    <li >₿</li>
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
        
                  </ul> -->
        </div>

        <!-- <div class="container">


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
                    <li>₿</li>
                    <li>€</li>
                    <li>¥</li>
                    <li>₿</li>
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
            </div> -->
    </div>



    </script>
</div>
<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
    crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
    crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
    crossorigin="anonymous"></script>

<!-- import dos graficos -->
<script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>

<script src="C:\Users\filip\Documents\GitHub\frontendATM\total\pages\menu2\menu2.js"></script>
<script src="C:\Users\filip\Documents\GitHub\frontendATM\total\pages\menu2\movimentos.js"></script>` );

//     return `

//         <div class="container bg-bubbles">
//             <div id="divnome" class="navbar-brand  bg-dark" style="cursor:pointer;" onclick="openNav()"> </div>


//             <div id="mySidenav" class="sidenav ">
//                 <a href="javascript:void(0)" class="closebtn" style="font-size:30px;cursor:pointer;" onclick="closeNav()">&times;</a>


//                 <div class="card" style="position:absolute">
//                     <div class="box">

//                         <br>
//                         <br>
//                         <br>
//                         <br>
//                         <br>
//                         <div class="img" style="font-size:30px;cursor:pointer;" onclick="closeNav()">

//                             <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png">
//                         </div>
//                         <!-- <h1>Nome: -->

//                         <div>
//                             <h2 id="cnome" style="font-size:1rem;">nome</h2><br>
//                             <!-- </h1><br> -->
//                             <!-- <h2>Email: -->
//                             <h2 id="cemail" style="font-size:1rem;">email</h2><br>
//                             <!-- </h2>
//                             <h2>Telefone:  -->
//                             <h2 id="ctel" style="font-size:1rem;">telefone</h2><br>
//                             <!-- </h2><br><br> -->
//                             <h2 id="csaldo">&#128176;</h2> <br>
//                             <h2>&#128176;</h2>
//                         </div>


//                     </div>

//                 </div>
//             </div>

//             <!-- titulo -->


//             <!-- div saldos,
//                  grafico com o saldo dividido por banco -->
//             <div class="cartao1 row ">
//                 <!-- <div class="col-5"></div> -->
//                 <div class="col-12" id="chartContainer" style="height: 100px; width: 50%;"></div>

//             </div>

//             <!-- div debito,
//                  debitos divididos por tipo -->
//             <div class="cartao1 row">
//                 <!-- <div class="col-5"></div> -->
//                 <div class="col-12" id="chartContainer1" style="height: 100px; width: 50%;"></div>

//             </div>
//             <!-- div credito,
//                  debitos divididos por tipo -->
//             <div class="cartao1 row">
//                 <!-- <div class="col-5"></div> -->
//                 <div class="col-12" id="chartContainer3" style="height: 100px; width: 50%;"></div>

//             </div>
//             <!-- div saldo,
//                  saldo ao longo do mês-->
//             <div class="cartao1 row">
//                 <!-- <div class="col-5"></div> -->
//                 <div class="col-12" id="chartContainer2" style="height: 100px; width: 50%;"></div>

//             </div>

//             <!-- div movimentos,
//                  movimentos de todas as contas,
//                   ordenados por data -->
//             <div class="cartao1">
//                 <table class="blueTable">
//                     <thead>
//                         <tr>
//                             <td> hora </td>
//                             <td> conta </td>
//                             <td>descricao</td>
//                             <td> montante </td>
//                             <td> saldo </td>
//                         </tr>
//                     </thead>
//                     <tbody id="listaMovimentos">

//                     </tbody>
//                 </table>
//             </div>

//          </div>



// `
// }

// {/* <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
//     crossorigin="anonymous"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
//     crossorigin="anonymous"></script>
// <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
//     crossorigin="anonymous"></script>

// <!-- import dos graficos -->
// <script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>

// <script src="C:/Users/filip/Documents/GitHub/frontendATM/total/pages/menu2/menu2.js"></script>
// <script src="C:/Users/filip/Documents/GitHub/frontendATM/total/pages/menu2/movimentos.js"></script> */
}