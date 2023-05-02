function getFetch() {
  const API_KEY = "FzyCmLx9NoJm0vdcacfoSKNNyZvAbcV6oZbu4tW5";

  const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const imageUrl = data.hdurl;
      const title = data.title;
      const description = data.explanation;
      document.body.style.backgroundImage = `url('${imageUrl}')`;
      document.getElementById("backgroundTitle").innerHTML = title;
      document.getElementById("backgroundDescription").innerHTML = description;
    })
    .catch((error) => console.log(`error is ${error}`));
}

getFetch();
