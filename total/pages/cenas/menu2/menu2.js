
var id = -1;
var creditos = [];
var saldo = 0;
var clientea = 1;
var dpSaldoPorBanco = [];
var dpCreditsByClient = [];
var dpDebitsByClient = [];
var dataGraficoMovimentos = [];
var logInManager = "1462123440/1548650349783/205359861";
var tokenExpire =  "1462123440/1548650349783"
// var response="";

class credito {
    constructor(dia, dinheiro) {
        this.dia = dia;
        this.dinheiro = dinheiro;
    }
}
class debito {
    constructor(tipo, dinheiro) {
        this.tipo = tipo;
        this.dinheiro = dinheiro;
    }
}
class account {
    constructor(id, balance, bank) {
        this.id = id;
        this.balance = balance;
        this.bank = bank;

    }
}
class cliente {
    constructor(id, email, name, password, tel, espechial, expire, token) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.password = password;
        this.tel = tel;
        this.espechial = espechial;
        this.expire = expire;
        this.token = token;
    }
}
CanvasJS.addColorSet("greenShades",
    [//colorSet Array

        "#66545e","#aa6f73","#a39193","#eea990","#f6e0b5", "#ff6c58", "#ff884d", "#e9a867", "#f0cca8", "#661400",
    ]);





function executeScriptMenu(response) {
    //    response = response
    getInfo(response);
    getInfoSaldoPorBanco(response);
    getInfoCreditsByClient(response);
    getInfoDebitsByClient(response);
    getAllMovementsFromClient(response);



}

// for (let index = 0; index < contas.length; index++) {
//     this.dp1 = [];
//     for (let i = 0; i < movimentos.length; i++) {
//         if (movimentos[i].account.id == contas[index].id) {
//             dp1.push({ x: + new Date(movimentos[i].date), y: movimentos[i].balance })
//         } continue
//     }
//     data1 = {
//         name: '"' + contas[index].bank + '"',
//         type: "spline",
//         yValueFormatString: "#0.## €",
//         showInLegend: true,
//         dataPoints: dp1
//     }
//     dataGraficoMovimentos.push(data1);
// }


// function fazListaMovimentos() {
//     creditos = [];
//     debitos = [];
//     console.log(new Date(856648800000))
//     console.log(movimentos)
//     for (let index = 0; index < 10; index++) {
//         this.hora = movimentos[index].date;
//         this.conta = movimentos[index].account.id;
//         this.tipo1 = movimentos[index].description;
//         if (movimentos[index].debit == ! null) {
//             this.montante = movimentos.debit;
//             deb = new debito(tipo1, montante);
//             debitos.push(deb);
//         } else {
//             this.montante = movimentos[index].credit;
//             cred = new credito(tipo1, montante);
//             creditos.push(cred);
//         };
//         this.saldox = movimentos[index].balance;
//         this.descricao = movimentos[index].description;
//         console.log(montante)
//         $("#listaMovimentos").append('<tr ><td>' + hora + '</td><td>' + conta + '</td><td>' + descricao + '</td><td>' + montante + '</td><td>' + saldox + '</td></tr> <hr>')
//     }
// }

function getInfo(response) {

    clientea = new cliente(response.client.id, response.client.email,
        response.client.name, response.client.password, response.client.tel,
        response.espechial, response.expire, response.token);
    fazCliente(clientea);
}
function fazCliente(clientea) {
    document.getElementById("cnome").innerHTML = clientea.name;
    // document.getElementById("cemail").innerHTML = "✉ " + clientea.email;
    // document.getElementById("ctel").innerHTML = "&#128222; " + clientea.tel;
}
function getInfoSaldoPorBanco(response) {
    var token = response.token;
    console.log("token : " + token)
    var expire = response.expire;
    console.log("expire : " + expire)
    var id = response.client.id;
    console.log("id : " + id)
    $.ajax({
        type: "GET",
        // xhrFields: {
        //     withCredentials: true
        //  },
        crossDomain: true,
        url: `http://localhost:8080/ATM/api/account/getbanksbalancefromclient/${id}/${token}/${expire}`,
        // data: JSON.stringify(data),
        credentials: 'same-origin',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (rawSaldoPorBanco) {
            console.log(rawSaldoPorBanco);
            console.log('sucesso');
            fazDataSaldoPorBanco(rawSaldoPorBanco)
        },
        error: function (err) {
            console.log(err);
            console.log('ERRO');
        },

    });

}

