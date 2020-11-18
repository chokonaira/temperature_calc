import TemperatureCalc from "../lib/TemperatureCalc";

describe("TemperatureCalc", () => {
  describe("Fahrenheit To Celsius", () => {
    it("result is 0 when no temperature or type is provided", () => {
      const temperature = new TemperatureCalc(0, null);
      const actual = temperature.FahrenheitToCelsius();
      expect(actual).toEqual(0);
    });
    it("converts 50 degrees Celsius to Fahrenheit", () => {
      // F = (50 × 9 / 5) + 32

      const temperature = new TemperatureCalc(50, "fahrenheit");
      const actual = temperature.FahrenheitToCelsius();
      expect(actual).toEqual(122);
    });

    it("converts 60 degrees Celsius to Fahrenheit", () => {
      // F = (50 × 9 / 5) + 32

      const temperature = new TemperatureCalc(60, "fahrenheit");
      const actual = temperature.FahrenheitToCelsius();
      expect(actual).toEqual(140);
    });

    it("converts 100 degrees Celsius to Fahrenheit", () => {
      // F = (50 × 9 / 5) + 32

      const temperature = new TemperatureCalc(100, "fahrenheit");
      const actual = temperature.FahrenheitToCelsius();
      expect(actual).toEqual(212);
    });
  });
});
