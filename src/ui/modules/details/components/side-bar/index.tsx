import { Component } from "react";

import { ITvShowDetail } from "@/core/movie-db/domain/tv-shows";
import "./side-bar.css";
import AvatarName from "@/ui/modules/common/components/avatar/avatar-name";

interface ISideBarTemplateProps {
  media: ITvShowDetail;
}

export default class SideBar extends Component<ISideBarTemplateProps> {
  render() {
    return (
      <aside className="sideBar_container">
        <div>
          <h3>Popularity: </h3>
          <p>
            {this.props.media.vote_average?.toFixed(1)} / 10{" "}
            <span className="material-symbols-outlined">star</span>
          </p>
        </div>
        <div>
          <h3>Vote count: </h3>
          <p>{this.props.media.vote_count}</p>
        </div>

        {!!this.props.media.created_by.length && (
          <div className="avatars">
            <h3>Created by:</h3>
            {this.props.media.created_by.map(({ name, id, profile_path }) => {
              return (
                <AvatarName
                  key={id}
                  name={name}
                  src={
                    profile_path
                      ? `${process.env.NEXT_PUBLIC_MOVIE_DB_API_IMAGES_BASE_URL}/t/p/w600_and_h900_bestv2/${profile_path}`
                      : undefined
                  }
                />
              );
            })}
          </div>
        )}

        <div>
          <h3>First air date:</h3>
          <p>{this.props.media.first_air_date}</p>
        </div>
        <div>
          <h3>Episodes:</h3>
          <p>{this.props.media.number_of_episodes}</p>
        </div>
        <div>
          <h3>Seasons:</h3>
          <p>{this.props.media.number_of_seasons}</p>
        </div>

        {!!this.props.media.production_companies?.length && (
          <div className="avatars">
            <h3>Companies:</h3>
            {this.props.media.production_companies.map(
              ({ name, id, logo_path }) => {
                return (
                  <AvatarName
                    key={id}
                    name={name}
                    src={
                      logo_path
                        ? `${process.env.NEXT_PUBLIC_MOVIE_DB_API_IMAGES_BASE_URL}/t/p/w600_and_h900_bestv2/${logo_path}`
                        : undefined
                    }
                  />
                );
              }
            )}
          </div>
        )}
      </aside>
    );
  }
}
