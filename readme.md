## @brixtol/currency-codes

Country codes ([3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements)) to Currency ([ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#Active_codes)) code mappings used by the [Brixtol Textiles](https://www.brixtoltextiles.com) internal API when dealing with pricing and currency conversions. Supports all 249 countries to currency maps.

Minified: 2.23 KB <br>
Gzipped: 1.08 KB

### Install

[pnpm](https://pnpm.js.org/en/cli/install)

```cli
pnpm i @brixtol/currency-codes
```

> Because pnpm is dope and does dope shit.

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
import { getCurrency } from '@brixtol/currency-codes';

// Country code SE (Sweden)
const sek = getCurrency('SE'); // SEK

// Country code NL (Netherlands)
const eur = getCurrency('nl'); // EUR

// Country code US (United States)
const eur = getCurrency('uS'); // USD

// ....
```

The module also exposes the raw mappings and interface on the export. The mappings object is provided **read only** using [Object.freeze](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze). The raw mappings are annotated with JSDoc comments so when using an editor that supports intellisense (ie: vscode) you will receive the country and currency name in completions and hovers.

```javascript
import { Currencies, ICurrencies, CurrencyCodes } from '@brixtol/currency-codes';

// Mapping Object

Currencies.SE; // SEK
Currencies.NL; // EUR
Currencies.RU; // RUB

// Interface

ICurrencies.SE; // SEK
ICurrencies.NL; // EUR
ICurrencies.RU; // RUB

// Literal Union

CurrencyCodes; // SEK | EUR | RUB etc etc
```

> The interface is identical to the mapping.

### Related

Currency code to currency symbol mappings:

- [@brixtol/currency-symbols](https://github.com/brixtol/currency-symbols)

Country code to country name mappings:

- [@brixtol/country-names](https://github.com/brixtol/country-names)

Currency code to [currency.js](https://github.com/scurker/currency.js) symbol placement mappings:

- [@brixtol/currency-symbol-placements](https://github.com/brixtol/currency-symbol-placements)

### License

Licensed under [MIT](#LICENSE)

---

We [♡](https://www.brixtoltextiles.com/discount/4D3V3L0P3RS]) open source!
