class TemperatureCalc{
  temperature:number;
  constructor(temperature:number){
    this.temperature = temperature;
  }

  calculator(scale:string){
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