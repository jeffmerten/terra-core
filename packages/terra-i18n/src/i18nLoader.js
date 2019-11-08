/* eslint-disable */
import loadIntl from './intlLoaders';
import loadTranslations from './translationsLoaders';

const permitParams = (callback) => {
  if (typeof (callback) !== 'function') {
    throw new Error('Second argument must be function');
  }
}

export default (locale, callback, scope) => {
  permitParams(callback);

  if (!global.Intl) {
    require('intl')
    loadIntl(locale);
  }

  require('date-time-format-timezone'); // Polyfills timezone support in Intl.DateTimeFormat API

  loadTranslations(locale, callback, scope);
};
