import "./track.css";
import imgSrc from "../../assets/play-track.svg";

export function createTrackElement(track) {
  const trackComponent = document.createElement("div");
  trackComponent.className = "track";

  const titleElement = document.createElement("h3");
  titleElement.innerText = track.title;

  const artistElement = document.createElement("p");
  artistElement.innerText = track.artist;

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
