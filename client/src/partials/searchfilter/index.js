import React, { useEffect, useState } from "react";
import Markup from "./markup";
import DropdownGroup from "./dropdownGroup/index";
import apiClinet from "../../network/apiClient";
import { CheckerContext } from "../../helpers/checkerContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const Searchfilter = ({ filterHandler }) => {
  const [checkedDeparts, setCheckedDeparts] = useState([]);
  const [checkedPromotions, setCheckedPromotions] = useState([]);
  const [Departs, setDeparts] = useState([]);
  const [Promo, setPromo] = useState([]);

  let handleDeparts = (id) => {
    const currentCategoryId = checkedDeparts.indexOf(id);
    let newCheck = [...checkedDeparts];
    if (currentCategoryId === -1) {
      newCheck.push(id);
    } else {
      newCheck.splice(currentCategoryId, 1);
    }
    setCheckedDeparts(newCheck);
    filterHandler(newCheck, "department_id");
  };

  let handlePromotions = (id) => {
    setCheckedPromotions(id);
    filterHandler(id, "promotions_id");
  };

  useEffect(() => {
    const getData = async () => {
      try {
        let departs = await apiClinet.getCategories();
        let promotions = await apiClinet.getPromotions();
        setDeparts(departs.data);
        setPromo(promotions.data);
      } catch (e) {
        throw Error;
      }
    };
    getData();
  }, []);

  return (
    <section id="searchfilter">
      <div className="m-search-filter-container">
        <div className="m-search-filter-container__header">
          <FontAwesomeIcon icon={faFilter} />
          <span>Filter Products's</span>
        </div>
        <div className="m-search-filter-container__body">
          <CheckerContext.Provider
            value={{
              handler: handleDeparts,
              state: checkedDeparts,
              type: "checkbox",
            }}
          >
            <Markup
              DropdownGroup={DropdownGroup}
              name="Departments"
              choices={Departs}
            />
          </CheckerContext.Provider>

          <CheckerContext.Provider
            value={{
              handler: handlePromotions,
              state: checkedPromotions,
              type: "radio",
            }}
          >
            <Markup
              DropdownGroup={DropdownGroup}
              name="Active Promotions"
              choices={Promo}
            />
          </CheckerContext.Provider>
          <CheckerContext.Provider
            value={{
              handler: handlePromotions,
              state: checkedPromotions,
              type: "textSelect",
            }}
          >
            <Markup
              DropdownGroup={DropdownGroup}
              name="Search For Promo Code"
              choices={Promo}
            />
          </CheckerContext.Provider>
        </div>
      </div>
    </section>
  );
};

export default Searchfilter;
