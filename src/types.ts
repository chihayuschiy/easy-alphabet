import { TFuncKey } from "react-i18next";

export type AlphabetGroup = {
  from: string[];
  to: string[];
};

export type AlphabetTransform = "ru-ka" | "ka-ru" | "ru-hy";
export type AlphabetTextLanguage = "ru" | "ka";

export type AlphabetDescription = {
  transform: AlphabetTransform;
  textLanguage: AlphabetTextLanguage;
  groups: AlphabetGroup[];
  nameKey: TFuncKey;
  isCustom: boolean;
  isCaseSensitive?: boolean;
};
