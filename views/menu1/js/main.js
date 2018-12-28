function getMethod() {
    $.ajax({
        url: "http://192.168.0.122:3000/health",
        type: "GET",
        contentType: "application/json",
        success: function (data) {
            console.log(data);
        }

    }
    )
};

getMethod();