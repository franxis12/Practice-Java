/*const xhr = new XMLHttpRequest();
xhr.open("GET", "./health_article.json", true);
xhr.responseType = "json";

xhr.onload = function () {
  const data = xhr.response;
  const articles = data.articles;
  const container = document.getElementById("articles");

  articles.forEach(function(article) {
    const articleDiv = document.createElement("div");

    // Título
    const title = document.createElement("h2");
    title.textContent = article.title;

    // Descripción
    const description = document.createElement("p");
    description.textContent = article.description;

    // Ways to Achieve
    const wayHeader = document.createElement("h3");
    wayHeader.textContent = "Ways to Achieve";

    const waysList = document.createElement("ul");
    article.ways_to_achieve.forEach(function(way) {
      const li = document.createElement("li");
      li.textContent = way;
      waysList.appendChild(li);
    });

    // Benefits
    const benefitsHeader = document.createElement("h3");
    benefitsHeader.textContent = "Benefits";

    const benefitsList = document.createElement("ul");
    article.benefits.forEach(function(benefit) {
      const li = document.createElement("li");
      li.textContent = benefit;
      benefitsList.appendChild(li);
    });

    // Agregar todo al div
    articleDiv.appendChild(title);
    articleDiv.appendChild(description);
    articleDiv.appendChild(wayHeader);
    articleDiv.appendChild(waysList);
    articleDiv.appendChild(benefitsHeader);
    articleDiv.appendChild(benefitsList);

    // Agregar el div al contenedor principal
    container.appendChild(articleDiv);
  });
};

xhr.send();*/
fetch("./health_article.json")
  .then(response => response.json())
  .then(data => {
    const articles = data.articles;
    const container = document.getElementById("articles");

    articles.forEach(article => {
      const articleDiv = document.createElement("div");

      const title = document.createElement("h2");
      title.textContent = article.title;

      const description = document.createElement("p");
      description.textContent = article.description;

      // Ways to Achieve
      const wayHeader = document.createElement("h3");
      wayHeader.textContent = "Ways to Achieve";

      const waysList = document.createElement("ul");
      article.ways_to_achieve.forEach(way => {
        const li = document.createElement("li");
        li.textContent = way;
        waysList.appendChild(li);
      });

      // Benefits
      const benefitsHeader = document.createElement("h3");
      benefitsHeader.textContent = "Benefits";

      const benefitsList = document.createElement("ul");
      article.benefits.forEach(benefit => {
        const li = document.createElement("li");
        li.textContent = benefit;
        benefitsList.appendChild(li);
      });

      // Añadir todo al div
      articleDiv.appendChild(title);
      articleDiv.appendChild(description);
      articleDiv.appendChild(wayHeader);
      articleDiv.appendChild(waysList);
      articleDiv.appendChild(benefitsHeader);
      articleDiv.appendChild(benefitsList);

      container.appendChild(articleDiv);
    });
  });


  