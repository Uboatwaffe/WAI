const weather_button = document.getElementById('get-weather');
const weather_response = document.getElementById('weather');

document.getElementById('form').addEventListener('submit', (e) => {
    const pass1 = document.getElementById('pass').value;
    const pass2 = document.getElementById('pass2').value;

    if (pass1 !== pass2) {
        e.preventDefault();
        alert('Passwords do not match!');
    }
})

weather_button.addEventListener('click', (e) => {

    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
            weather_response.innerHTML = `Pobieranie pogody...`;

            navigator.geolocation.getCurrentPosition(

                function(position) {

                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;

                    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`;

                    fetch(url)
                        .then(response => response.json())
                        .then(data => {
                            const temp = data.current.temperature_2m;
                            const wind = data.current.wind_speed_10m;

                            weather_response.innerHTML = `Temperatura: ${temp}C` + `\nWiatr: ${wind}km/h`;


                        })
                        .catch(error => {
                            console.log("Błąd pobierania pogody:", error);
                        });

                },

                function(error) {
                    weather_response.textContent =
                        "Nie udało się pobrać lokalizacji.";
                }
            );

        })
    } else {
        weather_response.innerText = 'Could not get current location!';
    }
})

function resetText(){
    document.getElementById('response').style.fontSize = '1em';
}

function shrinkText(){
    document.getElementById('response').style.fontSize = '1.5vh';
}

function enlargeText(){
    document.getElementById('response').style.fontSize = '30px';
}

function modify() {
    document.getElementById('someText').remove();

    const parent = document.getElementById('response');
    parent.innerHTML = '<div id="changed">Tekst w środku div-a o id = changed</div>';

}