import TemperatureCalc from "../lib/TemperatureCalc";

describe("TemperatureCalc", () => {
  describe("Fahrenheit To Celsius", () => {
    it("result is 0 when no temperature or type is provided", () => {
      const temperature = new TemperatureCalc(0, null);
      const actual = temperature.calculator();
      expect(actual).toEqual(0);
    });
    it("converts 50 degrees Celsius to Fahrenheit", () => {
      // F = (50 × 9 / 5) + 32

      const temperature = new TemperatureCalc(50, "fahrenheit");
      const actual = temperature.calculator();
      expect(actual).toEqual(122);
    });

    it("converts 60 degrees Celsius to Fahrenheit", () => {
      // F = (50 × 9 / 5) + 32

      const temperature = new TemperatureCalc(60, "fahrenheit");
      const actual = temperature.calculator();
      expect(actual).toEqual(140);
    });

    it("converts 100 degrees Celsius to Fahrenheit", () => {
      // F = (50 × 9 / 5) + 32

      const temperature = new TemperatureCalc(100, "fahrenheit");
      const actual = temperature.calculator();
      expect(actual).toEqual(212);
    });
  });

  describe("Celsius To Fahrenheit", () => {
    it("converts 50 degrees Fahrenheit to Celsius", () => {
      // C = (F − 32) × 5 / 9 

      const temperature = new TemperatureCalc(50, "celsius");
      const actual = temperature.calculator();
      expect(actual).toEqual(10);
    });

    it("converts 60 degrees Celsius to Fahrenheit", () => {
      // C = (F − 32) × 5 / 9 

      const temperature = new TemperatureCalc(60, "celsius");
      const actual = temperature.calculator();
      expect(actual).toEqual(15.555555555555555);
    });

    it("converts 100 degrees Celsius to Fahrenheit", () => {
     // C = (F − 32) × 5 / 9 

      const temperature = new TemperatureCalc(100, "celsius");
      const actual = temperature.calculator();
      expect(actual).toEqual(37.77777777777778);
    });
  });
});
