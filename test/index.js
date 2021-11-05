import test from 'ava';
import { getCurrency, Currencies } from '../package/index';

test('Country code', (t) => {

  t.is(getCurrency('SE'), 'SEK');
  t.is(getCurrency('Nl'), 'EUR');
  t.is(getCurrency('dE'), 'EUR');
  t.is(getCurrency('us'), 'USD');
  t.is(getCurrency('AU'), 'AUD');

  t.pass();

});

test('Country code is invalid', (t) => {

  t.throws(() => getCurrency('WW'), {
    message: '"WW" is an invalid ISO country code'
  });

  t.pass();
});

test('Country code in uppercase', (t) => {

  t.is(getCurrency('SE'), 'SEK');
  t.is(getCurrency('NL'), 'EUR');
  t.is(getCurrency('DE'), 'EUR');
  t.is(getCurrency('US'), 'USD');
  t.is(getCurrency('AU'), 'AUD');

  t.pass();

});

test('Country code in lowercase', (t) => {

  t.is(getCurrency('se'), 'SEK');
  t.is(getCurrency('nl'), 'EUR');
  t.is(getCurrency('de'), 'EUR');
  t.is(getCurrency('us'), 'USD');
  t.is(getCurrency('au'), 'AUD');

  t.pass();

});

test('Currencies exposed mapping export', (t) => {

  t.is(Currencies.SE, 'SEK');
  t.is(Currencies.NL, 'EUR');
  t.is(Currencies.DE, 'EUR');
  t.is(Currencies.US, 'USD');
  t.is(Currencies.AU, 'AUD');
  t.is(Currencies.RU, 'RUB');

  t.pass();

});
