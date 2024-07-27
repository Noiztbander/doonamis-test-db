import { RequestResponse } from "@/core/types/RequestResponse";
import { ITvShowEntity } from "../domain/tv-shows";
import { requestConfig } from "@/core/utils/requestConfig";

export interface ITvShowsRepository {
  get({
    apiKey,
    baseUrl,
  }: {
    apiKey: string;
    baseUrl: string;
  }): Promise<RequestResponse<ITvShowEntity>>;
}

export class TvShowsRepository implements ITvShowsRepository {
  async get({
    apiKey,
    baseUrl,
  }: {
    apiKey: string;
    baseUrl: string;
  }): Promise<RequestResponse<ITvShowEntity>> {
    try {
      const response: ITvShowEntity = await fetch(
        `${baseUrl}/3/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
        {
          ...requestConfig("GET"),
          cache: "no-store",
        }
      ).then((res) => res.json());

      return { data: response };
    } catch (err) {
      return {
        data: {
          page: 1,
          results: [],
          total_pages: 0,
          total_results: 0,
        },
      };
    }
  }
}
