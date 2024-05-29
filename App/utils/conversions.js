export function CelciusToFahrenheit(input) {
  return (input * 9) / 5 + 32;
}

export function CelciusToKelvin(input) {
  return input + 273.15;
}

export function FahrenheitToCelcius(input) {
  return ((input - 32) * 5) / 9;
}

export function FahrenheitToKelvin(input) {
  return ((input - 32) * 5) / 9 + 273.15;
}

export function KelvinToCelcius(input) {
  return input - 273.15;
}

export function KelvinToFahrenheit(input) {
  return ((input - 273.15) * 9) / 5 - 32;
}
