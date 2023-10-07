import React from "react";
import { useTranslation } from "react-i18next";

import Team from "../components/team/Team";
import IMAGES from "./../assets/img";

const TeamPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Team />
    </>
  );
};

export default TeamPage;
