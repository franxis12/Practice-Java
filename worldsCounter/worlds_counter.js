const btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    const textEnter = document.getElementById("text").value;
    const findWords = document.getElementById("word").value;

    if(textEnter.trim() === "" || findWords.trim() === "") {
        alert("Please fill all fields.");
        return;
    }

    const words = textEnter.trim().split(/\s+/);

    const totalWords = words.length;

    let counter = 0;
    const findedWords = findWords.toLowerCase();
    
    words.forEach(function(word) {
        if(word.toLowerCase() === findedWords) {
            counter++;
        }
        
    });

    document.getElementById("totalWords").innerHTML = "Total de palabras: " + totalWords;
    document.getElementById("timesWords").innerHTML = "La palabra \"" + findWords + "\" aparece " + counter + " veces.";


    console.log(totalWords);
    

})