import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            'Welcome!': 'Welcome!',
            'Password': 'Password'
        }
    },
    sp: {
        translation: {
            'Welcome!': '¡Bienvenido!',
            'Password': 'Contraseña'
        }
    }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    keySeparator: false,
    interpolation: {
        escapeValue: false
    },
    lng: 'en',
    fallbackLng: 'en'
  });

export default i18n;