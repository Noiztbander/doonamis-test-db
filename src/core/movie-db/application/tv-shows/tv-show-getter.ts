import { ITvShowDetail, ITvShowEntity } from "../../domain/tv-shows";
import { ITvShowsRepository } from "../../infrastructure/tv-shows-repository";
import { ITvShowsGetter } from "../interfaces/tv-shows-getter";

export class TvShowsGetter implements ITvShowsGetter {
  constructor(private readonly repository: ITvShowsRepository) {}

  async getDiscover(): Promise<ITvShowEntity> {
    const response = await this.repository.getDiscover();

    return response.data;
  }

  async getTopRated(): Promise<ITvShowEntity> {
    const response = await this.repository.getTopRated();

    return response.data;
  }

  async getPopular(): Promise<ITvShowEntity> {
    const response = await this.repository.getPopular();

    return response.data;
  }

  async getRelated(id: string): Promise<ITvShowEntity> {
    const response = await this.repository.getRelated(id);

    return response.data;
  }

  async getTvDetail(id: string): Promise<ITvShowDetail> {
    const response = await this.repository.getTvDetail({
      id,
    });

    return response.data;
  }
}
