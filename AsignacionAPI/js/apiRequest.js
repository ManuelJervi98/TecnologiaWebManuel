document.addEventListener("DOMContentLoaded", function() { 
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
        request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=76fa9eba3db469038ec999a9400a02eb', false);
        request.send(null);
        if (request.status === 200) {
            var testo = document.querySelector('.testo');
            testo.textContent = request.responseText;
        } else {
            alert(request.responseText);
        }

        var botoncito = document.querySelector('.botonicto');

        botoncito.onclick = function(){
            console.log('he sido clickeado')
        };


        

        
    
});

