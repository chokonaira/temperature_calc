import TemperatureCalc from "../lib/TemperatureCalc";

describe("TemperatureCalc", () => {
  describe("Fahrenheit To Celsius", () => {
    it("result is 0 when no temperature or type is provided", () => {
      const temperature = new TemperatureCalc();
      const actual = temperature.calculator(0,'');
      expect(actual).toEqual(0);
    });
    it("converts 50 degrees Celsius to Fahrenheit", () => {
      const temperature = new TemperatureCalc();
      const actual = temperature.calculator(50,"fahrenheit");
      expect(actual).toEqual(122);
    });

    it("converts 60 degrees Celsius to Fahrenheit", () => {
      const temperature = new TemperatureCalc();
      const actual = temperature.calculator(60,"fahrenheit");
      expect(actual).toEqual(140);
    });

    it("converts 100 degrees Celsius to Fahrenheit", () => {
      const temperature = new TemperatureCalc();
      const actual = temperature.calculator(100,"fahrenheit");
      expect(actual).toEqual(212);
    });
  });

  describe("Celsius To Fahrenheit", () => {
    it("converts 50 degrees Fahrenheit to Celsius", () => {
      const temperature = new TemperatureCalc();
      const actual = temperature.calculator(50,"celsius");
      expect(actual).toEqual(10);
    });

    it("converts 60 degrees Celsius to Fahrenheit", () => {
      const temperature = new TemperatureCalc();
      const actual = temperature.calculator(60,"celsius");
      expect(actual).toEqual(15.555555555555555);
    });

    it("converts 100 degrees Celsius to Fahrenheit", () => {
      const temperature = new TemperatureCalc();
      const actual = temperature.calculator(100,"celsius");
      expect(actual).toEqual(37.77777777777778);
    });
  });
});
