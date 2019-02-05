executeScriptMovimentos()
function executeScriptMovimentos() { }
// var clientea = {
//     "id": 3,
//     "email": "tozecarvalho@gmail.com",
//     "name": "António José Carvalho",
//     "password": "asdf",
//     "tel": 910000069
// };

class movement {
    constructor(id, account, date, description, debit, credit, balance) {
        this.id = id;
        this.date = date;
        this.description = description;
        this.debit = debit;
        this.credit = credit;
        this.balance = balance;
        this.account = new account(accID)
    }
}
var movimentos = [
    // depositos--------
    // conta 1----------
    {
        "id": 1,
        "account": {
            "id": 1
        },
        "date": 1,
        "description": "asdfg",
        // "debit": 1.2,
        "credit": 500,
        "balance": 1.4
    }, {
        "id": 3,
        "account": {
            "id": 1
        },
        "date": 1,
        "description": "asdfg",
        // "debit": 1.2,
        "credit": 100,
        "balance": 1.4
    }, {
        "id": 5,
        "account": {
            "id": 1
        },
        "date": 1,
        "description": "asdfg",
        // "debit": 1.2,
        "credit": 1500,
        "balance": 1.4
    }, {
        "id": 7,
        "account": {
            "id": 1
        },
        "date": 1,
        "description": "asdfg",
        // "debit": 1.2,
        "credit": 4000,
        "balance": 1.4
    }, {
        "id": 9,
        "account": {
            "id": 1
        },
        "date": 1,
        "description": "asdfg",
        // "debit": 1.2,
        "credit": 700,
        "balance": 1.4
    },
    // conta 3----------

    {
        "id": 11,
        "account": {
            "id": 3
        },
        "date": 1,
        "description": "asdfg",
        // "debit": 1.2,
        "credit": 1.3,
        "balance": 1.4
    }, {
        "id": 13,
        "account": {
            "id": 3
        },
        "date": 1,
        "description": "asdfg",
        // "debit": 1.2,
        "credit": 1555,
        "balance": 1.4
    }, {
        "id": 15,
        "account": {
            "id": 3
        },
        "date": 1,
        "description": "asdfg",
        // "debit": 1.2,
        "credit": 1666,
        "balance": 1.4
    }, {
        "id": 14,
        "account": {
            "id": 3
        },
        "date": 1,
        "description": "asdfg",
        // "debit": 1.2,
        "credit": 12223,
        "balance": 1.4
    },
    // conta 4----------
    {
        "id": 12,
        "account": {
            "id": 4
        },
        "date": 1,
        "description": "asdfg",
        // "debit": 1.2,
        "credit": 1400,
        "balance": 1.4
    }, {
        "id": 10,
        "account": {
            "id": 4
        },
        "date": 1,
        "description": "asdfg",
        // "debit": 1.2,
        "credit": 1553,
        "balance": 1.4
    }, {
        "id": 8,
        "account": {
            "id": 4
        },
        "date": 1,
        "description": "asdfg",
        // "debit": 1.2,
        "credit": 1993,
        "balance": 1.4
    },
    // conta 5----------
    {
        "id": 6,
        "account": {
            "id": 5
        },
        "date": 1,
        "description": "asdfg",
        // "debit": 1.2,
        "credit": 1.3,
        "balance": 1.4
    }, {
        "id": 4,
        "account": {
            "id": 5
        },
        "date": 1,
        "description": "asdfg",
        // "debit": 1.2,
        "credit": 1.3,
        "balance": 1.4
    }, {
        "id": 2,
        "account": {
            "id": 5
        },
        "date": 1,
        "description": "asdfg",
        // "debit": 1.2,
        "credit": 1.3,
        "balance": 1.4
    }


];

var contas = [
    {
        "id": 2,
        "balance": 1500,
        "bank": "Santander",
        "user": {
            "id": 3
        }
    },
    {
        "id": 3,
        "balance": 5000000,
        "bank": "Caixa Geral de Depósitos",
        "user": {
            "id": 3
        }
    }, {
        "id": 1,
        "balance": 15000000,
        "bank": "Santander",
        "user": {
            "id": 3
        }
    }, {
        "id": 4,
        "balance": 3400000,
        "bank": "BCP",
        "user": {
            "id": 3
        }
    }, {
        "id": 5,
        "balance": 300000000,
        "bank": "UBS",
        "user": {
            "id": 3
        }
    }];
