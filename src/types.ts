/* eslint-disable no-unused-vars */
import { CountryCodes } from '@brixtol/country-names';

export interface ICurrencies {
  /** Andorra (Euro) */
  AD: 'EUR',
  /** United Arab Emirates (UAE Dirham) */
  AE: 'AED',
  /** Afghanistan (Afghani) */
  AF: 'AFN',
  /** Antigua And Barbuda (East Caribbean Dollar) */
  AG: 'XCD',
  /** Anguilla (East Caribbean Dollar) */
  AI: 'XCD',
  /** Albania (Lek) */
  AL: 'ALL',
  /** Armenia (Armenian Dram) */
  AM: 'AMD',
  /** Angola (Kwanza) */
  AO: 'AOA',
  /** Argentina (Argentine Peso) */
  AR: 'ARS',
  /** American Samoa (US Dollar) */
  AS: 'USD',
  /** Austria (Euro) */
  AT: 'EUR',
  /** Australia (Australian Dollar) */
  AU: 'AUD',
  /** Aruba (Aruban Florin) */
  AW: 'AWG',
  /** Aland Islands (Euro) */
  AX: 'EUR',
  /** Azerbaijan (Azerbaijanian Manat) */
  AZ: 'AZN',
  /** Bosnia And Herzegovina (Convertible Mark) */
  BA: 'BAM',
  /** Barbados (Barbados Dollar) */
  BB: 'BBD',
  /** Bangladesh (Taka) */
  BD: 'BDT',
  /** Belgium (Euro) */
  BE: 'EUR',
  /** Burkina Faso (CFA Franc BCEAO) */
  BF: 'XOF',
  /** Bulgaria (Bulgarian Lev) */
  BG: 'BGN',
  /** Bahrain (Bahraini Dinar) **/
  BH: 'BHD',
  /** Burundi (Burundi Franc) */
  BI: 'BIF',
  /** Benin (CFA Franc BCEAO) */
  BJ: 'XOF',
  /** Saint Barthelemy (Euro) */
  BL: 'EUR',
  /** Bermuda (Bermudian Dollar) */
  BM: 'BMD',
  /** Bolivia Plurinational State (Mvdol) */
  BN: 'BND',
  /** Bolivia Plurinational State (Boliviano) */
  BO: 'BOB',
  /** Bonaire Sint Eustatius And Saba (US Dollar) */
  BQ: 'USD',
  /** Brazil (Brazilian Real) */
  BR: 'BRL',
  /** Bahamas (Bahamian Dollar) **/
  BS: 'BSD',
  /** Bhutan (Ngultrum) */
  BT: 'BTN',
  /** Bouvet Island (Norwegian Krone) */
  BV: 'NOK',
  /** Botswana (Pula) */
  BW: 'BWP',
  /** Belarus (Belarussian Ruble) */
  BY: 'BYN',
  /** Belize (Belize Dollar) */
  BZ: 'BZD',
  /** Canada (Canadian Dollar) */
  CA: 'CAD',
  /** Cocos Keeling Islands (Australian Dollar) */
  CC: 'AUD',
  /** Congo The Democratic Republic (Congolese Franc) */
  CD: 'CDF',
  /** Central African Republic The (CFA Franc BEAC) */
  CF: 'XAF',
  /** Congo The (CFA Franc BEAC) */
  CG: 'XAF',
  /** Switzerland (Swiss Franc) */
  CH: 'CHF',
  /** Cote Divoire (CFA Franc BCEAO) */
  CI: 'XOF',
  /** Cook Islands The (New Zealand Dollar) */
  CK: 'NZD',
  /** Chile (Chilean Peso) */
  CL: 'CLP',
  /** Cameroon (CFA Franc BEAC) */
  CM: 'XAF',
  /** China (Yuan Renminbi) */
  CN: 'CNY',
  /** Colombia (Colombian Peso) */
  CO: 'COP',
  /** Costa Rica (Costa Rican Colon) */
  CR: 'CRC',
  /** Cuba (Cuban Peso) */
  CU: 'CUP',
  /** Cabo Verde (Cabo Verde Escudo) */
  CV: 'CVE',
  /** Curacao (Netherlands Antillean Guilder) */
  CW: 'ANG',
  /** Christmas Island (Australian Dollar) */
  CX: 'AUD',
  /** Cyprus (Euro) */
  CY: 'EUR',
  /** Czech Republic The (Czech Koruna) */
  CZ: 'CZK',
  /** Germany (Euro) */
  DE: 'EUR',
  /** Djibouti (Djibouti Franc) */
  DJ: 'DJF',
  /** Denmark (Danish Krone) */
  DK: 'DKK',
  /** Dominica (East Caribbean Dollar) */
  DM: 'XCD',
  /** Dominican Republic (Dominican Peso) */
  DO: 'DOP',
  /** Algeria (Algerian Dinar) **/
  DZ: 'DZD',
  /** Ecuador (US Dollar) */
  EC: 'USD',
  /** Estonia (Euro) */
  EE: 'EUR',
  /** Egypt (Egyptian Pound) */
  EG: 'EGP',
  /** Western Sahara (Moroccan Dirham) */
  EH: 'MAD',
  /** Eritrea (Nakfa) */
  ER: 'ERN',
  /** Spain (Euro) */
  ES: 'EUR',
  /** Ethiopia (Ethiopian Birr) */
  ET: 'ETB',
  /** Finland (Euro) */
  FI: 'EUR',
  /** Fiji (Fiji Dollar) */
  FJ: 'FJD',
  /** Falkland Islands Malvinas (Falkland Islands Pound) */
  FK: 'FKP',
  /** Micronesia Federated States (US Dollar) */
  FM: 'USD',
  /** Faroe Islands The (Danish Krone) */
  FO: 'DKK',
  /** France (Euro) */
  FR: 'EUR',
  /** Gabon (CFA Franc BEAC) */
  GA: 'XAF',
  /** United Kingdom Of Great Britain And Northern Ireland (Pound Sterling) */
  GB: 'GBP',
  /** Grenada (East Caribbean Dollar) */
  GD: 'XCD',
  /** Georgia (Lari) */
  GE: 'GEL',
  /** French Guiana (Euro) */
  GF: 'EUR',
  /** Guernsey (Pound Sterling) */
  GG: 'GBP',
  /** Ghana (Ghana Cedi) */
  GH: 'GHS',
  /** Gibraltar (Gibraltar Pound) */
  GI: 'GIP',
  /** Greenland (Danish Krone) */
  GL: 'DKK',
  /** Gambia (Dalasi) */
  GM: 'GMD',
  /** Guinea (Guinea Franc) */
  GN: 'GNF',
  /** Guadeloupe (Euro) */
  GP: 'EUR',
  /** Equatorial Guinea (CFA Franc BEAC) */
  GQ: 'XAF',
  /** Greece (Euro) */
  GR: 'EUR',
  /** South Georgia and The South Sandwich Islands (No universal currency) */
  GS: 'GBP',
  /** Guatemala (Quetzal) */
  GT: 'GTQ',
  /** Guam (US Dollar) */
  GU: 'USD',
  /** Guinea Bissau (CFA Franc BCEAO) */
  GW: 'XOF',
  /** Guyana (Guyana Dollar) */
  GY: 'GYD',
  /** Hong Kong (Hong Kong Dollar) */
  HK: 'HKD',
  /** Heard Island And Mcdonald Islands (Australian Dollar) */
  HM: 'AUD',
  /** Honduras (Lempira) */
  HN: 'HNL',
  /** Croatia (Kuna) */
  HR: 'HRK',
  /** Haiti (US Dollar) */
  HT: 'HTG',
  /** Hungary (Forint) */
  HU: 'HUF',
  /** Indonesia (Rupiah) */
  ID: 'IDR',
  /** Ireland (Euro) */
  IE: 'EUR',
  /** Israel (New Israeli Sheqel) */
  IL: 'ILS',
  /** Isle Of Man (Pound Sterling) */
  IM: 'GBP',
  /** India (Indian Rupee) */
  IN: 'INR',
  /** British Indian Ocean Territory (US Dollar) */
  IO: 'USD',
  /** Iraq (Iraqi Dinar) */
  IQ: 'IQD',
  /** Iran Islamic Republic (Iranian Rial) */
  IR: 'IRR',
  /** Iceland (Iceland Krona) */
  IS: 'ISK',
  /** Italy (Euro) */
  IT: 'EUR',
  /** Jersey (Pound Sterling) */
  JE: 'GBP',
  /** Jamaica (Jamaican Dollar) */
  JM: 'JMD',
  /** Jordan (Jordanian Dinar) */
  JO: 'JOD',
  /** Japan (Yen) */
  JP: 'JPY',
  /** Kenya (Kenyan Shilling) */
  KE: 'KES',
  /** Kazakhstan (Tenge) */
  KG: 'KGS',
  /** Cambodia (Riel) */
  KH: 'KHR',
  /** Kiribati (Australian Dollar) */
  KI: 'AUD',
  /** Comoros (Comoro Franc) */
  KM: 'KMF',
  /** Saint Kitts And Nevis (East Caribbean Dollar) */
  KN: 'XCD',
  /** North Korea (North Korean Won) */
  KP: 'KPW',
  /** Korea The Republic Of (Won) */
  KR: 'KRW',
  /** Kuwait (Kuwaiti Dinar) */
  KW: 'KWD',
  /** Cayman Islands The (Cayman Islands Dollar) */
  KY: 'KYD',
  /** Kazakhstan (Tenge) */
  KZ: 'KZT',
  /** Lao Peoples Democratic Republic (Kip) */
  LA: 'LAK',
  /** Lebanon (Lebanese Pound) */
  LB: 'LBP',
  /** Saint Lucia (East Caribbean Dollar) */
  LC: 'XCD',
  /** Liechtenstein (Swiss Franc) */
  LI: 'CHF',
  /** Sri Lanka (Sri Lanka Rupee) */
  LK: 'LKR',
  /** Liberia (Liberian Dollar) */
  LR: 'LRD',
  /** Lesotho (Loti) */
  LS: 'LSL',
  /** Lithuania (Euro) */
  LT: 'EUR',
  /** Luxembourg (Euro) */
  LU: 'EUR',
  /** Latvia (Euro) */
  LV: 'EUR',
  /** Libya (Libyan Dinar) */
  LY: 'LYD',
  /** Morocco (Moroccan Dirham) */
  MA: 'MAD',
  /** Monaco (Euro) */
  MC: 'EUR',
  /** Moldova Republic (Moldovan Leu) */
  MD: 'MDL',
  /** Montenegro (Euro) */
  ME: 'EUR',
  /** Saint Martin French Part (Euro) */
  MF: 'EUR',
  /** Madagascar (Malagasy Ariary) */
  MG: 'MGA',
  /** Marshall Islands The (US Dollar) */
  MH: 'USD',
  /** Republic Of North Macedonia (Denar) */
  MK: 'MKD',
  /** Mali (CFA Franc BCEAO) */
  ML: 'XOF',
  /** Myanmar (Kyat) */
  MM: 'MMK',
  /** Mongolia (Tugrik) */
  MN: 'MNT',
  /** Macao (Pataca) */
  MO: 'MOP',
  /** Northern Mariana Islands (US Dollar) */
  MP: 'USD',
  /** Martinique (Euro) */
  MQ: 'EUR',
  /** Mauritania (Ouguiya) */
  MR: 'MRO',
  /** Montserrat (East Caribbean Dollar) */
  MS: 'XCD',
  /** Malta (Euro) */
  MT: 'EUR',
  /** Mauritius (Mauritius Rupee) */
  MU: 'MUR',
  /** Maldives (Rufiyaa) */
  MV: 'MVR',
  /** Malawi (Kwacha) */
  MW: 'MWK',
  /** Mexico (Mexican Peso) */
  MX: 'MXN',
  /** Malaysia (Malaysian Ringgit) */
  MY: 'MYR',
  /** Mozambique (Mozambique Metical) */
  MZ: 'MZN',
  /** Namibia (Namibia Dollar) */
  NA: 'NAD',
  /** New Caledonia (CFP Franc) */
  NC: 'XPF',
  /** Niger The (CFA Franc BCEAO) */
  NE: 'XOF',
  /** Norfolk Island (Australian Dollar) */
  NF: 'AUD',
  /** Nigeria (Naira) */
  NG: 'NGN',
  /** Nicaragua (Cordoba Oro) */
  NI: 'NIO',
  /** Netherlands (Euro) */
  NL: 'EUR',
  /** Norway (Norwegian Krone) */
  NO: 'NOK',
  /** Nepal (Nepalese Rupee) */
  NP: 'NPR',
  /** Nauru (Australian Dollar) */
  NR: 'AUD',
  /** Niue (New Zealand Dollar) */
  NU: 'NZD',
  /** New Zealand (New Zealand Dollar) */
  NZ: 'NZD',
  /** Oman (Rial Omani) */
  OM: 'OMR',
  /** Panama (Balboa) */
  PA: 'PAB',
  /** Peru (Nuevo Sol) */
  PE: 'PEN',
  /** French Polynesia (CFP Franc) */
  PF: 'XPF',
  /** Papua New Guinea (Kina) */
  PG: 'PGK',
  /** Philippines (Philippine Peso) */
  PH: 'PHP',
  /** Pakistan (Pakistan Rupee) */
  PK: 'PKR',
  /** Poland (Zloty) */
  PL: 'PLN',
  /** Saint Pierre And Miquelon (Euro) */
  PM: 'EUR',
  /** Pitcairn (New Zealand Dollar) */
  PN: 'NZD',
  /** Puerto Rico (US Dollar) */
  PR: 'USD',
  /** Palestine (No universal currency) */
  PS: 'ILS',
  /** Portugal (Euro) */
  PT: 'EUR',
  /** Palau (US Dollar) */
  PW: 'USD',
  /** Paraguay (Guarani) */
  PY: 'PYG',
  /** Qatar (Qatari Rial) */
  QA: 'QAR',
  /** Reunion (Euro) */
  RE: 'EUR',
  /** Romania (Romanian Leu) */
  RO: 'RON',
  /** Serbia (Serbian Dinar) */
  RS: 'RSD',
  /** Russian Federation (Russian Ruble) */
  RU: 'RUB',
  /** Rwanda (Rwanda Franc) */
  RW: 'RWF',
  /** Saudi Arabia (Saudi Riyal) */
  SA: 'SAR',
  /** Solomon Islands (Solomon Islands Dollar) */
  SB: 'SBD',
  /** Seychelles (Seychelles Rupee) */
  SC: 'SCR',
  /** Sudan (Sudanese Pound) */
  SD: 'SDG',
  /** Sweden (Swedish Krona) */
  SE: 'SEK',
  /** Singapore (Singapore Dollar) */
  SG: 'SGD',
  /** Saint Helena Ascension And Tristan Da Cunha (Saint Helena Pound) */
  SH: 'SHP',
  /** Slovenia (Euro) */
  SI: 'EUR',
  /** Svalbard and Jan Mayen (Norwegian Krone) */
  SJ: 'NOK',
  /** Slovakia (Euro) */
  SK: 'EUR',
  /** Sierra Leone (Leone) */
  SL: 'SLL',
  /** San Marino (Euro) */
  SM: 'EUR',
  /** Senegal (CFA Franc BCEAO) */
  SN: 'XOF',
  /** Somalia (Somali Shilling) */
  SO: 'SOS',
  /** Suriname (Surinam Dollar) */
  SR: 'SRD',
  /** South Sudan (South Sudanese Pound) */
  SS: 'SSP',
  /** Sao Tome And Principe (Dobra) */
  ST: 'STD',
  /** El Salvador (El Salvador Colon) */
  SV: 'SVC',
  /** Sint Maarten Dutch Part (Netherlands Antillean Guilder) */
  SX: 'ANG',
  /** Syrian Arab Republic (Syrian Pound) */
  SY: 'SYP',
  /** Swaziland (Lilangeni) */
  SZ: 'SZL',
  /** Turks And Caicos Islands (US Dollar) */
  TC: 'USD',
  /** Chad (CFA Franc BEAC) */
  TD: 'XAF',
  /** French Southern Territories (Euro) */
  TF: 'EUR',
  /** Togo (CFA Franc BCEAO) */
  TG: 'XOF',
  /** Thailand (Baht) */
  TH: 'THB',
  /** Tajikistan (Somoni) */
  TJ: 'TJS',
  /** Tokelau (New Zealand Dollar) */
  TK: 'NZD',
  /** Timor Leste (US Dollar) */
  TL: 'USD',
  /** Turkmenistan (Turkmenistan New Manat) */
  TM: 'TMT',
  /** Tunisia (Tunisian Dinar) */
  TN: 'TND',
  /** Tonga (Pa’anga) */
  TO: 'TOP',
  /** Turkey (Turkish Lira) */
  TR: 'TRY',
  /** Trinidad And Tobago (Trinidad and Tobago Dollar) */
  TT: 'TTD',
  /** Tuvalu (Australian Dollar) */
  TV: 'AUD',
  /** Taiwan Province Of China (New Taiwan Dollar) */
  TW: 'TWD',
  /** Tanzania United Republic (Tanzanian Shilling) */
  TZ: 'TZS',
  /** Ukraine (Hryvnia) */
  UA: 'UAH',
  /** Uganda (Uganda Shilling) */
  UG: 'UGX',
  /** United States Minor Outlying Islands (US Dollar) */
  UM: 'USD',
  /** United States Of America (US Dollar) */
  US: 'USD',
  /** Uruguay (Peso Uruguayo) */
  UY: 'UYU',
  /** Uzbekistan (Uzbekistan Sum) */
  UZ: 'UZS',
  /** Holy See (Euro) */
  VA: 'EUR',
  /** Saint Vincent And The Grenadines (East Caribbean Dollar) */
  VC: 'XCD',
  /** Venezuela Bolivarian Republic (Bolivar) */
  VG: 'USD',
  /** Virgin Islands U S (US Dollar) */
  VI: 'USD',
  /** Viet Nam (Dong) */
  VN: 'VND',
  /** Vanuatu (Vatu) */
  VU: 'VUV',
  /** Wallis And Futuna (CFP Franc) */
  WF: 'XPF',
  /** Samoa (Tala) */
  WS: 'WST',
  /** Yemen (Yemeni Rial) */
  YE: 'YER',
  /** Mayotte (Euro) */
  YT: 'EUR',
  /** South Africa (Rand) */
  ZA: 'ZAR',
  /** Zambia (Zambian Kwacha) */
  ZM: 'ZMK',
  /** Zimbabwe (Zimbabwe Dollar) */
  ZW: 'ZWL',
};

