const loadingScreen = document.querySelector(".loading-screen");
loadingScreen.style.transition = "all 1s ease-out";

window.addEventListener("progress", (event) => {
  console.log("Progress");
  console.log(event.lengthComputable);
  console.log(event.loaded);
  console.log(event.total);
});

window.addEventListener("load", () => {
  
    setTimeout(() => {
        loadingScreen.style.opacity = "0";
    }, 300)
    setTimeout(() => {
      loadingScreen.style.display = "none";
    }, 1200);
  console.log("Page Loaded");
});