import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#EFBD48",
  isLogoTexture: true,
  isFullTexture: false,
  localDecal: "./threejs.png",
  fullDecal: "./threejs.png",
});

export default state;
