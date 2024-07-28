import { Component } from "react";
import Image from "next/image";

import { AppContext } from "@/ui/lib/context/app-context/app-context";
import { IAppContext } from "@/ui/lib/context/app-context/types";

import "./hero.css";
import Link from "next/link";
import { MOVIE_DB_PATHS } from "@/ui/constants";

class Hero extends Component {
  static contextType = AppContext;

  render() {
    const context = this.context;
    const { state } = context as unknown as IAppContext;

    return (
      <section className="hero_container">
        <div className="description_container">
          <h1>{state.selectedMedia.name}</h1>

          <div className="description">
            <div>
              <h3>{state.selectedMedia.first_air_date}</h3>
              <p>{state.selectedMedia.overview}</p>
              <div className="rate">
                <div>
                  <h4>Votes:</h4>
                  <span>{state.selectedMedia.vote_count}</span>
                </div>
                <div>
                  <h4>Popularity:</h4>
                  <span>{state.selectedMedia.popularity}</span>
                </div>
              </div>
            </div>

            <Link
              className="primary_btn"
              passHref={true}
              prefetch={true}
              key={state.selectedMedia.id}
              scroll={true}
              href={`${MOVIE_DB_PATHS.TV_DETAIL}/${state.selectedMedia.id}`}>
              See more
            </Link>
          </div>
        </div>

        <div className="background">
          <Image
            width={600}
            height={900}
            src={`${process.env.NEXT_PUBLIC_MOVIE_DB_API_IMAGES_BASE_URL}/t/p/w600_and_h900_bestv2/${state.selectedMedia.backdrop_path}`}
            alt={`${state.selectedMedia.name}`}
            loading="lazy"
          />
        </div>
      </section>
    );
  }
}

export default Hero;
