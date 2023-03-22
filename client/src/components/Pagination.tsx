import type { ReactElement } from "react";
import { useEffect, useRef } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import {
  selectPagination,
  fetchFilteredCharacters,
} from "../redux/features/homeSlice";

export function Pagination(): ReactElement {
  const dispatch = useAppDispatch();

  const pagination = useAppSelector(selectPagination);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, { threshold: 1 });
    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, [pagination]);

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && pagination?.next) {
        const url: string | null = pagination?.next;
        const content: string = url && url.split("?")[1];
        dispatch(fetchFilteredCharacters(content));
      }
    });
  };
  return <div ref={sentinelRef}></div>;
}
