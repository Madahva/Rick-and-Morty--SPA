import type { ReactElement } from "react";
import css from "../assets/styles/Filters.module.css";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  fetchFilteredCharacters,
  selectFilterNames,
  clearFilteredCharacters,
  selectSearch,
  selectFilters,
  setFilters,
} from "../redux/features/homeSlice";
import { FilterNames } from "../type";

export function Filters(): ReactElement {
  const filterNames: FilterNames = useAppSelector(selectFilterNames);
  const search: string = useAppSelector(selectSearch);
  const filters = useAppSelector(selectFilters);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(clearFilteredCharacters());
    dispatch(fetchFilteredCharacters(generateQueryString(filters)));
  }, [dispatch, filters]);

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      setFilters({
        ...filters,
        [event.target.name]: event.target.value,
      })
    );
  };

  function generateQueryString(filterObject: any): string {
    let queryString = "";
    for (let filterName in filterObject) {
      if (filterObject[filterName] !== "") {
        queryString += `${filterName}=${filterObject[filterName]}&`;
      }
    }
    return `${queryString}name=${search}`;
  }

  const handleFilterReset = () => {
    dispatch(
      setFilters({
        gender: "",
        status: "",
        species: "",
        type: "",
      })
    );

    const selectElements = document.getElementsByTagName("select");
    for (let i = 0; i < selectElements.length; i++) {
      const options = selectElements[i].options;
      selectElements[i].selectedIndex = options.length - 1;
    }
  };

  return (
    <section className={css.filters}>
      {filterNames &&
        Object.keys(filterNames).map((filterName, index) => {
          return (
            <select
              onChange={handleFilterChange}
              name={filterName}
              key={index}
              className={css.filters__select}
              value={filters[filterName as keyof typeof filters]}
            >
              {filterNames[filterName as keyof FilterNames]
                .filter((filterOption: string) => filterOption !== "")
                .map((filterOption: string, index: number) => {
                  return (
                    <option key={index} value={filterOption}>
                      {filterOption}
                    </option>
                  );
                })}
              <option value="">{filterName}</option>
            </select>
          );
        })}
      <button className={css.filters__select} onClick={handleFilterReset}>
        Clean 🔮
      </button>
    </section>
  );
}
