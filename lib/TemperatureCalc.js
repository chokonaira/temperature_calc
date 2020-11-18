class TemperatureCalc{
  constructor(temperature, type){
    this.temperature = temperature;
    this.type = type
  }

  FahrenheitToCelsius(){
    if (this.type === 'fahrenheit'){
      const fahrenheit = (this.temperature * 9 / 5) + 32
      return fahrenheit
    }
    return 0
  }
}

export default TemperatureCalc;