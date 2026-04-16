document.ready(function () {
    $.getJSON("", data,
        function (data, textStatus, jqXHR) {
            
        }
    );
    $.ajax({
        type: "method",
        url: "url",
        data: "data",
        dataType: "dataType",
        success: function (response) {

        }
    });
});