import { PhotoArea, SearchForm } from "@/components";
import style from "./style.module.css";
import { useSearchParams } from "react-router-dom";
import { useSearchPhotos } from "@/shared/hooks/useSearchPhotos";
import classNames from "classnames";
import { useEffect } from "react";

export const Home = () => {
  const [searchParams] = useSearchParams();
  const { data, fetchNextPage, hasNextPage, isLoading } = useSearchPhotos(searchParams.get("search") || "");
  const photos = (data?.pages || []).flatMap((page) => page.results);

  useEffect(() => {
    const initialHeight = window.innerHeight;

    document.documentElement.style.height = `${initialHeight}px`;
    document.body.style.height = `${initialHeight}px`;

    const onResize = () => {
      const newHeight = window.innerHeight;
      if (newHeight < initialHeight - 100) {
        document.body.style.height = `${initialHeight}px`;
      } else {
        document.body.style.height = '100%';
      }
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      document.body.style.height = '';
      document.documentElement.style.height = '';
    };
  }, []);

  return (
    <div
      className={classNames(
        style.wrapper,
        searchParams.get("search") && style.search
      )}
    >
      <header className={classNames(style.header, searchParams.get("search") && style.header_search)}>
        <SearchForm />
      </header>
      {photos.length !== 0 && 
        <main className={style.content}>
          {
            !photos.length && !isLoading && !searchParams &&
            <p className={style.noResult}>К сожалению, поиск не дал результатов</p>
          }
          <PhotoArea
            photos={photos}
            onLoadMore={() => fetchNextPage()}
            hasMore={!!hasNextPage}
          />
        </main>
      }
    </div>
  );
};
