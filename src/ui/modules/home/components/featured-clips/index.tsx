import { ITvShow } from "@/core/movie-db/domain/tv-shows";
import MediaImageItem from "@/ui/modules/common/components/media-image-item";
import { Component, ReactNode } from "react";

import BasicTitle from "@/ui/modules/common/components/title";
import { IoApps } from "react-icons/io5";

import "./featured-clips.scss";

export default class FeaturedClips extends Component<{
  collections: ITvShow[];
  title?: string;
  showBtn: boolean;
}> {
  render(): ReactNode {
    return (
      <div className="featuredClips_container">
        {this.props.title && (
          <BasicTitle title={this.props.title} icon={<IoApps />} />
        )}

        <ul className="images_showcase">
          {this.props.collections.map((collection: ITvShow) => {
            return (
              <li key={collection.id}>
                <MediaImageItem
                  item={collection}
                  showBtn={this.props.showBtn}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
