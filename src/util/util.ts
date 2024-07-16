import { Car } from "./CarsData";

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
