# Changelog

### 1.2.2 - 21/11/2021

- Minor internal updates
- Moved to esbuild minifier
- pnpm linked dependencies
- Updated docs

### 1.2.1 - 05/11/2021

Improved type support and provided error handling for when invalid or incorrect ISO codes are provided.

- Added literal union support for argument `code`
- Added type support for currency code return
- Added error support when an unmatched ISO is provided
- Added Currency Codes Union type export available from `CurrencyCodes`

### 1.2.0 - 21/10/2021

- Updated rollup-config

### 1.1.1 - 09/09/2021

Allow `string` type to be passed as parameter value to function and replaced development rollup dependencies to use [@brixtol/rollup-config](https://github.com/BRIXTOL/rollup-config)

### 1.1.0 - 23/08/2021

Mostly development workspace adjustments. The module now exposes the mapping object on the export in addition to the matching function export.

##### Breakdown

- Expose the object mapping on export, available on `Currencies`
- Improved and aligned rollup build config
- Cleaned up working directory
- Updated readme and examples
- Added [@brixtol/eslint-config](https://github.com/BRIXTOL/eslint-config) to development dependencies.
- Added [@brixtol/prettier-config](https://github.com/BRIXTOL/prettier-config) to development dependencies.

### 1.0.1 - 22/08/2021

Minor bump to align readme information with new named export

- Updated readme

### 1.0.0 - 22/08/2021

First major version, ships with a breaking change. The default export is no longer supported as this module now uses named exports.

#### Named export

```js
import { getCurrency } from '@brixtol/currencies';

const currency = getCurrency('SE'); // SEK
```

#### Breakdown

- No longer support default exports, project now uses named export approach.
- Provided interface of currency mappings, available on `ICurrencies`

### 0.1.5 - 21/08/2021

Converted project to typescript and changed the pattern matching of how mappings are queried.

#### Breakdown

- Converted project to TypeScript
- Supported typings + JSDoc descriptions

> When using a text editor that support intellisense features (like vscode) the mappings will provide the Country Name and the currency name in completions and hovers.

###### Currency Updates

- Mapped `LV` to `EUR` (As of January 2014 the official currency of Latvia is EUR)

### 0.1.1 > 0.1.4 - 09/09/2020

- Various adaptations for multiple registry supports

### 0.1.0 - 09/09/2020

- Initial Release
