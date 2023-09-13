import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Pagination } from "antd";
import Categories from "../components/categories/Categories";
import List from "../components/list/List";
import HeaderComponents from "../components/headerComponents/HeaderComponents";
import IMAGES from "../assets/img";

const GoodsPage = ({ addToOrder, list, setList }) => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [page, setPage] = useState(1);

  const numShow = 9; //кол-во отображаемых товаров

  const chooseCategory = (category) => {
    setSelectedCategory(category);
  };

  const filterListByCountPage = list.filter((item) => {
    if (selectedCategory === "all") {
      return item;
    } else {
      return item.category === selectedCategory;
    }
  });

  const filteredListByCategory = filterListByCountPage.filter((item, id) => {
    return id + 1 <= page * numShow && id >= page * numShow - numShow;
  });

  return (
    <>
      <HeaderComponents
        pageTitle={t("goodsPage.headerTitle")}
        headerImage={IMAGES.goodsHeaderImg}
        activeLink={"/goods"}
      />
      <div className="container">
        <Categories
          chooseCategory={chooseCategory}
          selectedCategory={selectedCategory}
          setPage={setPage}
        />
        <div style={{ marginBottom: "30px" }}>
          Показано: {filteredListByCategory.length} из{" "}
          {filterListByCountPage.length} товаров
        </div>
        <List
          addToOrder={addToOrder}
          list={filteredListByCategory}
          setList={setList}
        />
        {filterListByCountPage.length > numShow && (
          <Pagination
            simple
            onChange={setPage}
            current={page}
            total={filterListByCountPage.length}
            pageSize={numShow}
            style={{ margin: "0 auto 100px", textAlign: "center" }}
          />
        )}

        {/* <Pagination disabled simple current={page} total={list.length} /> */}
      </div>
    </>
  );
};

export default GoodsPage;