function fazDataSaldoPorBanco(rawSaldoPorBanco) {
    console.log("fazDataSaldoPorBanco : inicio")
    this.rawSaldoPorBanco = rawSaldoPorBanco;
    this.array = Object.keys(rawSaldoPorBanco)
    for (let index = 0; index < array.length; index++) {
        this.labela = array[index];
        this.ya = rawSaldoPorBanco[labela];

        saldo += ya;

        this.string = { y: ya, name: labela, }
        dpSaldoPorBanco.push(string)
      
    }
    document.getElementById("csaldo").innerHTML = saldo + "€";
    console.log("fazDataSaldoPorBanco : fim")
    graficoSaldoPorBanco()
}

function graficoSaldoPorBanco() {
    var chart = new CanvasJS.Chart("chartContainer", {
        backgroundColor: "transparent",
        animationEnabled: true,
        zoomEnabled: true,
        height: 150,
        padding: 1,
        zoomType: "xy",
        colorSet: "greenShades",
        title: {
            fontColor: "#08234f",

            text: "Total Balance " + saldo + "  €",
            horizontalAlign: "left",
            verticalAlign: "top",
        },
        legend: {
            fontColor: "#08234f",
            verticalAlign: "center",
            horizontalAlign: "left",
            itemWrap: false
        },
        data: [{
            showInLegend: true,
            // indexLabelPlacement: "outside",
            horizontalAlign: "right",
            type: "pie",
            startAngle: 60,
            innerRadius: 60,
            legendFontSize: 15,
            // indexLabel: "{name} - #percent%",
            // toolTipContent: "<b>{name}:</b> {y}€",
            dataPoints:
                dpSaldoPorBanco
        }]
    });
    chart.render();
}

function getInfoCreditsByClient(response) {


    var token = response.token;
    console.log("token : " + token)
    var expire = response.expire;
    console.log("expire : " + expire)
    var id = response.client.id;
    console.log("id : " + id)
    var espechial = response.espechial;
    console.log("espechial : " + espechial)
    $.ajax({
        type: "GET",
        // xhrFields: {
        //     withCredentials: true
        //  },
        crossDomain: true,
        url: `http://localhost:8080/ATM/api/movement/getcreditsbydescriptionfromclient/${id}/${logInManager}`,
        // data: JSON.stringify(data),
        credentials: 'same-origin',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (rawCreditsByClient) {
            console.log(rawCreditsByClient);
            console.log('sucesso');
            fazDataCreditsByClient(rawCreditsByClient)
        },
        error: function (err) {
            console.log(err);
            console.log('ERRO');
        },

    });
}

function fazDataCreditsByClient(rawCreditsByClient) {
    console.log(rawCreditsByClient)
    console.log("fazDataCreditsByClient : inicio")
    this.rawCreditsByClient = rawCreditsByClient;
    this.array = Object.keys(rawCreditsByClient)
    for (let index = 0; index < array.length; index++) {
        this.labela = array[index];
        this.ya = rawCreditsByClient[labela];
        this.string = { y: ya, name: labela, }
        dpCreditsByClient.push(string)
    }

    console.log("fazDataCreditsByClient : fim")
    graficoCreditsByClient()
}
function graficoCreditsByClient() {
    var chart1 = new CanvasJS.Chart("chartContainer1",
        {
            backgroundColor: "transparent",
            colorSet: "greenShades",
            animationEnabled: true,
            zoomEnabled: true,
            height: 150,
            padding: 1,
            zoomType: "xy",
            title: {
                fontColor: "#08234f",

                text: "Credit by Type",
                horizontalAlign: "left",
                verticalAlign: "top",
            },
            legend: {
                fontColor: "#08234f",

                verticalAlign: "center",
                horizontalAlign: "left",
                itemWrap: false
            },
            data: [{
                showInLegend: true,
                // indexLabelPlacement: "outside",
                horizontalAlign: "right",
                type: "pie",
                startAngle: 60,
                innerRadius: 60,
                legendFontSize: 15,
                // indexLabel: "{name} - #percent%",
                // toolTipContent: "<b>{name}:</b> {y}€",
                dataPoints: dpCreditsByClient

            }]
        });

    chart1.render();
}


