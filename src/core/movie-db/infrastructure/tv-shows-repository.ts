import { RequestResponse } from "@/core/types/RequestResponse";
import { ITvShowDetail, ITvShowEntity } from "../domain/tv-shows";
import { requestConfig } from "@/core/utils/requestConfig";
import { movieDbConfig } from "../config";
import { initialTvShow } from "@/ui/lib/context/app-context/app-provider-state";

function responseHandler(res: Response) {
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
}

const tvShowEntityErrorResponse: { data: ITvShowEntity } = {
  data: {
    page: 1,
    results: [initialTvShow],
    total_pages: 0,
    total_results: 0,
  },
};

export interface ITvShowsRepository {
  getDiscover(): Promise<RequestResponse<ITvShowEntity>>;
  getTopRated(): Promise<RequestResponse<ITvShowEntity>>;
  getPopular(): Promise<RequestResponse<ITvShowEntity>>;
  getRelated(id: string): Promise<RequestResponse<ITvShowEntity>>;
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
      return tvShowEntityErrorResponse;
    }
  }

  async getTopRated(): Promise<RequestResponse<ITvShowEntity>> {
    try {
      const response = await fetch(
        `${movieDbConfig.baseUrl}/3/tv/top_rated?api_key=${movieDbConfig.apiKey}`,
        {
          ...requestConfig("GET"),
        }
      ).then(responseHandler);

      return { data: response };
    } catch (err) {
      return tvShowEntityErrorResponse;
    }
  }

  async getPopular(): Promise<RequestResponse<ITvShowEntity>> {
    try {
      const response = await fetch(
        `${movieDbConfig.baseUrl}/3/tv/popular?api_key=${movieDbConfig.apiKey}`,
        {
          ...requestConfig("GET"),
        }
      ).then(responseHandler);

      return { data: response };
    } catch (err) {
      return tvShowEntityErrorResponse;
    }
  }

  async getRelated(id: string): Promise<RequestResponse<ITvShowEntity>> {
    try {
      const response = await fetch(
        `${movieDbConfig.baseUrl}/3/tv/${id}/similar?api_key=${movieDbConfig.apiKey}`,
        {
          ...requestConfig("GET"),
        }
      ).then(responseHandler);

      return { data: response };
    } catch (err) {
      return tvShowEntityErrorResponse;
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
