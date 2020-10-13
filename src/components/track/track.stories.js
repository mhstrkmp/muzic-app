import { createTrackElement } from "./track";

export default {
  title: "Components/Track",
  parameters: { layout: "centered" },
};

export const songOne = () =>
  createTrackElement({
    title: "8bitDetective",
    artist: "Bass Assassin",
    imgSrc:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/images/albums/IllocanbloBass_Assassin_-_Peony_Lantern_Split_EP_-_2011060485057279.jpg?method=crop&width=290&height=290",
    audioSrc:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Progolog/Bass_Assassin/Peony_Lantern_Split_EP/Bass_Assassin_-_02_-_8bitDetective.mp3",
  });
