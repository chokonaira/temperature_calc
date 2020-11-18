import TemperatureCalc from '../lib/TemperatureCalc';

describe('TemperatureCalc', ()=> {
  it('result is 0 when no temperature or type is provided', ()=>{
    const temperature = new TemperatureCalc(0,null);
    const actual = temperature.FahrenheitToCelsius()
    expect(actual).toEqual(0)
  })
});