export interface Car {
  id: number;
  name: string;
  type: string;
  price: number;
  location: {
    latitude: number;
    longitude: number;
  };
  image: any;
  backgroundColor: string;
  rating: number;
  features: {
    maxSpeed: number;
    enginePower: number;
    zeroToHundred: number;
  };
}

export const carData: Car[] = [
  {
    id: 1,
    name: "Comet",
    location: {
      latitude: 41.034622,
      longitude: 28.993066,
    },
    image: require("../../assets/images/sportyellow.png"),
    backgroundColor: "orange",
    price: 2000,
    type: "Sport",
    rating: 4.6,
    features: {
      maxSpeed: 250,
      enginePower: 3.7,
      zeroToHundred: 5.1,
    },
  },
  {
    id: 2,
    name: "Landstalker",
    location: {
      latitude: 41.037003,
      longitude: 28.985092,
    },
    image: require("../../assets/images/jeepwhite1.png"),
    backgroundColor: "#c8d5b9",
    price: 3200,
    type: "SUV",
    rating: 4.8,
    features: {
      maxSpeed: 210,
      enginePower: 5.2,
      zeroToHundred: 7,
    },
  },
  {
    id: 3,
    name: "Infernus",
    location: {
      latitude: 41.066429,
      longitude: 29.041616,
    },
    image: require("../../assets/images/sportred.png"),
    backgroundColor: "#ed6a5a",
    price: 5000,
    type: "Sport",
    rating: 4.9,
    features: {
      maxSpeed: 350,
      enginePower: 4.2,
      zeroToHundred: 2.4,
    },
  },
  {
    id: 4,
    name: "Hermes",
    location: {
      latitude: 41.079217,
      longitude: 29.031652,
    },
    image: require("../../assets/images/sportgray.png"),
    backgroundColor: "#acbfa4",
    price: 3000,
    type: "Sport",
    rating: 4.2,
    features: {
      maxSpeed: 180,
      enginePower: 3.1,
      zeroToHundred: 8,
    },
  },
  {
    id: 5,
    name: "Cheetah",
    location: {
      latitude: 41.095366,
      longitude: 29.026491,
    },
    image: require("../../assets/images/sportwhite.png"),
    backgroundColor: "#000",
    price: 6000,
    type: "Sport",
    rating: 4.5,
    features: {
      maxSpeed: 360,
      enginePower: 4.3,
      zeroToHundred: 2.1,
    },
  },
  {
    id: 6,
    name: "Banshee",
    location: {
      latitude: 41.045525,
      longitude: 29.018558,
    },
    image: require("../../assets/images/sportblue.png"),
    price: 4000,
    type: "Sport",
    rating: 4.6,
    backgroundColor: "#bbe6e4",
    features: {
      maxSpeed: 320,
      enginePower: 4.3,
      zeroToHundred: 2.2,
    },
  },
];
