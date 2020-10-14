import "./track.css";
import imgPlaySrc from "../../assets/play-track.svg";
import imgPauseSrc from "../../assets/pause-track.svg";

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
  primaryBtnImage.src = imgPlaySrc;
  primaryBtn.append(primaryBtnImage);

  trackComponent.append(titleImage, descriptionElement, primaryBtn);
  const audioElement = new Audio(track.audioSrc);

  /* Player function to play and pause onclick */

  let isPlaying = false;
  primaryBtn.onclick = function () {
    if (isPlaying) {
      audioElement.pause();
      primaryBtnImage.src = imgPlaySrc;
      primaryBtnImage.alt = "Play Button";
      console.log("It's pausing");
    } else {
      audioElement.play();
      primaryBtnImage.src = imgPauseSrc;
      primaryBtnImage.alt = "Pause Button";
      console.log("It's playing");
    }
    isPlaying = !isPlaying;
  };
  return trackComponent;
}
