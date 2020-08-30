const imgSrc = document.getElementById("img-src");
const button = document.getElementById("fetch-new");
const loading = document.getElementById("loading");

//get random image

getNewRandomImage = async () => {
  try {
    let response = await fetch(
      `https://random.dog/woof.json?filter=mp4,webm,gif,png`
    );
    let data = await response.json();
    //set new image source
    console.log(data);
    imgSrc.src = data.url;
  } catch (err) {
    console.log(err);
  } finally {
    loading.classList.remove("visible");
  }
};

// add event listener button

button.addEventListener("click", (e) => {
  loading.classList.add("visible");
  getNewRandomImage();
});

// getNewRandomImage();
