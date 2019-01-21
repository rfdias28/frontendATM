// -------------------variaveis globais----------------------------------variaveis globais-----------------------------------------variaveis globais--------------------------------
var id = 8;
var logInManager = "1580699625/1548768925824/-1179379935";
var tokenExpire = "1580699625/1548768925824"
var clients = [];
var accounts = [];
var movements = [];

var csst = `<style>console.log('ola css');<style>table {font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
border-collapse: collapse;width: 100%;}; table td, table th {border: 1px solid #ddd;padding: 8px;}; 
table tr:nth-child(even)
{background-color: #f2f2f2;};
 table tr:hover {background-color: #ddd;}; table th {padding-top: 12px;padding-bottom: 12px;text-align: left
    ;background-color: #4CAF50;color: white;};</style></script>`
var reload = `<script>console.log('ola');function timedRefresh(timeoutPeriod) {setTimeout("location.reload(true);"
,timeoutPeriod);}window.onload = timedRefresh(7000);</script>`;
// -------------
class Client {
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
class Account {
    constructor(id, balance, bank) {
        this.id = id;
        this.balance = balance;
        this.bank = bank;

    }
}
class Movement {
    constructor(id, date, description, debit, credit, balance) {
        this.id = id;
        this.date = date;
        this.description = description;
        this.debit = debit;
        this.credit = credit;
        this.balance = balance;
    }
}
quickLogIn();
function quickLogIn() {
    var manager = {
        "email": "manager@mail.com",
        "password": "passwordsupersecreta"
    }
    $.ajax({
        type: "POST",
        crossDomain: true,

        url: `http://localhost:8080/ATM/api/login`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'

        },
        data: JSON.stringify(manager),
        success: function (response) {
            console.log('quickLogIn');
            console.log(response);
            logInManager = response.token + "/" + response.expire + "/" + response.espechial
            tokenExpire = response.token + "/" + response.expire
            executeScript();

        },
        error: function (err) {
            console.log(err);
            console.log('ERRO');

        }
    });
}
function executeScript() {
    getInfoClients();
    getInfoAccounts();
    getInfoMovements();
}
function getInfoClients() {
    clients = [];
    console.log('getInfoClients inicio')
    $.ajax({
        url: `http://localhost:8080/ATM/api/client/listentity/${logInManager}`,
        method: 'get',
        success: function (clientRaw) {
            console.log('clientRaw');
            console.log(clientRaw);
            makeArrayClients(clientRaw);
        },
        error: function (err) {
            console.log(err);
        }
    });
    console.log('getInfoClients fim')
};
function getInfoAccounts() {
    accounts = [];
    console.log('arranque1 inicio')
    $.ajax({
        url: `http://localhost:8080/ATM/api/account/listentity/${logInManager}`,

        method: 'get',
        success: function (accountsRaw) {
            console.log('accountsRaw');
            console.log(accountsRaw);
            makeArrayAccounts(accountsRaw);
        },
        error: function (err1) {
            console.log(err1);
        }
    });
    console.log('getInfoAccounts fim')
};
function getInfoMovements() {
    movements = [];
    console.log('getInfoMovements inicio')
    $.ajax({
        url: `http://localhost:8080/ATM/api/movement/listentity/${logInManager}`,

        method: 'get',
        success: function (movementsRaw) {
            console.log('movementsRaw');
            console.log(movementsRaw);
            makeArrayMovements(movementsRaw);
        },
        error: function (err1) {
            console.log(err1);
        }
    });
    console.log('getInfoMovements fim')
};
function makeArrayClients(clientRaw) {
    console.log('makeArrayClients inicio')
    for (let index = 0; index < clientRaw.length; index++) {
        this.id = clientRaw[index].id;
        this.email = clientRaw[index].email;
        this.name = clientRaw[index].name;
        this.password = clientRaw[index].password;
        this.tel = clientRaw[index].tel;
        this.espechial = clientRaw[index].espechial;
        this.expire = clientRaw[index].expire;

        this.token = clientRaw[index].token;

        var clientX = new Client(id, email, name, password, tel, espechial, expire, token)
        clients.push(clientX);
    }
    console.log(clients);
    console.log('makeArrayClients fim')
    makeTableClients();

};
function makeArrayAccounts(accountsRaw) {
    console.log('makeArrayAccounts inicio')
    for (let index = 0; index < accountsRaw.length; index++) {
        this.id = accountsRaw[index].id;
        this.balance = accountsRaw[index].balance;
        this.bank = accountsRaw[index].bank;
        var accountX = new Account(id, balance, bank);
        accounts.push(accountX);
    }
    console.log(accounts);
    console.log('makeArrayAccounts fim')
    makeTableAccounts();
};
function makeArrayMovements(movementsRaw) {
    console.log('makeArrayAccounts inicio')
    for (let index = 0; index < movementsRaw.length; index++) {
        this.id = movementsRaw[index].id;
        this.date = movementsRaw[index].date;
        this.description = movementsRaw[index].description;
        this.debit = movementsRaw[index].debit;
        this.credit = movementsRaw[index].credit;
        this.balance = movementsRaw[index].balance;
        var movementX = new Movement(id, date, description, debit, credit, balance);
        movements.push(movementX);
    }
    console.log(movements);
    console.log('makeArrayMovements fim')
    makeTableMovements();
};
function makeTableClients() {
    console.log('makeTableClients inicio')

    $("#bodyTableClients").remove();
    $("#TableClients:last-child").append('<tbody id="bodyTableClients">')
    for (let index = 0; index < clients.length; index++) {
        this.id = clients[index].id;
        this.email = clients[index].email;
        this.name = clients[index].name;
        this.password = clients[index].password;
        this.tel = clients[index].tel;
        this.espechial = clients[index].espechial;
        this.expire = clients[index].expire;

        this.token = clients[index].token;

        var drop = ' <td id="idClient' + index + '">' + '<div class="dropdown">' +
            '  <button class="btn btn-secondary dropright" type="button" id="dropdownMenuButton" data-toggle="dropdown">' +
            id +
            '  </button>' +
            '  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">' +
            '    <button  class="dropdown-item " onclick="updateClient(' +
            index +
            ',' + id +
            ',`' + email +
            '`,`' + name +
            '`,' + password +
            ',' + tel +
            ',' + espechial +
            ',' + expire +
            ',' + token +
            ')">Update Cliente</button>' +
            '  </div> </td>';

        $("#TableClients:last-child").append('<tr id="tr' + index + '">'
            + drop +

            '<td id="tdEMAIL' + index + '">' + email + '</td>' +
            '<td id="tdNAME' + index + '">' + name + '</td>' +
            '<td id="tdPASSWORD' + index + '">' + password + '</td>' +
            '<td id="tdTEL' + index + '">' + tel + '</td>' +
            '<td id="tdESPECHIAL' + index + '">' + espechial + '</td>' +
            '<td id="tdEXPIRE' + index + '">' + expire + '</td>' +
            '<td id="tdTOKEN' + index + '">' + token + '</td>' +

            '<td id="tdbtn' + index + '">' +
            '<button id="tdbtn1' + index + '" class="btn btn-danger" onclick="deleteClient(' + id + ')">&times;</button>' +
            '</td></tr>');

    }
    $("#TableClients:last-child").append('</tbody>')
    console.log('makeTableClients fim')
};
function updateClient(index, id, email, name, password, tel, espechial, expire, token) {
    var b = String(index);
    var rowID = "#tr" + b

    var emailID = "#tdEMAIL" + b
    var nameID = "#tdNAME" + b
    var passwordID = "#tdPASSWORD" + b
    var telID = "#tdTEL" + b
    var espechialID = "#tdESPECHIAL" + b
    var expireID = "#tdEXPIRE" + b
    var tokenID = "#tdTOKEN" + b

    var btnid = "#tdbtn" + b + ":last-child"
    var btnid1 = "#tdbtn1" + b
    // $(rowID).remove();
    $(emailID).replaceWith('<th><input size="4" placeholder="email" name="email" value="' + email + '" id="email1"></th>');
    $(nameID).replaceWith('<th><input size="4" placeholder="name" name="name" value="' + name + '" id="name1"></th>');
    $(passwordID).replaceWith('<th><input size="4" placeholder="password" name="password" value="' + password + '" id="password1"></th>');
    $(telID).replaceWith('<th><input size="4" placeholder="tel" name="tel" value="' + tel + '" id="tel1"></th>');
    $(espechialID).replaceWith('<th><input size="4" placeholder="espechial" name="espechial" value="' + espechial + '" id="espechial1"></th>');
    $(expireID).replaceWith('<th><input size="4" placeholder="expire" name="expire" value="' + expire + '" id="expire1"></th>');
    $(tokenID).replaceWith('<th><input size="4" placeholder="token" name="token" value="' + token + '" id="token1"></th>');

    $(btnid1).remove();
    $(btnid).append('<button id="tdbtn1' + index + '" class="btn btn-success" onclick="sendUpdateClient(' + id + ')">Update</button>');
    $(btnid).append('<button id="btncancel' + index + '" class="btn btn-warning" onclick="getInfoClients()">Cancel</button>');

}
function sendUpdateClient(id) {
    console.log('inicio sendUpdateClient');
    var id = id

    var email = document.getElementById("email1").value;
    var name = document.getElementById("name1").value;
    var password = document.getElementById("password1").value;
    var tel = document.getElementById("tel1").value;
    var espechial = document.getElementById("espechial1").value;
    var espechial = document.getElementById("expire1").value;
    var token = document.getElementById("token1").value;


    var clientUpdate = new Client(id, email, name, password, tel);

    console.log(clientUpdate);

    $.ajax({
        type: "POST",
        url: `http://localhost:8080/ATM/api/client/changeentity/${logInManager}`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(clientUpdate),
        dataType: 'application/json',
        success: function (response) {
            console.log(response);
            console.log('UPDATE sucesso');

            getInfoClients();

        },
        error: function (err) {
            console.log(err);
            console.log('ERRO');
        }

    });
    console.log('fim sendupdate');
    // setTimeout(" arranque()", 100);
}
function makeTableAccounts() {
    console.log('makeTableAccounts inicio')
    $("#bodyTableAccounts").remove();

    $("#TableAccounts:last-child").append('<tbody id="bodyTableAccounts">')
    for (let index = 0; index < accounts.length; index++) {
        this.id = accounts[index].id;
        this.balance = accounts[index].balance;
        this.bank = accounts[index].bank;


        var drop = ' <td id="idAccount' + index + '">' + '<div class="dropdown">' +
            '  <button class="btn btn-secondary dropright" type="button" id="dropdownMenuButton" data-toggle="dropdown"   >' +
            id +
            '  </button>' +
            '  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">' +
            '    <button  class="dropdown-item " onclick="updateAccount('
            + index +
            ',' + balance +
            ',`' + bank +
            '`,' + id + ')">Update Account</button>' +
            '  </div> </td>';


        $("#bodyTableAccounts:last-child").append('<tr>' +
            drop +
            '<td id="tdBALANCE' + index + '">' + balance + '</td>' +
            '<td id="tdBANK' + index + '">' + bank + '</td>' +
            '<td id="tdbtnp' + index + '"><button id="btn2-' + index + '" class="btn btn-danger" onclick="deleteAccount(' + id + ')">&times;</button></td></tr>');
    }
    $("#TableAccounts:last-child").append('</tbody>')
    console.log('makeTableAccounts fim')
};
function updateAccount(index, balance, bank, id) {
    var b = String(index);
    var rowID = "#tr" + b

    var balanceID = "#tdBALANCE" + b
    var bankID = "#tdBANK" + b

    var btnid = "#tdbtnp" + b + ":last-child"
    var btnid1 = "#btn2-" + b
    // $(rowID).remove();
    $(balanceID).replaceWith('<th><input size="4" placeholder="balance" name="balance" value="' + balance + '" id="balance1"></th>');
    $(bankID).replaceWith('<th><input size="4" placeholder="bank" name="bank" value="' + bank + '" id="bank1"></th>');

    $(btnid1).remove();
    $(btnid).append('<button id="btn2-' + index + '" class="btn btn-success" onclick="sendUpdateAccount(' + id + ')">Update</button>');
    $(btnid).append('<button id="btncancel' + index + '" class="btn btn-warning" onclick="getInfoAccounts()">Cancel</button>');

}
function sendUpdateAccount(id) {
    console.log('sendUpdateAccount inicio')


    var balance = document.getElementById("balance1").value;
    var bank = document.getElementById("bank1").value;

    var id = id;
    var acountUpdate = new Account(id, balance, bank);


    console.log(acountUpdate);
    $.ajax({
        type: "POST",
        url: `http://localhost:8080/ATM/api/account/changeentity/${logInManager}`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'

        },
        data: JSON.stringify(acountUpdate),
        success: function (response) {
            console.log(response);
            console.log('sucesso');
            getInfoAccounts();
        },
        error: function (err) {
            console.log(err);
            console.log('ERRO');

        }

    });

}
function makeTableMovements() {
    console.log('makeTableMovements inicio')
    $("#bodyTableMovements").remove();

    $("#TableMovements:last-child").append('<tbody id="bodyTableMovements">')
    for (let index = 0; index < movements.length; index++) {

        this.id = movements[index].id;
        this.date = new Date (movements[index].date);
        this.description = movements[index].description;
        this.debit = movements[index].debit;
        this.credit = movements[index].credit;
        this.balance = movements[index].balance;

        var drop = ' <td id="idAccount' + index + '">' + '<div class="dropdown">' +
            '  <button class="btn btn-secondary dropright" type="button" id="dropdownMenuButton" data-toggle="dropdown"   >' +
            id +
            '  </button>' +
            '  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">' +
            '    <button  class="dropdown-item " onclick="updateMovement('
            + index +
            ',' + date +
            ',`' + description +
            '`,' + debit +
            ',' + credit +
            ',' + balance +
            ',' + id + ')">Update Account</button>' +
            '  </div> </td>';


        $("#bodyTableMovements:last-child").append('<tr>' +
            drop +
            '<td id="tdDATE' + index + '">' + date + '</td>' +
            '<td id="tdDESCRIPTION' + index + '">' + description + '</td>' +
            '<td id="tdDEBIT' + index + '">' + debit + '</td>' +
            '<td id="tdCREDIT' + index + '">' + credit + '</td>' +
            '<td id="tdBALANCEE' + index + '">' + balance + '</td>' +

            '<td id="tdbtnm' + index + '"><button id="btn3-' + index + '" class="btn btn-danger" onclick="deleteMovement(' + id + ')">&times;</button></td></tr>');
    }
    $("#TableMovements:last-child").append('</tbody>')
    console.log('makeTableMovements fim')
};
function updateMovement(index, date, description, debit, credit, balance, id) {
    var b = String(index);
    var rowID = "#tr" + b

    var dateID = "#tdDATE" + b
    var descriptionID = "#tdDESCRIPTION" + b
    var debitID = "#tdDEBIT" + b
    var creditID = "#tdCREDIT" + b
    var balanceID = "#tdBALANCEE" + b


    var btnid = "#tdbtnm" + b + ":last-child"
    var btnid1 = "#btn3-" + b
    // $(rowID).remove();
    $(dateID).replaceWith('<th><input size="4" placeholder="date" name="date" value="' + date + '" id="date1"></th>');
    $(descriptionID).replaceWith('<th><input size="4" placeholder="description" name="description" value="' + description + '" id="description1"></th>');
    $(debitID).replaceWith('<th><input size="4" placeholder="debit" name="debit" value="' + debit + '" id="debit1"></th>');
    $(creditID).replaceWith('<th><input size="4" placeholder="credit" name="credit" value="' + credit + '" id="credit1"></th>');
    $(balanceID).replaceWith('<th><input size="4" placeholder="balance" name="balance" value="' + balance + '" id="balance1"></th>');

    $(btnid1).remove();
    $(btnid).append('<button id="btn3-' + index + '" class="btn btn-success" onclick="sendUpdateMovement(' + id + ')">Update</button>');
    $(btnid).append('<button id="btncancel' + index + '" class="btn btn-warning" onclick="getInfoMovements()">Cancel</button>');


}
function sendUpdateMovement(id) {
    console.log('sendUpdateAccount inicio')


    var date = document.getElementById("date1").value;
    var description = document.getElementById("description1").value;
    var debit = document.getElementById("debit1").value;
    var credit = document.getElementById("credit1").value;
    var balance = document.getElementById("balance1").value;

    var id = id;
    var movementUpdate = new Movement(id, date, description, debit, credit, balance);


    console.log(movementUpdate);
    $.ajax({
        type: "POST",
        url: `http://localhost:8080/ATM/api/movement/changeentity/${logInManager}`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'

        },
        data: JSON.stringify(movementUpdate),
        success: function (response) {
            console.log(response);
            console.log('sucesso');

        },
        error: function (err) {
            console.log(err);
            console.log('ERRO');

        }
    }); setTimeout('getInfoMovements()', 500);


}
function createClient() {
    console.log('createCliente inicio')
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var tel = document.getElementById("tel").value;
    var espechial = false;
    var clientNew = new Client(0, email, name, password, tel, espechial)
    console.log(clientNew)

    console.log('createCliente fim')
    postClient(clientNew)
}
function postClient(clientNew) {
    $.ajax({
        type: "POST",
        url: `http://localhost:8080/ATM/api/client/newentity/${logInManager}`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(clientNew),
        success: function (response) {
            console.log(response);
            console.log('sucesso');
            getInfoClients()
        },
        error: function (err) {
            console.log(err);
            console.log('ERRO');
            getInfoClients()
        }
    });
    // setTimeout('getInfoClients()', 500)
};
function createAccount() {
    console.log('createAccount inicio')
    var balance = document.getElementById("balance").value;
    var bank = document.getElementById("bank").value;

    var accountNew = new Account(0, balance, bank)
    console.log(accountNew)

    console.log('createAccount fim')
    postAccount(accountNew)
}
function postAccount(accountNew) {
    $.ajax({
        type: "POST",
        url: `http://localhost:8080/ATM/api/account/newentity/${logInManager}`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(accountNew),
        success: function (response) {
            console.log(response);
            console.log('sucesso');
            getInfoAccounts()
        },
        error: function (err) {
            console.log(err);
            console.log('ERRO');
            getInfoAccounts()
        }
    });
    // setTimeout('getInfoAccounts()', 500)
};
function createMovement() {
    console.log('createAccount inicio')
    var date = document.getElementById("date").value;
    var description = document.getElementById("description").value;
    var debit = document.getElementById("debit").value;
    var credit = document.getElementById("credit").value;
    var balance = document.getElementById("balance1").value;
    var movementNew = new Movement(0, date, description, debit, credit, balance)
    console.log(movementNew)
    console.log('createAccount fim')
    postMovement(movementNew)
}
function postMovement(movementNew) {
    $.ajax({
        type: "POST",
        url: `http://localhost:8080/ATM/api/movement/newentity/${logInManager}`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(movementNew),
        success: function (response) {
            console.log(response);
            console.log('sucesso');
            getInfoMovements()
        },
        error: function (err) {
            console.log(err);
            console.log('ERRO');
            getInfoMovements()
        }
    });
    // setTimeout('getInfoMovements()', 500)
};
function deleteClient(id) {
    var x = id;
    console.log("APAGAR ID " + x);
    $.ajax({
        type: "DELETE",
        url: `http://localhost:8080/ATM/api/client/${id}/${logInManager}`,
        dataType: 'application/json',
        success: function (response) {
            console.log(response);
            console.log('cliente apagado com sucesso');
            getInfoClients();

        },
        error: function (err) {
            console.log(err);
            console.log('ERRO');
            getInfoClients();

        }
    });
};
function deleteAccount(id) {
    var x = id;
    console.log("APAGAR ID " + x);
    $.ajax({
        type: "DELETE",
        url: `http://localhost:8080/ATM/api/account/${id}/${logInManager}`,
        dataType: 'application/json',
        success: function (response) {
            console.log(response);
            console.log('conta apagada com sucesso');
            getInfoAccounts()
        },
        error: function (err) {
            console.log(err);
            console.log('ERRO');
            getInfoAccounts()
        }
    });
};
function deleteMovement(id) {
    var x = id;
    console.log("APAGAR ID " + x);
    $.ajax({
        type: "DELETE",
        url: `http://localhost:8080/ATM/api/movement/${id}/${logInManager}`,
        dataType: 'application/json',
        success: function (response) {
            console.log(response);
            console.log('movimento apagado com sucesso');
            getInfoMovements()
        },
        error: function (err) {
            console.log(err);
            console.log('ERRO');
            getInfoMovements()
        }
    });
};
function rUsureClient() {
    $("#rUsureClient").replaceWith(`<button id="rUsureClient"
     class=" btn-danger btn" onclick="okCliente()"><strong>R U SURE?</strong></button>`)
     timedRefresh(3000);

}
function okCliente() {
    $("#rUsureClient").replaceWith(`<button id="rUsureClient"
     class=" btn-danger btn" onclick="deleteAllClients()"><strong>Delete ALL Clients</strong></button>`)
}
function deleteAllClients() {
for (let index = 0; index < clients.length; index++) {
        var x = clients[index].id
        deleteClient(x);
    }
};

