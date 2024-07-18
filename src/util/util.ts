import { SharedTransition, withTiming } from "react-native-reanimated";
import { Car } from "./data";

export const groupDataByType = (data: Car[]) => {
  const groupedData: { title: string; data: Car[] }[] = [];

  data.forEach((car) => {
    const section = groupedData.find((s) => s.title === car.type);
    if (section) {
      section.data.push(car);
    } else {
      groupedData.push({ title: car.type, data: [car] });
    }
  });

  return groupedData;
};

export const transitionShort = SharedTransition.custom((values) => {
  "worklet";
  return {
    height: withTiming(values.targetHeight, { duration: 1000 }),
    width: withTiming(values.targetWidth, { duration: 1000 }),
    originX: withTiming(values.targetOriginX, { duration: 1000 }),
    originY: withTiming(values.targetOriginY, { duration: 1000 }),
  };
});

export const transitionLong = SharedTransition.custom((values) => {
  "worklet";
  return {
    height: withTiming(values.targetHeight, { duration: 1000 }),
    width: withTiming(values.targetWidth, { duration: 1000 }),
    originX: withTiming(values.targetOriginX, { duration: 1000 }),
    originY: withTiming(values.targetOriginY, { duration: 1000 }),
  };
});