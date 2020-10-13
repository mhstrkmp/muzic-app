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

export function createTrackElement(title, artist) {
  const trackComponent = document.createElement("div"); // creates a <div></div>
  trackComponent.className = "track";

  const titleElement = document.createElement("h3"); // creates a <h3></h3>
  titleElement.innerText = title; // <h3>Billie Jean</h3>

  const artistElement = document.createElement("p"); // creates a <p></p>
  artistElement.innerText = artist; // <p>Michael Jackson</p>

  const descriptionElement = document.createElement("div");
  descriptionElement.className = "track__description";
  descriptionElement.append(titleElement, artistElement);

  const titleImage = document.createElement("img");
  titleImage.src =
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.e73ZzgeVfHsS-kcyVn5ZSQHaMp%26pid%3DApi&f=1";
  titleImage.alt = `Image of ${artist}`;
  titleImage.className = "track__image";

  const primaryBtn = document.createElement("button");
  primaryBtn.className = "track__button";
  const primaryBtnImage = document.createElement("img");
  primaryBtnImage.src = imgSrc;
  primaryBtn.append(primaryBtnImage);
  primaryBtn.onclick = function () {
    alert("Click !!!");
  };

  trackComponent.append(titleImage, descriptionElement, primaryBtn);
  return trackComponent;
}
