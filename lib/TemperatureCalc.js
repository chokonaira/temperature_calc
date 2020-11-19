class TemperatureCalc{
  constructor(temperature){
    this.temperature = temperature;
  }

  calculator(scale){
    if (scale === 'fahrenheit'){
      return (this.temperature * 9 / 5) + 32
    } else if(scale=== 'celsius'){
      return (this.temperature - 32) * 5/9
    } else {
      return 0
    }
  }
}

export default TemperatureCalc;