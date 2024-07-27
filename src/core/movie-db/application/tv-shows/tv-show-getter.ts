import { movieDbConfig } from "../../config";
import { ITvShowDetail, ITvShowEntity } from "../../domain/tv-shows";
import { ITvShowsRepository } from "../../infrastructure/tv-shows-repository";
import { ITvShowsGetter } from "../interfaces/tv-shows-getter";

export class TvShowsGetter implements ITvShowsGetter {
  constructor(private readonly repository: ITvShowsRepository) {}

  async get(): Promise<ITvShowEntity> {
    const response = await this.repository.get();

    return response.data;
  }

  async getTvDetail(id: string): Promise<ITvShowDetail> {
    const response = await this.repository.getTvDetail({
      id,
    });

    return response.data;
  }
}
