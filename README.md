<!-- https://simpleicons.org/ -->

<img src="https://img.shields.io/badge/version-1.0.0-blue?style=for-the-badge">&nbsp;
<img src="https://img.shields.io/badge/nodejs->=18.20.1-3A6F02?style=for-the-badge&logo=nodedotjs">
<img src="https://img.shields.io/badge/npm->=10.5.0-cc0000?style=for-the-badge&logo=npm">

# Country ISOs

Simple module to share the Country Codes (ISO 3166) and Country Currency Codes (ISO 4217)

## Installation

```sh
npm i country-isos
```

## Usage

```typescript
import { countryIsos, countryCodes, currencyCodes } from 'country-isos';

console.log(countryIsos);

console.log(countryCodes);

console.log(currencyCodes);

```

Output

```json5
// countryIsos
[
  ...
  {
    "country": "POLAND",
    "code": {
      "country": "POLAND",
      "numeric": "616",
      "alpha2": "PL",
      "alpha3": "POL"
    },
    "currency": {
      "country": "POLAND",
      "currencyName": "ZLOTY",
      "code": "PLN",
      "number": "985"
    }
  },
  ...
]

// countryCodes
[
  ...,
  {
    "country": "ESTONIA",
    "currencyName": "EURO",
    "code": "EUR",
    "number": "978"
  },
  ...
]

// currencyCodes
[
  ...
  {
    "country": "SINGAPORE",
    "currencyName": "SINGAPORE DOLLAR",
    "code": "SGD",
    "number": "702"
  },
  ...
]
```
