const btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    const comment = document.getElementById("comment").value;
    

    if (comment.trim() === ""){
        alert("Enter a comments");
        return;
    }

    const wordsToAnalize = comment.trim().split(/\s+/)
    const badWords = ["fuck", "stupid"];
    const totalWords = wordsToAnalize.length;
    let badWordsCount = 0;
    let badWordFound = false;

    for (let i = 0;i < wordsToAnalize.length; i++){
        let word = wordsToAnalize[i];

        if(badWords.includes(word.toLowerCase)){
            badWordsCount++;
            badWordFound = true;

        }
    }

    document.getElementById("wordsCount").innerHTML = "This comment contains: " + totalWords + " words."
    document.getElementById("pMessage").innerHTML = badWordsCount + " bad words found.";

    if(badWordFound){
    document.getElementById("mensaje").innerHTML = "This comment contain bad words";

    }else{
    document.getElementById("mensaje").innerHTML = "This comment is clean";

    }

})