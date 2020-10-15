import { createTrackElement } from "./track";

export default {
  title: "Components/Track",
  parameters: { layout: "centered" },
};

let songs = [
  {
    title: "Websiiite feat Dragan",
    artist: "Tracky Birthday",
    imgSrc:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/images/artists/Tracky_Birthday_-_2009113015813089.jpg?width=290&height=290",
    audioSrc:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Ego_Twister/Tracky_Birthday/Greatest_It_va_2010/Tracky_Birthday_-_05_-_Websiiite_feat_Dragan.mp3",
  },
  {
    title: "8bitDetective",
    artist: "Bass Assassin",
    imgSrc:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/images/albums/IllocanbloBass_Assassin_-_Peony_Lantern_Split_EP_-_2011060485057279.jpg?method=crop&width=290&height=290",
    audioSrc:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Progolog/Bass_Assassin/Peony_Lantern_Split_EP/Bass_Assassin_-_02_-_8bitDetective.mp3",
  },
];

// next part should be solved with foreach
export const playlist = () => {
  const container = document.createElement("div");
  for (let i = 0; i < songs.length; i++) {
    let song = createTrackElement(songs[i]);
    container.append(song);
  }
  return container;
};
