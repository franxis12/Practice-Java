const btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    const comment = document.getElementById("comment").value;
    
    if(comment.trim() === "") {
        alert("Please enter a comment to analize.");
        return;
    }

    const wordsToAnalize = comment.trim().split(/\s+/);
    const badWords = ["fuck", "stupid"];
    const totalWords = wordsToAnalize.length;
    let badWordsCount = 0;

    let badWordFound = false;

    wordsToAnalize.forEach(function (word) {
        if (badWords.includes(word.toLowerCase())) {
           badWordsCount++;
        }
    });

       document.getElementById("wordsCount").innerHTML = "Total de palabras: " + totalWords;
       document.getElementById("pMessage").innerHTML = "Palabras prohibidas encontradas: " + badWordsCount;

      if (badWordsCount > 0) {
       document.getElementById("mensaje").innerHTML = "⚠️ El comentario contiene lenguaje inapropiado.";
      } else {
       document.getElementById("mensaje").innerHTML = "✅ Comentario aceptable.";
      }

    
})

    /*wordsToAnalize.forEach(function(word) {
        
        if(badWords.includes(word.toLowerCase())){
            badWordFound = true;
            alert("Bad Word found")
        }
        
    });*/


    //console.log(totalWords);


//})