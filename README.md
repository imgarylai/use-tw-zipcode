# use-tw-zipcode

[![npm](https://img.shields.io/npm/v/use-tw-zipcode)](https://www.npmjs.com/package/use-tw-zipcode)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Intro 簡介

可以簡單的需要製作台灣縣市、行政區下拉式選單，並取得郵遞區號，只處理邏輯的部分，所以可以很簡單的用於各種 CSS 版型。

Taiwanese zip code, 3 digits style, is determined by two factors, city and district. It is usually not necessary to ask users to fill the zip code by themselves. It is nicer if you are building an interface capturing zip code automatically once they fill in the field, city, and district. And a dropdown menu is commonly used for this scenario.

This library aims to help you create a user-friendly dropdown menu without any CSS/style framework dependency by using React hook. You can find examples below. Let's build an excellent user interface together! 🙌🏻

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

## Other examples 其他範例

與 [MATERIAL-UI](https://material-ui.com/) 一起使用

This example shows how to work with CSS framework. In this example, it comes with [MATERIAL-UI](https://material-ui.com/).

[![Edit use-tw-zipcode](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/use-tw-zipcode-w5y6q?autoresize=1&fontsize=14&hidenavigation=1&theme=dark)

## Live Demo

[https://use-tw-zipcode.now.sh/](https://use-tw-zipcode.now.sh/)
