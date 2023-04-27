import type { ReactElement } from "react";
import css from "../assets/styles/Home.module.css";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  fetchFilterNames,
  clearDetails,
  selectSearch,
  clearSearch,
  setFilters,
} from "../redux/features/homeSlice";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Filters } from "./Filters";
import { CardsContainer } from "./CardsContainer";
import { Pagination } from "./Pagination";

export function Home({ visible, toggleModal }: any): ReactElement {
  const dispatch = useAppDispatch();
  const search = useAppSelector(selectSearch);

  useEffect(() => {
    dispatch(fetchFilterNames());
    dispatch(clearDetails());
  }, []);

  const handleClearSearch = () => {
    dispatch(clearSearch());
    dispatch(
      setFilters({
        gender: "",
        status: "",
        species: "",
        type: "",
      })
    );
  };

  return (
    <main
      className={css.home}
      style={{ opacity: !visible ? "1" : ".1",
      }}
      onClick={visible ? toggleModal : null}
    >
      <Filters />
      {search && (
        <div className={css.searchText} onClick={handleClearSearch}>
          <p>{search}</p>
          <FontAwesomeIcon
            icon={faCircleXmark}
            size="sm"
            style={{ color: "#9a35ef" }}
          />
        </div>
      )}
      <CardsContainer visible={visible} toggleModal={toggleModal} />
      <Pagination />
    </main>
  );
}
