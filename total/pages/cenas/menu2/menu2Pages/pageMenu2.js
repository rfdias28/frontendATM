// 🜚	△▽◊	◬◭◮🜁🜃🜎 ☩☤♔ ♦♖✇✠	

function getMenuPage() {
    $('link[title="mystyle"]').attr('href', 'menu2/menu2.css');
    // $('script[title="myscript"]').attr('href', 'menu2.js');
    $("#main-container1").remove();
    $("body").prepend(`

    
    <div class="bodya">
    <nav class="navbar  navbar-default" >
    <div class="container-fluid ">
        <div class="navbar-header">
            <div class="navbar-brand "  onclick="openNav()">🜛 Trinity Bank</div>

        </div>
        
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
        ⇄
        </button>
    </div>
</nav>
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle"> Transferência Virtual </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div>
            <div class="form-group">
              <label for="conta-envio">Conta-envio</label>
              <input class="form-control" id="conta-envio" type="number">
            </div>
            <div class="form-group">
              <label for="conta-destino">Conta-destino</label>
              <input class="form-control" id="conta-destino" type="number">
            </div>
            <div class="form-group">
              <label for="blingbling">blingbling</label>
              <input class="form-control" id="blingbling" type="number">
            </div>

          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
          <button type="button" class="btn btn-primary" onclick="transferir()">Transferir</button>
        </div>
      </div>
    </div>
  </div>

    <div id="main-container" class="container">



        <!-- sidenav -->
        <!-- <span style="font-size:30px;cursor:pointer;" onclick="openNav()">CGI BANK</span> -->
        <div id="mySidenav" class="sidenav ">
            <a href="javascript:void(0)" class="closebtn" style="font-size:30px;cursor:pointer;" onclick="closeNav()">&times;</a>

            <!-- <h3 id="teste">teste</h3> -->
            <div class="card" style="position:absolute; background-color:transparent">
                <div class="box">


                    <div class="img" style="font-size:30px;cursor:pointer;" onclick="closeNav()">

                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png">
                    </div>

                    <div>
                        <h2>Hi there,</h2>
                        <h5 id="cnome" style="font-size:1rem;">nome</h5>
                        <!-- </h1><br> -->
                        <!-- <h2>Email: -->
                        <!-- <h2 id="cemail" style="font-size:1rem;">email</h2><br> -->
                        <!-- </h2>
                                <h2>Telefone:  -->
                        <!-- <h2 id="ctel" style="font-size:1rem;">telefone</h2><br> -->
                        <!-- </h2><br><br> -->
                        <!-- <h2>Account Balance</h2> <h3 id="csaldo">&#128176;</h3>  -->
                        <!-- <h2>&#128176;</h2> -->
                        <!-- <ul>

                                    <li><a href="">sfdgsfgsdg</a></li>
                                    <li><a href="">sfdgsfgsdg</a></li>


                                </ul> -->
                    </div>
                </div>
            </div>

            <!-- <div class="container"> -->
            <div id="csaldo1" class="row">
                <div class="col-7"   >
                💰 Account Balance
                 </div>

                <div class="col-5" id="csaldo"  >
                    <div id="csaldo"></div>
                </div>
            </div>
            <div class="row">
                <div class="col-10" id="transactions"  >
                    &#128100 My Profile              
                </div>
                <div class="col-2">></div>
            </div>
            <div class="row">
                <div class="col-10"  >
                💳 Recent Transactions
                </div> 
                <div class="col-2">></div>
            </div>





        </div>

        <!-- titulo -->

        <!-- <div class="container"> -->
        <!-- div saldos,
                     grafico com o saldo dividido por banco -->
                     <div class=" row">
                     <div class="col-12 chartContainer">
                         <div id="chartContainer" style="height: 90%; width: 100%"></div>
                     </div>
                 </div>

        <!-- div debito,
                     debitos divididos por tipo -->
        <div class=" row">
            <div class="col-12 chartContainer">
                <div id="chartContainer1" style="height: 90%; width: 100%"></div>
            </div>
        </div>
        <!-- div credito,
                     debitos divididos por tipo -->
        <div class=" row">
            <div class="col-12 chartContainer">
                <div id="chartContainer3" style="height: 90%; width: 100%"></div>
            </div>

        </div>
        <!-- div saldo,
                     saldo ao longo do mês-->
        <div class=" row">
            <div class="col-12 chartContainer">
                <div id="chartContainer2" style="height: 50%; width: 100%"></div>
            </div>

        </div>

        <!-- div movimentos,
                     movimentos de todas as contas,
                      ordenados por data -->
        <div class="">
            <table id="customers">
                <thead style=" background-color: rgba(60, 125, 179, 0.651); color: white;">
                    <tr>
                        <td> Date </td>
                        <td> Account </td>
                        <td>Description</td>
                        <td> Amount </td>
                        <td> Balance </td>
                    </tr>
                </thead>
                <tbody id="listaMovimentos">

                </tbody>
            </table>
        </div>



    </div>

   

`

)}