/* -------------------------------------------- */
/* ANNOTATION WORK-AROUND                       */
/* -------------------------------------------- */

/**
 * Type Annotated Union
 *
 * This is a temporary workaround for `keyof` not passing
 * JSDocs annotations declared on interface properties when
 * converting to union types.
 *
 * Until this is available in TypeScript, the unions are
 * hardcoded work-around.
 *
 * @see https://github.com/microsoft/TypeScript/issues/41531
 */
export type CurrencyCodes = (
  /** Andorra (Euro) */
  | 'EUR'
  /** United Arab Emirates (UAE Dirham) */
  | 'AED'
  /** Afghanistan (Afghani) */
  | 'AFN'
  /** Antigua And Barbuda (East Caribbean Dollar) */
  | 'XCD'
  /** Anguilla (East Caribbean Dollar) */
  | 'XCD'
  /** Albania (Lek) */
  | 'ALL'
  /** Armenia (Armenian Dram) */
  | 'AMD'
  /** Angola (Kwanza) */
  | 'AOA'
  /** Argentina (Argentine Peso) */
  | 'ARS'
  /** American Samoa (US Dollar) */
  | 'USD'
  /** Austria (Euro) */
  | 'EUR'
  /** Australia (Australian Dollar) */
  | 'AUD'
  /** Aruba (Aruban Florin) */
  | 'AWG'
  /** Aland Islands (Euro) */
  | 'EUR'
  /** Azerbaijan (Azerbaijanian Manat) */
  | 'AZN'
  /** Bosnia And Herzegovina (Convertible Mark) */
  | 'BAM'
  /** Barbados (Barbados Dollar) */
  | 'BBD'
  /** Bangladesh (Taka) */
  | 'BDT'
  /** Belgium (Euro) */
  | 'EUR'
  /** Burkina Faso (CFA Franc BCEAO) */
  | 'XOF'
  /** Bulgaria (Bulgarian Lev) */
  | 'BGN'
  /** Bahrain (Bahraini Dinar) **/
  | 'BHD'
  /** Burundi (Burundi Franc) */
  | 'BIF'
  /** Benin (CFA Franc BCEAO) */
  | 'XOF'
  /** Saint Barthelemy (Euro) */
  | 'EUR'
  /** Bermuda (Bermudian Dollar) */
  | 'BMD'
  /** Bolivia Plurinational State (Mvdol) */
  | 'BND'
  /** Bolivia Plurinational State (Boliviano) */
  | 'BOB'
  /** Bonaire Sint Eustatius And Saba (US Dollar) */
  | 'USD'
  /** Brazil (Brazilian Real) */
  | 'BRL'
  /** Bahamas (Bahamian Dollar) **/
  | 'BSD'
  /** Bhutan (Ngultrum) */
  | 'BTN'
  /** Bouvet Island (Norwegian Krone) */
  | 'NOK'
  /** Botswana (Pula) */
  | 'BWP'
  /** Belarus (Belarussian Ruble) */
  | 'BYN'
  /** Belize (Belize Dollar) */
  | 'BZD'
  /** Canada (Canadian Dollar) */
  | 'CAD'
  /** Cocos Keeling Islands (Australian Dollar) */
  | 'AUD'
  /** Congo The Democratic Republic (Congolese Franc) */
  | 'CDF'
  /** Central African Republic The (CFA Franc BEAC) */
  | 'XAF'
  /** Congo The (CFA Franc BEAC) */
  | 'XAF'
  /** Switzerland (Swiss Franc) */
  | 'CHF'
  /** Cote Divoire (CFA Franc BCEAO) */
  | 'XOF'
  /** Cook Islands The (New Zealand Dollar) */
  | 'NZD'
  /** Chile (Chilean Peso) */
  | 'CLP'
  /** Cameroon (CFA Franc BEAC) */
  | 'XAF'
  /** China (Yuan Renminbi) */
  | 'CNY'
  /** Colombia (Colombian Peso) */
  | 'COP'
  /** Costa Rica (Costa Rican Colon) */
  | 'CRC'
  /** Cuba (Cuban Peso) */
  | 'CUP'
  /** Cabo Verde (Cabo Verde Escudo) */
  | 'CVE'
  /** Curacao (Netherlands Antillean Guilder) */
  | 'ANG'
  /** Christmas Island (Australian Dollar) */
  | 'AUD'
  /** Cyprus (Euro) */
  | 'EUR'
  /** Czech Republic The (Czech Koruna) */
  | 'CZK'
  /** Germany (Euro) */
  | 'EUR'
  /** Djibouti (Djibouti Franc) */
  | 'DJF'
  /** Denmark (Danish Krone) */
  | 'DKK'
  /** Dominica (East Caribbean Dollar) */
  | 'XCD'
  /** Dominican Republic (Dominican Peso) */
  | 'DOP'
  /** Algeria (Algerian Dinar) **/
  | 'DZD'
  /** Ecuador (US Dollar) */
  | 'USD'
  /** Estonia (Euro) */
  | 'EUR'
  /** Egypt (Egyptian Pound) */
  | 'EGP'
  /** Western Sahara (Moroccan Dirham) */
  | 'MAD'
  /** Eritrea (Nakfa) */
  | 'ERN'
  /** Spain (Euro) */
  | 'EUR'
  /** Ethiopia (Ethiopian Birr) */
  | 'ETB'
  /** Finland (Euro) */
  | 'EUR'
  /** Fiji (Fiji Dollar) */
  | 'FJD'
  /** Falkland Islands Malvinas (Falkland Islands Pound) */
  | 'FKP'
  /** Micronesia Federated States (US Dollar) */
  | 'USD'
  /** Faroe Islands The (Danish Krone) */
  | 'DKK'
  /** France (Euro) */
  | 'EUR'
  /** Gabon (CFA Franc BEAC) */
  | 'XAF'
  /** United Kingdom Of Great Britain And Northern Ireland (Pound Sterling) */
  | 'GBP'
  /** Grenada (East Caribbean Dollar) */
  | 'XCD'
  /** Georgia (Lari) */
  | 'GEL'
  /** French Guiana (Euro) */
  | 'EUR'
  /** Guernsey (Pound Sterling) */
  | 'GBP'
  /** Ghana (Ghana Cedi) */
  | 'GHS'
  /** Gibraltar (Gibraltar Pound) */
  | 'GIP'
  /** Greenland (Danish Krone) */
  | 'DKK'
  /** Gambia (Dalasi) */
  | 'GMD'
  /** Guinea (Guinea Franc) */
  | 'GNF'
  /** Guadeloupe (Euro) */
  | 'EUR'
  /** Equatorial Guinea (CFA Franc BEAC) */
  | 'XAF'
  /** Greece (Euro) */
  | 'EUR'
  /** South Georgia and The South Sandwich Islands (No universal currency) */
  | 'GBP'
  /** Guatemala (Quetzal) */
  | 'GTQ'
  /** Guam (US Dollar) */
  | 'USD'
  /** Guinea Bissau (CFA Franc BCEAO) */
  | 'XOF'
  /** Guyana (Guyana Dollar) */
  | 'GYD'
  /** Hong Kong (Hong Kong Dollar) */
  | 'HKD'
  /** Heard Island And Mcdonald Islands (Australian Dollar) */
  | 'AUD'
  /** Honduras (Lempira) */
  | 'HNL'
  /** Croatia (Kuna) */
  | 'HRK'
  /** Haiti (US Dollar) */
  | 'HTG'
  /** Hungary (Forint) */
  | 'HUF'
  /** Indonesia (Rupiah) */
  | 'IDR'
  /** Ireland (Euro) */
  | 'EUR'
  /** Israel (New Israeli Sheqel) */
  | 'ILS'
  /** Isle Of Man (Pound Sterling) */
  | 'GBP'
  /** India (Indian Rupee) */
  | 'INR'
  /** British Indian Ocean Territory (US Dollar) */
  | 'USD'
  /** Iraq (Iraqi Dinar) */
  | 'IQD'
  /** Iran Islamic Republic (Iranian Rial) */
  | 'IRR'
  /** Iceland (Iceland Krona) */
  | 'ISK'
  /** Italy (Euro) */
  | 'EUR'
  /** Jersey (Pound Sterling) */
  | 'GBP'
  /** Jamaica (Jamaican Dollar) */
  | 'JMD'
  /** Jordan (Jordanian Dinar) */
  | 'JOD'
  /** Japan (Yen) */
  | 'JPY'
  /** Kenya (Kenyan Shilling) */
  | 'KES'
  /** Kazakhstan (Tenge) */
  | 'KGS'
  /** Cambodia (Riel) */
  | 'KHR'
  /** Kiribati (Australian Dollar) */
  | 'AUD'
  /** Comoros (Comoro Franc) */
  | 'KMF'
  /** Saint Kitts And Nevis (East Caribbean Dollar) */
  | 'XCD'
  /** North Korea (North Korean Won) */
  | 'KPW'
  /** Korea The Republic Of (Won) */
  | 'KRW'
  /** Kuwait (Kuwaiti Dinar) */
  | 'KWD'
  /** Cayman Islands The (Cayman Islands Dollar) */
  | 'KYD'
  /** Kazakhstan (Tenge) */
  | 'KZT'
  /** Lao Peoples Democratic Republic (Kip) */
  | 'LAK'
  /** Lebanon (Lebanese Pound) */
  | 'LBP'
  /** Saint Lucia (East Caribbean Dollar) */
  | 'XCD'
  /** Liechtenstein (Swiss Franc) */
  | 'CHF'
  /** Sri Lanka (Sri Lanka Rupee) */
  | 'LKR'
  /** Liberia (Liberian Dollar) */
  | 'LRD'
  /** Lesotho (Loti) */
  | 'LSL'
  /** Lithuania (Euro) */
  | 'EUR'
  /** Luxembourg (Euro) */
  | 'EUR'
  /** Latvia (Euro) */
  | 'EUR'
  /** Libya (Libyan Dinar) */
  | 'LYD'
  /** Morocco (Moroccan Dirham) */
  | 'MAD'
  /** Monaco (Euro) */
  | 'EUR'
  /** Moldova Republic (Moldovan Leu) */
  | 'MDL'
  /** Montenegro (Euro) */
  | 'EUR'
  /** Saint Martin French Part (Euro) */
  | 'EUR'
  /** Madagascar (Malagasy Ariary) */
  | 'MGA'
  /** Marshall Islands The (US Dollar) */
  | 'USD'
  /** Republic Of North Macedonia (Denar) */
  | 'MKD'
  /** Mali (CFA Franc BCEAO) */
  | 'XOF'
  /** Myanmar (Kyat) */
  | 'MMK'
  /** Mongolia (Tugrik) */
  | 'MNT'
  /** Macao (Pataca) */
  | 'MOP'
  /** Northern Mariana Islands (US Dollar) */
  | 'USD'
  /** Martinique (Euro) */
  | 'EUR'
  /** Mauritania (Ouguiya) */
  | 'MRO'
  /** Montserrat (East Caribbean Dollar) */
  | 'XCD'
  /** Malta (Euro) */
  | 'EUR'
  /** Mauritius (Mauritius Rupee) */
  | 'MUR'
  /** Maldives (Rufiyaa) */
  | 'MVR'
  /** Malawi (Kwacha) */
  | 'MWK'
  /** Mexico (Mexican Peso) */
  | 'MXN'
  /** Malaysia (Malaysian Ringgit) */
  | 'MYR'
  /** Mozambique (Mozambique Metical) */
  | 'MZN'
  /** Namibia (Namibia Dollar) */
  | 'NAD'
  /** New Caledonia (CFP Franc) */
  | 'XPF'
  /** Niger The (CFA Franc BCEAO) */
  | 'XOF'
  /** Norfolk Island (Australian Dollar) */
  | 'AUD'
  /** Nigeria (Naira) */
  | 'NGN'
  /** Nicaragua (Cordoba Oro) */
  | 'NIO'
  /** Netherlands (Euro) */
  | 'EUR'
  /** Norway (Norwegian Krone) */
  | 'NOK'
  /** Nepal (Nepalese Rupee) */
  | 'NPR'
  /** Nauru (Australian Dollar) */
  | 'AUD'
  /** Niue (New Zealand Dollar) */
  | 'NZD'
  /** New Zealand (New Zealand Dollar) */
  | 'NZD'
  /** Oman (Rial Omani) */
  | 'OMR'
  /** Panama (Balboa) */
  | 'PAB'
  /** Peru (Nuevo Sol) */
  | 'PEN'
  /** French Polynesia (CFP Franc) */
  | 'XPF'
  /** Papua New Guinea (Kina) */
  | 'PGK'
  /** Philippines (Philippine Peso) */
  | 'PHP'
  /** Pakistan (Pakistan Rupee) */
  | 'PKR'
  /** Poland (Zloty) */
  | 'PLN'
  /** Saint Pierre And Miquelon (Euro) */
  | 'EUR'
  /** Pitcairn (New Zealand Dollar) */
  | 'NZD'
  /** Puerto Rico (US Dollar) */
  | 'USD'
  /** Palestine (No universal currency) */
  | 'ILS'
  /** Portugal (Euro) */
  | 'EUR'
  /** Palau (US Dollar) */
  | 'USD'
  /** Paraguay (Guarani) */
  | 'PYG'
  /** Qatar (Qatari Rial) */
  | 'QAR'
  /** Reunion (Euro) */
  | 'EUR'
  /** Romania (Romanian Leu) */
  | 'RON'
  /** Serbia (Serbian Dinar) */
  | 'RSD'
  /** Russian Federation (Russian Ruble) */
  | 'RUB'
  /** Rwanda (Rwanda Franc) */
  | 'RWF'
  /** Saudi Arabia (Saudi Riyal) */
  | 'SAR'
  /** Solomon Islands (Solomon Islands Dollar) */
  | 'SBD'
  /** Seychelles (Seychelles Rupee) */
  | 'SCR'
  /** Sudan (Sudanese Pound) */
  | 'SDG'
  /** Sweden (Swedish Krona) */
  | 'SEK'
  /** Singapore (Singapore Dollar) */
  | 'SGD'
  /** Saint Helena Ascension And Tristan Da Cunha (Saint Helena Pound) */
  | 'SHP'
  /** Slovenia (Euro) */
  | 'EUR'
  /** Svalbard and Jan Mayen (Norwegian Krone) */
  | 'NOK'
  /** Slovakia (Euro) */
  | 'EUR'
  /** Sierra Leone (Leone) */
  | 'SLL'
  /** San Marino (Euro) */
  | 'EUR'
  /** Senegal (CFA Franc BCEAO) */
  | 'XOF'
  /** Somalia (Somali Shilling) */
  | 'SOS'
  /** Suriname (Surinam Dollar) */
  | 'SRD'
  /** South Sudan (South Sudanese Pound) */
  | 'SSP'
  /** Sao Tome And Principe (Dobra) */
  | 'STD'
  /** El Salvador (El Salvador Colon) */
  | 'SVC'
  /** Sint Maarten Dutch Part (Netherlands Antillean Guilder) */
  | 'ANG'
  /** Syrian Arab Republic (Syrian Pound) */
  | 'SYP'
  /** Swaziland (Lilangeni) */
  | 'SZL'
  /** Turks And Caicos Islands (US Dollar) */
  | 'USD'
  /** Chad (CFA Franc BEAC) */
  | 'XAF'
  /** French Southern Territories (Euro) */
  | 'EUR'
  /** Togo (CFA Franc BCEAO) */
  | 'XOF'
  /** Thailand (Baht) */
  | 'THB'
  /** Tajikistan (Somoni) */
  | 'TJS'
  /** Tokelau (New Zealand Dollar) */
  | 'NZD'
  /** Timor Leste (US Dollar) */
  | 'USD'
  /** Turkmenistan (Turkmenistan New Manat) */
  | 'TMT'
  /** Tunisia (Tunisian Dinar) */
  | 'TND'
  /** Tonga (Pa’anga) */
  | 'TOP'
  /** Turkey (Turkish Lira) */
  | 'TRY'
  /** Trinidad And Tobago (Trinidad and Tobago Dollar) */
  | 'TTD'
  /** Tuvalu (Australian Dollar) */
  | 'AUD'
  /** Taiwan Province Of China (New Taiwan Dollar) */
  | 'TWD'
  /** Tanzania United Republic (Tanzanian Shilling) */
  | 'TZS'
  /** Ukraine (Hryvnia) */
  | 'UAH'
  /** Uganda (Uganda Shilling) */
  | 'UGX'
  /** United States Minor Outlying Islands (US Dollar) */
  | 'USD'
  /** United States Of America (US Dollar) */
  | 'USD'
  /** Uruguay (Peso Uruguayo) */
  | 'UYU'
  /** Uzbekistan (Uzbekistan Sum) */
  | 'UZS'
  /** Holy See (Euro) */
  | 'EUR'
  /** Saint Vincent And The Grenadines (East Caribbean Dollar) */
  | 'XCD'
  /** Venezuela Bolivarian Republic (Bolivar) */
  | 'USD'
  /** Virgin Islands U S (US Dollar) */
  | 'USD'
  /** Viet Nam (Dong) */
  | 'VND'
  /** Vanuatu (Vatu) */
  | 'VUV'
  /** Wallis And Futuna (CFP Franc) */
  | 'XPF'
  /** Samoa (Tala) */
  | 'WST'
  /** Yemen (Yemeni Rial) */
  | 'YER'
  /** Mayotte (Euro) */
  | 'EUR'
  /** South Africa (Rand) */
  | 'ZAR'
  /** Zambia (Zambian Kwacha) */
  | 'ZMK'
  /** Zimbabwe (Zimbabwe Dollar) */
  | 'ZWL'
)

