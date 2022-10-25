// Basic Intro Session
import { navBar } from "./Navbar";

export interface BasicIntroPageInterface {
  title: string;
  description: string;
  introYTID: string;
}

export const basicIntroPage: BasicIntroPageInterface = {
  title: navBar.projectName.name,
  description:
    "Cardano eUTxO model enables state of the art security on a protocol level",
  introYTID: "vTVrUOFXIT0",
};