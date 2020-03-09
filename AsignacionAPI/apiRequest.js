document.addEventListener("DOMContentLoaded", function () {
    //////////// Opcion 1 usar Ajax(Jquery) para hacer el request usando JSON ////////////////////
    /*$.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q=London&appid=76fa9eba3db469038ec999a9400a02eb",
        success: function (result) {
            console.log(JSON.stringify(result.coord.lon))
            console.log(JSON.stringify(result.coord.lat))
            console.log(JSON.stringify(result.weather[0].description))
            console.log(JSON.stringify(result.weather[0].main))
            console.log(JSON.stringify(result.weather[0].id))
        },
        error: function (eror) {
            alert(error)
        }

    });*/

    //////////// Opcion 2 usar fetch con promesas ////////////////////
    /*fetch('http://api.openweathermap.org/data/2.5/weather?q=London&appid=76fa9eba3db469038ec999a9400a02eb')
        .then(function (response) { // Esto es una promise
            return response.json();
        })
        .then(function (result) {
            console.log(JSON.stringify(result.coord.lon))
            console.log(JSON.stringify(result.coord.lat))
            console.log(JSON.stringify(result.weather[0].description))
            console.log(JSON.stringify(result.weather[0].main))
            console.log(JSON.stringify(result.weather[0].id))
        })
        .catch(function (error) {
            alert(error)
        });*/

    //////////// Opcion 3 XMLHttpRequest ////////////////////
    var request = new XMLHttpRequest();

    request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=Oruro&units=celsius&appid=76fa9eba3db469038ec999a9400a02eb', false);
    request.send(); //Hasta aqui envio el request

    if (request.status === 200) {
        var texto = document.querySelector('.texto');

        if (texto) {
            texto.textContent = request.responseText;
        }

        var responseJson = JSON.parse(request.responseText); //Convertir la respuesta de texto a JSON

        var valor = responseJson.main.temp;

        document.querySelector('.weather-icon').src = "http://openweathermap.org/img/w/" + responseJson.weather[0].icon + ".png";
        document.querySelector('.weather-value').textContent = valor;
        document.querySelector('.city').textContent = responseJson.name;
    } else {
        alert(request.responseText);
    }
});

