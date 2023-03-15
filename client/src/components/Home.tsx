import type { ReactElement } from "react";
import { CardsContainer } from "./CardsContainer";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchCharacters, selectPagination, selectCharacters } from "../redux/features/homeSlice";
import { Pagination } from "../type";

export function Home(): ReactElement {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  const pagination: Pagination = useAppSelector(selectPagination);
  console.log(pagination)

  return (
    <>
      <CardsContainer />
    </>
  );
}
