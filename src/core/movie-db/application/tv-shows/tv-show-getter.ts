import { movieDbConfig } from "../../config";
import { ITvShowEntity } from "../../domain/tv-shows";
import { ITvShowsRepository } from "../../infrastructure/tv-shows-repository";
import { ITvShowsGetter } from "../interfaces/tv-shows-getter";

export class TvShowsGetter implements ITvShowsGetter {
  constructor(private readonly repository: ITvShowsRepository) {}

  async get(): Promise<ITvShowEntity> {
    const response = await this.repository.get({
      apiKey: movieDbConfig.apiKey,
      baseUrl: movieDbConfig.baseUrl,
    });

    return response.data;
  }
}