function getInfoDebitsByClient(response) {

    var token = response.token;
    console.log("token : " + token)
    var expire = response.expire;
    console.log("expire : " + expire)
    var id = response.client.id;
    console.log("id : " + id)
    var espechial = response.espechial;
    console.log("espechial : " + espechial)
    $.ajax({
        type: "GET",
        // xhrFields: {
        //     withCredentials: true
        //  },
        crossDomain: true,
        url: `http://localhost:8080/ATM/api/movement/getdebitsbydescriptionfromclient/${id}/${logInManager}`,
        // data: JSON.stringify(data),
        credentials: 'same-origin',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (rawDebitsByClient) {
            console.log(rawDebitsByClient);
            console.log('sucesso');
            fazDataDebitsByClient(rawDebitsByClient)
        },
        error: function (err) {
            console.log(err);
            console.log('ERRO');
        },

    });
}
function fazDataDebitsByClient(rawDebitsByClient) {
    console.log(rawDebitsByClient)
    console.log("fazDataDebitsByClient : inicio")
    this.rawDebitsByClient = rawDebitsByClient;
    this.array = Object.keys(rawDebitsByClient)
    for (let index = 0; index < array.length; index++) {
        this.labela = array[index];
        this.ya = rawDebitsByClient[labela];
        this.string = { y: ya, name: labela, }
        dpDebitsByClient.push(string)
    }
    console.log("fazDataDebitsByClient : fim")
    graficoDebitsByClient()
}
function graficoDebitsByClient() {
    var chart3 = new CanvasJS.Chart("chartContainer3",
        {colorSet: "greenShades",
            backgroundColor: "transparent",
            animationEnabled: true,
            zoomEnabled: true,
            height: 150,
            padding: 1,
            zoomType: "xy",
            title: {
                fontColor: "#08234f",
                text: "Debit by Type",
                horizontalAlign: "left",
                verticalAlign: "top",
            },
            legend: {
                fontColor: "#08234f",
                verticalAlign: "center",
                horizontalAlign: "left",
                itemWrap: false
            },
            data: [{
                showInLegend: true,
                // indexLabelPlacement: "outside",
                horizontalAlign: "right",
                type: "pie",
                // radius: "90%",
                startAngle: 60,
                innerRadius: 25,
                legendFontSize: 15,
                // indexLabel: "{name} - #percent%",
                // toolTipContent: "<b>{name}:</b> {y}€",
                dataPoints: dpDebitsByClient
            }]
        });
    chart3.render();
}


