/**
 * Given 'LOCALES' array, define function 'createLocalesSettings' to return an object with locales settings
 *
 * expected:
 * {
 *  "EN": {id: 0, enabled: true},
 *  "GR": {id: 1, enabled: false},
 *  "FR": {id: 2, enabled: false},
 *  "IT": {id: 3, enabled: false},
 *  "PT": {id: 4, enabled: false},
 * }
 */

const LOCALES = ["EN", "GR", "FR", "IT", "PT"];

export const createLocalesSettings = (locales) => {
  const localesSettings = locales.reduce((accumulator, locale, index) => {
    // accumulator[locale] = {
    //   id: index,
    //   enabled: locale === "EN",
    // };

    return {
      ...accumulator, //{} -> Acumulador del object
      [locale]: {
        //Valor itreado del array
        id: index,
        enabled: locale === "EN",
      },
    };
    //Cada iteración va acumulando los objetos!
  }, {});

  return localesSettings;
};

console.dir(createLocalesSettings(LOCALES));
