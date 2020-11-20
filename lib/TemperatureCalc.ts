class TemperatureCalc{
  calculator(temperature:number,scale:string){
    if (scale === 'fahrenheit'){
      return (temperature * 9 / 5) + 32
    } else if(scale=== 'celsius'){
      return (temperature - 32) * 5/9
    } else {
      return 0
    }
  }
}

export default TemperatureCalc;