const btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    const kilos = parseFloat(document.getElementById("kilos").value);
    const altura = parseFloat(document.getElementById("altura").value);
    
    if(!isNaN(kilos) && !isNaN(altura)){
        const imc = kilos / (altura * altura);
        
        document.getElementById("imcResult").innerHTML = "Tu IMC es: " + imc.toFixed(2); 

        console.log(imc.toFixed(2));
        if(imc <= 18.5){
            document.getElementById("pMessage").innerHTML = "Estas muy flaco ponte a comer. :)"
        }else if (imc > 18.5 && imc <= 24.9){
            document.getElementById("pMessage").innerHTML = "Tienes un peso perfecto sigue asi. :)"
        }else if (imc > 25 && imc <= 29.9){
            document.getElementById("pMessage").innerHTML = "Estas muy gordo ponte hacer ejercicio. :D"
        }else if (imc >= 30){
            document.getElementById("pMessage").innerHTML = "Seguro ya tienes diabetes. :("
        }


    } else {
        window.alert("Please fill all fields");
    }
})