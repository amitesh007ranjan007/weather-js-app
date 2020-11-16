class Weather {
    constructor(city) {
        this.key = '509c99fe0e1a499f96030022200208';
        this.city = city;
    }

    async getWeather() {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${this.key}&q=${this.city}`);
        const responseData = await response.json();
        return {
            current: responseData.current,
            location: responseData.location
        }
    }

    changeLocation(city) {
        this.city = city;
    }
}