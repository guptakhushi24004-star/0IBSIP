
const convertBtn = document.getElementById("convertBtn");

convertBtn.addEventListener("click", function () {

    const input = document.getElementById("temperature").value.trim();
    const unit = document.getElementById("unit").value;

    const error = document.getElementById("error");

    error.textContent = "";

    // Validate input
    if (input === "") {
        error.textContent = "Please enter a temperature!";
        resetResults();
        return;
    }

    const temperature = Number(input);

    if (!Number.isFinite(temperature)) {
        error.textContent = "Please enter a valid number!";
        resetResults();
        return;
    }

    let celsius;

    // Convert input into Celsius
    if (unit === "Celsius") {
        celsius = temperature;
    }
    else if (unit === "Fahrenheit") {
        celsius = (temperature - 32) * 5 / 9;
    }
    else {
        celsius = temperature - 273.15;
    }

    // Check absolute zero
    if (celsius < -273.15 - 0.0000001) {
        error.textContent =
            "Temperature cannot be below absolute zero!";
        resetResults();
        return;
    }

    // Convert Celsius into other units
    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = celsius + 273.15;

    // Display results
    document.getElementById("celsius").textContent =
        celsius.toFixed(2) + " °C";

    document.getElementById("fahrenheit").textContent =
        fahrenheit.toFixed(2) + " °F";

    document.getElementById("kelvin").textContent =
        kelvin.toFixed(2) + " K";

});

function resetResults() {
    document.getElementById("celsius").textContent = "--";
    document.getElementById("fahrenheit").textContent = "--";
    document.getElementById("kelvin").textContent = "--";
}
