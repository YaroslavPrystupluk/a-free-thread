import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.use(HttpApi)
	.init({
		supportedLngs: ['en', 'ua'],
		fallbackLng: 'ua',
		debug: false,
		backend: {
			loadPath: '/locales/{{lng}}/translation.json',
		},
	});

export default i18n;
