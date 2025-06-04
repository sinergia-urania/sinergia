
import React from "react";
import { useTranslation } from "react-i18next";
import { getCardImagePath } from "../utils/getCardImagePath";

const CardGroupList = ({ cardKeys, getImage = getCardImagePath }) => {
  const { t } = useTranslation("cardMeanings");

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 p-4">
      {cardKeys.map((key) => (
        <div key={key} className="text-center text-yellow-200">
          <img
            src={getImage(key)}
            alt={t(`cards.${key}.name`, key)}
            className="w-full h-auto max-w-[110px] mx-auto mb-1 border border-yellow-400"
          />
          <p className="text-xs sm:text-sm">{t(`cards.${key}.name`, key)}</p>
        </div>
      ))}
    </div>
  );
};

export default CardGroupList;
