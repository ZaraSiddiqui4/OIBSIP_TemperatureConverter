function convertTemperature() {
    let temperature = parseFloat(document.getElementById('temperature').value);
    let inputScale = document.getElementById('inputScale').value;
    let outputScale = document.getElementById('outputScale').value;
    let result;

    if (inputScale === outputScale) {
        result = temperature;
    } else if (inputScale === "Celsius") {
        if (outputScale === "Fahrenheit") {
            result = (temperature * 9/5) + 32;
        } else if (outputScale === "Kelvin") {
            result = temperature + 273.15;
        }
    } else if (inputScale === "Fahrenheit") {
        if (outputScale === "Celsius") {
            result = (temperature - 32) * 5/9;
        } else if (outputScale === "Kelvin") {
            result = (temperature - 32) * 5/9 + 273.15;
        }
    } else if (inputScale === "Kelvin") {
        if (outputScale === "Celsius") {
            result = temperature - 273.15;
        } else if (outputScale === "Fahrenheit") {
            result = (temperature - 273.15) * 9/5 + 32;
        }
    }

    document.getElementById('result').innerHTML = result ? `${result.toFixed(2)}°${outputScale.charAt(0)}` : "Invalid input!";
}

function clearFields() {
    document.getElementById('temperature').value = "";
    document.getElementById('inputScale').value = "Celsius";
    document.getElementById('outputScale').value = "Celsius";
    document.getElementById('result').innerHTML = "";
}
