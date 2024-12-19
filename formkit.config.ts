import { fr } from "@formkit/i18n";
import { defaultConfig } from "@formkit/vue";
import { rootClasses } from "./formkit.theme";
import fileValidation from "./formkit-custom-rules/fileValidation";

export default defaultConfig({
  locales: { fr },
  locale: "fr",
  config: {
    rootClasses,
  },
  rules: {
    file: fileValidation,
  },
});
