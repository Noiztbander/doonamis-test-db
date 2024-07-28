import { Component, Dispatch, ReactNode, SetStateAction } from "react";
import Image from "next/image";
import { ITvShow } from "@/core/movie-db/domain/tv-shows";

import "./media-image-item.css";
import { runSetSelectedMedia } from "@/ui/lib/context/app-context/actions/runs";
import { componentWithStore } from "@/ui/lib/context/app-context/app-context";
import { IAction } from "@/ui/lib/context/app-context/types";

class MediaImageItem extends Component<{
  item: ITvShow;
  dispatch: Dispatch<SetStateAction<IAction>>;
}> {
  componentDidMount() {
    // console.log(this.props.item);
  }

  render(): ReactNode {
    return (
      <div
        className="mediaIamgeitem-container"
        // passHref={true}
        // prefetch={true}
        key={this.props.item.id}
        // scroll={true}
        // href={`${MOVIE_DB_PATHS.TV_DETAIL}/${this.props.item.id}`}
        onClick={() => {
          this.props.dispatch(runSetSelectedMedia(this.props.item));
        }}>
        <Image
          // sizes="auto"
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

export default componentWithStore(MediaImageItem);
