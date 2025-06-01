import {
  JEDNA_KARTA,
  LJUBAVNO_OTVARANJE,
  DVE_KARTE,
  TRI_KARTE,
  PET_KARATA,
  KELTSKI_KRST,
  ASTROLOSKO,
  KABALISTICKO,
} from "../data/layoutTemplates";

const getLayoutByTip = (tip) => {
  switch (tip) {
    case "jedna":
    case "karta-dana":
    case "da-ne":
      return JEDNA_KARTA.layout;
    case "ljubavno":
      return LJUBAVNO_OTVARANJE.layout;
    case "dve":
      return DVE_KARTE.layout;
    case "tri":
      return TRI_KARTE.layout;
    case "pet":
      return PET_KARATA.layout;
    case "keltski":
      return KELTSKI_KRST.layout;
    case "astrološko":
      return ASTROLOSKO.layout;
    case "drvo":
      return KABALISTICKO.layout;
    default:
      return [];
  }
};

export default getLayoutByTip;