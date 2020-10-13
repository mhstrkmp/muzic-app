import { createTrackElement } from "./track";

export default {
  title: "Components/Track",
  parameters: { layout: "centered" },
};

export const songOne = () =>
  createTrackElement("Billie Jean", "Michael Jackson");
export const songTwo = () => createTrackElement("Thriller", "Michael Jackson");
export const songThree = () =>
  createTrackElement("Black or White", "Michael Jackson");
