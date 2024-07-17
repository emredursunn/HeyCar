export interface Onboarding {
  id: number;
  image: any;
  type:string;
  title: string;
  backgroundColor: string;
}

export const onboardingData: Onboarding[] = [
  {
    id: 1,
    image: require("../../../assets/animations/Onboard1.json"),
    type:'animation',
    title: "Wanna rent a luxury car?",
    backgroundColor: "#f1e0c5",
  },
  {
    id: 2,
    image: require("../../../assets/animations/Onboard2.json"),
    type:'animation',
    title: "Find the car closest to you! ",
    backgroundColor: "#c9b79c",
  },
  {
    id: 3,
    image: require("../../../assets/orangemercedes.png"),
    type:'image',
    title: "Rent now!",
    backgroundColor: "#71816d",
  },
];
