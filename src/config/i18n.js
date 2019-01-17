import i18n from "i18next";
import DeviceInfo from "react-native-device-info";

const languageDetector = {
  type: "languageDetector",
  async: true, // flags below detection to be async
  detect: callback => callback(DeviceInfo.getDeviceLocale().replace("_", "-")),
  init: () => {},
  cacheUserLanguage: () => {}
};

i18n
  .use(languageDetector)
  .init({
    fallbackLng: "en",
    // have a initial namespace
    ns: ["translations"],
    defaultNS: "translations",
    interpolation: {
      escapeValue: false // not needed for react
    },
    resources: {},
    react: {
      wait: true
    }
  });

export default i18n;