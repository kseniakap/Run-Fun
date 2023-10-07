import React from "react";
import { useTranslation } from "react-i18next";
import GoodInBasket from "../components/goodInBasket/GoodInBasket";

import "./../style/style.scss";

const OrderPage = () => {
  const { t } = useTranslation();
  return (
    <>

      <div className="container">
        <GoodInBasket />
      </div>
    </>
  );
};

export default OrderPage;
