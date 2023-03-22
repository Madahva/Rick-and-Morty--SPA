import type { ReactElement } from "react";
import css from "../assets/styles/Home.module.css";
import { useEffect } from "react";
import { useAppDispatch } from "../redux/hooks";
import { fetchCharacters, fetchFilterNames } from "../redux/features/homeSlice";
import { Filters } from "./Filters";
import { CardsContainer } from "./CardsContainer";
import { Pagination } from "./Pagination";

export function Home(): ReactElement {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFilterNames());
  }, []);

  return (
    <main className={css.home}>
      <Filters />
      <CardsContainer />
      <Pagination />
    </main>
  );
}
