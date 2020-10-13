import "./track.css";
import imgSrc from "../../assets/play-track.svg";

/* Outline of HTML Structure

<div class="track">
  <img class="track__image" src="../image.png" />
  <h3 class="track__title">Billie Jean</h3>
  <p class="track__artist">Michael Jackson</p>
  <button>
    <img src="../play-track.svg" />
  </button>
</div>

*/

export function createTrackElement(track) {
  const trackComponent = document.createElement("div"); // creates a <div></div>
  trackComponent.className = "track";

  const titleElement = document.createElement("h3"); // creates a <h3></h3>
  titleElement.innerText = track.title; // <h3>Billie Jean</h3>

  const artistElement = document.createElement("p"); // creates a <p></p>
  artistElement.innerText = track.artist; // <p>Michael Jackson</p>

  const descriptionElement = document.createElement("div");
  descriptionElement.className = "track__description";
  descriptionElement.append(titleElement, artistElement);

  const titleImage = document.createElement("img");
  titleImage.src = track.imgSrc;
  titleImage.alt = `Image of ${track.artist}`;
  titleImage.className = "track__image";

  const primaryBtn = document.createElement("button");
  primaryBtn.className = "track__button";
  const primaryBtnImage = document.createElement("img");
  primaryBtnImage.src = imgSrc;
  primaryBtn.append(primaryBtnImage);
  trackComponent.append(titleImage, descriptionElement, primaryBtn);
  const audioElement = new Audio(track.audioSrc);
  primaryBtn.onclick = function () {
    audioElement.play();
  };
  return trackComponent;
}