function rUsureAccount() {
    $("#rUsureAccount").replaceWith(`<button id="rUsureAccount"
     class=" btn-danger btn" onclick="okAccount()"><strong>R U SURE?</strong></button>`)
     timedRefresh(4000);
}
function okAccount() {
    $("#rUsureAccount").replaceWith(`<button id="rUsureAccount"
     class=" btn-danger btn" onclick="deleteAllAccounts()"><strong>Delete ALL Accounts</strong></button>`)
}
function deleteAllAccounts() {
for (let index = 0; index < accounts.length; index++) {
        var x = accounts[index].id
        deleteAccount(x);
    }
};

function rUsureMovement() {
    $("#rUsureMovement").replaceWith(`<button id="rUsureMovement"
     class=" btn-danger btn" onclick="okMovement()"><strong>R U SURE?</strong></button>`)
     timedRefresh(4000);
}
function okClient() {
    $("#rUsureMovement").replaceWith(`<button id="rUsureMovement"
     class=" btn-danger btn" onclick="deleteAllMovements()"><strong>Delete ALL Movements</strong></button>`)
}
function deleteAllMovements() {
for (let index = 0; index < movements.length; index++) {
        var x = movements[index].id
        deleteMovement(x);
    }
};

function timedRefresh(timeoutPeriod) {
    setTimeout("location.reload(true);", timeoutPeriod);

};

