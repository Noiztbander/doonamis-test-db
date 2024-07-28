import { ITvShow } from "@/core/movie-db/domain/tv-shows";
import MediaImageItem from "@/ui/modules/common/components/media-image-item";
import { Component, ReactNode } from "react";

import "./featured-clips.css";

export default class FeaturedClips extends Component<{
  collections: ITvShow[];
}> {
  render(): ReactNode {
    return (
      <ul className="featuredClips_container">
        {this.props.collections.map((collection: ITvShow) => {
          return (
            <li key={collection.id}>
              <MediaImageItem item={collection} />
            </li>
          );
        })}
      </ul>
    );
  }
}
