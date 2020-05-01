# use-tw-zipcode

[![Build Status](https://travis-ci.org/imgarylai/use-tw-zipcode.svg?branch=master)](https://travis-ci.org/imgarylai/use-tw-zipcode)

## Usage

```bash
npm install use-tw-zipcode
```

## Example

```jsx
import React from "react";
import useTwZipCode, { cities, districts } from "./use-tw-zip-code";

export default function App() {
  const {
    city,
    district,
    zipCode,
    handleCityChange,
    handleDistrictChange
  } = useTwZipCode();
  return (
    <div>
      <div>
        {city}
        {district}
        {zipCode}
      </div>
      <select onChange={e => handleCityChange(e.target.value)}>
        {cities.map((city, i) => {
          return <option key={i}>{city}</option>;
        })}
      </select>
      <select onChange={e => handleDistrictChange(e.target.value)}>
        {districts[city].map((district, i) => {
          return <option key={i}>{district}</option>;
        })}
      </select>
    </div>
  );
}

```