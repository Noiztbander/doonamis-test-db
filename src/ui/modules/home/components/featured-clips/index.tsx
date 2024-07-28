import { ITvShow } from "@/core/movie-db/domain/tv-shows";
import MediaImageItem from "@/ui/modules/common/components/media-image-item";
import { Component, ReactNode } from "react";

import "./featured-clips.css";
import BasicTitle from "@/ui/modules/common/components/title";

export default class FeaturedClips extends Component<{
  collections: ITvShow[];
  title?: string;
}> {
  render(): ReactNode {
    return (
      <div className="featuredClips_container">
        {this.props.title && (
          <BasicTitle
            title="More:"
            icon={<span className="material-symbols-outlined">apps</span>}
          />
        )}

        <ul className="images_showcase">
          {this.props.collections.map((collection: ITvShow) => {
            return (
              <li key={collection.id}>
                <MediaImageItem item={collection} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
