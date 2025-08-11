import { useInfiniteQuery } from "@tanstack/react-query";
import { unsplashApi } from "@/shared/api/unsplashApi";

export interface IPhoto {
  id: string;
  urls: {
    [key: string]: string;
  };
  alt_description: string | null;
}

interface ISearchResponse {
  results: IPhoto[];
  totalPages: number;
  nextPage: number;
}

export const useSearchPhotos = (searchQuery: string) => {
  return useInfiniteQuery<ISearchResponse, Error>({
    queryKey: ["search-photos", searchQuery],
    queryFn: async ({ pageParam }) => {
      if (!searchQuery.trim()) {
        return { results: [], totalPages: 0, nextPage: 1 };
      }

      const { data } = await unsplashApi.get("/search/photos", {
        params: {
          query: searchQuery,
          page: pageParam,
          per_page: 30,
        },
      });

      return {
        results: data.results as IPhoto[],
        totalPages: data.total_pages,
        nextPage: (pageParam as number) + 1,
      };
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (!lastPage.results.length) return undefined;
      return lastPage.nextPage <= lastPage.totalPages
        ? lastPage.nextPage
        : undefined;
    },
    enabled: !!searchQuery.trim(),
  });
};
