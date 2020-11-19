class TemperatureCalc{
  constructor(temperature, type){
    this.temperature = temperature;
    this.type = type
  }

  calculator(){
    if (this.type === 'fahrenheit'){
      return (this.temperature * 9 / 5) + 32
    } else if(this.type === 'celsius'){
      return (this.temperature - 32) * 5/9
    } else {
      return 0
    }
  }
}

export default TemperatureCalc;