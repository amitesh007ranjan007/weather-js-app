const storage = new Storage();

const weatherlocation = storage.getLocationData();
const weather = new Weather(weatherlocation);
const ui = new UI;


document.addEventListener('DOMContentLoaded', getWeather);

//change Location event
document.getElementById('w-change-btn').addEventListener('click', e => {
    const city = document.getElementById('city').value;
    weather.changeLocation(city);
    //set Location in local storage
    storage.setLocationData(city);
    //Get weather again
    getWeather();

    //Close modal , using jquey
    $('#locModal').modal('hide');

});


function getWeather() {

weather.getWeather()
.then(results => {
    ui.paint(results);
    
})
.catch(err => console.log(err));
}

