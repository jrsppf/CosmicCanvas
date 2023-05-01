document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const API_KEY = "API_KEY_HERE";
  const date = document.querySelector(".date").value;

  const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => displayResults(data))
    .catch((error) => console.log(`error is ${error}`));
}

function displayResults(data) {
  if (data.media_type === "image") {
    document.querySelector(".image").src = data.hdurl;
    document.querySelector(".video").classList.add("hidden");
    document.querySelector(".video-container").classList.add("hidden");
    document.querySelector(".image").classList.remove("hidden");
    document.querySelector(".image-container").classList.remove("hidden");
  } else if (data.media_type === "video") {
    document.querySelector(".video").src = data.url;
    document.querySelector(".image").classList.add("hidden");
    document.querySelector(".image-container").classList.add("hidden");
    document.querySelector(".video").classList.remove("hidden");
    document.querySelector(".video-container").classList.remove("hidden");
  }
  document.querySelector(".title").innerHTML = data.title;
  document.querySelector(".explanation").innerHTML = data.explanation;
}
