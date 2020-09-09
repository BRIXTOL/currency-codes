# Country Code to Currency Code Mappings

Country codes (_[3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements)) to Currency [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#Active_codes) code mappings used by the [Brixtol Textiles](https://www.brixtoltextiles.com) internal API when dealing with pricing and currency conversions. Supports all 249 countries to currency maps.

Minified: 2.23 KB <br>
Gzipped: 1.08 KB

### Install

[pnpm](https://pnpm.js.org/en/cli/install)

```cli
pnpm i @brixtol/currency-codes
```

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
import currency from '@brixtol/currency-codes'

// Country code SE (Sweden) - Swedish Krona
const SEK = currency('SE')

// Country code NL (Netherlands)- Euros
const EUR = currency('nl')

// ....

```

### License

Licensed under [MIT](#LICENCE)
