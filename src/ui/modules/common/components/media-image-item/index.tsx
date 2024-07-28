import { Component, ReactNode } from "react";
import Image from "next/image";

import { ITvShow } from "@/core/movie-db/domain/tv-shows";
import { runSetSelectedMedia } from "@/ui/lib/context/app-context/actions/runs";
import { IAppContext } from "@/ui/lib/context/app-context/types";
import { AppContext } from "@/ui/lib/context/app-context/app-context";
import "./media-image-item.css";

export default class MediaImageItem extends Component<{
  item: ITvShow;
}> {
  static contextType = AppContext;

  render(): ReactNode {
    const context = this.context;
    const { dispatch } = context as unknown as IAppContext;

    return (
      <div
        className="mediaIamgeitem-container"
        key={this.props.item.id}
        onClick={() => {
          dispatch(runSetSelectedMedia(this.props.item));
        }}>
        <Image
          width={300}
          height={300}
          src={`${process.env.NEXT_PUBLIC_MOVIE_DB_API_IMAGES_BASE_URL}/t/p/w600_and_h900_bestv2/${this.props.item.poster_path}`}
          alt={`${this.props.item.name}`}
          loading="lazy"
        />
        <div>
          <h3>
            <strong>{this.props.item.name}</strong>
          </h3>
          <p className="votes">
            Votes: {this.props.item.vote_count}
            <span className="material-symbols-outlined">star</span>
          </p>
        </div>
      </div>
    );
  }
}

// export default componentWithStore(MediaImageItem);