export const enum Currency {
  /** Andorra (Euro) */
  AD = 'EUR',
  /** United Arab Emirates (UAE Dirham) */
  AE = 'AED',
  /** Afghanistan (Afghani) */
  AF = 'AFN',
  /** Antigua And Barbuda (East Caribbean Dollar) */
  AG = 'XCD',
  /** Anguilla (East Caribbean Dollar) */
  AI = 'XCD',
  /** Albania (Lek) */
  AL = 'ALL',
  /** Armenia (Armenian Dram) */
  AM = 'AMD',
  /** Angola (Kwanza) */
  AO = 'AOA',
  /** Argentina (Argentine Peso) */
  AR = 'ARS',
  /** American Samoa (US Dollar) */
  AS = 'USD',
  /** Austria (Euro) */
  AT = 'EUR',
  /** Australia (Australian Dollar) */
  AU = 'AUD',
  /** Aruba (Aruban Florin) */
  AW = 'AWG',
  /** Aland Islands (Euro) */
  AX = 'EUR',
  /** Azerbaijan (Azerbaijanian Manat) */
  AZ = 'AZN',
  /** Bosnia And Herzegovina (Convertible Mark) */
  BA = 'BAM',
  /** Barbados (Barbados Dollar) */
  BB = 'BBD',
  /** Bangladesh (Taka) */
  BD = 'BDT',
  /** Belgium (Euro) */
  BE = 'EUR',
  /** Burkina Faso (CFA Franc BCEAO) */
  BF = 'XOF',
  /** Bulgaria (Bulgarian Lev) */
  BG = 'BGN',
  /** Bahrain (Bahraini Dinar) **/
  BH = 'BHD',
  /** Burundi (Burundi Franc) */
  BI = 'BIF',
  /** Benin (CFA Franc BCEAO) */
  BJ = 'XOF',
  /** Saint Barthelemy (Euro) */
  BL = 'EUR',
  /** Bermuda (Bermudian Dollar) */
  BM = 'BMD',
  /** Bolivia Plurinational State (Mvdol) */
  BN = 'BND',
  /** Bolivia Plurinational State (Boliviano) */
  BO = 'BOB',
  /** Bonaire Sint Eustatius And Saba (US Dollar) */
  BQ = 'USD',
  /** Brazil (Brazilian Real) */
  BR = 'BRL',
  /** Bahamas (Bahamian Dollar) **/
  BS = 'BSD',
  /** Bhutan (Ngultrum) */
  BT = 'BTN',
  /** Bouvet Island (Norwegian Krone) */
  BV = 'NOK',
  /** Botswana (Pula) */
  BW = 'BWP',
  /** Belarus (Belarussian Ruble) */
  BY = 'BYN',
  /** Belize (Belize Dollar) */
  BZ = 'BZD',
  /** Canada (Canadian Dollar) */
  CA = 'CAD',
  /** Cocos Keeling Islands (Australian Dollar) */
  CC = 'AUD',
  /** Congo The Democratic Republic (Congolese Franc) */
  CD = 'CDF',
  /** Central African Republic The (CFA Franc BEAC) */
  CF = 'XAF',
  /** Congo The (CFA Franc BEAC) */
  CG = 'XAF',
  /** Switzerland (Swiss Franc) */
  CH = 'CHF',
  /** Cote Divoire (CFA Franc BCEAO) */
  CI = 'XOF',
  /** Cook Islands The (New Zealand Dollar) */
  CK = 'NZD',
  /** Chile (Chilean Peso) */
  CL = 'CLP',
  /** Cameroon (CFA Franc BEAC) */
  CM = 'XAF',
  /** China (Yuan Renminbi) */
  CN = 'CNY',
  /** Colombia (Colombian Peso) */
  CO = 'COP',
  /** Costa Rica (Costa Rican Colon) */
  CR = 'CRC',
  /** Cuba (Cuban Peso) */
  CU = 'CUP',
  /** Cabo Verde (Cabo Verde Escudo) */
  CV = 'CVE',
  /** Curacao (Netherlands Antillean Guilder) */
  CW = 'ANG',
  /** Christmas Island (Australian Dollar) */
  CX = 'AUD',
  /** Cyprus (Euro) */
  CY = 'EUR',
  /** Czech Republic The (Czech Koruna) */
  CZ = 'CZK',
  /** Germany (Euro) */
  DE = 'EUR',
  /** Djibouti (Djibouti Franc) */
  DJ = 'DJF',
  /** Denmark (Danish Krone) */
  DK = 'DKK',
  /** Dominica (East Caribbean Dollar) */
  DM = 'XCD',
  /** Dominican Republic (Dominican Peso) */
  DO = 'DOP',
  /** Algeria (Algerian Dinar) **/
  DZ = 'DZD',
  /** Ecuador (US Dollar) */
  EC = 'USD',
  /** Estonia (Euro) */
  EE = 'EUR',
  /** Egypt (Egyptian Pound) */
  EG = 'EGP',
  /** Western Sahara (Moroccan Dirham) */
  EH = 'MAD',
  /** Eritrea (Nakfa) */
  ER = 'ERN',
  /** Spain (Euro) */
  ES = 'EUR',
  /** Ethiopia (Ethiopian Birr) */
  ET = 'ETB',
  /** Finland (Euro) */
  FI = 'EUR',
  /** Fiji (Fiji Dollar) */
  FJ = 'FJD',
  /** Falkland Islands Malvinas (Falkland Islands Pound) */
  FK = 'FKP',
  /** Micronesia Federated States (US Dollar) */
  FM = 'USD',
  /** Faroe Islands The (Danish Krone) */
  FO = 'DKK',
  /** France (Euro) */
  FR = 'EUR',
  /** Gabon (CFA Franc BEAC) */
  GA = 'XAF',
  /** United Kingdom Of Great Britain And Northern Ireland (Pound Sterling) */
  GB = 'GBP',
  /** Grenada (East Caribbean Dollar) */
  GD = 'XCD',
  /** Georgia (Lari) */
  GE = 'GEL',
  /** French Guiana (Euro) */
  GF = 'EUR',
  /** Guernsey (Pound Sterling) */
  GG = 'GBP',
  /** Ghana (Ghana Cedi) */
  GH = 'GHS',
  /** Gibraltar (Gibraltar Pound) */
  GI = 'GIP',
  /** Greenland (Danish Krone) */
  GL = 'DKK',
  /** Gambia (Dalasi) */
  GM = 'GMD',
  /** Guinea (Guinea Franc) */
  GN = 'GNF',
  /** Guadeloupe (Euro) */
  GP = 'EUR',
  /** Equatorial Guinea (CFA Franc BEAC) */
  GQ = 'XAF',
  /** Greece (Euro) */
  GR = 'EUR',
  /** South Georgia and The South Sandwich Islands (No universal currency) */
  GS = 'GBP',
  /** Guatemala (Quetzal) */
  GT = 'GTQ',
  /** Guam (US Dollar) */
  GU = 'USD',
  /** Guinea Bissau (CFA Franc BCEAO) */
  GW = 'XOF',
  /** Guyana (Guyana Dollar) */
  GY = 'GYD',
  /** Hong Kong (Hong Kong Dollar) */
  HK = 'HKD',
  /** Heard Island And Mcdonald Islands (Australian Dollar) */
  HM = 'AUD',
  /** Honduras (Lempira) */
  HN = 'HNL',
  /** Croatia (Kuna) */
  HR = 'HRK',
  /** Haiti (US Dollar) */
  HT = 'HTG',
  /** Hungary (Forint) */
  HU = 'HUF',
  /** Indonesia (Rupiah) */
  ID = 'IDR',
  /** Ireland (Euro) */
  IE = 'EUR',
  /** Israel (New Israeli Sheqel) */
  IL = 'ILS',
  /** Isle Of Man (Pound Sterling) */
  IM = 'GBP',
  /** India (Indian Rupee) */
  IN = 'INR',
  /** British Indian Ocean Territory (US Dollar) */
  IO = 'USD',
  /** Iraq (Iraqi Dinar) */
  IQ = 'IQD',
  /** Iran Islamic Republic (Iranian Rial) */
  IR = 'IRR',
  /** Iceland (Iceland Krona) */
  IS = 'ISK',
  /** Italy (Euro) */
  IT = 'EUR',
  /** Jersey (Pound Sterling) */
  JE = 'GBP',
  /** Jamaica (Jamaican Dollar) */
  JM = 'JMD',
  /** Jordan (Jordanian Dinar) */
  JO = 'JOD',
  /** Japan (Yen) */
  JP = 'JPY',
  /** Kenya (Kenyan Shilling) */
  KE = 'KES',
  /** Kazakhstan (Tenge) */
  KG = 'KGS',
  /** Cambodia (Riel) */
  KH = 'KHR',
  /** Kiribati (Australian Dollar) */
  KI = 'AUD',
  /** Comoros (Comoro Franc) */
  KM = 'KMF',
  /** Saint Kitts And Nevis (East Caribbean Dollar) */
  KN = 'XCD',
  /** North Korea (North Korean Won) */
  KP = 'KPW',
  /** Korea The Republic Of (Won) */
  KR = 'KRW',
  /** Kuwait (Kuwaiti Dinar) */
  KW = 'KWD',
  /** Cayman Islands The (Cayman Islands Dollar) */
  KY = 'KYD',
  /** Kazakhstan (Tenge) */
  KZ = 'KZT',
  /** Lao Peoples Democratic Republic (Kip) */
  LA = 'LAK',
  /** Lebanon (Lebanese Pound) */
  LB = 'LBP',
  /** Saint Lucia (East Caribbean Dollar) */
  LC = 'XCD',
  /** Liechtenstein (Swiss Franc) */
  LI = 'CHF',
  /** Sri Lanka (Sri Lanka Rupee) */
  LK = 'LKR',
  /** Liberia (Liberian Dollar) */
  LR = 'LRD',
  /** Lesotho (Loti) */
  LS = 'LSL',
  /** Lithuania (Euro) */
  LT = 'EUR',
  /** Luxembourg (Euro) */
  LU = 'EUR',
  /** Latvia (Euro) */
  LV = 'EUR',
  /** Libya (Libyan Dinar) */
  LY = 'LYD',
  /** Morocco (Moroccan Dirham) */
  MA = 'MAD',
  /** Monaco (Euro) */
  MC = 'EUR',
  /** Moldova Republic (Moldovan Leu) */
  MD = 'MDL',
  /** Montenegro (Euro) */
  ME = 'EUR',
  /** Saint Martin French Part (Euro) */
  MF = 'EUR',
  /** Madagascar (Malagasy Ariary) */
  MG = 'MGA',
  /** Marshall Islands The (US Dollar) */
  MH = 'USD',
  /** Republic Of North Macedonia (Denar) */
  MK = 'MKD',
  /** Mali (CFA Franc BCEAO) */
  ML = 'XOF',
  /** Myanmar (Kyat) */
  MM = 'MMK',
  /** Mongolia (Tugrik) */
  MN = 'MNT',
  /** Macao (Pataca) */
  MO = 'MOP',
  /** Northern Mariana Islands (US Dollar) */
  MP = 'USD',
  /** Martinique (Euro) */
  MQ = 'EUR',
  /** Mauritania (Ouguiya) */
  MR = 'MRO',
  /** Montserrat (East Caribbean Dollar) */
  MS = 'XCD',
  /** Malta (Euro) */
  MT = 'EUR',
  /** Mauritius (Mauritius Rupee) */
  MU = 'MUR',
  /** Maldives (Rufiyaa) */
  MV = 'MVR',
  /** Malawi (Kwacha) */
  MW = 'MWK',
  /** Mexico (Mexican Peso) */
  MX = 'MXN',
  /** Malaysia (Malaysian Ringgit) */
  MY = 'MYR',
  /** Mozambique (Mozambique Metical) */
  MZ = 'MZN',
  /** Namibia (Namibia Dollar) */
  NA = 'NAD',
  /** New Caledonia (CFP Franc) */
  NC = 'XPF',
  /** Niger The (CFA Franc BCEAO) */
  NE = 'XOF',
  /** Norfolk Island (Australian Dollar) */
  NF = 'AUD',
  /** Nigeria (Naira) */
  NG = 'NGN',
  /** Nicaragua (Cordoba Oro) */
  NI = 'NIO',
  /** Netherlands (Euro) */
  NL = 'EUR',
  /** Norway (Norwegian Krone) */
  NO = 'NOK',
  /** Nepal (Nepalese Rupee) */
  NP = 'NPR',
  /** Nauru (Australian Dollar) */
  NR = 'AUD',
  /** Niue (New Zealand Dollar) */
  NU = 'NZD',
  /** New Zealand (New Zealand Dollar) */
  NZ = 'NZD',
  /** Oman (Rial Omani) */
  OM = 'OMR',
  /** Panama (Balboa) */
  PA = 'PAB',
  /** Peru (Nuevo Sol) */
  PE = 'PEN',
  /** French Polynesia (CFP Franc) */
  PF = 'XPF',
  /** Papua New Guinea (Kina) */
  PG = 'PGK',
  /** Philippines (Philippine Peso) */
  PH = 'PHP',
  /** Pakistan (Pakistan Rupee) */
  PK = 'PKR',
  /** Poland (Zloty) */
  PL = 'PLN',
  /** Saint Pierre And Miquelon (Euro) */
  PM = 'EUR',
  /** Pitcairn (New Zealand Dollar) */
  PN = 'NZD',
  /** Puerto Rico (US Dollar) */
  PR = 'USD',
  /** Palestine (No universal currency) */
  PS = 'ILS',
  /** Portugal (Euro) */
  PT = 'EUR',
  /** Palau (US Dollar) */
  PW = 'USD',
  /** Paraguay (Guarani) */
  PY = 'PYG',
  /** Qatar (Qatari Rial) */
  QA = 'QAR',
  /** Reunion (Euro) */
  RE = 'EUR',
  /** Romania (Romanian Leu) */
  RO = 'RON',
  /** Serbia (Serbian Dinar) */
  RS = 'RSD',
  /** Russian Federation (Russian Ruble) */
  RU = 'RUB',
  /** Rwanda (Rwanda Franc) */
  RW = 'RWF',
  /** Saudi Arabia (Saudi Riyal) */
  SA = 'SAR',
  /** Solomon Islands (Solomon Islands Dollar) */
  SB = 'SBD',
  /** Seychelles (Seychelles Rupee) */
  SC = 'SCR',
  /** Sudan (Sudanese Pound) */
  SD = 'SDG',
  /** Sweden (Swedish Krona) */
  SE = 'SEK',
  /** Singapore (Singapore Dollar) */
  SG = 'SGD',
  /** Saint Helena Ascension And Tristan Da Cunha (Saint Helena Pound) */
  SH = 'SHP',
  /** Slovenia (Euro) */
  SI = 'EUR',
  /** Svalbard and Jan Mayen (Norwegian Krone) */
  SJ = 'NOK',
  /** Slovakia (Euro) */
  SK = 'EUR',
  /** Sierra Leone (Leone) */
  SL = 'SLL',
  /** San Marino (Euro) */
  SM = 'EUR',
  /** Senegal (CFA Franc BCEAO) */
  SN = 'XOF',
  /** Somalia (Somali Shilling) */
  SO = 'SOS',
  /** Suriname (Surinam Dollar) */
  SR = 'SRD',
  /** South Sudan (South Sudanese Pound) */
  SS = 'SSP',
  /** Sao Tome And Principe (Dobra) */
  ST = 'STD',
  /** El Salvador (El Salvador Colon) */
  SV = 'SVC',
  /** Sint Maarten Dutch Part (Netherlands Antillean Guilder) */
  SX = 'ANG',
  /** Syrian Arab Republic (Syrian Pound) */
  SY = 'SYP',
  /** Swaziland (Lilangeni) */
  SZ = 'SZL',
  /** Turks And Caicos Islands (US Dollar) */
  TC = 'USD',
  /** Chad (CFA Franc BEAC) */
  TD = 'XAF',
  /** French Southern Territories (Euro) */
  TF = 'EUR',
  /** Togo (CFA Franc BCEAO) */
  TG = 'XOF',
  /** Thailand (Baht) */
  TH = 'THB',
  /** Tajikistan (Somoni) */
  TJ = 'TJS',
  /** Tokelau (New Zealand Dollar) */
  TK = 'NZD',
  /** Timor Leste (US Dollar) */
  TL = 'USD',
  /** Turkmenistan (Turkmenistan New Manat) */
  TM = 'TMT',
  /** Tunisia (Tunisian Dinar) */
  TN = 'TND',
  /** Tonga (Pa’anga) */
  TO = 'TOP',
  /** Turkey (Turkish Lira) */
  TR = 'TRY',
  /** Trinidad And Tobago (Trinidad and Tobago Dollar) */
  TT = 'TTD',
  /** Tuvalu (Australian Dollar) */
  TV = 'AUD',
  /** Taiwan Province Of China (New Taiwan Dollar) */
  TW = 'TWD',
  /** Tanzania United Republic (Tanzanian Shilling) */
  TZ = 'TZS',
  /** Ukraine (Hryvnia) */
  UA = 'UAH',
  /** Uganda (Uganda Shilling) */
  UG = 'UGX',
  /** United States Minor Outlying Islands (US Dollar) */
  UM = 'USD',
  /** United States Of America (US Dollar) */
  US = 'USD',
  /** Uruguay (Peso Uruguayo) */
  UY = 'UYU',
  /** Uzbekistan (Uzbekistan Sum) */
  UZ = 'UZS',
  /** Holy See (Euro) */
  VA = 'EUR',
  /** Saint Vincent And The Grenadines (East Caribbean Dollar) */
  VC = 'XCD',
  /** Venezuela Bolivarian Republic (Bolivar) */
  VG = 'USD',
  /** Virgin Islands U S (US Dollar) */
  VI = 'USD',
  /** Viet Nam (Dong) */
  VN = 'VND',
  /** Vanuatu (Vatu) */
  VU = 'VUV',
  /** Wallis And Futuna (CFP Franc) */
  WF = 'XPF',
  /** Samoa (Tala) */
  WS = 'WST',
  /** Yemen (Yemeni Rial) */
  YE = 'YER',
  /** Mayotte (Euro) */
  YT = 'EUR',
  /** South Africa (Rand) */
  ZA = 'ZAR',
  /** Zambia (Zambian Kwacha) */
  ZM = 'ZMK',
  /** Zimbabwe (Zimbabwe Dollar) */
  ZW = 'ZWL',
}

/**
 * Country Name
 *
 * Extracts the country name from the ICountries interface
 * which is use as the Return type reference
 */
export type CurrencyCode<ISO> = (
  ISO extends CountryCodes
  ? ICurrencies[ISO]
  : ISO extends Currency
  ? Currency
  : never
)
