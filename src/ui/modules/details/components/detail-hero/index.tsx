import { Component } from "react";
import Image from "next/image";

import { ITvShowDetail } from "@/core/movie-db/domain/tv-shows";
import Link from "next/link";

import "./detail-hero.scss";

class DetailHero extends Component<{ media: ITvShowDetail }> {
  render() {
    return (
      <section className="detailHero_container">
        <div className="description_container">
          <div className="description">
            <h1>{this.props.media.name}</h1>

            <div>
              {this.props.media.homepage && (
                <Link
                  className="primary_btn"
                  href={this.props.media.homepage}
                  target="_blank"
                  rel="noopener noreferrer">
                  Official Website
                </Link>
              )}

              <p>{this.props.media.overview}</p>
              <div className="genres">
                {this.props.media.genres?.map(({ id, name }) => {
                  return <p key={id}>{name}</p>;
                })}
              </div>
            </div>
          </div>

          <div className="poster">
            <Image
              width={600}
              height={900}
              src={`${process.env.NEXT_PUBLIC_MOVIE_DB_API_IMAGES_BASE_URL}/t/p/w600_and_h900_bestv2/${this.props.media.poster_path}`}
              alt={`${this.props.media.name}`}
              loading="lazy"
            />
          </div>
        </div>

        <div className="background">
          <Image
            width={600}
            height={900}
            src={`${process.env.NEXT_PUBLIC_MOVIE_DB_API_IMAGES_BASE_URL}/t/p/w600_and_h900_bestv2/${this.props.media.backdrop_path}`}
            alt={`${this.props.media.name}`}
            loading="lazy"
          />
        </div>
      </section>
    );
  }
}

export default DetailHero;
