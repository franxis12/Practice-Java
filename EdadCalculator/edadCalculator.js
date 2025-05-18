const btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    const year = parseFloat(document.getElementById("year").value);
    const bd = document.getElementById("bd").value;
    const currentYear = new Date().getFullYear();

    if(!isNaN(year) && year <= currentYear){
        const age = currentYear - year;
        console.log(age)
        console.log(bd)
        if(bd === "yes"){
            document.getElementById("currentAge").innerHTML = "Your age is: " + age;
            document.getElementById("pMessage").innerHTML = "The time pass realy fast next year you age would be: " + (age + 1) + " years old."; 
        } else if (bd === "no"){
            document.getElementById("currentAge").innerHTML = "Your age is: " + (age - 1);
            document.getElementById("pMessage").innerHTML = "This year you age would be: " + (age) + " years old."; 
        }

    }else{
        window.alert("Please enter a valid year");
    }

})
