import React from "react";
import TeamMember from "../components/teamMember/TeamMember";

import { useTranslation } from "react-i18next";
import IMAGES from "../assets/img";

const TeamMemberPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <TeamMember />
    </>
  );
};

export default TeamMemberPage;
