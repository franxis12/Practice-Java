const btn = document.getElementById("btn");


btn.addEventListener("click", function(){
    const celcius = parseFloat(document.getElementById("celTemp").value);
    const fahTemp = (celcius * 9/5) + 32;
    const kelTemp = celcius + 273.15;

    if(!isNaN(celcius)) {
        document.getElementById("fahTemp").innerHTML = "Fahrenheit Temperature is: " + fahTemp.toFixed(2);
        document.getElementById("kelTemp").innerHTML = "Kelvin Temperature is: " + kelTemp.toFixed(2);

    }else{
        document.getElementById("kelTemp").innerHTML = "Please enter a Temp in celcius."
        document.getElementById("fahTemp").innerHTML = ""; // limpiar si hay error

    }




})