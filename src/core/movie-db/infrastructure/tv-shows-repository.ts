import { RequestResponse } from "@/core/types/RequestResponse";
import { ITvShowDetail, ITvShowEntity } from "../domain/tv-shows";
import { requestConfig } from "@/core/utils/requestConfig";
import { movieDbConfig } from "../config";

function responseHandler(res: Response) {
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
}

export interface ITvShowsRepository {
  getDiscover(): Promise<RequestResponse<ITvShowEntity>>;
  getTvDetail({ id }: { id: string }): Promise<RequestResponse<ITvShowDetail>>;
}

export class TvShowsRepository implements ITvShowsRepository {
  async getDiscover(): Promise<RequestResponse<ITvShowEntity>> {
    try {
      const response = await fetch(
        `${movieDbConfig.baseUrl}/3/discover/tv?api_key=${movieDbConfig.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
        {
          ...requestConfig("GET"),
        }
      ).then(responseHandler);

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

  async getTvDetail({
    id,
  }: {
    id: string;
  }): Promise<RequestResponse<ITvShowDetail>> {
    try {
      const response = await fetch(
        `${movieDbConfig.baseUrl}/3/tv/${id}?api_key=${movieDbConfig.apiKey}`,
        {
          ...requestConfig("GET"),
        }
      ).then(responseHandler);

      return { data: response };
    } catch (err) {
      return { data: { seasons: [] } };
    }
  }
}
