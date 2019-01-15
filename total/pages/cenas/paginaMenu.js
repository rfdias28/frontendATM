
function paginaMenu() {
    $("#main-container").remove();
    $("body").prepend(

        `

    <nav class="navbar   navbar-default">
        <div class="container-fluid  ">
            <div class="navbar-header">
                <div id="divnome" class="navbar-brand  " style="cursor:pointer;" onclick="openNav()"> </div>
            </div>
            <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" style="align-self: flex-end" data-toggle="modal" data-target="#exampleModalCenter">
    Transferência
      </button>

        </div>
    </nav>
    <div id="main-container">


    <!--   <div class="wrapper">
            <div class="container bg-bubbles">-->

               
                <div id="mySidenav" class="sidenav ">
                    <a href="javascript:void(0)" class="closebtn" style="font-size:30px;cursor:pointer;" onclick="closeNav()">&times;</a>

                    <!-- <h3 id="teste">teste</h3> -->
                    <div class="card" style="position:absolute">
                        <div class="box">
                         
                            <br>
                            <br>
                            <br>
                            <br>
                            <br>
                            <div class="img" style="font-size:30px;cursor:pointer;" onclick="closeNav()">

                                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png">
                            </div>

                            <div>
                                <h2 id="cnome" style="font-size:1rem;">nome</h2><br>
                                <h2 id="cemail" style="font-size:1rem;">email</h2><br>
                                
                                <h2 id="ctel" style="font-size:1rem;">telefone</h2><br>
                                <h2 id="csaldo">&#128176;</h2> <br>
                                <ul>

                                    <li><a href="">sfdgsfgsdg</a></li>
                                    <li><a href="">sfdgsfgsdg</a></li>


                                </ul>
                            </div>


                        </div>

                    </div>
                </div>

                <!-- Modal -->
                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle"style="colour:black"> Transferência Virtual </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <input id="conta-envio" type="number">
                        <input id="conta-destino" type="number">
                        <input id="blingbling" type="number">
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelr</button>
                        <button type="button" class="btn btn-primary" onclick="transferir()">Transferir</button>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- div saldos,
                     grafico com o saldo dividido por banco -->
                <div class="cartao1 row ">
                     <div class="col-5"></div> 
                    <div class="col-7" id="chartContainer" style="height: 150px; width: 100%"></div>

                </div>

                <!-- div debito,
                     debitos divididos por tipo -->
                <div class="cartao1 row">
                     <div class="col-5"></div> 
                    <div class="col-7" id="chartContainer1" style="height: 150px; width: 100%"></div>

                </div>
                <!-- div credito,
                     debitos divididos por tipo -->
                <div class="cartao1 row">
                     <div class="col-5"></div> 
                    <div class="col-7" id="chartContainer3" style="height: 150px; width: 100%"></div>

                </div>
                <!-- div saldo,
                     saldo ao longo do mês-->
                <div class="cartao1 row">
                     <div class="col-5"></div> 
                    <div class="  col-7" id="chartContainer2" style="height: 150px; width: 100%"></div>

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


                <!--    </div>


        </div>-->


    </div>


   
`
    );
    executeScriptMenu();
}