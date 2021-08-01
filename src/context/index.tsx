import { useState, createContext, useContext } from "react";
import { languageOptions, dictionaryList } from "../languages";

export const LanguageContext = createContext({
  language: languageOptions[0],
  dictionary: dictionaryList[languageOptions[0].id],
  setLanguage: void {},
});

export function LanguageProvider(props) {
  const languageContext = useContext(LanguageContext);
  const [language, setLanguage] = useState(languageContext.language);
  const [dictionary, setDictionary] = useState(languageContext.dictionary);

  const provider = {
    language,
    dictionary,
    setLanguage: (selectedLanguage: any) => {
      setLanguage(selectedLanguage);
      setDictionary(dictionaryList[selectedLanguage.id]);
    },
  };

  return (
    <LanguageContext.Provider value={provider}>
      {props.children}
    </LanguageContext.Provider>
  );
}

export function Text(props: any) {
  const languageContext = useContext(LanguageContext);
  return languageContext.dictionary[props.tid];
}

export const getText = (tid: string, languageContext: any) => {
  return languageContext.dictionary[tid];
};
