export interface LearningInterface {
  title: string;
  leftPic: string;
  description: string;
  button: LearningButton[];
  rightPic: string;
}

export interface LearningButton {
  name: string;
  link: string;
}

export const learning: LearningInterface = {
  title: "Learning",
  leftPic: "https://img.icons8.com/ios/50/000000/ethereum.png",
  description: "Description of the learning section",
  button: [
    {
      name: "Button 1",
      link: "/",
    },
    {
      name: "Button 2",
      link: "/",
    },
  ],
  rightPic: "https://img.icons8.com/ios/50/000000/ethereum.png",
};