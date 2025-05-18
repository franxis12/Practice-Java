
const btnSend = document.getElementById("btnSend");

btnSend.addEventListener("click", (e) => {
    e.preventDefault();
    const userName = document.getElementById("name").value;
    const userEmail = document.getElementById("email").value;
    const userMessage = document.getElementById("message").value;

   if(userName === ""){
    document.getElementById("pMessage").innerHTML = "Please enter a name to continue."
    document.getElementById("pMessage").style.color = "red";
   } else if (userEmail === "") {
    document.getElementById("pMessage").innerHTML = userName + ", please enter an email to continue.";
    document.getElementById("pMessage").style.color = "red";
   } else if (!isValidEmail(userEmail)) {
    document.getElementById("pMessage").innerHTML = "Please enter a valid email address.";
    document.getElementById("pMessage").style.color = "red";
   } else if (userMessage === "" || userMessage.length < 10){
    document.getElementById("pMessage").innerHTML = "Please enter a Message to continue."

   }else {
    document.getElementById("pMessage").innerHTML = "Message send"
    document.getElementById("pMessage").style.color = "green";

   }

    
})

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}