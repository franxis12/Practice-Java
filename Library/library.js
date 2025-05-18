const books = [
  { title: "Cien Años de Soledad", author: "Gabriel García Márquez", year: 1967 },
  { title: "El Alquimista", author: "Paulo Coelho", year: 1988 },
  { title: "Sapiens", author: "Yuval Noah Harari", year: 2011 },
  { title: "El Juego de Ender", author: "Orson Scott Card", year: 1985 }
];

const btnFilter = document.getElementById("filterBtn");

btnFilter.addEventListener("click", () => {
    const inputYearValue = parseFloat(document.getElementById("yearFilter").value);
    const booksFilterByYear = books.filter((book) => book.year >= inputYearValue);

    showBooks(booksFilterByYear);

})


function showBooks(array){
    const ul = document.getElementById("booksList");
    document.getElementById("booksList").innerHTML = ""

    for(let i = 0; i < array.length; i++){
        const li = document.createElement("li");
        li.textContent = `Title: ${array[i].title} - Author: ${array[i].author} - Year: ${array[i].year}`;
        ul.appendChild(li);
    }
}

showBooks(books);