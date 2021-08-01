import { useState, useContext } from "react";
import Image from "next/image";
import { LanguageContext } from "@context/index";
import { languageOptions } from "@languages/index";

const FlagToggle: React.FC = ({ ...props }) => {
  const languageContext = useContext(LanguageContext);
  const [lang, setLang] = useState(languageContext.language.id);
  const isEn = lang === "en";

  const toggleLang = () => {
    if (languageContext.language.id === "en") {
      const selectedLanguage = languageOptions.find(item => item.id === "mm");
      languageContext.setLanguage(selectedLanguage);
      setLang("mm");
    } else {
      const selectedLanguage = languageOptions.find(item => item.id === "en");
      languageContext.setLanguage(selectedLanguage);
      setLang("en");
    }
  };

  return (
    <button
      onClick={toggleLang}
      className="icon-button"
      aria-label={`Toggle ${lang} language`}
      {...props}
      type="button"
    >
      {isEn ? (
        <Image
          src={require(`public/icons/en.svg`)}
          alt="English"
          width={22}
          height={22}
        />
      ) : (
        <Image
          src={require("public/icons/mm.svg")}
          alt="Myanmar"
          width={22}
          height={22}
        />
      )}
    </button>
  );
};
export default FlagToggle;
