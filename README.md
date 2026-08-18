# use-tw-zipcode

[![npm](https://img.shields.io/npm/v/use-tw-zipcode)](https://www.npmjs.com/package/use-tw-zipcode)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

**[線上 Demo](https://laigary.com/labs/use-tw-zipcode)** — 直接在瀏覽器裡選縣市，看郵遞區號跳出來。

## Intro 簡介

可以簡單地製作台灣縣市、行政區下拉式選單，並取得郵遞區號。本套件只處理邏輯的部分，所以可以很簡單地應用於各種 CSS 版型。

Taiwanese zip code (3 digits) is determined by two factors: city and district. It is usually not necessary to ask users to fill in the zip code manually. It's more user-friendly if you can automatically capture the zip code once they select their city and district. A dropdown menu is commonly used for this scenario.

This library helps you create a user-friendly dropdown menu without any CSS/style framework dependency by using React hooks. You can find examples below. Let's build an excellent user interface together! 🙌🏻

## Installation 安裝

```bash
npm install use-tw-zipcode
```

## Example 範例

```jsx
import React from 'react';
import { useTwZipCode, cities, districts } from 'use-tw-zipcode';

export default function App() {
  const { city, district, zipCode, handleCityChange, handleDistrictChange } = useTwZipCode();
  return (
    <div>
      <div>
        {city}
        {district}
        {zipCode}
      </div>
      <select onChange={(e) => handleCityChange(e.target.value)}>
        {cities.map((city, i) => {
          return <option key={i}>{city}</option>;
        })}
      </select>
      <select onChange={(e) => handleDistrictChange(e.target.value)}>
        {districts[city].map((district, i) => {
          return <option key={i}>{district}</option>;
        })}
      </select>
    </div>
  );
}
```

## Live Demo 線上 Demo

[https://laigary.com/labs/use-tw-zipcode](https://laigary.com/labs/use-tw-zipcode)

The demo runs the published package in the browser; the interactive options mirror the hook's own API.