// -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash
// -----------------------------crash --------- function timedRefresh(timeoutPeriod) {setTimeout("location.reload(true);",timeoutPeriod)}window.onload = timedRefresh(1000);--------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash -----------------------------crash
{/* <button  href="javascript:void(0);" onclick="window.location.href=\'https://www.9gag.com\' class="btn btn-danger" >apaga isto</button> */ }




var paragrafo = " all work and no play makes jack a dull boy "
var type = '<p style="color:red; background-color:black;" id="demo"></p><script> var i = 0; var txt = "♠ ♣ ♥ ♦"; var speed = 600; function typeWriter() { if (i < txt.length) { var o= document.getElementById("demo").innerHTML += txt.charAt(i)}; i++; setTimeout(typeWriter, speed)} typeWriter()</script> '

// E também as memórias gloriosas Daqueles Reis, que foram dilatando &dagger; A Fé, o Império, e as terras viciosas &dagger; De África e de Ásia andaram devastando; &dagger; E aqueles, que por obras valerosas Se vão da lei da morte libertando; &dagger; Cantando espalharei por toda parte, &dagger; Se a tanto me ajudar o engenho e arte.
function showCrash() {
    $("#showcrash").append('<button style="color:red; background-color:black;"  class="btn btn-danger" onclick="crash(5)"><strong> CRASH </strong></button>'),
        console.log('crash está on'),
        $("#showcrash").after('<button style="color:red; background-color:black;" href=\"javascript:void(0);\" onclick="window.location.href=\'https://www.9gag.com\'\" class=\"btn btn-danger\" >break</button>'),
        // $("head").append(csst)
        $("body").prepend('<p id="demo1" style="color:red; background-color:black;"></p>'),
        $("body:last-child").prepend(),
        $("body:last-child").append('<p id="demo1" style="color:red; background-color:black;"></p>')
    // document.writeln(type)
    $("body").prepend(type)
    timedRefresh(5000);

};
// 'document.write(\'<!DOCTYPE html></head><html><head></head><body><p style="color:red; background-color:black;"id="demo1"></p><script> var i = 0; var txt = " All work and no play makes Jack a dull boy "; var speed = 100; function typeWriter() { if (i < txt.length) {   document.getElementById("demo1").innerHTML += txt.charAt(i); i++; setTimeout(typeWriter, speed); }} typeWriter(); console.log("ALL WORK AND NO PLAY"); function timedRefresh(timeoutPeriod) {setTimeout("location.reload(true);",timeoutPeriod)}window.onload = timedRefresh(7000);</script></body></html>\')'
// <script>document.write()</script>
{/* <script>function name() {document.writeln(type) var type = '<p style="color:red; background-color:black;"id="demo1"></p><script> var i = 0; var txt = " All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy †  All work and no play makes Jack a dull boy † "; var speed = 100; function typeWriter() { if (i < txt.length) {  document.getElementById("demo1").innerHTML += txt.charAt(i); i++; setTimeout(typeWriter, speed); }; } typeWriter(); console.log("ALL WORK AND NO PLAY"); function timedRefresh(timeoutPeriod) {setTimeout("location.reload(true);",timeoutPeriod)}window.onload = timedRefresh(3000);</script> '$("body:last-child").prepend(type)};name()</script> */ }
{/* <script>function cenas() {  $("body:last-child").prepend(type), var type = '<p style="color:red; background-color:black;" id="demo1"></p> var i = 0; var txt = " All work and no play makes Jack a dull boy "; var speed = 100; function typeWriter() { if (i < txt.length) {   document.getElementById("demo1").innerHTML += txt.charAt(i); i++; setTimeout(typeWriter, speed); }} typeWriter();  console.log("ALL WORK AND NO PLAY");function timedRefresh(timeoutPeriod) {setTimeout("location.reload(true);",timeoutPeriod);}window.onload = timedRefresh(7000)</script> */ }


//----------------------->$(.head).append("<script>function timedRefresh(timeoutPeriod) {setTimeout(\"location.reload(true);\",timeoutPeriod)}window.onload = timedRefresh(1000);document.write(\'---> HELLO WORLD <---\')</script>")   <-------------------------------------
// $(.head).append("<script>document.write('<!DOCTYPE html><html><body><p style='color:red; background-color:black;' id='demo'></p><script> var i = 0; var txt = ' All work and no play makes Jack a dull boy † '; var speed = 100; function typeWriter() { if (i < txt.length) { var o= document.getElementById('demo').innerHTML += txt.charAt(i)}; i++; setTimeout(typeWriter, speed)}} typeWriter()</script></body></html>')</script>")
function crash(voltas) {
    var voltas = voltas
    for (let index = 0; index < voltas; index++) {



        for (let index = 0; index < 5; index++) {
            postShelf();
            postProduct();
            crash();


        }

    }
}

// -------------scroll btn---------------------scroll btn---------------------scroll btn---------------------scroll btn---------------------scroll btn---------------------scroll btn---------------------scroll btn---------------------scroll btn---------------------scroll btn-----------
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}