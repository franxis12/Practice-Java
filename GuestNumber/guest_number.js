const btn = document.getElementById("btn");
let ramdonNumber = Math.floor(Math.random() * 10) + 1;
let trys = 3;
const btnReset = document.getElementById("btnReset");


btn.addEventListener("click", () => {
    if (trys <= 0){
        document.getElementById("gameStatus").innerHTML = "❌ You've run out of tries. Click 'Reset' to try again.";
        btn.disabled = true;
        return;
    }
    const userNumber = parseInt(document.getElementById("userNumber").value);
    
    if (isNaN(userNumber)) {
     alert("Please enter a valid number.");
      return;
    }

    if (ramdonNumber === userNumber){
        document.getElementById("message").innerHTML = "You're right the number is :" + ramdonNumber;
        btn.disabled = true;


    }else if (ramdonNumber > userNumber){
        document.getElementById("message").innerHTML = "The number you entered is lower try again";

    }else if ( ramdonNumber < userNumber){
        document.getElementById("message").innerHTML = "The number you entered is higger try again";
    }
    trys -= 1;
    if (trys <= 0){
         btn.disabled = true;

    }

    document.getElementById("try").innerHTML = "You have " + trys + " try.";

})
document.getElementById("try").innerHTML = "You have " + trys + " try.";

btnReset.addEventListener("click", () => {
    trys = 3
    document.getElementById("try").innerHTML = "You have " + trys + " try.";
    document.getElementById("message").innerHTML = "";
    ramdonNumber = Math.floor(Math.random() * 10) + 1;
    document.getElementById("userNumber").value = "";
    document.getElementById("gameStatus").innerHTML = "Enter your number:";
    btn.disabled = false;

});

