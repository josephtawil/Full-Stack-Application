$(document).ready(function () {
    $("#btn").on("click", function () {
        $.ajax(
            {
                type: "GET",
                url: "/api",
                dataType: "json"
            }).then(function (response) {
                console.log(response);
            });
    });
});