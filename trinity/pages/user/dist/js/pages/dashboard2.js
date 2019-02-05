var logInManager = "1580699625/1548768925824/-1179379935";
var tokenExpire = "1580699625/1548768925824"


const urlParams = new URLSearchParams(window.location.search);
const myParam = JSON.parse(urlParams.get('param'));
executeScriptClient(myParam)
console.log(myParam)
function logOUT() {
  $.ajax({
    type: "POST",
    url: `http://localhost:8080/ATM/api/login/logout/${logInManager}`,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'

    },
    data: JSON.stringify(" "),
    success: function (response) {
      console.log('quickLogIn');
      console.log(response);



    },
    error: function (err) {
      console.log(err);
      console.log('ERRO');

    }

  });
  window.location.href = './../../index.html'
}
class trsnf {
  constructor(account1Id, account2Id, volume) {
    this.account1Id = account1Id;
    this.account2Id = account2Id;
    this.volume = volume;
  }
}
function transferencia() {
  var account1Id = document.getElementById("contaSend").value
  var account2Id = document.getElementById("contaReceive").value
  var volume = document.getElementById("blingbling").value
  var trasns = new trsnf(account1Id, account2Id, volume)
  console.log(trasns)
  $.ajax({
    type: "POST",

    crossDomain: true,
    url: `http://localhost:8080/ATM/api/account/transfer/${tokenExpire}`,
    data: JSON.stringify(trasns),
    credentials: 'same-origin',

    success: function (response) {
      console.log(response.client.espechial);
      console.log('sucesso');
    },
    error: function (err) {
      console.log(err);
      console.log('ERRO');
    },
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });
  window.location.reload();

}
function executeScriptClient(response) {
  if (response.espechial == 1) {
    logInManager = response.token + "/" + response.expire + "/" + response.espechial
  } else {
    logInManager = response.token + "/" + response.expire + "/" + 0
  }

  tokenExpire = response.token + "/" + response.expire
  id = response.client.id;


  $(function () {
    'use strict';
    var a = []
    var id = 8;
    var PieData = [];
    var PieData3 = [];
    var PieData2 = [];
    var dataGraficoMovimentos = [];
    var cenas = [];
    var final=[];
    var legenda = [];
    var colorHighlight = ['#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de',];
    var corLegenda = ['text-red', 'text-green', 'text-yellow', 'text-aqua', 'text-light-blue', 'text-gray'];
    var saldo = 9999;




    executeScript();
    function executeScript() {
      getInfoClient(id, tokenExpire)
      getInfoSaldoPorBanco(id, tokenExpire);
      getInfoDebitsByClient(id, logInManager);
      getAllMovementsFromClient(id, logInManager);
      getInfoCreeditsByClient(id, logInManager)
    }

    function getInfoClient(id, tokenExpire) {
      console.log('getInfoClient');
      console.log(id);
      console.log(tokenExpire);



      $.ajax({
        type: "GET",
        crossDomain: true,
        url: `http://localhost:8080/ATM/api/client/${id}/${tokenExpire}`,
        credentials: 'same-origin',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        success: function (infoCient) {
          console.log(infoCient);
          console.log('sucesso');
          $(".nome").html(infoCient.name)

        },
        error: function (err) {
          console.log(err);
          console.log('ERRO');
        },

      });



    }
    function getInfoSaldoPorBanco(id, tokenExpire) {

      // var token = response.token;
      // console.log("token : " + token)
      // var expire = response.expire;
      // console.log("expire : " + expire)
      // var id = response.client.id;
      // console.log("id : " + id)
      $.ajax({
        type: "GET",

        crossDomain: true,
        url: `http://localhost:8080/ATM/api/account/getbanksbalancefromclient/${id}/${tokenExpire}`,
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
      var rawSaldoPorBanco = rawSaldoPorBanco;
      var array = Object.keys(rawSaldoPorBanco)
      for (let index = 0; index < array.length; index++) {

        var labela = array[index];

        var ya = rawSaldoPorBanco[labela];
        var colHIg = colorHighlight[index];

        saldo += ya;
        var corL = corLegenda[index]
        var string = {
          value: ya,
          color: colHIg,
          highlight: colHIg,
          label: labela
        }
        $(".saldoTotal").html('Saldo Total ' + saldo + ' €')

        PieData.push(string)
        console.log(PieData)
        $("#graficoBanco").append(`<li><i class="fa fa-circle-o ` + corL + `"></i>` + labela + `</li>`)

      }
      // document.getElementById("csaldo").innerHTML = saldo + "€";
      // console.log("fazDataSaldoPorBanco : fim")
      // graficoSaldoPorBanco()
      pieChart1.Doughnut(PieData, pieOptions);
      // pieChart2.Doughnut(PieData, pieOptions);
    }
    function getInfoDebitsByClient(id, logInManager) {
      PieData3 = [];

      // var token = response.token;
      // console.log("token : " + token)
      // var expire = response.expire;
      // console.log("expire : " + expire)
      // var id = response.client.id;
      // console.log("id : " + id)
      // var espechial = response.espechial;
      // console.log("espechial : " + espechial)
      $.ajax({
        type: "GET",

        crossDomain: true,
        url: `http://localhost:8080/ATM/api/movement/getdebitsbytypefromclient/${id}/${logInManager}`,
        credentials: 'same-origin',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        success: function (rawDebitsByClient) {
          console.log(rawDebitsByClient);
          console.log('sucesso rawDebitsByClient');
          fazDataDebitsByClient(rawDebitsByClient)
        },
        error: function (err) {
          console.log(err);
          console.log('ERRO');
        },

      });
    }
    function getInfoCreeditsByClient(id, logInManager) {
      PieData2 = [];


      $.ajax({
        type: "GET",

        crossDomain: true,
        url: `http://localhost:8080/ATM/api/movement/getcreditsbytypefromclient/${id}/${logInManager}`,
        credentials: 'same-origin',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        success: function (rawDCreditsByClient) {
          console.log(rawDCreditsByClient);
          console.log('sucesso rawDebitsByClient');
          fazDataCreditsByClient(rawDCreditsByClient)
        },
        error: function (err) {
          console.log(err);
          console.log('ERRO');
        },

      });
    }
    function fazDataCreditsByClient(rawDCreditsByClient) {
      console.log(rawDCreditsByClient)
      console.log("fazDataCreditsByClient : inicio")
      var rawDCreditsByClient = rawDCreditsByClient;
      var array = Object.keys(rawDCreditsByClient)
      var array = Object.keys(rawDCreditsByClient)
      for (let index = 0; index < array.length; index++) {

        var labela = array[index];

        var ya = rawDCreditsByClient[labela];
        var colHIg = colorHighlight[index];

        // saldo += ya;
        var corL = corLegenda[index]
        var string = {
          value: ya,
          color: colHIg,
          highlight: colHIg,
          label: labela
        }
        PieData2.push(string)
        console.log(PieData3)
        $("#graficoBanco2").append(`<li><i class="fa fa-circle-o ` + corL + `"></i>` + labela + `</li>`)

      }
      console.log("fazDataCreditsByClient : fim")
      pieChart2.Doughnut(PieData2, pieOptions);
    }
    function fazDataDebitsByClient(rawDebitsByClient) {
      console.log(rawDebitsByClient)
      console.log("fazDataDebitsByClient : inicio")
      var rawDebitsByClient = rawDebitsByClient;
      var array = Object.keys(rawDebitsByClient)
      var array = Object.keys(rawDebitsByClient)
      for (let index = 0; index < array.length; index++) {

        var labela = array[index];

        var ya = rawDebitsByClient[labela];
        var colHIg = colorHighlight[index];

        // saldo += ya;
        var corL = corLegenda[index]
        var string = {
          value: ya,
          color: colHIg,
          highlight: colHIg,
          label: labela
        }
        PieData3.push(string)
        console.log(PieData3)
        $("#graficoBanco3").append(`<li><i class="fa fa-circle-o ` + corL + `"></i>` + labela + `</li>`)

      }
      console.log("fazDataDebitsByClient : fim")
      pieChart3.Doughnut(PieData3, pieOptions);
    }
    /* ChartJS
     * -------
     * Here we will create a few charts using ChartJS
     */

    // -----------------------
    // - MONTHLY SALES CHART -
    // -----------------------
    function getAllMovementsFromClient(response) {

      $.ajax({
        type: "GET",
        crossDomain: true,
        url: `http://localhost:8080/ATM/api/movement/findallmovementsfromclient/${id}/${logInManager}`,
        credentials: 'same-origin',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        success: function (movementsFromClient) {
          console.log("movementsFromClient");
          console.log(movementsFromClient);
          // fazDataMovementsFromClient(movementsFromClient);
          fazTabelaMovements(movementsFromClient);

          console.log('sucesso');
        },
        error: function (err) {
          console.log(err);
          console.log('ERRO');
        },

      });
    }
    function fazTabelaMovements(movementsFromClient) {
      // movementsFromClient
      movementsFromClient.sort(function (a, b) {
        return a.date - b.date;
      });
      fazDataMovementsFromClient(movementsFromClient)
      for (let index = 0; index < movementsFromClient.length; index++) {

        var bank = movementsFromClient[index].bank
        var balance = movementsFromClient[index].balance
        var accountId = movementsFromClient[index].accountId
        // var date = movementsFromClient[index].date
        var type = movementsFromClient[index].type
        var segundo = new Date(movementsFromClient[index].date).getSeconds();
        var minute = new Date(movementsFromClient[index].date).getMinutes();
        var hora = new Date(movementsFromClient[index].date).getHours();
        var dia = new Date(movementsFromClient[index].date).getDate();
        var mes = new Date(movementsFromClient[index].date).getMonth() + 1;
        var ano = new Date(movementsFromClient[index].date).getFullYear();

        // this.date = segundo + ":" + minute + ":" + hora + " - " + dia + "/" + mes
        var date = dia + "/" + mes + "/" + ano + " " + hora + ":" + minute + ":" + segundo
        if (movementsFromClient[index].credit == 0) {
          var money = `<p style="border-radius:3px; width:100%;" class="label-danger">- ` + movementsFromClient[index].debit + ` €</p>`
        } else { var money = `<p style="border-radius:3px; width:100%;" class="label-success">+ ` + movementsFromClient[index].credit + ` €</p>` }

        $('#tabela').prepend(

          `<tr>
                    <td><a href="pages/examples/invoice.html">`+ bank + ` ` + accountId + `</a></td>
                    <td>`+ type + `</td>
                    <td>`+ money + `</td>
                    <td> `+ date + ` </td>
                  </tr>`
        )

      }

    }

    function fazDataMovementsFromClient(movementsFromClient) {
      console.log(movementsFromClient)
      console.log("fazDataMovementsFromClient : inicio")
      dataGraficoMovimentos = [];
      var saldos = {};
      var saldosArr = [];

      

      for (let i = 0; i < movementsFromClient.length; i++) {
        cenas.push(movementsFromClient[i].balance)
        var segundo = new Date(movementsFromClient[i].date).getSeconds();
        var minute = new Date(movementsFromClient[i].date).getMinutes();
        var hora = new Date(movementsFromClient[i].date).getHours();
        var dia = new Date(movementsFromClient[i].date).getDate();
        var mes = new Date(movementsFromClient[i].date).getMonth() + 1;
        var ano = new Date(movementsFromClient[i].date).getFullYear();
        var date = dia + "/" + mes + "/" + ano + " " + hora + ":" + minute + ":" + segundo
        legenda.push(date)
        a.push(" ")
      }


      console.log(cenas)
      console.log('legenda')
      console.log(legenda)
      for (let i = 0; i < movementsFromClient.length; i++) {
        const element = movementsFromClient[i];
        if (!saldos[element.bank]) {
          saldos[element.bank] = element.balance;
        }
        else {
          saldos[element.bank] = saldos[element.bank] + element.credit - element.debit;

        }
        saldosArr.push(JSON.parse(JSON.stringify(saldos)));
      }
      console.log(saldosArr);

      final=saldosArr.map((el) => {
        let keys = Object.keys(el);
        let soma = 0;
        for (let i = 0; i < keys.length; i++) {
          const element = keys[i];
          soma += el[element];
        }
        return soma
      })
      console.log(final);
      var salesChartData = {
        labels: a,
        datasets: [
          {
            label               : 'Digital Goods',
              fillColor           : 'rgba(60,141,188,0.9)',
              strokeColor         : 'rgba(60,141,188,0.8)',
              pointColor          : '#3b8bba',
              pointStrokeColor    : 'rgba(60,141,188,1)',
              pointHighlightFill  : '#fff',
              pointHighlightStroke: 'rgba(60,141,188,1)',
            pointHighlightStroke: 'rgba(60,141,188,1)',
            data: final
          },
          // {
          //   label               : 'Digital Goods',
          //   fillColor           : 'rgba(60,141,188,0.9)',
          //   strokeColor         : 'rgba(60,141,188,0.8)',
          //   pointColor          : '#3b8bba',
          //   pointStrokeColor    : 'rgba(60,141,188,1)',
          //   pointHighlightFill  : '#fff',
          //   pointHighlightStroke: 'rgba(60,141,188,1)',
          //   data                : [28, 48, 40, 19, 86, 27, 90]
          // }
        ]
      };
      salesChart.Line(salesChartData, salesChartOptions);

    }

    
    var salesChartCanvas = $('#salesChart').get(0).getContext('2d');
    var salesChart = new Chart(salesChartCanvas);





    var salesChartOptions = {
      // Boolean - If we should show the scale at all
      showScale: true,
      // Boolean - Whether grid lines are shown across the chart
      scaleShowGridLines: false,
      // String - Colour of the grid lines
      scaleGridLineColor: 'rgba(0,0,0,.05)',
      // Number - Width of the grid lines
      scaleGridLineWidth: 1,
      // Boolean - Whether to show horizontal lines (except X axis)
      scaleShowHorizontalLines: true,
      // Boolean - Whether to show vertical lines (except Y axis)
      scaleShowVerticalLines: true,
      // Boolean - Whether the line is curved between points
      bezierCurve: true,
      // Number - Tension of the bezier curve between points
      bezierCurveTension: 0.3,
      // Boolean - Whether to show a dot for each point
      pointDot: false,
      // Number - Radius of each point dot in pixels
      pointDotRadius: 4,
      // Number - Pixel width of point dot stroke
      pointDotStrokeWidth: 1,
      // Number - amount extra to add to the radius to cater for hit detection outside the drawn point
      pointHitDetectionRadius: 20,
      // Boolean - Whether to show a stroke for datasets
      datasetStroke: true,
      // Number - Pixel width of dataset stroke
      datasetStrokeWidth: 2,
      // Boolean - Whether to fill the dataset with a color
      datasetFill: true,
      // String - A legend template
      legendTemplate: '<ul class=\'<%=name.toLowerCase()%>-legend\'><% for (var i=0; i<datasets.length; i++){%><li><span style=\'background-color:<%=datasets[i].lineColor%>\'></span><%=datasets[i].label%></li><%}%></ul>',
      // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
      maintainAspectRatio: true,
      // Boolean - whether to make the chart responsive to window resizing
      responsive: true
    };

    // Create the line chart
    // salesChart.Line(salesChartData, salesChartOptions);

    // ---------------------------
    // - END MONTHLY SALES CHART -
    // ---------------------------

    // -------------
    // - PIE CHART -
    // -------------
    // Get context with jQuery - using jQuery's .get() method.
    var pieChartCanvas1 = $('#pieChart1').get(0).getContext('2d');
    var pieChartCanvas2 = $('#pieChart2').get(0).getContext('2d');
    var pieChartCanvas3 = $('#pieChart3').get(0).getContext('2d');

    var pieChart1 = new Chart(pieChartCanvas1);
    var pieChart2 = new Chart(pieChartCanvas2);
    var pieChart3 = new Chart(pieChartCanvas3);
    // var PieData        = [
    //   {
    //     value    : 700,
    //     color    : '#f56954',
    //     highlight: '#f56954',
    //     label    : 'Chrome'
    //   },
    //   {
    //     value    : 500,
    //     color    : '#00a65a',
    //     highlight: '#00a65a',
    //     label    : 'IE'
    //   },
    //   {
    //     value    : 400,
    //     color    : '#f39c12',
    //     highlight: '#f39c12',
    //     label    : 'FireFox'
    //   },
    //   {
    //     value    : 600,
    //     color    : '#00c0ef',
    //     highlight: '#00c0ef',
    //     label    : 'Safari'
    //   },
    //   {
    //     value    : 300,
    //     color    : '#3c8dbc',
    //     highlight: '#3c8dbc',
    //     label    : 'Opera'
    //   },
    //   {
    //     value    : 100,
    //     color    : '#d2d6de',
    //     highlight: '#d2d6de',
    //     label    : 'Navigator'
    //   }
    // ];
    var pieOptions = {
      // Boolean - Whether we should show a stroke on each segment
      segmentShowStroke: true,
      // String - The colour of each segment stroke
      segmentStrokeColor: '#fff',
      // Number - The width of each segment stroke
      segmentStrokeWidth: 1,
      // Number - The percentage of the chart that we cut out of the middle
      percentageInnerCutout: 50, // This is 0 for Pie charts
      // Number - Amount of animation steps
      animationSteps: 100,
      // String - Animation easing effect
      animationEasing: 'easeOutBounce',
      // Boolean - Whether we animate the rotation of the Doughnut
      animateRotate: true,
      // Boolean - Whether we animate scaling the Doughnut from the centre
      animateScale: false,
      // Boolean - whether to make the chart responsive to window resizing
      responsive: true,
      // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
      maintainAspectRatio: false,
      // String - A legend template
      // legendTemplate: '<ul class=\'<%=name.toLowerCase()%>-legend\'><% for (var i=0; i<segments.length; i++){%><li><span style=\'background-color:<%=segments[i].fillColor%>\'></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>',
      // String - A tooltip template
      tooltipTemplate: '<%=value %> <%=label%> users'
    };
    // Create pie or douhnut chart
    // You can switch between pie and douhnut using the method below.
    // pieChart1.Doughnut(PieData, pieOptions);
    // pieChart2.Doughnut(PieData, pieOptions);
    // pieChart3.Doughnut(PieData, pieOptions);
    // -----------------
    // - END PIE CHART -
    // -----------------

    /* jVector Maps
     * ------------
     * Create a world map with markers
     */
    $('#world-map-markers').vectorMap({
      map: 'world_mill_en',
      normalizeFunction: 'polynomial',
      hoverOpacity: 0.7,
      hoverColor: false,
      backgroundColor: 'transparent',
      regionStyle: {
        initial: {
          fill: 'rgba(210, 214, 222, 1)',
          'fill-opacity': 1,
          stroke: 'none',
          'stroke-width': 0,
          'stroke-opacity': 1
        },
        hover: {
          'fill-opacity': 0.7,
          cursor: 'pointer'
        },
        selected: {
          fill: 'yellow'
        },
        selectedHover: {}
      },
      markerStyle: {
        initial: {
          fill: '#00a65a',
          stroke: '#111'
        }
      },
      markers: [
        { latLng: [41.90, 12.45], name: 'Vatican City' },
        { latLng: [43.73, 7.41], name: 'Monaco' },
        { latLng: [-0.52, 166.93], name: 'Nauru' },
        { latLng: [-8.51, 179.21], name: 'Tuvalu' },
        { latLng: [43.93, 12.46], name: 'San Marino' },
        { latLng: [47.14, 9.52], name: 'Liechtenstein' },
        { latLng: [7.11, 171.06], name: 'Marshall Islands' },
        { latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis' },
        { latLng: [3.2, 73.22], name: 'Maldives' },
        { latLng: [35.88, 14.5], name: 'Malta' },
        { latLng: [12.05, -61.75], name: 'Grenada' },
        { latLng: [13.16, -61.23], name: 'Saint Vincent and the Grenadines' },
        { latLng: [13.16, -59.55], name: 'Barbados' },
        { latLng: [17.11, -61.85], name: 'Antigua and Barbuda' },
        { latLng: [-4.61, 55.45], name: 'Seychelles' },
        { latLng: [7.35, 134.46], name: 'Palau' },
        { latLng: [42.5, 1.51], name: 'Andorra' },
        { latLng: [14.01, -60.98], name: 'Saint Lucia' },
        { latLng: [6.91, 158.18], name: 'Federated States of Micronesia' },
        { latLng: [1.3, 103.8], name: 'Singapore' },
        { latLng: [1.46, 173.03], name: 'Kiribati' },
        { latLng: [-21.13, -175.2], name: 'Tonga' },
        { latLng: [15.3, -61.38], name: 'Dominica' },
        { latLng: [-20.2, 57.5], name: 'Mauritius' },
        { latLng: [26.02, 50.55], name: 'Bahrain' },
        { latLng: [0.33, 6.73], name: 'São Tomé and Príncipe' }
      ]
    });

    /* SPARKLINE CHARTS
     * ----------------
     * Create a inline charts with spark line
     */

    // -----------------
    // - SPARKLINE BAR -
    // -----------------
    $('.sparkbar').each(function () {
      var $this = $(this);
      $this.sparkline('html', {
        type: 'bar',
        height: $this.data('height') ? $this.data('height') : '30',
        barColor: $this.data('color')
      });
    });

    // -----------------
    // - SPARKLINE PIE -
    // -----------------
    $('.sparkpie').each(function () {
      var $this = $(this);
      $this.sparkline('html', {
        type: 'pie',
        height: $this.data('height') ? $this.data('height') : '90',
        sliceColors: $this.data('color')
      });
    });

    // ------------------
    // - SPARKLINE LINE -
    // ------------------
    $('.sparkline').each(function () {
      var $this = $(this);
      $this.sparkline('html', {
        type: 'line',
        height: $this.data('height') ? $this.data('height') : '90',
        width: '100%',
        lineColor: $this.data('linecolor'),
        fillColor: $this.data('fillcolor'),
        spotColor: $this.data('spotcolor')
      });
    });
  });
}