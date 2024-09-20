
function Selected(element){
    document.getElementById("from").innerHTML= element.innerText;
}
function Select(element){
    document.getElementById("to").innerHTML= element.innerText;
}
function converter() {
    let temp = parseFloat(document.getElementById("Temp").value);  // User input temperature
    let from = document.getElementById("from").innerText;          // From temperature scale
    let to = document.getElementById("to").innerText;              // To temperature scale
    let result;

    // Check conversion type and perform calculation
    if (from === "Fahrenheit" && to === "Celsius") {
        result = (temp - 32) * (5 / 9);  // Fahrenheit to Celsius
    } else if (from === "Celsius" && to === "Fahrenheit") {
        result = (temp * (9 / 5)) + 32;  // Celsius to Fahrenheit
    } else {
        result = temp; // If both are the same, no conversion needed
    }

    // Display the result
    document.getElementById("displayresult").innerText = `Converted Temperature: ${result.toFixed(2)} °${to}`;
}

