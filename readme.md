## @brixtol/currency-codes

Country codes ([3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements)) to Currency ([ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#Active_codes)) code mappings used by the [Brixtol Textiles](https://www.brixtoltextiles.com) internal API when dealing with pricing and currency conversions. Supports all 249 countries to currency maps.

Minified: 2.23 KB <br>
Gzipped: 1.08 KB

### Install

[pnpm](https://pnpm.js.org/en/cli/install)

```cli
pnpm i @brixtol/currency-codes
```

##### Boomer / Sheep Alternatives

[npm](https://www.npmjs.com/)

```cli
npm install @brixtol/currency-codes
```

[Yarn](https://yarnpkg.com/)

```cli
yarn add @brixtol/currency-codes
```

### Usage

You can pass in a country code that is lowercase, uppercase or a mixture of both.

```javascript
import { getCurrency } from "@brixtol/currency-codes";

// Country code SE (Sweden) - Swedish Krona
const SEK = getCurrency("SE");

// Country code NL (Netherlands)- Euros
const EUR = getCurrency("nl");

// ....
```

### Related

- [@brixtol/currency-symbols](https://github.com/brixtol/currency-symbols)
- [@brixtol/currency-symbol-placements](https://github.com/brixtol/currency-symbol-placements)
- [@brixtol/country-names](https://github.com/brixtol/country-names)

### License

Licensed under [MIT](#LICENCE)

---

We [♡](https://www.brixtoltextiles.com/discount/4D3V3L0P3RS]) open source!
