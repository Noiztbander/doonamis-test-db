import { Component, ReactNode } from "react";
import Image from "next/image";
import { AppContext } from "@/ui/lib/context/app-context/app-context";
import { IAppContext } from "@/ui/lib/context/app-context/types";
import ShowMoreBtn from "../show-more-btn";
import { TiStar } from "react-icons/ti";

import "./detail-modal.scss";
import ModalButton from "./moda-button";
import { runSetModalVisibility } from "@/ui/lib/context/app-context/actions/runs";

class DetailModal extends Component {
  static contextType = AppContext;

  render(): ReactNode {
    const context = this.context;
    const { state, dispatch } = context as unknown as IAppContext;

    return (
      <div className={`detailModal_container ${!state.isOpen && "opened"}`}>
        <ModalButton
          isOpen={!state.isOpen}
          onClick={() => {
            dispatch(runSetModalVisibility(!state.isOpen));
          }}
        />

        {state.selectedMedia && (
          <div className="description_container">
            <h1>{state.selectedMedia.name}</h1>

            <div className="description">
              <div>
                <div className="rate">
                  <div>
                    <h4>Votes:</h4>
                    <span>{state.selectedMedia.vote_count}</span>
                  </div>
                  <div>
                    <h4>Popularity: </h4>
                    <span>
                      {state.selectedMedia.vote_average?.toFixed(1)} / 10{" "}
                      <TiStar />
                    </span>
                  </div>
                </div>
              </div>

              <ShowMoreBtn id={state.selectedMedia.id} />
            </div>
          </div>
        )}

        {state.selectedMedia && (
          <div className="background">
            <Image
              width={600}
              height={900}
              src={`${process.env.NEXT_PUBLIC_MOVIE_DB_API_IMAGES_BASE_URL}/t/p/w600_and_h900_bestv2/${state.selectedMedia.backdrop_path}`}
              alt={`${state.selectedMedia.name}`}
              loading="lazy"
            />
          </div>
        )}
      </div>
    );
  }
}

export default DetailModal;
