import { Component, ReactNode } from "react";
import Image from "next/image";

import { ITvShow } from "@/core/movie-db/domain/tv-shows";
import {
  runSetModalVisibility,
  runSetSelectedMedia,
} from "@/ui/lib/context/app-context/actions/runs";
import { IAppContext } from "@/ui/lib/context/app-context/types";
import { AppContext } from "@/ui/lib/context/app-context/app-context";
import ShowMoreBtn from "../show-more-btn";

import "./media-image-item.scss";

export default class MediaImageItem extends Component<{
  item: ITvShow;
  showBtn: boolean;
}> {
  static contextType = AppContext;

  render(): ReactNode {
    const context = this.context;
    const { dispatch } = context as unknown as IAppContext;

    return (
      <div
        className="mediaImageItem_container"
        key={this.props.item.id}
        onClick={() => {
          dispatch(runSetSelectedMedia(this.props.item));
          dispatch(runSetModalVisibility(true));
        }}>
        <div className="image_container">
          {!!this.props.item.poster_path ? (
            <Image
              width={600}
              height={900}
              src={`${process.env.NEXT_PUBLIC_MOVIE_DB_API_IMAGES_BASE_URL}/t/p/w600_and_h900_bestv2/${this.props.item.poster_path}`}
              alt={`${this.props.item.name}`}
              loading="lazy"
            />
          ) : (
            <div
              style={{
                backgroundColor: "white",
                backgroundImage:
                  "radial-gradient(rgb(60, 60, 60) 2px, transparent 2px), radial-gradient(rgb(60, 60, 60) 2px, transparent 2px)",
                backgroundSize: "13px 13px",
                backgroundPosition: "0 0, 6.5px 6.5px",
                height: "300px",
                position: "absolute",
                aspectRatio: "auto 600 / 900",
              }}
            />
          )}
        </div>
        <div>
          <h3>{this.props.item.name}</h3>
        </div>
        {this.props.showBtn && (
          <div className="moreInfo_Container">
            <ShowMoreBtn id={this.props.item.id as number} />
          </div>
        )}
      </div>
    );
  }
}

// export default componentWithStore(MediaImageItem);
