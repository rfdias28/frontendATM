
var id = 3
var creditos = [];
var debitos = [];




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

executeScriptMenu()
var saldo = 0;
function executeScriptMenu(response, id) {
    executeScriptMovimentos();


    fazCliente(clientea);

    graficos();
    function fazCliente(clientea) {
        // document.getElementById("divnome").innerHTML = "&#128100 Olá " + clientea.name;

        document.getElementById("cnome").innerHTML =
            // "&#128100 " +
            clientea.name;
        // document.getElementById("cemail").innerHTML = "✉ " + clientea.email;
        // document.getElementById("ctel").innerHTML = "&#128222; " + clientea.tel;
        document.getElementById("csaldo").innerHTML = "Account Balance " + saldo + "€";


    }
    function fazListaMovimentos() {
        creditos = [];
        debitos = [];
        console.log(new Date(856648800000))
        console.log(movimentos)
        for (let index = 0; index < 10; index++) {
            this.hora = movimentos[index].date;
            this.conta = movimentos[index].account.id;
            this.tipo1 = movimentos[index].description;
            if (movimentos[index].debit == ! null) {
                this.montante = movimentos.debit;
                deb = new debito(tipo1, montante);
                debitos.push(deb);
            } else {
                this.montante = movimentos[index].credit;
                cred = new credito(tipo1, montante);
                creditos.push(cred);
            };
            this.saldox = movimentos[index].balance;
            this.descricao = movimentos[index].description;
            console.log(montante)
            $("#listaMovimentos").append('<tr ><td>' + hora + '</td><td>' + conta + '</td><td>' + descricao + '</td><td>' + montante + '</td><td>' + saldox + '</td></tr> <hr>')
        }
    }




    function fazGraficoMovimentos() {
        dataGraficoMovimentos = [];
        for (let index = 0; index < contas.length; index++) {

            this.dp1 = [];
            for (let i = 0; i < movimentos.length; i++) {
                if (movimentos[i].account.id == contas[index].id) {
                    dp1.push({ x: + new Date(movimentos[i].date), y: movimentos[i].balance })
                } continue

            }
            data1 = {
                name: '"' + contas[index].bank + '"',
                type: "spline",
                yValueFormatString: "#0.## €",
                showInLegend: true,
                dataPoints: dp1
            }
            dataGraficoMovimentos.push(data1);
        }
    }


    var dataGraficoMovimentos = [];
    // _______________graficos______________________
    function graficos(params) {

        CanvasJS.addColorSet("greenShades",
            [//colorSet Array

                "#2F4F4F",
                "#008080",
                "#2E8B57",
                "#3C3711",
                "#90EE90"
            ]);

        fazListaMovimentos()
        fazGraficoMovimentos()
        var dp = [];
        var dpdebitos = [];
        fazGrafico1()


        function fazGrafico1() {
            for (let index = 0; index < debitos.length; index++) {
                this.ya = contas[index].balance;
                this.labela = contas[index].bank;
                saldo += ya;
                this.string = { y: ya, name: labela, }
                dpdebitos.push(string)
                console.log(dpdebitos)

            } for (let index = 0; index < contas.length; index++) {
                this.ya = contas[index].balance;
                this.labela = contas[index].bank;
                saldo += ya;
                this.string = { y: ya, name: labela, }
                dp.push(string)
                console.log(dp)
            }
            grafico1();
        }

        function grafico1() {
            var chart = new CanvasJS.Chart("chartContainer", {
                backgroundColor: "transparent",
                animationEnabled: true,
                zoomEnabled: true,
                height: 150,
                padding: 1,
                zoomType: "xy",
                colorSet:"greenShades",
                title: {
                    fontColor: "#08234f",

                    text: "Saldo Total  " + saldo + "  €",
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
                        dp
                }]
            });
            chart.render();
        }

        var chart1 = new CanvasJS.Chart("chartContainer1",
            {
                backgroundColor: "transparent",
                animationEnabled: true,
                zoomEnabled: true,
                height: 150,
                padding: 1,
                zoomType: "xy",
                title: {
                    fontColor: "#08234f",

                    text: "Débitos por Tipo",
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
                    dataPoints: dp

                }]
            });

        chart1.render();
        var chart3 = new CanvasJS.Chart("chartContainer3",
            {
                backgroundColor: "transparent",
                animationEnabled: true,
                zoomEnabled: true,
                height: 150,
                padding: 1,
                zoomType: "xy",
                title: {
                    fontColor: "#08234f",
                    text: "Créditos por Tipo",
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
                    radius: "90%",
                    startAngle: 60,
                    innerRadius: 25,
                    legendFontSize: 15,
                    // indexLabel: "{name} - #percent%",
                    // toolTipContent: "<b>{name}:</b> {y}€",
                    dataPoints: dp

                }]
            });

        chart3.render();
        // ----grafico que dá o saldo a cada dia do mês----
        var chart2 = new CanvasJS.Chart("chartContainer2", {
            animationEnabled: true,
            backgroundColor: "transparent",
            height: 150,
            title: {
                fontColor: "#08234f",

                text: "Saldo",
                horizontalAlign: "left",
                verticalAlign: "top",
            },
            axisX: {
                valueFormatString: "DD MMM"
            },
            // axisY: {
            //     title: "",
            //     includeZero: false,
            //     suffix: " °C"
            // },
            legend: {
                fontColor: "#08234f",

                // verticalAlign: "center",
                // horizontalAlign: "bottom",
                itemWrap: false
                // itemclick: toggleDataSeries
            },

            data:
                //  dataGraficoMovimentos,
                [{
                    name: "Myrtle Beach",
                    type: "spline",
                    yValueFormatString: "#0.## °C",
                    showInLegend: true,
                    dataPoints: [
                        { x: new Date(2017, 6, 24), y: 31 },
                        { x: new Date(2017, 6, 25), y: 31 },
                        { x: new Date(2017, 6, 26), y: 29 },
                        { x: new Date(2017, 6, 27), y: 29 },
                        { x: new Date(2017, 6, 28), y: 31 },
                        { x: new Date(2017, 6, 29), y: 30 },
                        { x: new Date(2017, 6, 30), y: 29 }
                    ]
                },]
        });
        chart2.render();

        fazCliente(clientea);



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
    }


}
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