function getAllMovementsFromClient(response) {

    var token = response.token;
    console.log("token : " + token)
    var expire = response.expire;
    console.log("expire : " + expire)
    var id = response.client.id;
    console.log("id : " + id)
    var espechial = response.espechial;
    console.log("espechial : " + espechial)
    $.ajax({
        type: "GET",
        // xhrFields: {
        //     withCredentials: true
        //  },
        crossDomain: true,
        url: `http://localhost:8080/ATM/api/movement/findallmovementsfromclient/${id}/${logInManager}`,
        // data: JSON.stringify(data),
        credentials: 'same-origin',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (movementsFromClient) {
            console.log("movementsFromClient");
            console.log(movementsFromClient);
            fazDataMovementsFromClient(movementsFromClient);

            console.log('sucesso');
        },
        error: function (err) {
            console.log(err);
            console.log('ERRO');
        },

    });
}
function fazDataMovementsFromClient(movementsFromClient) {
    console.log(movementsFromClient)
    console.log("fazDataMovementsFromClient : inicio")
    dataGraficoMovimentos = [];

    for (let i = 0; i < movementsFromClient.length; i++) {
        this.dp1 = [];
        dp1.push({ x: + new Date(movementsFromClient[i].date).getDate(), y: movementsFromClient[i].balance })
        console.log("date")
        this.segundo = new Date(movementsFromClient[i].date).getSeconds();
        this.minute = new Date(movementsFromClient[i].date).getMinutes();
        this.hora = new Date(movementsFromClient[i].date).getHours();
        this.dia = new Date(movementsFromClient[i].date).getDate();
        this.mes = new Date(movementsFromClient[i].date).getMonth();
        // this.date = segundo + ":" + minute + ":" + hora + " - " + dia + "/" + mes
        this.date = dia + "T" + hora + ":" + minute + ":" + segundo
        console.log(date);
        console.log(new Date(date))
        data1 = {
            name: '"' + movementsFromClient[i].bank + " : " + movementsFromClient[i].accountid + '"',
            type: "spline",
            yValueFormatString: "#0.## €",
            showInLegend: true,
            dataPoints: dp1
        }
        dataGraficoMovimentos.push(data1);
    }
    console.log("fazDataMovementsFromClient : fim");
    graficoMovementsFromClient(dataGraficoMovimentos);
}
function graficoMovementsFromClient(dataGraficoMovimentos) {
    var chart2 = new CanvasJS.Chart("chartContainer2", {
        animationEnabled: true,
        backgroundColor: "transparent",
        height: 150,
        title: {
            fontColor: "#08234f",
            text: "Balance",
            horizontalAlign: "left",
            verticalAlign: "top",
        },
        axisX: {
            valueFormatString: "DD MMM"
        },
        legend: {
            fontColor: "#08234f",
            // verticalAlign: "center",
            // horizontalAlign: "bottom",
            itemWrap: false
            // itemclick: toggleDataSeries
        },
        data:
            dataGraficoMovimentos
    });
    chart2.render();
}

//     this.dp1 = [];
//     for (let i = 0; i < movimentos.length; i++) {
//         if (movimentos[i].account.id == contas[index].id) {
//             dp1.push({ x: + new Date(movimentos[i].date), y: movimentos[i].balance })
//         } continue
//     }
//     data1 = {
//         name: '"' + contas[index].bank + '"',
//         type: "spline",
//         yValueFormatString: "#0.## €",
//         showInLegend: true,
//         dataPoints: dp1
//     }
//     dataGraficoMovimentos.push(data1);
// }

// graficoCreditsByClient()




// }

// window.onload = function () {
//     console.log("id " + id)
//     contas = []
//     this.id = id
//     $.ajax({
//         type: "GET",
//         crossDomain: true,
//         url: `http://localhost:8080/ATM/api/client/getallaccountsfromclient/${id}`,
//         credentials: 'same-origin',
//         success: function (contasCliente) {
//             console.log("response : " + contasCliente);
//             console.log(contasCliente);
//             console.log('sucesso');
//             fazcontas(contasCliente);
//         },
//         error: function (err) {
//             console.log(err);
//             console.log('ERRO');
//         },
//         // headers: {
//         //     'Accept': 'application/json',
//         //     'Content-Type': 'application/json',

//     });
// }
// function fazcontas(contasCliente) {
//     for (let index = 0; index < contasCliente.length; index++) {
//         this.id = contasCliente[index].id;
//         this.balance = contasCliente[index].balance;
//         this.bank= contasCliente[index].bank;
//         this.conta = new account(id, balance,bank);
//         contas.push(conta);
//         console.log(contas)
//     }
//     console.log("contas : " + contas)




/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "300px";

    document.getElementById("main-container").style.marginLeft = "250px";
}
/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main-container").style.marginLeft = "0";
}

