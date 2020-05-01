import { useState } from "react";
import { cities } from "./data/cities";
import { districts } from "./data/districts";
import { zipCodes } from "./data/zipCode";

const useTwZipCode = () => {
  const [city, setCity] = useState<string>(cities[0]);
  const [district, setDistrict] = useState<string>(districts[city][0]);
  const zipCode: string = zipCodes[city][district];

  const handleCityChange = (value: string) => {
    setCity(value);
    setDistrict(districts[value][0]);
  };

  const handleDistrictChange = (value: string) => {
    setDistrict(value);
  };

  return {
    city,
    district,
    zipCode,
    handleCityChange,
    handleDistrictChange,
  };
};

export { cities, districts, zipCodes, useTwZipCode };
