const weather_button = document.getElementById('get-weather');
const weather_response = document.getElementById('weather');

document.getElementById('form').addEventListener('submit', (e) => {
    const pass1 = document.getElementById('pass').value;
    const pass2 = document.getElementById('pass2').value;

    if (pass1 !== pass2) {
        e.preventDefault();
        alert('Hasła nie są takie same!');
    }
})

weather_button.addEventListener('click', () => {

    if ("geolocation" in navigator) {

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


    } else {
        weather_response.innerText = 'Could not get current location!';
    }
})

function resetText(){
    document.getElementById('response').style.fontSize = '2vh';
}

function shrinkText(){
    document.getElementById('response').style.fontSize = '1vh';
}

function enlargeText(){
    document.getElementById('response').style.fontSize = '3vh';
}

function modify() {
    const parent = document.getElementById('response');

    if (document.getElementById('someText')){
        document.getElementById('someText').remove();
    }

    const newDiv = document.createElement('div');
    newDiv.id = 'newDiv';

    const text = document.createTextNode('W zmienionej strukturze');

    newDiv.appendChild(text);
    parent.appendChild(newDiv);

}

function updateCookieInfo(){
    const response = document.getElementById('cookieInfo');

    if(localStorage.getItem('cookieChoice') === 'accepted'){
        response.innerHTML = 'Wybrałeś wszystkie ciasteczka';
    } else if(localStorage.getItem('cookieChoice') === 'rejected'){
        response.innerHTML = 'Wybrałeś tylko wymagane ciasteczka';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateCookieInfo();
})